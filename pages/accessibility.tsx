import React from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accessibility, Eye, Volume2, Mouse, Keyboard, CheckCircle } from "lucide-react";

const AccessibilityPage = () => {
  const features = [
    {
      icon: Eye,
      title: "Visual Accessibility",
      description: "High contrast modes, resizable text, and screen reader compatibility",
      details: [
        "WCAG 2.1 AA compliant",
        "Screen reader optimized",
        "High contrast mode available",
        "Resizable text up to 200%"
      ]
    },
    {
      icon: Volume2,
      title: "Audio Accessibility",
      description: "Audio alternatives and clear audio descriptions for all content",
      details: [
        "Audio descriptions for videos",
        "Clear audio feedback",
        "Volume controls available",
        "Speech-to-text support"
      ]
    },
    {
      icon: Mouse,
      title: "Motor Accessibility",
      description: "Keyboard navigation and alternative input methods",
      details: [
        "Full keyboard navigation",
        "Voice control support",
        "Large click targets",
        "Customizable timeouts"
      ]
    },
    {
      icon: Keyboard,
      title: "Cognitive Accessibility",
      description: "Clear navigation, consistent design, and simplified interfaces",
      details: [
        "Clear and simple language",
        "Consistent navigation",
        "Error prevention",
        "Help and support readily available"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Accessibility</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to making Home Cover GPT accessible to everyone. 
            Learn about our accessibility features and compliance.
          </p>
        </div>

        {/* Commitment */}
        <Card className="card-elevated mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Accessibility className="w-5 h-5" />
              Our Accessibility Commitment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              At Home Cover GPT, we believe that technology should be accessible to everyone. 
              We're committed to ensuring that our platform is usable by people with disabilities 
              and complies with accessibility standards.
            </p>
            <p className="text-muted-foreground">
              We follow the Web Content Accessibility Guidelines (WCAG) 2.1 AA standards and 
              continuously work to improve the accessibility of our platform.
            </p>
          </CardContent>
        </Card>

        {/* Accessibility Features */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Accessibility Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <feature.icon className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Compliance */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Compliance & Standards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-elevated">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-success mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">WCAG 2.1 AA</h3>
                <p className="text-sm text-muted-foreground">Web Content Accessibility Guidelines</p>
                <Badge className="mt-2" variant="secondary">Compliant</Badge>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-success mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Section 508</h3>
                <p className="text-sm text-muted-foreground">Federal accessibility standards</p>
                <Badge className="mt-2" variant="secondary">Compliant</Badge>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-success mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">ADA Title III</h3>
                <p className="text-sm text-muted-foreground">Americans with Disabilities Act</p>
                <Badge className="mt-2" variant="secondary">Compliant</Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testing */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Accessibility Testing</h2>
          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Our Testing Process</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Automated accessibility testing with multiple tools</li>
                    <li>• Manual testing by accessibility experts</li>
                    <li>• User testing with people who have disabilities</li>
                    <li>• Regular audits and compliance reviews</li>
                    <li>• Continuous monitoring and improvement</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Testing Tools</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• axe-core for automated testing</li>
                    <li>• Screen readers (NVDA, JAWS, VoiceOver)</li>
                    <li>• Keyboard-only navigation testing</li>
                    <li>• Color contrast analyzers</li>
                    <li>• Voice control testing</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact */}
        <div className="mt-12 text-center">
          <Card className="card-elevated bg-gradient-primary/5 border-primary/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Report Accessibility Issues</h2>
              <p className="text-muted-foreground mb-6">
                Found an accessibility issue? We want to hear about it so we can fix it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Report an Issue
                </a>
                <a href="/help" className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                  Get Help
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AccessibilityPage;