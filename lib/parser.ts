import { AnalysisResult } from '../shared/types';

// Simple in-memory cache for file deduplication
const fileCache = new Map<string, AnalysisResult>();

// Generate hash for file content
export async function generateFileHash(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Check if file is already cached
export function getCachedResult(fileHash: string): AnalysisResult | null {
  return fileCache.get(fileHash) || null;
}

// Cache analysis result
export function cacheResult(fileHash: string, result: AnalysisResult): void {
  fileCache.set(fileHash, result);
}

// Extract text from PDF (simplified - in real app you'd use pdf.js or similar)
export async function extractTextFromPDF(file: File): Promise<string> {
  // This is a placeholder - in a real implementation you'd use a PDF parsing library
  // For now, we'll simulate text extraction
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      // Simulate PDF text extraction
      const mockText = `This is a mock insurance policy document with coverage details.
      
      DWELLING COVERAGE: $750,000
      PERSONAL PROPERTY: $150,000
      LIABILITY COVERAGE: $500,000
      
      Additional coverages include:
      - Water backup coverage: $10,000
      - Medical payments: $1,000 per person
      - Loss of use: $150,000
      
      Deductibles:
      - Wind/Hail: $2,500
      - Other perils: $1,000
      
      Exclusions:
      - Flood damage
      - Earthquake damage
      - Intentional acts
      
      This policy provides comprehensive coverage for your home and personal belongings.`;
      resolve(mockText);
    };
    reader.readAsArrayBuffer(file);
  });
}

// Split text into chunks for large documents
export function chunkText(text: string, maxTokens: number = 4000): string[] {
  // Rough estimation: 1 token ≈ 4 characters
  const maxChars = maxTokens * 4;
  const chunks: string[] = [];
  
  if (text.length <= maxChars) {
    return [text];
  }
  
  // Split by sentences to avoid breaking mid-sentence
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  let currentChunk = '';
  
  for (const sentence of sentences) {
    const sentenceWithPunctuation = sentence + '.';
    if (currentChunk.length + sentenceWithPunctuation.length > maxChars) {
      if (currentChunk.length > 0) {
        chunks.push(currentChunk.trim());
        currentChunk = sentenceWithPunctuation;
      } else {
        // Single sentence is too long, split by words
        const words = sentenceWithPunctuation.split(' ');
        for (const word of words) {
          if (currentChunk.length + word.length + 1 > maxChars) {
            if (currentChunk.length > 0) {
              chunks.push(currentChunk.trim());
              currentChunk = word;
            } else {
              // Single word is too long, truncate
              chunks.push(word.substring(0, maxChars));
            }
          } else {
            currentChunk += (currentChunk ? ' ' : '') + word;
          }
        }
      }
    } else {
      currentChunk += sentenceWithPunctuation;
    }
  }
  
  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }
  
  return chunks;
}

// Merge multiple analysis results
export function mergeAnalysisResults(results: AnalysisResult[]): AnalysisResult {
  const merged: AnalysisResult = {
    coverageSummary: [],
    risks: [],
    recommendations: []
  };
  
  for (const result of results) {
    merged.coverageSummary.push(...result.coverageSummary);
    merged.risks.push(...result.risks);
    merged.recommendations.push(...result.recommendations);
  }
  
  // Remove duplicates
  merged.coverageSummary = [...new Set(merged.coverageSummary)];
  merged.risks = [...new Set(merged.risks)];
  merged.recommendations = [...new Set(merged.recommendations)];
  
  return merged;
}