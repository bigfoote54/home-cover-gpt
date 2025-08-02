import { AnalysisResult } from '@/shared/types';

// In-memory cache for analysis results
const analysisCache = new Map<string, AnalysisResult>();

/**
 * Computes a SHA-256 hash of file contents
 */
export async function computeFileHash(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Gets cached analysis result for a file hash
 */
export function getCachedAnalysis(fileHash: string): AnalysisResult | null {
  return analysisCache.get(fileHash) || null;
}

/**
 * Stores analysis result in cache
 */
export function cacheAnalysis(fileHash: string, result: AnalysisResult): void {
  analysisCache.set(fileHash, result);
}

/**
 * Clears the cache (useful for testing or memory management)
 */
export function clearCache(): void {
  analysisCache.clear();
}

/**
 * Gets cache statistics
 */
export function getCacheStats(): { size: number; keys: string[] } {
  return {
    size: analysisCache.size,
    keys: Array.from(analysisCache.keys())
  };
}