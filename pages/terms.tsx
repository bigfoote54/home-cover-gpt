import React from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Shield, AlertTriangle, CheckCircle, Calendar } from "lucide-react";

const TermsPage = () => {
  const lastUpdated = "January 15, 2024";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Please read these terms carefully before using our service.
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <Badge variant="secondary">Last updated: {lastUpdated}</Badge>
          </div>
        </div>

        {/* Overview */}
        <Card className="card-elevated mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Agreement to Terms
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              By accessing and using Home Cover GPT, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
            <p className="text-muted-foreground">
              These Terms of Service ("Terms") govern your use of our AI-powered insurance analysis service. 
              If you disagree with any part of these terms, you may not access our service.
            </p>
          </CardContent>
        </Card>

        {/* Service Description */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-foreground">Service Description</h2>
          <Card className="card-elevated">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                Home Cover GPT provides AI-powered insurance policy analysis services. Our platform:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Analyzes insurance policies using artificial intelligence</li>
                <li>• Provides coverage summaries and risk assessments</li>
                <li>• Offers recommendations for policy improvements</li>
                <li>• Generates reports for policy comparison</li>
                <li>• Provides educational content about insurance</li>
              </ul>
              <div className="mt-4 p-4 bg-warning/10 border border-warning/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                  <div>
                    <div className="font-medium text-warning-foreground mb-1">Important Disclaimer</div>
                    <div className="text-sm text-muted-foreground">
                      Our analysis is for informational purposes only and does not constitute legal or insurance advice. 
                      Always consult with a licensed insurance professional for specific coverage recommendations.
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* User Accounts */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">User Accounts</h2>
          <Card className="card-elevated">
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Account Creation</h3>
                <p className="text-sm text-muted-foreground">
                  You may be required to create an account to access certain features. You are responsible for maintaining 
                  the confidentiality of your account information and for all activities under your account.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Account Security</h3>
                <p className="text-sm text-muted-foreground">
                  You must notify us immediately of any unauthorized use of your account. We reserve the right to 
                  terminate accounts that violate these terms.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Acceptable Use */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Acceptable Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="card-elevated">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  You May
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use the service for personal insurance analysis</li>
                  <li>• Upload your own insurance documents</li>
                  <li>• Share analysis results with your insurance agent</li>
                  <li>• Use the service for educational purposes</li>
                  <li>• Contact support for legitimate issues</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  You May Not
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Upload documents you don't own</li>
                  <li>• Attempt to reverse engineer our AI</li>
                  <li>• Use the service for commercial purposes without permission</li>
                  <li>• Violate any applicable laws or regulations</li>
                  <li>• Interfere with the service's operation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Privacy and Data */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Privacy and Data</h2>
          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Data Protection</h3>
                  <p className="text-sm text-muted-foreground">
                    Your privacy is important to us. Our collection and use of personal information is governed by our 
                    Privacy Policy, which is incorporated into these Terms by reference.
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div>• Insurance documents are automatically deleted after analysis</div>
                <div>• We use bank-level encryption to protect your data</div>
                <div>• We never sell your personal information to third parties</div>
                <div>• You can request deletion of your data at any time</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Terms */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Payment and Billing</h2>
          <Card className="card-elevated">
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Subscription Plans</h3>
                <p className="text-sm text-muted-foreground">
                  We offer various subscription plans with different features and pricing. All fees are charged in advance 
                  and are non-refundable except as required by law.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cancellation</h3>
                <p className="text-sm text-muted-foreground">
                  You may cancel your subscription at any time. You'll continue to have access until the end of your 
                  billing period. No refunds are provided for partial months.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Price Changes</h3>
                <p className="text-sm text-muted-foreground">
                  We may change our pricing with 30 days' notice. Price changes will not affect your current billing cycle.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Intellectual Property */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Intellectual Property</h2>
          <Card className="card-elevated">
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Our Rights</h3>
                <p className="text-sm text-muted-foreground">
                  The service and its original content, features, and functionality are owned by Home Cover GPT and are 
                  protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Your Rights</h3>
                <p className="text-sm text-muted-foreground">
                  You retain ownership of your insurance documents and analysis results. You grant us a limited license 
                  to process your documents for analysis purposes only.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Limitation of Liability */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Limitation of Liability</h2>
          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-destructive mt-0.5" />
                  <div>
                    <div className="font-medium text-destructive-foreground mb-1">Important Legal Notice</div>
                    <div className="text-sm text-muted-foreground">
                      Home Cover GPT is provided "as is" without warranties of any kind. We are not liable for any 
                      damages arising from your use of our service, including but not limited to financial losses 
                      related to insurance decisions.
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Termination */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Termination</h2>
          <Card className="card-elevated">
            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">By You</h3>
                <p className="text-sm text-muted-foreground">
                  You may terminate your account at any time by contacting us or using the account deletion feature.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">By Us</h3>
                <p className="text-sm text-muted-foreground">
                  We may terminate or suspend your account immediately, without prior notice, for any reason, 
                  including violation of these Terms.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact */}
        <div className="mt-12">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-sm">
                <div>Email: legal@homecovergpt.com</div>
                <div>Address: 123 Innovation Drive, San Francisco, CA 94105</div>
                <div>Phone: 1-800-HOMECOVER</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsPage;