import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative py-12 lg:py-20 bg-gradient-subtle overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Check your insurance coverage
              <span className="block text-primary">in seconds!</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Upload your homeowners insurance PDF and get a plain-English summary, 
              risk analysis, and actionable recommendations—powered by AI.
            </p>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              <span>Bank-level security</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span>Results in 30 seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Data deleted after analysis</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 h-auto shadow-glow"
            >
              Start Your Analysis
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Social proof */}
          <div className="pt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Trusted by thousands of homeowners
            </p>
            <div className="flex justify-center items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-warning rounded-sm" />
              ))}
              <span className="ml-2 text-sm font-medium text-foreground">4.9/5</span>
              <span className="ml-1 text-sm text-muted-foreground">(2,847 reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;