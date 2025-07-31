import { ArrowRight, Shield, Clock, CheckCircle, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onGetStarted?: () => void;
}

const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <section className="relative pt-24 pb-20 overflow-hidden">
      {/* Background gradient with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-radial"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight animate-fade-in">
            Check your insurance coverage{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              in seconds!
            </span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Upload your homeowners insurance PDF and get a plain-English summary, risk analysis, 
            and actionable recommendations—powered by advanced AI technology.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 animate-slide-up">
          <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-card/60 backdrop-blur border border-border/50 card-hover">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
              <Shield className="h-6 w-6 text-success" />
            </div>
            <span className="font-semibold text-foreground">Bank-level security</span>
            <span className="text-sm text-muted-foreground text-center">Your data is encrypted and protected</span>
          </div>
          
          <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-card/60 backdrop-blur border border-border/50 card-hover">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <span className="font-semibold text-foreground">Results in 30 seconds</span>
            <span className="text-sm text-muted-foreground text-center">Fast, accurate AI analysis</span>
          </div>
          
          <div className="flex flex-col items-center space-y-3 p-6 rounded-2xl bg-card/60 backdrop-blur border border-border/50 card-hover">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
              <CheckCircle className="h-6 w-6 text-accent" />
            </div>
            <span className="font-semibold text-foreground">Data deleted after analysis</span>
            <span className="text-sm text-muted-foreground text-center">Complete privacy guarantee</span>
          </div>
        </div>

        {/* Primary CTA Button */}
        <div className="mt-12 animate-scale-in">
          <Button 
            size="lg"
            className="btn-hero px-6 py-3 sm:px-8 sm:py-4 text-lg font-semibold rounded-full shadow-glow group transition-all duration-150 ease-in-out"
            onClick={onGetStarted}
            aria-label="Get my coverage summary"
            onMouseEnter={() => fetch('/api/parse')}
          >
            Get My Coverage Summary
            <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="mt-4 text-sm text-muted-foreground">
            No signup required • Free analysis • Instant results
          </p>
        </div>

        {/* Social Proof */}
        <div className="mt-16 animate-fade-in">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
            {/* Star Rating */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="font-medium text-foreground">4.9/5</span>
              <span>(2,847 reviews)</span>
            </div>

            {/* Usage Stats */}
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-primary" />
              <span>50,000+ homeowners trust us</span>
            </div>

            {/* Industry Recognition */}
            <div className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-accent" />
              <span>Featured in TechCrunch</span>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">$2.1M</div>
            <div className="text-sm text-muted-foreground">Average savings identified</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent">30 sec</div>
            <div className="text-sm text-muted-foreground">Average analysis time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success">98%</div>
            <div className="text-sm text-muted-foreground">Customer satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;