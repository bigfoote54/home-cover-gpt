import React from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Crown, Zap, Shield } from "lucide-react";

const UpgradePage = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "3 policy analyses per month",
        "Basic coverage recommendations",
        "Email support",
        "Standard processing time"
      ],
      current: true,
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "Best for individual users",
      features: [
        "Unlimited policy analyses",
        "Advanced AI recommendations",
        "Priority support",
        "Faster processing",
        "Export reports to PDF",
        "Policy comparison tools"
      ],
      current: false,
      popular: true
    },
    {
      name: "Enterprise",
      price: "$49",
      period: "per month",
      description: "For businesses and teams",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Bulk policy analysis",
        "Custom integrations",
        "Dedicated support",
        "Advanced analytics",
        "API access"
      ],
      current: false,
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Choose Your Plan</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock the full potential of AI-powered insurance analysis with our premium plans
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`card-elevated relative transition-all duration-300 hover:shadow-soft ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center mb-2">
                  {plan.name === "Free" && <Shield className="w-6 h-6 text-muted-foreground" />}
                  {plan.name === "Pro" && <Zap className="w-6 h-6 text-primary" />}
                  {plan.name === "Enterprise" && <Crown className="w-6 h-6 text-yellow-500" />}
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full mt-6 ${
                    plan.current 
                      ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                      : plan.popular 
                        ? 'btn-hero' 
                        : 'btn-secondary'
                  }`}
                  disabled={plan.current}
                >
                  {plan.current ? 'Current Plan' : 'Get Started'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FAQ Section */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-center">Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Can I cancel anytime?</h4>
                <p className="text-muted-foreground">Yes, you can cancel your subscription at any time. No long-term contracts required.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">What payment methods do you accept?</h4>
                <p className="text-muted-foreground">We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Is there a free trial?</h4>
                <p className="text-muted-foreground">Yes, all paid plans come with a 14-day free trial. No credit card required to start.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-foreground mb-2">Can I upgrade or downgrade my plan?</h4>
                <p className="text-muted-foreground">You can change your plan at any time. Changes take effect immediately.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default UpgradePage;