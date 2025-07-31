import React from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Clock, Shield, CheckCircle } from "lucide-react";

const DataDeletionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Data Deletion</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You have the right to request deletion of your personal data. Learn how to exercise this right.
          </p>
        </div>

        {/* Overview */}
        <Card className="card-elevated mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Your Right to Data Deletion
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Under GDPR, CCPA, and other privacy regulations, you have the right to request deletion of your personal data. 
              We are committed to honoring these requests promptly and completely.
            </p>
            <p className="text-muted-foreground">
              When you request data deletion, we will remove all your personal information from our systems, 
              including account details, analysis results, and any stored documents.
            </p>
          </CardContent>
        </Card>

        {/* What Gets Deleted */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">What Gets Deleted</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="card-elevated">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Account Information</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Name and contact details</li>
                  <li>• Account preferences</li>
                  <li>• Payment information</li>
                  <li>• Login credentials</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Analysis Data</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Analysis results and reports</li>
                  <li>• Coverage summaries</li>
                  <li>• Risk assessments</li>
                  <li>• Recommendations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Process */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Deletion Process</h2>
          <div className="space-y-6">
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Submit Request</h3>
                    <p className="text-sm text-muted-foreground">
                      Contact our data protection officer at dpo@homecovergpt.com or use the form below.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Verification</h3>
                    <p className="text-sm text-muted-foreground">
                      We'll verify your identity to ensure the request is legitimate and protect your data.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Processing</h3>
                    <p className="text-sm text-muted-foreground">
                      We'll process your request within 30 days and confirm when deletion is complete.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Request Form */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Request Data Deletion</h2>
          <Card className="card-elevated">
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-6">
                To request deletion of your data, please contact our Data Protection Officer:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email</h3>
                  <p className="text-primary">dpo@homecovergpt.com</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
                  <p className="text-muted-foreground">We'll respond within 30 days</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Required Information</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Your full name</li>
                    <li>• Email address associated with your account</li>
                    <li>• Reason for deletion (optional)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Important Notes */}
        <div className="text-center">
          <Card className="card-elevated bg-warning/5 border-warning/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-warning mt-1" />
                <div>
                  <h3 className="font-semibold text-warning-foreground mb-2">Important Notes</h3>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left">
                    <li>• Deletion is permanent and cannot be undone</li>
                    <li>• You'll lose access to all your analysis results</li>
                    <li>• We may retain certain data for legal compliance</li>
                    <li>• Insurance documents are already auto-deleted after analysis</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataDeletionPage;