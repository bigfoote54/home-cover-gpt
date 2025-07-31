import React, { useState } from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Zap, Shield, Database, Key, ArrowRight, Copy, CheckCircle, ExternalLink, Download } from "lucide-react";

const ApiPage = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeExample = `curl -X POST https://api.homecovergpt.com/v1/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "policy_file": "base64_encoded_pdf",
    "analysis_type": "home_insurance",
    "include_recommendations": true
  }'`;

  const responseExample = `{
  "analysis_id": "anl_123456789",
  "status": "completed",
  "coverage_summary": {
    "dwelling": "$350,000",
    "personal_property": "$175,000",
    "liability": "$300,000"
  },
  "risks": [
    {
      "type": "warning",
      "title": "Insufficient Liability Coverage",
      "description": "Your liability limit may not be adequate."
    }
  ],
  "recommendations": [
    {
      "title": "Increase Liability Coverage",
      "description": "Consider raising to $500,000",
      "potential_savings": "$200"
    }
  ],
  "processing_time": "2.3s"
}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">API Documentation</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Integrate AI-powered insurance analysis into your applications. 
            Built for developers and insurance professionals.
          </p>
        </div>

        {/* API Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="card-elevated">
            <CardContent className="p-6 text-center">
              <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Get analysis results in under 30 seconds with our optimized API
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-elevated">
            <CardContent className="p-6 text-center">
              <Shield className="w-8 h-8 text-success mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Enterprise Security</h3>
              <p className="text-sm text-muted-foreground">
                SOC 2 Type II certified with end-to-end encryption
              </p>
            </CardContent>
          </Card>
          
          <Card className="card-elevated">
            <CardContent className="p-6 text-center">
              <Database className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Scalable Infrastructure</h3>
              <p className="text-sm text-muted-foreground">
                Handle thousands of requests with 99.9% uptime guarantee
              </p>
            </CardContent>
          </Card>
        </div>

        {/* API Documentation */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="authentication">Authentication</TabsTrigger>
            <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The Home Cover GPT API allows you to integrate AI-powered insurance analysis 
                  into your applications. Upload insurance policies and receive detailed analysis 
                  including coverage summaries, risk assessments, and actionable recommendations.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Base URL</h4>
                    <code className="bg-muted px-2 py-1 rounded text-sm">https://api.homecovergpt.com/v1</code>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Content Type</h4>
                    <code className="bg-muted px-2 py-1 rounded text-sm">application/json</code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="authentication" className="space-y-6">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>API Authentication</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  All API requests require authentication using API keys. Include your API key 
                  in the Authorization header of every request.
                </p>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">Header Format</h4>
                  <code className="text-sm">Authorization: Bearer YOUR_API_KEY</code>
                </div>
                
                <div className="flex items-center gap-4">
                  <Button variant="outline">
                    <Key className="w-4 h-4 mr-2" />
                    Get API Key
                  </Button>
                  <Button variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Documentation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="endpoints" className="space-y-6">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>API Endpoints</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">POST /analyze</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Analyze an insurance policy and return detailed insights.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-foreground mb-1">Parameters</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• policy_file (required): Base64 encoded PDF</li>
                        <li>• analysis_type (required): home_insurance, auto_insurance, life_insurance</li>
                        <li>• include_recommendations (optional): boolean</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-1">Response</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• analysis_id: Unique identifier</li>
                        <li>• coverage_summary: Policy details</li>
                        <li>• risks: Identified gaps</li>
                        <li>• recommendations: Actionable advice</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">GET /analysis/{'{analysis_id}'}</h4>
                  <p className="text-sm text-muted-foreground">
                    Retrieve the results of a completed analysis.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">GET /analyses</h4>
                  <p className="text-sm text-muted-foreground">
                    List all analyses for your account.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="examples" className="space-y-6">
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Code Examples</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">cURL Example</h4>
                  <div className="bg-muted p-4 rounded-lg relative">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(codeExample)}
                    >
                      {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    </Button>
                    <pre className="text-sm overflow-x-auto">
                      <code>{codeExample}</code>
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Response Example</h4>
                  <div className="bg-muted p-4 rounded-lg">
                    <pre className="text-sm overflow-x-auto">
                      <code>{responseExample}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* SDKs and Libraries */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-center mb-8">SDKs & Libraries</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-foreground">JavaScript/Node.js</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Official SDK for JavaScript and Node.js applications.
                </p>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on npm
                </Button>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-foreground">Python</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Python client library for easy integration.
                </p>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on PyPI
                </Button>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-foreground">Postman Collection</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Ready-to-use Postman collection for testing.
                </p>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-12">
          <Card className="card-elevated">
            <CardHeader>
              <CardTitle className="text-center">API Pricing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">$0.10</div>
                  <div className="text-sm text-muted-foreground">per analysis</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">1,000</div>
                  <div className="text-sm text-muted-foreground">free requests/month</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">99.9%</div>
                  <div className="text-sm text-muted-foreground">uptime guarantee</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="card-elevated bg-gradient-primary/5 border-primary/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Integrate?</h2>
              <p className="text-muted-foreground mb-6">
                Start building with our API today. Get your API key and begin integrating 
                AI-powered insurance analysis into your applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero">
                  <Key className="w-5 h-5 mr-2" />
                  Get API Key
                </Button>
                <Button variant="outline" size="lg">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Full Documentation
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

export default ApiPage;