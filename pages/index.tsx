import React from "react";
import Header from "@/components/Dashboard/Header";
import HeroSection from "@/components/Dashboard/HeroSection";
import FileUpload from "@/components/Dashboard/FileUpload";
import Testimonials from "@/components/Dashboard/Testimonials";
import Footer from "@/components/Dashboard/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FileUpload />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
