import { useState, useCallback } from "react";
import { Upload, File, X, AlertCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      setFile(droppedFile);
    }
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  }, []);

  const handleAnalyze = () => {
    if (!file || !hasConsented) return;
    
    setIsAnalyzing(true);
    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  const removeFile = () => {
    setFile(null);
  };

  if (showResults) {
    return (
      <div className="space-y-6 animate-slide-up">
        {/* Coverage Summary Card */}
        <Card className="shadow-card border-l-4 border-l-success">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <h3 className="text-xl font-semibold text-foreground">Your Coverage at a Glance</h3>
                </div>
                <p className="text-muted-foreground">Analysis completed successfully</p>
              </div>
              <Button variant="subtle" size="sm">
                Export Report
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gradient-success/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-success">$750K</div>
                <div className="text-sm text-success-foreground">Dwelling Coverage</div>
              </div>
              <div className="bg-gradient-primary/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-primary">$150K</div>
                <div className="text-sm text-primary-foreground">Personal Property</div>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg">
                <div className="text-2xl font-bold text-accent">$500K</div>
                <div className="text-sm text-accent-foreground">Liability Coverage</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gaps and Risks */}
        <Card className="shadow-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Detected Gaps & Risks</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-warning/10 rounded-lg border-l-4 border-l-warning">
                <AlertCircle className="w-5 h-5 text-warning mt-0.5" />
                <div>
                  <div className="font-medium text-warning-foreground">Water Backup Coverage</div>
                  <div className="text-sm text-muted-foreground">No coverage detected for water backup incidents</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-destructive/10 rounded-lg border-l-4 border-l-destructive">
                <AlertCircle className="w-5 h-5 text-destructive mt-0.5" />
                <div>
                  <div className="font-medium text-destructive-foreground">Replacement Cost Gap</div>
                  <div className="text-sm text-muted-foreground">Coverage may be $50K below current replacement cost</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="shadow-card">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Recommendations</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Consider increasing water backup coverage</div>
                  <div className="text-sm text-muted-foreground">Add $10K water backup coverage for ~$25/year</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-success mt-0.5" />
                <div>
                  <div className="font-medium text-foreground">Update dwelling coverage amount</div>
                  <div className="text-sm text-muted-foreground">Consider increasing to $800K based on current market values</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>Important:</strong> This analysis is for informational purposes only and does not constitute legal or insurance advice. 
            Please consult with your insurance agent or a qualified professional for specific coverage recommendations.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Upload Your Insurance Policy
          </h2>
          <p className="text-lg text-muted-foreground">
            Drag and drop your PDF or click to browse
          </p>
        </div>

        <Card className={`shadow-card transition-all duration-300 ${
          isDragOver ? 'ring-2 ring-primary shadow-glow' : ''
        }`}>
          <CardContent className="p-8">
            {!file ? (
              <div
                className={`border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300 ${
                  isDragOver 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50 hover:bg-muted/50'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <div className="space-y-2">
                  <p className="text-lg font-medium text-foreground">
                    Drop your insurance PDF here
                  </p>
                  <p className="text-muted-foreground">
                    or{" "}
                    <label className="text-primary hover:text-primary/80 cursor-pointer underline">
                      browse to upload
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileSelect}
                        className="hidden"
                      />
                    </label>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    PDF files only, max 10MB
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* File Preview */}
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border">
                  <div className="flex items-center gap-3">
                    <File className="w-8 h-8 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">{file.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" onClick={removeFile}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                {/* Consent Checkbox */}
                <div className="bg-muted/30 p-4 rounded-lg border">
                  <div className="flex items-start space-x-3">
                    <Checkbox 
                      id="consent" 
                      checked={hasConsented}
                      onCheckedChange={(checked) => setHasConsented(checked as boolean)}
                    />
                    <label htmlFor="consent" className="text-sm text-foreground leading-relaxed cursor-pointer">
                      I consent to have my document analyzed by AI. My data will be processed securely 
                      and <strong>deleted after analysis</strong>. This tool is for informational purposes only.
                    </label>
                  </div>
                </div>

                {/* Analyze Button */}
                <div className="flex justify-center">
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={handleAnalyze}
                    disabled={!hasConsented || isAnalyzing}
                    className="px-8"
                  >
                    {isAnalyzing ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                        Analyzing...
                      </>
                    ) : (
                      'Analyze My Coverage'
                    )}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FileUpload;