import React from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Database, Code, ExternalLink, CheckCircle } from "lucide-react";

const IntegrationsPage = () => {
  const integrations = [
    {
      name: "Zapier",
      description: "Automate your insurance analysis workflow",
      features: ["Trigger analyses from new documents", "Send results to Slack", "Create calendar reminders"],
      status: "Available",
      icon: Zap
    },
    {
      name: "Slack",
      description: "Get analysis notifications in your workspace",
      features: ["Real-time notifications", "Share results with team", "Custom webhooks"],
      status: "Available",
      icon: Shield
    },
    {
      name: "Salesforce",
      description: "Integrate with your CRM system",
      features: ["Create leads from analyses", "Track customer interactions", "Automated follow-ups"],
      status: "Coming Soon",
      icon: Database
    },
    {
      name: "Custom API",
      description: "Build your own integrations",
      features: ["RESTful API", "Webhook support", "Comprehensive documentation"],
      status: "Available",
      icon: Code
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Integrations</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect Home Cover GPT with your favorite tools and platforms to streamline your insurance analysis workflow.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {integrations.map((integration, index) => (
            <Card key={index} className="card-elevated">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <integration.icon className="w-8 h-8 text-primary" />
                    <div>
                      <CardTitle>{integration.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{integration.description}</p>
                    </div>
                  </div>
                  <Badge variant={integration.status === "Available" ? "secondary" : "outline"}>
                    {integration.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {integration.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {integration.status === "Available" ? "Connect" : "Get Notified"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* API Documentation */}
        <div className="text-center mt-16">
          <Card className="card-elevated bg-gradient-primary/5 border-primary/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Build Your Own Integration</h2>
              <p className="text-muted-foreground mb-6">
                Use our comprehensive API to integrate Home Cover GPT into your own applications and workflows.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero">
                  <Code className="w-5 h-5 mr-2" />
                  View API Docs
                </Button>
                <Button variant="outline" size="lg">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Get API Key
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

export default IntegrationsPage;