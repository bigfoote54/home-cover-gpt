import { CheckCircle2, AlertCircle, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AnalysisResult } from "@/shared/types";

interface ResultsCardProps {
  result: AnalysisResult;
  onExportReport?: () => void;
  isLoading?: boolean;
}

const ResultsCard = ({ result, onExportReport, isLoading = false }: ResultsCardProps) => {
  if (isLoading) {
    return (
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-8 animate-slide-up">
          {/* Coverage Summary Card Skeleton */}
          <Card className="card-elevated border-l-4 border-l-success shadow-soft">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-6 bg-gray-200 rounded animate-pulse w-48" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-32" />
                  </div>
                </div>
                <div className="h-8 bg-gray-200 rounded animate-pulse w-24" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-100 rounded-lg">
                    <div className="w-5 h-5 bg-gray-200 rounded animate-pulse flex-shrink-0" />
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Gaps and Risks Skeleton */}
          <Card className="card-elevated shadow-soft">
            <CardHeader>
              <div className="h-6 bg-gray-200 rounded animate-pulse w-48" />
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2].map((index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-lg border">
                  <div className="flex items-start gap-3">
                    <div className="w-4 h-4 bg-gray-200 rounded animate-pulse flex-shrink-0" />
                    <div className="space-y-2 flex-1">
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-24" />
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
                      <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6" />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recommendations Skeleton */}
          <Card className="card-elevated shadow-soft">
            <CardHeader>
              <div className="h-6 bg-gray-200 rounded animate-pulse w-40" />
            </CardHeader>
            <CardContent className="space-y-4">
              {[1, 2, 3].map((index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-100 rounded-lg border">
                  <div className="w-5 h-5 bg-gray-200 rounded animate-pulse flex-shrink-0" />
                  <div className="space-y-2 flex-1">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-36" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-4/6" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-8 animate-slide-up">
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
                className="focus:outline-none focus:ring-2 focus:ring-accent" 
                onClick={onExportReport}
                aria-label="Export analysis report as PDF"
              >
                Export Report
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {result.coverageSummary.map((summary, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-success/5 rounded-lg border border-success/20">
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-foreground">{summary}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Gaps and Risks */}
        <Card className="card-elevated shadow-soft">
          <CardHeader>
            <CardTitle className="text-lg">Detected Gaps & Risks</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {result.risks.map((risk, index) => (
              <Alert 
                key={index}
                className="border-warning/20 bg-warning/5"
              >
                <AlertCircle className="h-4 w-4 text-warning" />
                <AlertDescription>
                  <div className="font-medium text-warning-foreground">
                    Risk #{index + 1}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{risk}</div>
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
            {result.recommendations.map((recommendation, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-success/5 rounded-lg border border-success/20">
                <TrendingUp className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">Recommendation #{index + 1}</div>
                  <div className="text-sm text-muted-foreground">{recommendation}</div>
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