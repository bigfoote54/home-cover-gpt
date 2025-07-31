import React from "react";
import Header from "@/components/Dashboard/Header";
import HeroSection from "@/components/Dashboard/HeroSection";
import FileUpload from "@/components/Dashboard/FileUpload";
import Testimonials from "@/components/Dashboard/Testimonials";

const Index = () => {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <FileUpload />
        <Testimonials />
      </main>
    </div>
  );
};

export default Index;
