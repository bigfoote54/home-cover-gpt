import React, { useState } from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageCircle, Users, Shield, ArrowRight, CheckCircle } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    department: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help with your account or technical issues",
      contact: "support@homecovergpt.com",
      response: "Usually responds within 2 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our customer success team",
      contact: "1-800-HOMECOVER",
      response: "Available Mon-Fri, 9AM-6PM EST"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant help from our support team",
      contact: "Available on website",
      response: "Real-time assistance"
    }
  ];

  const departments = [
    {
      name: "Technical Support",
      description: "Help with API integration, technical issues, and troubleshooting",
      icon: Shield
    },
    {
      name: "Sales & Billing",
      description: "Questions about pricing, plans, and billing inquiries",
      icon: Users
    },
    {
      name: "Partnerships",
      description: "Business partnerships, integrations, and enterprise solutions",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help! Get in touch with our team for support, sales inquiries, 
            or partnership opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="department">Department</Label>
                    <Select 
                      value={formData.department} 
                      onValueChange={(value) => handleInputChange("department", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="sales">Sales & Billing</SelectItem>
                        <SelectItem value="partnerships">Partnerships</SelectItem>
                        <SelectItem value="general">General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full btn-hero">
                    Send Message
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Get in touch</h2>
              {contactMethods.map((method, index) => (
                <Card key={index} className="card-elevated">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <method.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                        <div className="text-sm">
                          <div className="font-medium text-foreground">{method.contact}</div>
                          <div className="text-muted-foreground">{method.response}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Office Information */}
            <Card className="card-elevated">
              <CardHeader>
                <CardTitle>Office Location</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Home Cover GPT</div>
                    <div className="text-sm text-muted-foreground">
                      123 Innovation Drive<br />
                      San Francisco, CA 94105<br />
                      United States
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Business Hours</div>
                    <div className="text-sm text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - 2:00 PM EST<br />
                      Sunday: Closed
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Departments */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <dept.icon className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold text-foreground">{dept.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{dept.description}</p>
                  <Button variant="outline" size="sm">
                    Contact {dept.name}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
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
              <div>
                <h3 className="font-semibold text-foreground mb-2">How quickly do you respond to inquiries?</h3>
                <p className="text-muted-foreground">We typically respond to all inquiries within 2 hours during business hours. For urgent technical issues, we have 24/7 support available for premium customers.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Do you offer phone support?</h3>
                <p className="text-muted-foreground">Yes! You can reach us at 1-800-HOMECOVER during business hours. We also offer scheduled callbacks for complex technical issues.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">Can I schedule a demo?</h3>
                <p className="text-muted-foreground">Absolutely! We offer personalized demos for both individual users and enterprise clients. Contact our sales team to schedule a convenient time.</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">What languages do you support?</h3>
                <p className="text-muted-foreground">Our platform currently supports English, Spanish, and French. We're working on adding more languages to better serve our global customer base.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="card-elevated bg-gradient-primary/5 border-primary/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h2>
              <p className="text-muted-foreground mb-6">
                Can't find what you're looking for? Our team is here to help you get the most out of Home Cover GPT.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Live Chat
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Now
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

export default ContactPage;