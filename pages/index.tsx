import React, { useState, useRef } from "react";
import Header from "@/components/Dashboard/Header";
import Hero from "@/components/Hero";
import FileUploader from "@/components/FileUploader";
import ResultsCard from "@/components/ResultsCard";
import Testimonials from "@/components/Dashboard/Testimonials";
import Footer from "@/components/Dashboard/Footer";

const Index = () => {
  const [analysisResults, setAnalysisResults] = useState(null);
  const fileUploaderRef = useRef<HTMLDivElement>(null);

  const handleStartAnalysis = () => {
    fileUploaderRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAnalysisComplete = (results: any) => {
    setAnalysisResults(results);
  };

  const handleExportReport = () => {
    // Mock export functionality
    alert("Report export functionality would be implemented here");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Header />
      <main>
        <Hero onStartAnalysis={handleStartAnalysis} />
        <div ref={fileUploaderRef}>
          <FileUploader onAnalysisComplete={handleAnalysisComplete} />
        </div>
        {analysisResults && (
          <ResultsCard 
            coverage={analysisResults.coverage}
            gaps={analysisResults.gaps}
            recommendations={analysisResults.recommendations}
            onExportReport={handleExportReport}
          />
        )}
        {!analysisResults && <Testimonials />}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
