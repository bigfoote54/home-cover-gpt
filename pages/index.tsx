import React, { useState } from "react";
import dynamic from "next/dynamic";
import Header from "@/components/Dashboard/Header";
import Hero from "@/components/Hero";
import FileUploader from "@/components/FileUploader";
import { Skeleton } from "@/components/ui/skeleton";
import { AnalysisResult } from "@/shared/types";

// Lazy-load non-critical components
const ResultsCard = dynamic(() => import("@/components/ResultsCard"), {
  ssr: false,
  loading: () => <Skeleton className="h-96 w-full" />
});

const Testimonials = dynamic(() => import("@/components/Dashboard/Testimonials"), {
  ssr: false,
  loading: () => <Skeleton className="h-64 w-full" />
});

const Footer = dynamic(() => import("@/components/Dashboard/Footer"), {
  ssr: false,
  loading: () => <Skeleton className="h-32 w-full" />
});

const Index = () => {
  const [showResults, setShowResults] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const handleGetStarted = () => {
    // Scroll to file uploader or handle navigation
    const fileUploader = document.getElementById('file-uploader');
    if (fileUploader) {
      fileUploader.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAnalyze = async (file: File): Promise<AnalysisResult> => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/api/parse', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Analysis failed');
    }

    const data = await response.json();
    const result = data.data as AnalysisResult;
    
    setAnalysisResult(result);
    setShowResults(true);
    
    return result;
  };

  const handleExportReport = () => {
    // Handle export functionality
    console.log('Exporting report...');
    alert('Report export started! You will receive an email with your analysis report.');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero onGetStarted={handleGetStarted} />
        <div id="file-uploader">
          {!showResults ? (
            <FileUploader onAnalyze={handleAnalyze} />
          ) : (
            analysisResult && (
              <ResultsCard 
                result={analysisResult}
                onExportReport={handleExportReport}
              />
            )
          )}
        </div>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
