import { Shield, Heart, Lock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">Home Cover GPT</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Making homeowners insurance simple and understandable for everyone.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-red-500" />
              <span>Made with care for homeowners</span>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Product</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="h-auto p-0 text-left justify-start text-sm text-muted-foreground hover:text-foreground">
                How it works
              </Button>
              <Button variant="ghost" className="h-auto p-0 text-left justify-start text-sm text-muted-foreground hover:text-foreground">
                Sample reports
              </Button>
              <Button variant="ghost" className="h-auto p-0 text-left justify-start text-sm text-muted-foreground hover:text-foreground">
                Pricing
              </Button>
              <Button variant="ghost" className="h-auto p-0 text-left justify-start text-sm text-muted-foreground hover:text-foreground">
                API access
              </Button>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="h-auto p-0 text-left justify-start text-sm text-muted-foreground hover:text-foreground">
                Help center
              </Button>
              <Button variant="ghost" className="h-auto p-0 text-left justify-start text-sm text-muted-foreground hover:text-foreground">
                Contact us
              </Button>
              <Button variant="ghost" className="h-auto p-0 text-left justify-start text-sm text-muted-foreground hover:text-foreground">
                Insurance FAQ
              </Button>
              <Button variant="ghost" className="h-auto p-0 text-left justify-start text-sm text-muted-foreground hover:text-foreground">
                Agent resources
              </Button>
            </div>
          </div>

          {/* Legal & Privacy */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Legal & Privacy</h3>
            <div className="space-y-2">
              <Button variant="ghost" className="h-auto p-0 text-left justify-start text-sm text-muted-foreground hover:text-foreground">
                <Lock className="w-3 h-3 mr-2" />
                Privacy Policy
              </Button>
              <Button variant="ghost" className="h-auto p-0 text-left justify-start text-sm text-muted-foreground hover:text-foreground">
                <FileText className="w-3 h-3 mr-2" />
                Terms of Service
              </Button>
              <Button variant="ghost" className="h-auto p-0 text-left justify-start text-sm text-muted-foreground hover:text-foreground">
                <Shield className="w-3 h-3 mr-2" />
                Security
              </Button>
              <Button variant="ghost" className="h-auto p-0 text-left justify-start text-sm text-muted-foreground hover:text-foreground">
                Data deletion
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Home Cover GPT. All rights reserved.
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-success" />
                SOC 2 Compliant
              </span>
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-success" />
                256-bit Encryption
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;