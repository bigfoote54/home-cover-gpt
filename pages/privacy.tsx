import React from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, Trash2, Download, Calendar, MapPin, Mail } from "lucide-react";

const PrivacyPage = () => {
  const lastUpdated = "January 15, 2024";

  const dataCategories = [
    {
      category: "Account Information",
      description: "Name, email address, phone number, and account preferences",
      purpose: "Account creation, authentication, and service delivery",
      retention: "Until account deletion"
    },
    {
      category: "Insurance Documents",
      description: "Policy PDFs and images uploaded for analysis",
      purpose: "AI-powered insurance analysis and recommendations",
      retention: "Automatically deleted after analysis (within 24 hours)"
    },
    {
      category: "Analysis Results",
      description: "Coverage summaries, risk assessments, and recommendations",
      purpose: "Provide analysis results and improve our AI models",
      retention: "Until account deletion"
    },
    {
      category: "Usage Data",
      description: "How you interact with our platform and features",
      purpose: "Improve user experience and service quality",
      retention: "2 years"
    }
  ];

  const rights = [
    {
      title: "Access Your Data",
      description: "Request a copy of all personal data we hold about you",
      icon: Eye
    },
    {
      title: "Correct Information",
      description: "Update or correct inaccurate personal information",
      icon: Download
    },
    {
      title: "Delete Your Data",
      description: "Request complete deletion of your account and data",
      icon: Trash2
    },
    {
      title: "Data Portability",
      description: "Export your data in a machine-readable format",
      icon: Download
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to protecting your privacy and being transparent about how we handle your data.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <Badge variant="secondary">Last updated: {lastUpdated}</Badge>
            <Badge variant="outline">GDPR Compliant</Badge>
            <Badge variant="outline">CCPA Compliant</Badge>
          </div>
        </div>

        {/* Overview */}
        <Card className="card-elevated mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Our Commitment to Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              At Home Cover GPT, we believe your privacy is fundamental. This Privacy Policy explains how we collect, 
              use, and protect your personal information when you use our AI-powered insurance analysis service.
            </p>
            <p className="text-muted-foreground">
              We are committed to transparency and will never sell your personal data to third parties. 
              Your insurance documents are automatically deleted after analysis, and we use bank-level encryption 
              to protect all data in transit and at rest.
            </p>
          </CardContent>
        </Card>

        {/* Data Collection */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">What Data We Collect</h2>
          
          <div className="grid grid-cols-1 gap-6">
            {dataCategories.map((category, index) => (
              <Card key={index} className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{category.category}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                    </div>
                    <Lock className="w-5 h-5 text-primary mt-1" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-foreground">Purpose:</span>
                      <p className="text-muted-foreground">{category.purpose}</p>
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Retention:</span>
                      <p className="text-muted-foreground">{category.retention}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* How We Use Data */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">How We Use Your Data</h2>
          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Primary Uses</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Provide AI-powered insurance analysis</li>
                    <li>• Generate personalized recommendations</li>
                    <li>• Process payments and manage subscriptions</li>
                    <li>• Send important service updates</li>
                    <li>• Improve our AI models and service quality</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">We Never</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Sell your personal data to third parties</li>
                    <li>• Use your data for advertising without consent</li>
                    <li>• Share your insurance documents with others</li>
                    <li>• Store sensitive policy information long-term</li>
                    <li>• Use your data for purposes you haven't agreed to</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Protection */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">How We Protect Your Data</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-elevated">
              <CardContent className="p-6 text-center">
                <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Encryption</h3>
                <p className="text-sm text-muted-foreground">
                  All data is encrypted in transit and at rest using AES-256 encryption
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-success mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">SOC 2 Type II</h3>
                <p className="text-sm text-muted-foreground">
                  Certified security controls and regular third-party audits
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6 text-center">
                <Trash2 className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Auto-Deletion</h3>
                <p className="text-sm text-muted-foreground">
                  Insurance documents automatically deleted after analysis
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Your Rights */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Your Privacy Rights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rights.map((right, index) => (
              <Card key={index} className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <right.icon className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{right.title}</h3>
                      <p className="text-sm text-muted-foreground">{right.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Third Parties */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Third-Party Services</h2>
          <Card className="card-elevated">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                We use a limited number of trusted third-party services to operate our platform:
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <div className="font-medium text-foreground">Stripe</div>
                    <div className="text-sm text-muted-foreground">Payment processing</div>
                  </div>
                  <Badge variant="secondary">Required</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <div className="font-medium text-foreground">AWS</div>
                    <div className="text-sm text-muted-foreground">Cloud infrastructure</div>
                  </div>
                  <Badge variant="secondary">Required</Badge>
                </div>
                <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div>
                    <div className="font-medium text-foreground">Intercom</div>
                    <div className="text-sm text-muted-foreground">Customer support</div>
                  </div>
                  <Badge variant="outline">Optional</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Contact Us</h2>
          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Privacy Questions</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>privacy@homecovergpt.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>123 Innovation Drive, San Francisco, CA 94105</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Data Protection Officer</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span>dpo@homecovergpt.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>Response within 30 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Updates */}
        <div className="mt-12">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>Policy Updates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by email or through our platform. Your continued use of our service after such changes constitutes 
                acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;