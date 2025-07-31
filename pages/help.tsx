import React, { useState } from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Search, Book, Video, MessageCircle, FileText, Settings, Shield, Upload, Download, AlertCircle, CheckCircle, ChevronDown } from "lucide-react";

const HelpPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openSection, setOpenSection] = useState<string | null>("getting-started");

  const helpCategories = [
    {
      id: "getting-started",
      title: "Getting Started",
      icon: Book,
      articles: [
        {
          title: "How to upload your insurance policy",
          description: "Step-by-step guide to uploading and analyzing your policy",
          difficulty: "Beginner"
        },
        {
          title: "Understanding your analysis results",
          description: "Learn how to read and interpret your coverage analysis",
          difficulty: "Beginner"
        },
        {
          title: "Creating your first account",
          description: "Quick setup guide for new users",
          difficulty: "Beginner"
        }
      ]
    },
    {
      id: "troubleshooting",
      title: "Troubleshooting",
      icon: AlertCircle,
      articles: [
        {
          title: "File upload issues",
          description: "Common problems and solutions for file uploads",
          difficulty: "Intermediate"
        },
        {
          title: "Analysis not completing",
          description: "What to do when your analysis gets stuck",
          difficulty: "Intermediate"
        },
        {
          title: "Account access problems",
          description: "Resolving login and account access issues",
          difficulty: "Intermediate"
        }
      ]
    },
    {
      id: "features",
      title: "Features & Tools",
      icon: Settings,
      articles: [
        {
          title: "Exporting your reports",
          description: "How to download and share your analysis reports",
          difficulty: "Beginner"
        },
        {
          title: "Using the comparison tool",
          description: "Compare different insurance policies side by side",
          difficulty: "Intermediate"
        },
        {
          title: "Setting up notifications",
          description: "Configure alerts for policy renewals and updates",
          difficulty: "Beginner"
        }
      ]
    },
    {
      id: "security",
      title: "Security & Privacy",
      icon: Shield,
      articles: [
        {
          title: "How we protect your data",
          description: "Learn about our security measures and data handling",
          difficulty: "Beginner"
        },
        {
          title: "Data deletion requests",
          description: "How to request deletion of your personal data",
          difficulty: "Beginner"
        },
        {
          title: "Two-factor authentication",
          description: "Set up additional security for your account",
          difficulty: "Intermediate"
        }
      ]
    }
  ];

  const popularArticles = [
    {
      title: "How to read your insurance policy",
      views: "2.3k",
      category: "Getting Started"
    },
    {
      title: "Understanding coverage limits",
      views: "1.8k",
      category: "Features"
    },
    {
      title: "Saving money on insurance",
      views: "1.5k",
      category: "Tips"
    },
    {
      title: "Common insurance terms explained",
      views: "1.2k",
      category: "Education"
    }
  ];

  const filteredCategories = helpCategories.filter(category =>
    category.articles.some(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Help Center</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to your questions and learn how to get the most out of Home Cover GPT.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              placeholder="Search help articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="card-elevated">
            <CardContent className="p-6 text-center">
              <Video className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Video Tutorials</h3>
              <p className="text-sm text-muted-foreground mb-4">Watch step-by-step guides</p>
              <Button variant="outline" size="sm">Watch Now</Button>
            </CardContent>
          </Card>
          
          <Card className="card-elevated">
            <CardContent className="p-6 text-center">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
              <p className="text-sm text-muted-foreground mb-4">Get instant help</p>
              <Button variant="outline" size="sm">Start Chat</Button>
            </CardContent>
          </Card>
          
          <Card className="card-elevated">
            <CardContent className="p-6 text-center">
              <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Documentation</h3>
              <p className="text-sm text-muted-foreground mb-4">Detailed guides</p>
              <Button variant="outline" size="sm">Browse Docs</Button>
            </CardContent>
          </Card>
          
          <Card className="card-elevated">
            <CardContent className="p-6 text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Contact Support</h3>
              <p className="text-sm text-muted-foreground mb-4">Email or phone</p>
              <Button variant="outline" size="sm">Contact Us</Button>
            </CardContent>
          </Card>
        </div>

        {/* Help Categories */}
        <div className="space-y-6">
          {filteredCategories.map((category) => (
            <Collapsible
              key={category.id}
              open={openSection === category.id}
              onOpenChange={() => setOpenSection(openSection === category.id ? null : category.id)}
            >
              <Card className="card-elevated">
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <category.icon className="w-5 h-5 text-primary" />
                        <CardTitle>{category.title}</CardTitle>
                      </div>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${
                        openSection === category.id ? 'rotate-180' : ''
                      }`} />
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.articles.map((article, index) => (
                        <div key={index} className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-medium text-foreground">{article.title}</h4>
                            <Badge variant="secondary" className="text-xs">
                              {article.difficulty}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{article.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Card>
            </Collapsible>
          ))}
        </div>

        {/* Popular Articles */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {popularArticles.map((article, index) => (
              <Card key={index} className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{article.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{article.category}</span>
                        <span>•</span>
                        <span>{article.views} views</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <FileText className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Card className="card-elevated">
            <CardContent className="p-6 space-y-6">
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <div className="flex items-center justify-between cursor-pointer hover:bg-muted/50 p-3 rounded-lg transition-colors">
                    <h3 className="font-semibold text-foreground">How accurate are the analysis results?</h3>
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-3 pb-3">
                  <p className="text-muted-foreground">
                    Our AI analysis is highly accurate, with a 95%+ accuracy rate for coverage identification. 
                    However, we always recommend consulting with a licensed insurance professional for final decisions.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <div className="flex items-center justify-between cursor-pointer hover:bg-muted/50 p-3 rounded-lg transition-colors">
                    <h3 className="font-semibold text-foreground">What file formats do you support?</h3>
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-3 pb-3">
                  <p className="text-muted-foreground">
                    We support PDF files from all major insurance companies. You can also upload images 
                    (JPG, PNG) of your policy documents, and our OCR technology will extract the text.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <div className="flex items-center justify-between cursor-pointer hover:bg-muted/50 p-3 rounded-lg transition-colors">
                    <h3 className="font-semibold text-foreground">Is my data secure?</h3>
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-3 pb-3">
                  <p className="text-muted-foreground">
                    Yes! We use bank-level encryption and automatically delete your policy documents 
                    after analysis. We never store sensitive information and are SOC 2 Type II certified.
                  </p>
                </CollapsibleContent>
              </Collapsible>
              
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <div className="flex items-center justify-between cursor-pointer hover:bg-muted/50 p-3 rounded-lg transition-colors">
                    <h3 className="font-semibold text-foreground">Can I cancel my subscription anytime?</h3>
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-3 pb-3">
                  <p className="text-muted-foreground">
                    Absolutely! You can cancel your subscription at any time from your account settings. 
                    You'll continue to have access until the end of your billing period.
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="card-elevated bg-gradient-primary/5 border-primary/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Still need help?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact Support
                </Button>
                <Button variant="outline" size="lg">
                  <Video className="w-5 h-5 mr-2" />
                  Watch Tutorials
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

export default HelpPage;