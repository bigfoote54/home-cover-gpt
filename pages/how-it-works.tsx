import React from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, Zap, FileText, CheckCircle, Shield, ArrowRight, Clock, Users, Award } from "lucide-react";

const HowItWorksPage = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Your Policy",
      description: "Simply drag and drop your homeowners insurance PDF or take a photo of your policy documents.",
      icon: Upload,
      details: [
        "Supports all major insurance companies",
        "OCR technology reads any format",
        "Secure, encrypted upload",
        "No sensitive data stored"
      ]
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our advanced AI scans your policy in seconds, identifying coverage gaps and potential savings.",
      icon: Zap,
      details: [
        "30-second processing time",
        "Comprehensive coverage analysis",
        "Risk assessment",
        "Market comparison"
      ]
    },
    {
      number: "03",
      title: "Get Your Report",
      description: "Receive a detailed, plain-English report with actionable recommendations and cost savings.",
      icon: FileText,
      details: [
        "Easy-to-understand summary",
        "Specific recommendations",
        "Potential savings identified",
        "Exportable reports"
      ]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your data is encrypted and automatically deleted after analysis. We never store sensitive information."
    },
    {
      icon: Clock,
      title: "Lightning Fast",
      description: "Get your analysis results in under 30 seconds. No waiting, no delays."
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "Over 50,000 homeowners have used our service to save money on their insurance."
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Featured in TechCrunch and trusted by leading insurance professionals."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant insights into your homeowners insurance policy in just three simple steps. 
            Our AI technology makes understanding your coverage easier than ever.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="card-elevated">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Badge className="bg-primary text-primary-foreground text-lg px-4 py-2">
                        {step.number}
                      </Badge>
                      <h2 className="text-2xl font-bold text-foreground">{step.title}</h2>
                    </div>
                    <p className="text-lg text-muted-foreground">{step.description}</p>
                    <ul className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-32 h-32 bg-gradient-primary/10 rounded-full flex items-center justify-center">
                      <step.icon className="w-16 h-16 text-primary" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Home Cover GPT?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Visualization */}
        <Card className="card-elevated mb-16">
          <CardHeader>
            <CardTitle className="text-center text-2xl">The Complete Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Timeline */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border transform -translate-y-1/2"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                        <step.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                    
                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border transform translate-x-1/2">
                        <ArrowRight className="w-4 h-4 text-muted-foreground absolute right-0 top-1/2 transform -translate-y-1/2" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sample Results */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What You'll Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-elevated">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-success" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Coverage Summary</h3>
                <p className="text-sm text-muted-foreground">
                  Clear breakdown of what your policy covers and what it doesn't
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-warning" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Risk Assessment</h3>
                <p className="text-sm text-muted-foreground">
                  Identify potential gaps in coverage and areas of concern
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Actionable Recommendations</h3>
                <p className="text-sm text-muted-foreground">
                  Specific steps to improve coverage and potentially save money
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="card-elevated bg-gradient-primary/5 border-primary/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-6">
                Join thousands of homeowners who are already saving money on their insurance. 
                Upload your policy and get your analysis in under 30 seconds.
              </p>
              <Button size="lg" className="btn-hero px-8 py-4 text-lg">
                Start Your Analysis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                No signup required • Free analysis • Instant results
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;