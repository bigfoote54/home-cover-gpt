import React from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Trash2, Award, CheckCircle } from "lucide-react";

const SecurityPage = () => {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Bank-Level Encryption",
      description: "All data is encrypted using AES-256 encryption in transit and at rest"
    },
    {
      icon: Shield,
      title: "SOC 2 Type II Certified",
      description: "Annual third-party security audits and compliance verification"
    },
    {
      icon: Trash2,
      title: "Auto-Deletion",
      description: "Insurance documents automatically deleted after analysis completion"
    },
    {
      icon: Eye,
      title: "Zero-Knowledge Architecture",
      description: "We cannot access your insurance documents after processing"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Security</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your data security is our top priority. Learn about the measures we take to protect your information.
          </p>
        </div>

        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <feature.icon className="w-8 h-8 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Certifications & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-elevated">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">SOC 2 Type II</h3>
                <p className="text-sm text-muted-foreground">Annual security audit certification</p>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6 text-center">
                <Shield className="w-12 h-12 text-success mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">GDPR Compliant</h3>
                <p className="text-sm text-muted-foreground">European data protection standards</p>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">CCPA Compliant</h3>
                <p className="text-sm text-muted-foreground">California privacy protection</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Data Protection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Data Protection</h2>
          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">How We Protect Your Data</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• All data is encrypted using AES-256 encryption</li>
                    <li>• Insurance documents are automatically deleted after analysis</li>
                    <li>• We never store sensitive policy information long-term</li>
                    <li>• Regular security audits and penetration testing</li>
                    <li>• Access controls and multi-factor authentication</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Your Rights</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Request deletion of your data at any time</li>
                    <li>• Export your data in machine-readable format</li>
                    <li>• Access and correct your personal information</li>
                    <li>• Opt-out of data processing for marketing</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact */}
        <div className="text-center">
          <Card className="card-elevated bg-gradient-primary/5 border-primary/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Security Questions?</h2>
              <p className="text-muted-foreground mb-6">
                Have questions about our security measures? Our team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Contact Security Team
                </a>
                <a href="/privacy" className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                  Privacy Policy
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

export default SecurityPage;