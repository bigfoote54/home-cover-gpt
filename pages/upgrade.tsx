import React, { useState } from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Star, Zap, Shield, CreditCard, ArrowRight } from "lucide-react";

const UpgradePage = () => {
  const [selectedPlan, setSelectedPlan] = useState("pro");

  const plans = [
    {
      id: "free",
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying out our service",
      features: [
        "1 analysis per month",
        "Basic coverage summary",
        "Email support",
        "Standard processing time"
      ],
      popular: false,
      cta: "Current Plan"
    },
    {
      id: "pro",
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "Most popular for homeowners",
      features: [
        "Unlimited analyses",
        "Detailed risk assessment",
        "Priority support",
        "Export reports",
        "Policy comparison",
        "Renewal reminders"
      ],
      popular: true,
      cta: "Upgrade to Pro"
    },
    {
      id: "premium",
      name: "Premium",
      price: "$49",
      period: "per month",
      description: "For insurance professionals",
      features: [
        "Everything in Pro",
        "API access",
        "White-label reports",
        "Bulk analysis",
        "Custom integrations",
        "Dedicated support",
        "Advanced analytics"
      ],
      popular: false,
      cta: "Upgrade to Premium"
    }
  ];

  const currentPlan = "free";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Choose Your Plan</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Unlock the full potential of AI-powered insurance analysis. 
            Choose the plan that fits your needs and start saving on your insurance today.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`card-elevated relative transition-all duration-300 hover:shadow-soft ${
                plan.popular ? 'ring-2 ring-primary shadow-glow' : ''
              } ${selectedPlan === plan.id ? 'ring-2 ring-primary' : ''}`}
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
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-success flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.id === currentPlan 
                      ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                      : 'btn-hero'
                  }`}
                  disabled={plan.id === currentPlan}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.id === currentPlan ? (
                    "Current Plan"
                  ) : (
                    <>
                      {plan.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Comparison */}
        <Card className="card-elevated mb-12">
          <CardHeader>
            <CardTitle className="text-center text-2xl">Feature Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-6 font-medium">Feature</th>
                    <th className="text-center py-4 px-6 font-medium">Free</th>
                    <th className="text-center py-4 px-6 font-medium">Pro</th>
                    <th className="text-center py-4 px-6 font-medium">Premium</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-6">Analyses per month</td>
                    <td className="text-center py-4 px-6">1</td>
                    <td className="text-center py-4 px-6">Unlimited</td>
                    <td className="text-center py-4 px-6">Unlimited</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-6">Processing time</td>
                    <td className="text-center py-4 px-6">Standard</td>
                    <td className="text-center py-4 px-6">Priority</td>
                    <td className="text-center py-4 px-6">Express</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-6">Support</td>
                    <td className="text-center py-4 px-6">Email</td>
                    <td className="text-center py-4 px-6">Priority</td>
                    <td className="text-center py-4 px-6">Dedicated</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-6">Report exports</td>
                    <td className="text-center py-4 px-6">-</td>
                    <td className="text-center py-4 px-6">✓</td>
                    <td className="text-center py-4 px-6">✓</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-6">API access</td>
                    <td className="text-center py-4 px-6">-</td>
                    <td className="text-center py-4 px-6">-</td>
                    <td className="text-center py-4 px-6">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          
          <Card className="card-elevated">
            <CardContent className="p-6 space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Can I cancel anytime?</h3>
                <p className="text-muted-foreground">Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely through Stripe.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Is there a free trial?</h3>
                <p className="text-muted-foreground">Yes! You can try our Pro plan free for 7 days. No credit card required to start your trial.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Can I upgrade or downgrade my plan?</h3>
                <p className="text-muted-foreground">Absolutely. You can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-6">Join thousands of homeowners who are already saving money on their insurance.</p>
          <Button size="lg" className="btn-hero px-8 py-4 text-lg">
            <Crown className="w-5 h-5 mr-2" />
            Start Free Trial
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UpgradePage;