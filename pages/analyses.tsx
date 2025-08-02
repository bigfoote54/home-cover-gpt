import React, { useState } from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Search, Filter, Download, Eye, Calendar, Tag } from "lucide-react";

const AnalysesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Mock data for analyses
  const analyses = [
    {
      id: 1,
      title: "Home Insurance Policy Analysis",
      date: "2024-01-15",
      status: "completed",
      type: "Home Insurance",
      savings: "$850",
      fileSize: "2.3 MB",
      description: "Comprehensive analysis of home insurance policy with recommendations for better coverage."
    },
    {
      id: 2,
      title: "Auto Insurance Review",
      date: "2024-01-12",
      status: "completed",
      type: "Auto Insurance",
      savings: "$420",
      fileSize: "1.8 MB",
      description: "Auto insurance policy review with comparison to market rates."
    },
    {
      id: 3,
      title: "Life Insurance Policy",
      date: "2024-01-10",
      status: "completed",
      type: "Life Insurance",
      savings: "$1,200",
      fileSize: "3.1 MB",
      description: "Life insurance policy analysis with coverage recommendations."
    },
    {
      id: 4,
      title: "Business Insurance Review",
      date: "2024-01-08",
      status: "completed",
      type: "Business Insurance",
      savings: "$1,800",
      fileSize: "4.2 MB",
      description: "Business insurance policy review for small business coverage."
    },
    {
      id: 5,
      title: "Health Insurance Analysis",
      date: "2024-01-05",
      status: "completed",
      type: "Health Insurance",
      savings: "$650",
      fileSize: "2.7 MB",
      description: "Health insurance policy analysis with cost optimization recommendations."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "text-success";
      case "in-progress":
        return "text-warning";
      default:
        return "text-destructive";
    }
  };

  const filteredAnalyses = analyses.filter(analysis => {
    const matchesSearch = analysis.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         analysis.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "all" || analysis.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Past Analyses</h1>
          <p className="text-muted-foreground">Review and manage your insurance policy analyses</p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search analyses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label="Search insurance analyses"
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full sm:w-48 focus:outline-none focus:ring-2 focus:ring-accent">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Home Insurance">Home Insurance</SelectItem>
              <SelectItem value="Auto Insurance">Auto Insurance</SelectItem>
              <SelectItem value="Life Insurance">Life Insurance</SelectItem>
              <SelectItem value="Health Insurance">Health Insurance</SelectItem>
              <SelectItem value="Business Insurance">Business Insurance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Analyses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredAnalyses.map((analysis) => (
            <Card key={analysis.id} className="card-elevated hover:shadow-soft transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <CardTitle className="text-lg">{analysis.title}</CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Tag className="w-3 h-3 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{analysis.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-sm font-medium ${getStatusColor(analysis.status)}`}>
                      {analysis.status}
                    </div>
                    <div className="text-xs text-muted-foreground">{analysis.fileSize}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{analysis.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-muted-foreground" />
                      <span className="text-muted-foreground">{analysis.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-success font-medium">{analysis.savings}</span>
                      <span className="text-muted-foreground">savings</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => window.location.href = `/analyses/${analysis.id}`}
                      className="focus:outline-none focus:ring-2 focus:ring-accent"
                      aria-label={`View details for ${analysis.title}`}
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => {
                        console.log(`Downloading analysis: ${analysis.title}`);
                        alert(`Download started for ${analysis.title}`);
                      }}
                      className="focus:outline-none focus:ring-2 focus:ring-accent"
                      aria-label={`Download ${analysis.title} analysis`}
                    >
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAnalyses.length === 0 && (
          <Card className="card-elevated">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <FileText className="w-12 h-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium text-foreground mb-2">No analyses found</h3>
              <p className="text-muted-foreground text-center">
                {searchTerm || filterType !== "all" 
                  ? "Try adjusting your search or filter criteria."
                  : "Start by uploading your first insurance policy for analysis."
                }
              </p>
              {!searchTerm && filterType === "all" && (
                <Button 
                  className="mt-4 focus:outline-none focus:ring-2 focus:ring-accent" 
                  onClick={() => window.location.href = "/"}
                  aria-label="Upload your first insurance policy"
                >
                  Upload Policy
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default AnalysesPage; 