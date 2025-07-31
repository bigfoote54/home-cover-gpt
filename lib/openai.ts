import OpenAI from 'openai';
import { AnalysisResult } from '../shared/types';
import { chunkText, mergeAnalysisResults } from './parser';

// Initialize OpenAI client lazily to avoid build-time issues
let openai: OpenAI | null = null;

function getOpenAIClient(): OpenAI {
  if (!openai) {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('Missing OPENAI_API_KEY in environment');
    }
    openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }
  return openai;
}

export async function analyzePolicy(text: string): Promise<AnalysisResult> {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('Missing OPENAI_API_KEY in environment');
  }

  // Check if text needs chunking (roughly 12k tokens = 48k characters)
  const chunks = chunkText(text, 4000);
  
  if (chunks.length === 1) {
    // Single chunk - process normally
    return await analyzeSingleChunk(chunks[0]);
  } else {
    // Multiple chunks - process in parallel and merge results
    console.log(`📄 Processing ${chunks.length} chunks in parallel...`);
    const chunkPromises = chunks.map(chunk => analyzeSingleChunk(chunk));
    const results = await Promise.all(chunkPromises);
    return mergeAnalysisResults(results);
  }
}

async function analyzeSingleChunk(text: string): Promise<AnalysisResult> {
  try {
    const client = getOpenAIClient();
    const completion = await client.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: `You are a homeowners insurance policy expert. Analyze the provided policy text and return a JSON response with the following structure:
{
  "coverageSummary": ["summary point 1", "summary point 2", ...],
  "risks": ["risk 1", "risk 2", ...],
  "recommendations": ["recommendation 1", "recommendation 2", ...]
}

Provide clear, consumer-friendly explanations. Focus on key coverage areas, potential gaps or risks, and actionable recommendations for the policyholder.`
        },
        {
          role: 'user',
          content: `Please analyze this insurance policy text:\n\n${text}`
        }
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No content received from OpenAI API');
    }

    // Try to parse as JSON, fallback to structured text parsing if needed
    try {
      const parsed = JSON.parse(content);
      return {
        coverageSummary: Array.isArray(parsed.coverageSummary) ? parsed.coverageSummary : [],
        risks: Array.isArray(parsed.risks) ? parsed.risks : [],
        recommendations: Array.isArray(parsed.recommendations) ? parsed.recommendations : [],
      };
    } catch (parseError) {
      // Fallback: extract structured data from text response
      console.warn('Failed to parse JSON response, attempting text extraction');
      return extractStructuredData(content);
    }
  } catch (error) {
    console.error('❌ OpenAI API error:', error);
    throw new Error('Policy analysis failed');
  }
}

// Fallback function to extract structured data from text response
function extractStructuredData(text: string): AnalysisResult {
  const sections = {
    coverageSummary: [] as string[],
    risks: [] as string[],
    recommendations: [] as string[],
  };

  const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  let currentSection: keyof typeof sections | null = null;

  for (const line of lines) {
    const lower = line.toLowerCase();
    
    if (lower.includes('coverage') || lower.includes('summary')) {
      currentSection = 'coverageSummary';
      continue;
    } else if (lower.includes('risk') || lower.includes('concern')) {
      currentSection = 'risks';
      continue;
    } else if (lower.includes('recommend') || lower.includes('suggest')) {
      currentSection = 'recommendations';
      continue;
    }

    if (currentSection && line.match(/^[-•*]\s*/) || line.match(/^\d+\.\s*/)) {
      const cleanedLine = line.replace(/^[-•*]\s*/, '').replace(/^\d+\.\s*/, '').trim();
      if (cleanedLine.length > 0) {
        sections[currentSection].push(cleanedLine);
      }
    }
  }

  return sections;
}

// Legacy function for backward compatibility - delegates to analyzePolicy
export async function callOpenAI(prompt: string): Promise<string> {
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('Missing OPENAI_API_KEY in environment');
  }

  try {
    const client = getOpenAIClient();
    const completion = await client.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 2000,
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No content received from OpenAI API');
    }
    
    return content.trim();
  } catch (error) {
    console.error('❌ OpenAI API error:', error);
    throw new Error('OpenAI request failed');
  }
}
  