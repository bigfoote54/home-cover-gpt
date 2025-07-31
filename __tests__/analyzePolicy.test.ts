import { describe, it, expect, vi, beforeEach } from 'vitest'
import { analyzePolicy } from '@/lib/openai'
import { AnalysisResult } from '@/shared/types'

// Mock OpenAI
vi.mock('openai', () => ({
  default: vi.fn(() => ({
    chat: {
      completions: {
        create: vi.fn()
      }
    }
  }))
}))

describe('analyzePolicy', () => {
  let mockCreate: any

  beforeEach(() => {
    vi.clearAllMocks()
    // Get the mocked function
    const OpenAI = require('openai').default
    const mockInstance = new OpenAI()
    mockCreate = mockInstance.chat.completions.create
  })

  it('should analyze policy text and return structured results', async () => {
    // Mock environment variable
    process.env.OPENAI_API_KEY = 'test-key'

    // Mock OpenAI response
    const mockResponse = {
      choices: [{
        message: {
          content: JSON.stringify({
            coverageSummary: ['Dwelling coverage: $500K', 'Personal property: $100K'],
            risks: ['No water backup coverage', 'Liability limits may be insufficient'],
            recommendations: ['Add water backup coverage', 'Consider increasing liability limits']
          })
        }
      }]
    }

    mockCreate.mockResolvedValue(mockResponse)

    const policyText = 'Sample insurance policy text...'
    const result = await analyzePolicy(policyText)

    expect(result).toEqual({
      coverageSummary: ['Dwelling coverage: $500K', 'Personal property: $100K'],
      risks: ['No water backup coverage', 'Liability limits may be insufficient'],
      recommendations: ['Add water backup coverage', 'Consider increasing liability limits']
    })

    expect(mockCreate).toHaveBeenCalledWith({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: expect.stringContaining('You are a homeowners insurance policy expert')
        },
        {
          role: 'user',
          content: `Please analyze this insurance policy text:\n\n${policyText}`
        }
      ],
      temperature: 0.7,
      max_tokens: 2000,
    })
  })

  it('should throw error when OPENAI_API_KEY is missing', async () => {
    delete process.env.OPENAI_API_KEY

    await expect(analyzePolicy('test text')).rejects.toThrow('Missing OPENAI_API_KEY in environment')
  })

  it('should handle malformed JSON response with fallback parsing', async () => {
    process.env.OPENAI_API_KEY = 'test-key'

    const mockResponse = {
      choices: [{
        message: {
          content: 'Coverage Summary:\n- Dwelling: $500K\n\nRisks:\n- No water backup\n\nRecommendations:\n- Add water backup coverage'
        }
      }]
    }

    mockCreate.mockResolvedValue(mockResponse)

    const result = await analyzePolicy('test text')

    expect(result).toEqual({
      coverageSummary: ['Dwelling: $500K'],
      risks: ['No water backup'],
      recommendations: ['Add water backup coverage']
    })
  })

  it('should throw error when OpenAI API fails', async () => {
    process.env.OPENAI_API_KEY = 'test-key'
    mockCreate.mockRejectedValue(new Error('API Error'))

    await expect(analyzePolicy('test text')).rejects.toThrow('Policy analysis failed')
  })

  it('should throw error when no content received', async () => {
    process.env.OPENAI_API_KEY = 'test-key'

    const mockResponse = {
      choices: [{
        message: {}
      }]
    }

    mockCreate.mockResolvedValue(mockResponse)

    await expect(analyzePolicy('test text')).rejects.toThrow('No content received from OpenAI API')
  })
})