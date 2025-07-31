import React, { useState } from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Eye, CheckCircle, AlertCircle, TrendingUp, Shield, Home, Car, Heart } from "lucide-react";

const SampleReportsPage = () => {
  const [selectedReport, setSelectedReport] = useState("home");

  const sampleReports = [
    {
      id: "home",
      title: "Homeowners Insurance Analysis",
      type: "Home Insurance",
      savings: "$850",
      coverage: {
        dwelling: "$350,000",
        personalProperty: "$175,000",
        liability: "$300,000"
      },
      risks: [
        {
          type: "warning",
          title: "Insufficient Liability Coverage",
          description: "Your $300,000 liability limit may not be adequate for today's lawsuit environment."
        },
        {
          type: "error",
          title: "Missing Flood Coverage",
          description: "Your policy doesn't include flood protection, which could be critical in your area."
        }
      ],
      recommendations: [
        {
          title: "Increase Liability Coverage",
          description: "Consider raising your liability limit to $500,000 for better protection."
        },
        {
          title: "Add Flood Insurance",
          description: "Purchase separate flood insurance through the National Flood Insurance Program."
        },
        {
          title: "Review Personal Property Limits",
          description: "Your personal property coverage may be too low for your belongings."
        }
      ]
    },
    {
      id: "auto",
      title: "Auto Insurance Review",
      type: "Auto Insurance",
      savings: "$420",
      coverage: {
        bodilyInjury: "$100,000/$300,000",
        propertyDamage: "$50,000",
        comprehensive: "$500 deductible"
      },
      risks: [
        {
          type: "warning",
          title: "Low Property Damage Limit",
          description: "Your $50,000 property damage limit may not cover expensive vehicle repairs."
        },
        {
          type: "warning",
          title: "Missing Rental Car Coverage",
          description: "No rental car reimbursement if your vehicle is in the shop."
        }
      ],
      recommendations: [
        {
          title: "Increase Property Damage Coverage",
          description: "Raise property damage limit to $100,000 for better protection."
        },
        {
          title: "Add Rental Car Coverage",
          description: "Include rental car reimbursement for convenience after accidents."
        },
        {
          title: "Consider Higher Deductible",
          description: "Increasing your comprehensive deductible could save $200 annually."
        }
      ]
    },
    {
      id: "life",
      title: "Life Insurance Policy Review",
      type: "Life Insurance",
      savings: "$1,200",
      coverage: {
        deathBenefit: "$500,000",
        term: "20-year term",
        premium: "$45/month"
      },
      risks: [
        {
          type: "error",
          title: "Insufficient Coverage",
          description: "Your $500,000 death benefit may not be enough to cover your family's needs."
        },
        {
          type: "warning",
          title: "No Disability Rider",
          description: "Consider adding disability income protection to your policy."
        }
      ],
      recommendations: [
        {
          title: "Increase Death Benefit",
          description: "Consider raising coverage to $750,000 based on your income and expenses."
        },
        {
          title: "Add Disability Rider",
          description: "Protect your income if you become disabled and can't work."
        },
        {
          title: "Shop for Better Rates",
          description: "You may qualify for lower premiums with a different carrier."
        }
      ]
    }
  ];

  const currentReport = sampleReports.find(report => report.id === selectedReport) || sampleReports[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Sample Reports</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See exactly what you'll get from our AI-powered insurance analysis. 
            These are real examples of the detailed reports we generate for our users.
          </p>
        </div>

        {/* Report Type Selector */}
        <div className="mb-8">
          <Tabs value={selectedReport} onValueChange={setSelectedReport} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="home" className="flex items-center gap-2">
                <Home className="w-4 h-4" />
                Home Insurance
              </TabsTrigger>
              <TabsTrigger value="auto" className="flex items-center gap-2">
                <Car className="w-4 h-4" />
                Auto Insurance
              </TabsTrigger>
              <TabsTrigger value="life" className="flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Life Insurance
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Report Content */}
        <div className="space-y-8">
          {/* Report Header */}
          <Card className="card-elevated">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">{currentReport.title}</CardTitle>
                  <p className="text-muted-foreground">Sample analysis report</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge variant="secondary" className="bg-success/10 text-success">
                    {currentReport.savings} potential savings
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Coverage Summary */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Coverage Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(currentReport.coverage).map(([key, value]) => (
                  <div key={key} className="bg-muted/30 border border-border p-6 rounded-xl text-center">
                    <div className="text-2xl font-bold text-foreground">{value}</div>
                    <div className="text-sm text-muted-foreground capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Risks and Gaps */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                Detected Risks & Gaps
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentReport.risks.map((risk, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    risk.type === 'warning' 
                      ? 'bg-warning/5 border-warning/20' 
                      : 'bg-destructive/5 border-destructive/20'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className={`w-5 h-5 mt-0.5 ${
                      risk.type === 'warning' ? 'text-warning' : 'text-destructive'
                    }`} />
                    <div>
                      <div className={`font-medium ${
                        risk.type === 'warning' ? 'text-warning-foreground' : 'text-destructive-foreground'
                      }`}>
                        {risk.title}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">{risk.description}</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {currentReport.recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-success/5 rounded-lg border border-success/20">
                  <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">{recommendation.title}</div>
                    <div className="text-sm text-muted-foreground">{recommendation.description}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Report Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-elevated">
              <CardContent className="p-6 text-center">
                <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Detailed Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive review of your policy with specific insights
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-8 h-8 text-success mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Actionable Advice</h3>
                <p className="text-sm text-muted-foreground">
                  Specific recommendations you can implement immediately
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Savings Identified</h3>
                <p className="text-sm text-muted-foreground">
                  Clear potential savings with specific dollar amounts
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6 text-center">
                <Download className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Exportable Reports</h3>
                <p className="text-sm text-muted-foreground">
                  Download PDF reports to share with your insurance agent
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="card-elevated bg-gradient-primary/5 border-primary/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Get Your Own Analysis</h2>
              <p className="text-muted-foreground mb-6">
                Upload your insurance policy and receive a personalized analysis just like these samples.
              </p>
              <Button size="lg" className="btn-hero px-8 py-4 text-lg">
                Start Your Analysis
                <FileText className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Free analysis • 30-second processing • No signup required
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SampleReportsPage;