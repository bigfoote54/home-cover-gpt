import React from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, FileText, Video, Download, ExternalLink, Award } from "lucide-react";

const AgentResourcesPage = () => {
  const resources = [
    {
      title: "Agent Training Guide",
      description: "Complete guide to using Home Cover GPT for insurance analysis",
      type: "PDF Guide",
      size: "2.3 MB",
      icon: FileText
    },
    {
      title: "Demo Videos",
      description: "Step-by-step video tutorials for agents",
      type: "Video Series",
      duration: "45 min",
      icon: Video
    },
    {
      title: "Marketing Materials",
      description: "Brochures, presentations, and client materials",
      type: "Marketing Kit",
      items: "12 files",
      icon: Download
    },
    {
      title: "API Documentation",
      description: "Technical documentation for custom integrations",
      type: "Developer Docs",
      pages: "150+ pages",
      icon: ExternalLink
    }
  ];

  const benefits = [
    {
      title: "Faster Policy Reviews",
      description: "Complete analysis in 30 seconds vs. hours of manual review"
    },
    {
      title: "Better Client Service",
      description: "Provide detailed, professional analysis reports to clients"
    },
    {
      title: "Increased Sales",
      description: "Identify coverage gaps and upsell opportunities"
    },
    {
      title: "Competitive Advantage",
      description: "Offer cutting-edge AI analysis that sets you apart"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Agent Resources</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tools, training, and resources to help insurance agents leverage AI-powered analysis 
            for better client service and increased sales.
          </p>
        </div>

        {/* Overview */}
        <Card className="card-elevated mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              For Insurance Professionals
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Home Cover GPT is designed to help insurance agents and brokers provide better service to their clients. 
              Our AI-powered analysis can save you hours of manual policy review while providing your clients with 
              detailed, professional insights.
            </p>
            <p className="text-muted-foreground">
              Whether you're a solo agent or part of a large agency, our tools can help you streamline your workflow, 
              identify coverage gaps, and provide value-added services to your clients.
            </p>
          </CardContent>
        </Card>

        {/* Benefits */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Benefits for Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-elevated">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Available Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="card-elevated">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <resource.icon className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </div>
                    </div>
                    <Badge variant="secondary">{resource.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      {resource.size && `Size: ${resource.size}`}
                      {resource.duration && `Duration: ${resource.duration}`}
                      {resource.items && `Items: ${resource.items}`}
                      {resource.pages && `Pages: ${resource.pages}`}
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Program */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Partnership Program</h2>
          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">For Agencies & Brokers</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• White-label solutions for your brand</li>
                    <li>• Custom integrations with your systems</li>
                    <li>• Dedicated account management</li>
                    <li>• Volume pricing and discounts</li>
                    <li>• Training and certification programs</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">For Individual Agents</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Professional analysis reports</li>
                    <li>• Client presentation materials</li>
                    <li>• Marketing and sales tools</li>
                    <li>• Technical support and training</li>
                    <li>• Referral program benefits</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Stories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">Featured Story</span>
                </div>
                <h3 className="font-semibold text-foreground mb-2">ABC Insurance Agency</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  "Home Cover GPT helped us increase our policy review efficiency by 300% and 
                  identify $50,000 in additional coverage opportunities."
                </p>
                <div className="text-xs text-muted-foreground">
                  - Sarah Johnson, Agency Owner
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Independent Agent</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  "The AI analysis gives me confidence in my recommendations and helps me 
                  provide better value to my clients."
                </p>
                <div className="text-xs text-muted-foreground">
                  - Mike Chen, Independent Agent
                </div>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Brokerage Firm</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  "Our clients love the detailed reports, and it's helped us win new business 
                  through our innovative approach."
                </p>
                <div className="text-xs text-muted-foreground">
                  - Lisa Rodriguez, Sales Manager
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="card-elevated bg-gradient-primary/5 border-primary/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-6">
                Join hundreds of insurance professionals who are already using Home Cover GPT 
                to improve their client service and grow their business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero">
                  <Users className="w-5 h-5 mr-2" />
                  Contact Sales
                </Button>
                <Button variant="outline" size="lg">
                  <FileText className="w-5 h-5 mr-2" />
                  Download Resources
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AgentResourcesPage;