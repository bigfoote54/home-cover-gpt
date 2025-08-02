import { describe, it, expect, vi } from 'vitest'
import { analyzePolicy } from '../lib/openai'
import type { AnalysisResult } from '../shared/types'

vi.mock('openai', () => ({
  default: class {
    chat = {
      completions: {
        create: () => ({
          choices: [{ message: { content: JSON.stringify({ coverageSummary:['A'], risks:['B'], recommendations:['C'] }) } }]
        })
      }
    }
  }
}))

describe('analyzePolicy', () => {
  it('returns parsed AnalysisResult', async () => {
    process.env.OPENAI_API_KEY = 'test-key'
    const result = await analyzePolicy('dummy')
    expect(result.coverageSummary).toEqual(['A'])
  })
})