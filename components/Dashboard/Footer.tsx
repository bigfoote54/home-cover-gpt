import { Shield, Heart, Lock, FileText, Mail, Phone, MapPin, ExternalLink, Award, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center shadow-soft">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Home Cover GPT</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Making homeowners insurance simple and understandable for everyone. 
              Get instant AI-powered analysis of your policy and discover ways to save money 
              while improving your coverage.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-success">
              <Heart className="w-4 h-4" />
              <span>Trusted by 50,000+ homeowners nationwide</span>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>support@homecovergpt.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>1-800-HOMECOVER</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-foreground text-base">Product</h3>
            <div className="space-y-3">
              <Link href="/how-it-works" className="block text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-1 py-1">
                How it works
              </Link>
              <Link href="/sample-reports" className="block text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-1 py-1">
                Sample reports
              </Link>
              <Link href="/pricing" className="block text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-1 py-1">
                Pricing
              </Link>
              <Link href="/api" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-1 py-1">
                <span>API access</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
              <Link href="/integrations" className="block text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-1 py-1">
                Integrations
              </Link>
            </div>
          </div>

          {/* Support Links */}
          <div className="space-y-6">
            <h3 className="font-semibold text-foreground text-base">Support</h3>
            <div className="space-y-3">
              <Link href="/help" className="block text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-1 py-1">
                Help center
              </Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-1 py-1">
                Contact us
              </Link>
              <Link href="/faq" className="block text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-1 py-1">
                Insurance FAQ
              </Link>
              <Link href="/agent-resources" className="block text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-1 py-1">
                Agent resources
              </Link>
              <Link href="/status" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-1 py-1">
                <span>System status</span>
                <div className="w-2 h-2 bg-success rounded-full"></div>
              </Link>
            </div>
          </div>

          {/* Legal & Privacy */}
          <div className="space-y-6">
            <h3 className="font-semibold text-foreground text-base">Legal & Privacy</h3>
            <div className="space-y-3">
              <Link href="/privacy" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-1 py-1">
                <Lock className="w-3 h-3" />
                <span>Privacy Policy</span>
              </Link>
              <Link href="/terms" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-1 py-1">
                <FileText className="w-3 h-3" />
                <span>Terms of Service</span>
              </Link>
              <Link href="/security" className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-1 py-1">
                <Shield className="w-3 h-3" />
                <span>Security</span>
              </Link>
              <Link href="/data-deletion" className="block text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-1 py-1">
                Data deletion
              </Link>
              <Link href="/cookies" className="block text-sm text-muted-foreground hover:text-foreground transition-colors focus-ring rounded px-1 py-1">
                Cookie settings
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Bottom section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
            <span>© 2024 Home Cover GPT. All rights reserved.</span>
            <div className="flex items-center space-x-4">
              <Link href="/sitemap" className="hover:text-foreground transition-colors focus-ring rounded px-1 py-1">
                Sitemap
              </Link>
              <Link href="/accessibility" className="hover:text-foreground transition-colors focus-ring rounded px-1 py-1">
                Accessibility
              </Link>
            </div>
          </div>

          {/* Compliance Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 text-sm">
            <div className="flex items-center gap-2 text-success">
              <Shield className="w-4 h-4" />
              <span className="font-medium">SOC 2 Type II</span>
            </div>
            <div className="flex items-center gap-2 text-success">
              <Lock className="w-4 h-4" />
              <span className="font-medium">256-bit Encryption</span>
            </div>
            <div className="flex items-center gap-2 text-success">
              <CheckCircle className="w-4 h-4" />
              <span className="font-medium">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-success">
              <Award className="w-4 h-4" />
              <span className="font-medium">AI Ethics Certified</span>
            </div>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="mt-12 p-8 bg-gradient-primary/5 border border-primary/10 rounded-2xl">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-lg font-semibold text-foreground mb-2">
              Stay informed about insurance trends
            </h4>
            <p className="text-sm text-muted-foreground mb-6">
              Get monthly insights on homeowners insurance, market trends, and money-saving tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="btn-hero px-6 py-2 rounded-lg font-medium">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;