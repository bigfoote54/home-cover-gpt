import { describe, it, expect, beforeEach, vi } from 'vitest';
import { 
  computeFileHash, 
  getCachedAnalysis, 
  cacheAnalysis, 
  clearCache, 
  getCacheStats 
} from '@/lib/cache';

// Mock crypto.subtle for tests
const mockDigest = vi.fn().mockResolvedValue(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8]));
Object.defineProperty(global, 'crypto', {
  value: {
    subtle: {
      digest: mockDigest
    }
  },
  writable: true
});

describe('Cache functionality', () => {
  beforeEach(() => {
    clearCache();
  });

  it('should compute file hash correctly', async () => {
    // Create a mock file with arrayBuffer method
    const mockArrayBuffer = new ArrayBuffer(11); // "test content" is 11 bytes
    const file = {
      arrayBuffer: () => Promise.resolve(mockArrayBuffer)
    } as File;
    
    const hash = await computeFileHash(file);
    
    expect(hash).toBeDefined();
    expect(hash.length).toBeGreaterThan(0);
    expect(typeof hash).toBe('string');
  });

  it('should cache and retrieve analysis results', () => {
    const mockResult = {
      coverageSummary: ['Test coverage'],
      risks: ['Test risk'],
      recommendations: ['Test recommendation']
    };

    const fileHash = 'test-hash-123';
    
    // Initially, cache should be empty
    expect(getCachedAnalysis(fileHash)).toBeNull();
    
    // Cache the result
    cacheAnalysis(fileHash, mockResult);
    
    // Should retrieve the cached result
    const retrieved = getCachedAnalysis(fileHash);
    expect(retrieved).toEqual(mockResult);
  });

  it('should return null for non-existent cache entries', () => {
    const result = getCachedAnalysis('non-existent-hash');
    expect(result).toBeNull();
  });

  it('should clear cache correctly', () => {
    const mockResult = {
      coverageSummary: ['Test'],
      risks: ['Test'],
      recommendations: ['Test']
    };

    cacheAnalysis('test-hash', mockResult);
    expect(getCachedAnalysis('test-hash')).toEqual(mockResult);
    
    clearCache();
    expect(getCachedAnalysis('test-hash')).toBeNull();
  });

  it('should provide cache statistics', () => {
    const stats = getCacheStats();
    expect(stats.size).toBe(0);
    expect(stats.keys).toEqual([]);

    cacheAnalysis('hash1', { coverageSummary: [], risks: [], recommendations: [] });
    cacheAnalysis('hash2', { coverageSummary: [], risks: [], recommendations: [] });

    const newStats = getCacheStats();
    expect(newStats.size).toBe(2);
    expect(newStats.keys).toContain('hash1');
    expect(newStats.keys).toContain('hash2');
  });

  it('should handle multiple cache entries', () => {
    const result1 = {
      coverageSummary: ['Coverage 1'],
      risks: ['Risk 1'],
      recommendations: ['Rec 1']
    };

    const result2 = {
      coverageSummary: ['Coverage 2'],
      risks: ['Risk 2'],
      recommendations: ['Rec 2']
    };

    cacheAnalysis('hash1', result1);
    cacheAnalysis('hash2', result2);

    expect(getCachedAnalysis('hash1')).toEqual(result1);
    expect(getCachedAnalysis('hash2')).toEqual(result2);
    expect(getCachedAnalysis('hash3')).toBeNull();
  });
});