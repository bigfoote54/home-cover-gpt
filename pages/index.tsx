import React, { useState } from "react";
import Header from "@/components/Dashboard/Header";
import Hero from "@/components/Hero";
import FileUploader from "@/components/FileUploader";
import ResultsCard from "@/components/ResultsCard";
import Testimonials from "@/components/Dashboard/Testimonials";
import Footer from "@/components/Dashboard/Footer";
import { AnalysisResult } from "@/shared/types";

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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
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
