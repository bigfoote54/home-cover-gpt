import React from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Clock, CheckCircle, AlertCircle } from "lucide-react";

const DashboardPage = () => {
  // Mock data for dashboard
  const recentAnalyses = [
    {
      id: 1,
      title: "Home Insurance Policy Analysis",
      date: "2024-01-15",
      status: "completed",
      type: "Home Insurance"
    },
    {
      id: 2,
      title: "Auto Insurance Review",
      date: "2024-01-12",
      status: "completed",
      type: "Auto Insurance"
    },
    {
      id: 3,
      title: "Life Insurance Policy",
      date: "2024-01-10",
      status: "in-progress",
      type: "Life Insurance"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "in-progress":
        return <Clock className="w-4 h-4 text-warning" />;
      default:
        return <AlertCircle className="w-4 h-4 text-destructive" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">Manage your insurance analyses and policies</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="card-elevated">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Analyses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">12</div>
              <p className="text-xs text-muted-foreground">+2 this month</p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Policies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">5</div>
              <p className="text-xs text-muted-foreground">3 need renewal</p>
            </CardContent>
          </Card>

          <Card className="card-elevated">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Savings Identified</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-success">$2,450</div>
              <p className="text-xs text-muted-foreground">Potential annual savings</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Analyses */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Recent Analyses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAnalyses.map((analysis) => (
                <div key={analysis.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(analysis.status)}
                    <div>
                      <h3 className="font-medium text-foreground">{analysis.title}</h3>
                      <p className="text-sm text-muted-foreground">{analysis.type} • {analysis.date}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button className="h-20 flex-col gap-2" variant="outline">
              <FileText className="w-6 h-6" />
              <span>New Analysis</span>
            </Button>
            <Button className="h-20 flex-col gap-2" variant="outline">
              <CheckCircle className="w-6 h-6" />
              <span>Review Policies</span>
            </Button>
            <Button className="h-20 flex-col gap-2" variant="outline">
              <Clock className="w-6 h-6" />
              <span>Check Renewals</span>
            </Button>
            <Button className="h-20 flex-col gap-2" variant="outline">
              <AlertCircle className="w-6 h-6" />
              <span>Get Quotes</span>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage; 