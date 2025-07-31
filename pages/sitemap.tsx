import React from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FileText, ExternalLink } from "lucide-react";

const SitemapPage = () => {
  const sitemap = [
    {
      category: "Main Pages",
      pages: [
        { name: "Home", url: "/", description: "Landing page with file upload and analysis" },
        { name: "Dashboard", url: "/dashboard", description: "User dashboard with recent analyses" },
        { name: "Analyses", url: "/analyses", description: "View and manage past analyses" },
        { name: "Chat", url: "/chat", description: "AI-powered insurance assistant" }
      ]
    },
    {
      category: "Account",
      pages: [
        { name: "Profile", url: "/profile", description: "Manage your account information" },
        { name: "Settings", url: "/settings", description: "Account preferences and settings" },
        { name: "Upgrade", url: "/upgrade", description: "Subscription plans and pricing" }
      ]
    },
    {
      category: "Product",
      pages: [
        { name: "How It Works", url: "/how-it-works", description: "Step-by-step process explanation" },
        { name: "Sample Reports", url: "/sample-reports", description: "Example analysis reports" },
        { name: "Pricing", url: "/pricing", description: "Subscription plans and features" },
        { name: "API", url: "/api", description: "Developer API documentation" },
        { name: "Integrations", url: "/integrations", description: "Third-party integrations" }
      ]
    },
    {
      category: "Support",
      pages: [
        { name: "Help Center", url: "/help", description: "Support documentation and guides" },
        { name: "FAQ", url: "/faq", description: "Frequently asked questions" },
        { name: "Contact", url: "/contact", description: "Get in touch with our team" },
        { name: "System Status", url: "/status", description: "Service status and uptime" }
      ]
    },
    {
      category: "Legal",
      pages: [
        { name: "Privacy Policy", url: "/privacy", description: "How we handle your data" },
        { name: "Terms of Service", url: "/terms", description: "Terms and conditions" },
        { name: "Security", url: "/security", description: "Security measures and certifications" },
        { name: "Data Deletion", url: "/data-deletion", description: "Request data deletion" },
        { name: "Cookie Settings", url: "/cookies", description: "Manage cookie preferences" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Sitemap</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete overview of all pages on Home Cover GPT. Find what you're looking for quickly.
          </p>
        </div>

        {/* Sitemap Categories */}
        <div className="space-y-8">
          {sitemap.map((category, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-foreground mb-6">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.pages.map((page, pageIndex) => (
                  <Card key={pageIndex} className="card-elevated">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <FileText className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <Link 
                            href={page.url}
                            className="font-semibold text-foreground hover:text-primary transition-colors"
                          >
                            {page.name}
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">{page.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* XML Sitemap */}
        <div className="mt-16 text-center">
          <Card className="card-elevated bg-gradient-primary/5 border-primary/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">XML Sitemap</h2>
              <p className="text-muted-foreground mb-6">
                For search engines and developers, you can access our XML sitemap.
              </p>
              <Link 
                href="/sitemap.xml"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                View XML Sitemap
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SitemapPage;