import React, { useState } from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, Search, FileText, Shield, CreditCard, Users } from "lucide-react";

const FAQPage = () => {
  const [openItem, setOpenItem] = useState<string | null>("general-1");

  const faqCategories = [
    {
      title: "General Questions",
      icon: Users,
      items: [
        {
          id: "general-1",
          question: "What is Home Cover GPT?",
          answer: "Home Cover GPT is an AI-powered platform that analyzes your homeowners insurance policy to identify coverage gaps, potential savings, and provide personalized recommendations. We use advanced artificial intelligence to read and understand complex insurance documents."
        },
        {
          id: "general-2",
          question: "How accurate is the analysis?",
          answer: "Our AI analysis is highly accurate, with a 95%+ accuracy rate for coverage identification. However, we always recommend consulting with a licensed insurance professional for final decisions, as our analysis is for informational purposes only."
        },
        {
          id: "general-3",
          question: "What types of insurance do you support?",
          answer: "We currently support homeowners insurance, auto insurance, and life insurance policies. We're working on adding support for other types of insurance like business insurance and health insurance."
        }
      ]
    },
    {
      title: "File Upload & Processing",
      icon: FileText,
      items: [
        {
          id: "upload-1",
          question: "What file formats do you support?",
          answer: "We support PDF files from all major insurance companies. You can also upload images (JPG, PNG) of your policy documents, and our OCR technology will extract the text for analysis."
        },
        {
          id: "upload-2",
          question: "How long does analysis take?",
          answer: "Most analyses are completed within 30 seconds. Complex policies with multiple pages may take up to 2 minutes. You'll receive a notification when your analysis is ready."
        },
        {
          id: "upload-3",
          question: "What if my file won't upload?",
          answer: "Make sure your file is under 50MB and in a supported format. If you're still having issues, try converting your document to PDF or contact our support team for assistance."
        }
      ]
    },
    {
      title: "Security & Privacy",
      icon: Shield,
      items: [
        {
          id: "security-1",
          question: "Is my data secure?",
          answer: "Yes! We use bank-level encryption (AES-256) and are SOC 2 Type II certified. Your insurance documents are automatically deleted after analysis, and we never store sensitive information long-term."
        },
        {
          id: "security-2",
          question: "Do you share my data with third parties?",
          answer: "No, we never sell or share your personal data with third parties. We only use your data to provide our analysis service and improve our AI models. Your privacy is our top priority."
        },
        {
          id: "security-3",
          question: "Can I delete my data?",
          answer: "Absolutely! You can request complete deletion of your account and all associated data at any time. We'll process your request within 30 days and confirm when your data has been removed."
        }
      ]
    },
    {
      title: "Billing & Subscriptions",
      icon: CreditCard,
      items: [
        {
          id: "billing-1",
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely through Stripe, and we never store your payment information."
        },
        {
          id: "billing-2",
          question: "Can I cancel my subscription anytime?",
          answer: "Yes! You can cancel your subscription at any time from your account settings. You'll continue to have access until the end of your billing period. No questions asked."
        },
        {
          id: "billing-3",
          question: "Is there a free trial?",
          answer: "Yes! You can try our Pro plan free for 7 days. No credit card required to start your trial. You can also use our free plan which includes 1 analysis per month."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about Home Cover GPT and our insurance analysis service.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category) => (
            <div key={category.title}>
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item) => (
                  <Collapsible
                    key={item.id}
                    open={openItem === item.id}
                    onOpenChange={() => setOpenItem(openItem === item.id ? null : item.id)}
                  >
                    <Card className="card-elevated">
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-left">{item.question}</CardTitle>
                            <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${
                              openItem === item.id ? 'rotate-180' : ''
                            }`} />
                          </div>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground">{item.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <Card className="card-elevated bg-gradient-primary/5 border-primary/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Contact Support
                </a>
                <a href="/help" className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                  Browse Help Center
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;