import React from "react";
import Header from "@/components/Dashboard/Header";
import Footer from "@/components/Dashboard/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Settings, Shield, Analytics, Target } from "lucide-react";

const CookiesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Settings</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Manage your cookie preferences and learn how we use cookies to improve your experience.
          </p>
        </div>

        {/* Cookie Overview */}
        <Card className="card-elevated mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              About Cookies
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience and improve our services.
            </p>
            <p className="text-muted-foreground">
              We use cookies for essential website functionality, analytics, and to personalize your experience. 
              You can control which cookies you allow below.
            </p>
          </CardContent>
        </Card>

        {/* Cookie Categories */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">Cookie Categories</h2>
          
          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Essential Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      Required for the website to function properly. These cannot be disabled.
                    </p>
                  </div>
                </div>
                <Switch checked={true} disabled />
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Authentication and security</li>
                <li>• Session management</li>
                <li>• Basic website functionality</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <Analytics className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Analytics Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      Help us understand how visitors use our website and improve our services.
                    </p>
                  </div>
                </div>
                <Switch />
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Website usage statistics</li>
                <li>• Performance monitoring</li>
                <li>• Service improvements</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="card-elevated">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3">
                  <Target className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Marketing Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      Used to deliver relevant advertisements and measure campaign effectiveness.
                    </p>
                  </div>
                </div>
                <Switch />
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Personalized advertising</li>
                <li>• Campaign tracking</li>
                <li>• Social media integration</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Cookie Management */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Managing Your Cookies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="card-elevated">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Browser Settings</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  You can control cookies through your browser settings. Each browser has different instructions:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Chrome: Settings → Privacy and security → Cookies</li>
                  <li>• Firefox: Options → Privacy & Security → Cookies</li>
                  <li>• Safari: Preferences → Privacy → Cookies</li>
                  <li>• Edge: Settings → Cookies and site permissions</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="card-elevated">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Third-Party Tools</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  You can also use third-party tools to manage cookies:
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Browser extensions for cookie management</li>
                  <li>• Privacy-focused browsers</li>
                  <li>• Cookie consent management tools</li>
                  <li>• Ad-blocking software</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 text-center">
          <Card className="card-elevated bg-gradient-primary/5 border-primary/10">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Questions About Cookies?</h2>
              <p className="text-muted-foreground mb-6">
                If you have questions about our cookie usage, please contact our privacy team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                  Contact Privacy Team
                </a>
                <a href="/privacy" className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
                  Privacy Policy
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

export default CookiesPage;