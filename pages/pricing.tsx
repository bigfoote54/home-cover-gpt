import React, { useState } from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, Crown, Star, Zap, Shield, CreditCard, ArrowRight, Users, Award } from "lucide-react";

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: "free",
      name: "Free",
      monthlyPrice: 0,
      annualPrice: 0,
      description: "Perfect for trying out our service",
      features: [
        "1 analysis per month",
        "Basic coverage summary",
        "Email support",
        "Standard processing time",
        "Basic risk assessment"
      ],
      popular: false,
      cta: "Get Started Free",
      limitations: [
        "Limited to 1 analysis per month",
        "No detailed recommendations",
        "No export functionality"
      ]
    },
    {
      id: "pro",
      name: "Pro",
      monthlyPrice: 19,
      annualPrice: 190,
      description: "Most popular for homeowners",
      features: [
        "Unlimited analyses",
        "Detailed risk assessment",
        "Priority support",
        "Export reports",
        "Policy comparison",
        "Renewal reminders",
        "Advanced recommendations",
        "Mobile app access"
      ],
      popular: true,
      cta: "Start Free Trial",
      savings: "Save 17% with annual billing"
    },
    {
      id: "premium",
      name: "Premium",
      monthlyPrice: 49,
      annualPrice: 490,
      description: "For insurance professionals",
      features: [
        "Everything in Pro",
        "API access",
        "White-label reports",
        "Bulk analysis",
        "Custom integrations",
        "Dedicated support",
        "Advanced analytics",
        "Team collaboration",
        "Priority processing"
      ],
      popular: false,
      cta: "Contact Sales",
      savings: "Save 17% with annual billing"
    }
  ];

  const currentPlan = "free";

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that fits your needs. Start free and upgrade when you're ready.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
            Monthly
          </span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
          />
          <span className={`text-sm ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
            Annual
          </span>
          {isAnnual && (
            <Badge className="bg-success/10 text-success">
              Save up to 17%
            </Badge>
          )}
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <Card 
              key={plan.id}
              className={`card-elevated relative transition-all duration-300 hover:shadow-soft ${
                plan.popular ? 'ring-2 ring-primary shadow-glow' : ''
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
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">
                    /{isAnnual ? 'year' : 'month'}
                  </span>
                </div>
                {plan.savings && isAnnual && (
                  <p className="text-sm text-success font-medium">{plan.savings}</p>
                )}
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
                
                {plan.limitations && (
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium text-foreground mb-2">Limitations:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <Button 
                  className={`w-full ${
                    plan.id === currentPlan 
                      ? 'bg-muted text-muted-foreground cursor-not-allowed' 
                      : 'btn-hero'
                  }`}
                  disabled={plan.id === currentPlan}
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
        <Card className="card-elevated mb-16">
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
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-6">White-label reports</td>
                    <td className="text-center py-4 px-6">-</td>
                    <td className="text-center py-4 px-6">-</td>
                    <td className="text-center py-4 px-6">✓</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-4 px-6">Bulk analysis</td>
                    <td className="text-center py-4 px-6">-</td>
                    <td className="text-center py-4 px-6">-</td>
                    <td className="text-center py-4 px-6">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Trusted by Thousands</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground">50,000+</div>
              <div className="text-sm text-muted-foreground">Happy customers</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-success" />
              </div>
              <div className="text-2xl font-bold text-foreground">4.9/5</div>
              <div className="text-sm text-muted-foreground">Customer rating</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Secure & private</div>
            </div>
          </div>
        </div>

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
        <div className="text-center mt-16">
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

export default PricingPage;