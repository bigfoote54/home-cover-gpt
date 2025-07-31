import React, { useState } from "react";
import Header from "@/components/Dashboard/Header";
import Hero from "@/components/Hero";
import FileUploader from "@/components/FileUploader";
import ResultsCard from "@/components/ResultsCard";
import Testimonials from "@/components/Dashboard/Testimonials";
import Footer from "@/components/Dashboard/Footer";

const Index = () => {
  const [showResults, setShowResults] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = () => {
    // Scroll to file uploader or handle navigation
    const fileUploader = document.getElementById('file-uploader');
    if (fileUploader) {
      fileUploader.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAnalysisComplete = (results: any) => {
    setAnalysisResults(results);
    setShowResults(true);
  };

  const handleExportReport = () => {
    // Handle export functionality
    // Export functionality would be implemented here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <main>
        <Hero onGetStarted={handleGetStarted} />
        <div id="file-uploader">
          {!showResults ? (
            <FileUploader onAnalysisComplete={handleAnalysisComplete} />
          ) : (
            <ResultsCard 
              coverage={analysisResults.coverage}
              risks={analysisResults.risks}
              recommendations={analysisResults.recommendations}
              onExportReport={handleExportReport}
            />
          )}
        </div>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
