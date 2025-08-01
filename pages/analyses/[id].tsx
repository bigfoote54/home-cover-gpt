import React from "react";
import { useRouter } from "next/router";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  ArrowLeft, 
  Download, 
  Share, 
  FileText, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  DollarSign,
  Calendar,
  Clock,
  User
} from "lucide-react";

const AnalysisDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Mock analysis data
  const analysis = {
    id: id,
    title: "Home Insurance Policy Analysis",
    date: "2024-01-15",
    status: "completed",
    type: "Home Insurance",
    savings: "$850",
    fileSize: "2.3 MB",
    description: "Comprehensive analysis of home insurance policy with recommendations for better coverage.",
    coverage: {
      dwelling: 85,
      personalProperty: 70,
      liability: 90,
      medicalPayments: 60
    },
    risks: [
      {
        type: "Underinsured",
        severity: "High",
        description: "Your dwelling coverage may not be sufficient to rebuild your home at current construction costs.",
        recommendation: "Consider increasing dwelling coverage by 25% to account for rising construction costs."
      },
      {
        type: "Gap in Coverage",
        severity: "Medium",
        description: "No coverage for natural disasters like earthquakes or floods.",
        recommendation: "Consider adding earthquake and flood insurance riders."
      },
      {
        type: "High Deductible",
        severity: "Low",
        description: "Your deductible is higher than average, which could be costly in case of a claim.",
        recommendation: "Consider reducing deductible if budget allows."
      }
    ],
    recommendations: [
      {
        title: "Increase Dwelling Coverage",
        impact: "High",
        savings: "$200/year",
        description: "Increase dwelling coverage from $300,000 to $375,000 to better match current construction costs."
      },
      {
        title: "Add Natural Disaster Coverage",
        impact: "Medium",
        cost: "$150/year",
        description: "Add earthquake and flood coverage to protect against natural disasters."
      },
      {
        title: "Bundle Policies",
        impact: "High",
        savings: "$300/year",
        description: "Bundle home and auto insurance with the same provider for significant discounts."
      },
      {
        title: "Review Personal Property Limits",
        impact: "Medium",
        savings: "$50/year",
        description: "Adjust personal property coverage based on actual inventory value."
      }
    ],
    policyDetails: {
      provider: "State Farm",
      policyNumber: "SF-123456789",
      effectiveDate: "2024-01-01",
      expirationDate: "2025-01-01",
      premium: "$1,200/year",
      deductible: "$1,000"
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "high":
        return "bg-destructive text-destructive-foreground";
      case "medium":
        return "bg-warning text-warning-foreground";
      case "low":
        return "bg-muted text-muted-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact.toLowerCase()) {
      case "high":
        return "text-success";
      case "medium":
        return "text-warning";
      case "low":
        return "text-muted-foreground";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => router.back()}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Analyses
        </Button>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{analysis.title}</h1>
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {analysis.date}
                </span>
                <span className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  {analysis.type}
                </span>
                <span className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  {analysis.savings} potential savings
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Coverage Analysis */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Coverage Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Dwelling Coverage</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={analysis.coverage.dwelling} className="mb-4" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Personal Property</span>
                      <span className="text-sm text-muted-foreground">70%</span>
                    </div>
                    <Progress value={analysis.coverage.personalProperty} className="mb-4" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Liability Coverage</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <Progress value={analysis.coverage.liability} className="mb-4" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Medical Payments</span>
                      <span className="text-sm text-muted-foreground">60%</span>
                    </div>
                    <Progress value={analysis.coverage.medicalPayments} className="mb-4" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Identified Risks */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-warning" />
                  Identified Risks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {analysis.risks.map((risk, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-foreground">{risk.type}</h4>
                      <Badge className={getSeverityColor(risk.severity)}>
                        {risk.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{risk.description}</p>
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-sm font-medium text-foreground mb-1">Recommendation:</p>
                      <p className="text-sm text-muted-foreground">{risk.recommendation}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  Recommendations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {analysis.recommendations.map((rec, index) => (
                  <div key={index} className="border border-border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-foreground">{rec.title}</h4>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={getImpactColor(rec.impact)}>
                          {rec.impact} Impact
                        </Badge>
                        {rec.savings && (
                          <Badge className="bg-success text-success-foreground">
                            {rec.savings}
                          </Badge>
                        )}
                        {rec.cost && (
                          <Badge className="bg-warning text-warning-foreground">
                            {rec.cost}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{rec.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Policy Details */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Policy Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Provider</span>
                  <span className="text-sm font-medium">{analysis.policyDetails.provider}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Policy Number</span>
                  <span className="text-sm font-medium">{analysis.policyDetails.policyNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Effective Date</span>
                  <span className="text-sm font-medium">{analysis.policyDetails.effectiveDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Expiration Date</span>
                  <span className="text-sm font-medium">{analysis.policyDetails.expirationDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Annual Premium</span>
                  <span className="text-sm font-medium">{analysis.policyDetails.premium}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Deductible</span>
                  <span className="text-sm font-medium">{analysis.policyDetails.deductible}</span>
                </div>
              </CardContent>
            </Card>

            {/* Summary Stats */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">{analysis.savings}</div>
                  <div className="text-sm text-muted-foreground">Potential Annual Savings</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-foreground">{analysis.risks.length}</div>
                    <div className="text-xs text-muted-foreground">Risks Identified</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-foreground">{analysis.recommendations.length}</div>
                    <div className="text-xs text-muted-foreground">Recommendations</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Share className="w-4 h-4 mr-2" />
                  Share Analysis
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Compare Policies
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Contact Agent
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnalysisDetailPage;