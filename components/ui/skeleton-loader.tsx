import React from 'react';

interface SkeletonLoaderProps {
  className?: string;
}

const SkeletonLoader = ({ className }: SkeletonLoaderProps) => {
  return (
    <div className={`space-y-8 ${className}`}>
      {/* Coverage Summary Skeleton */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-soft">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-muted rounded-full animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-6 bg-muted rounded w-48 animate-pulse"></div>
              <div className="h-4 bg-muted rounded w-32 animate-pulse"></div>
            </div>
          </div>
          <div className="h-9 bg-muted rounded w-24 animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="p-6 rounded-xl border border-border">
              <div className="h-8 bg-muted rounded w-20 mb-2 animate-pulse"></div>
              <div className="h-4 bg-muted rounded w-32 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Risks Skeleton */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-soft">
        <div className="h-6 bg-muted rounded w-48 mb-6 animate-pulse"></div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="p-4 rounded-lg border border-border">
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 bg-muted rounded-full mt-1 animate-pulse"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 bg-muted rounded w-3/4 animate-pulse"></div>
                  <div className="h-3 bg-muted rounded w-full animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations Skeleton */}
      <div className="bg-card border border-border rounded-xl p-6 shadow-soft">
        <div className="h-6 bg-muted rounded w-48 mb-6 animate-pulse"></div>
        <div className="space-y-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-border">
              <div className="w-5 h-5 bg-muted rounded-full mt-0.5 animate-pulse"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-muted rounded w-2/3 animate-pulse"></div>
                <div className="h-3 bg-muted rounded w-full animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;