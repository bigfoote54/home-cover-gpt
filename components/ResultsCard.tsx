import { CheckCircle2, AlertCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import SkeletonLoader from "@/components/ui/skeleton-loader";

interface CoverageData {
  dwelling: string;
  personalProperty: string;
  liability: string;
}

interface RiskItem {
  type: "warning" | "error";
  title: string;
  description: string;
}

interface RecommendationItem {
  title: string;
  description: string;
}

interface ResultsCardProps {
  coverage: CoverageData;
  risks: RiskItem[];
  recommendations: RecommendationItem[];
  onExportReport?: () => void;
  isLoading?: boolean;
}

const ResultsCard = ({ coverage, risks, recommendations, onExportReport, isLoading }: ResultsCardProps) => {
  if (isLoading) {
    return (
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SkeletonLoader />
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-8 animate-slide-up transform scale-95 opacity-0 transition-all duration-300 ease-in-out" style={{ animationDelay: '0.1s' }}>
        {/* Coverage Summary Card */}
        <Card className="card-elevated border-l-4 border-l-success shadow-soft">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                </div>
                <div>
                  <CardTitle className="text-xl">Your Coverage at a Glance</CardTitle>
                  <p className="text-muted-foreground">Analysis completed successfully</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-150 ease-in-out" 
                onClick={onExportReport}
                aria-label="Export analysis report"
              >
                Export Report
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-success/5 border border-success/20 p-6 rounded-xl text-center transition-all duration-150 ease-in-out">
                <div className="text-3xl font-bold text-success">{coverage.dwelling}</div>
                <div className="text-sm text-success/80 font-medium">Dwelling Coverage</div>
              </div>
              <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl text-center transition-all duration-150 ease-in-out">
                <div className="text-3xl font-bold text-primary">{coverage.personalProperty}</div>
                <div className="text-sm text-primary/80 font-medium">Personal Property</div>
              </div>
              <div className="bg-accent/5 border border-accent/20 p-6 rounded-xl text-center transition-all duration-150 ease-in-out">
                <div className="text-3xl font-bold text-accent">{coverage.liability}</div>
                <div className="text-sm text-accent/80 font-medium">Liability Coverage</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gaps and Risks */}
        <Card className="card-elevated shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg">Detected Gaps & Risks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {risks.map((risk, index) => (
              <Alert 
                key={index}
                className={`border-${risk.type === 'warning' ? 'warning' : 'destructive'}/20 bg-${risk.type === 'warning' ? 'warning' : 'destructive'}/5`}
              >
                <AlertCircle className={`h-4 w-4 text-${risk.type === 'warning' ? 'warning' : 'destructive'}`} />
                <AlertDescription>
                  <div className={`font-medium text-${risk.type === 'warning' ? 'warning' : 'destructive'}-foreground`}>
                    {risk.title}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{risk.description}</div>
                </AlertDescription>
              </Alert>
            ))}
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="card-elevated shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg">Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendations.map((recommendation, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-success/5 rounded-lg border border-success/20">
                <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">{recommendation.title}</div>
                  <div className="text-sm text-muted-foreground">{recommendation.description}</div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Alert className="bg-muted/30 border-border">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Important:</strong> This analysis is for informational purposes only and does not constitute legal or insurance advice. 
            Please consult with your insurance agent or a qualified professional for specific coverage recommendations.
          </AlertDescription>
        </Alert>
      </div>
    </section>
  );
};

export default ResultsCard;