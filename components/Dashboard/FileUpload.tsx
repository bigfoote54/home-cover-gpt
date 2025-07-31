import { useState, useCallback } from "react";
import { Upload, File, X, AlertCircle, CheckCircle2, CloudUpload, FileText, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

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
    setUploadProgress(0);

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    // Simulate analysis
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 3000);
  };

  const removeFile = () => {
    setFile(null);
    setUploadProgress(0);
  };

  if (showResults) {
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
                <Button variant="outline" size="sm" className="focus-ring">
                  Export Report
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-success/5 border border-success/20 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-success">$750K</div>
                  <div className="text-sm text-success/80 font-medium">Dwelling Coverage</div>
                </div>
                <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-primary">$150K</div>
                  <div className="text-sm text-primary/80 font-medium">Personal Property</div>
                </div>
                <div className="bg-accent/5 border border-accent/20 p-6 rounded-xl text-center">
                  <div className="text-3xl font-bold text-accent">$500K</div>
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
              <Alert className="border-warning/20 bg-warning/5">
                <AlertCircle className="h-4 w-4 text-warning" />
                <AlertDescription>
                  <div className="font-medium text-warning-foreground">Water Backup Coverage</div>
                  <div className="text-sm text-muted-foreground mt-1">No coverage detected for water backup incidents</div>
                </AlertDescription>
              </Alert>
              <Alert className="border-destructive/20 bg-destructive/5">
                <AlertCircle className="h-4 w-4 text-destructive" />
                <AlertDescription>
                  <div className="font-medium text-destructive-foreground">Replacement Cost Gap</div>
                  <div className="text-sm text-muted-foreground mt-1">Coverage may be $50K below current replacement cost</div>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Recommendations */}
          <Card className="card-elevated shadow-soft">
            <CardHeader>
              <CardTitle className="text-lg">Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-success/5 rounded-lg border border-success/20">
                <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">Consider increasing water backup coverage</div>
                  <div className="text-sm text-muted-foreground">Add $10K water backup coverage for ~$25/year</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-success/5 rounded-lg border border-success/20">
                <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">Update dwelling coverage amount</div>
                  <div className="text-sm text-muted-foreground">Consider increasing to $800K based on current market values</div>
                </div>
              </div>
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
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Upload Your Insurance Policy</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Drag and drop your homeowners insurance PDF below, or click to browse your files. 
          We&apos;ll analyze it instantly and provide actionable insights.
        </p>
      </div>

      <Card className="card-elevated shadow-soft">
        <CardContent className="p-8">
          {!file ? (
            <div
              className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 cursor-pointer group ${
                isDragOver 
                  ? 'border-primary bg-primary/5 shadow-glow' 
                  : 'border-border hover:border-primary/50 hover:bg-primary/5'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center space-y-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDragOver 
                    ? 'bg-primary/20 scale-110' 
                    : 'bg-muted group-hover:bg-primary/10 group-hover:scale-105'
                }`}>
                  <CloudUpload className={`w-8 h-8 transition-colors duration-300 ${
                    isDragOver ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'
                  }`} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    Drop your insurance PDF here
                  </h3>
                  <p className="text-muted-foreground">
                    or{" "}
                    <label className="text-primary hover:text-primary/80 cursor-pointer underline font-medium focus-ring rounded">
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
                    PDF files only • Maximum 10MB • Secure processing
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* File Preview */}
              <div className="flex items-center justify-between p-6 bg-muted/30 rounded-xl border border-border">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{file.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB • PDF Document
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={removeFile}
                  className="text-muted-foreground hover:text-destructive focus-ring"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Progress Bar */}
              {isAnalyzing && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Analyzing your policy...</span>
                    <span className="text-foreground font-medium">{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} className="h-2" />
                </div>
              )}
            </div>
          )}
          
          {/* Consent Checkbox */}
          <div className="mt-8 p-6 bg-muted/20 rounded-xl border border-border/50">
            <div className="flex items-start space-x-3">
              <Checkbox 
                id="consent"
                checked={hasConsented}
                onCheckedChange={(checked) => setHasConsented(checked as boolean)}
                className="mt-1"
              />
              <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                <span className="text-foreground font-medium">Data Processing Consent:</span>{" "}
                I consent to have my document analyzed by AI. My data will be processed securely using 
                bank-level encryption and completely deleted within 24 hours of analysis.
              </label>
            </div>
          </div>
          
          {/* Analyze Button */}
          <div className="mt-8">
            <Button 
              size="lg"
              className="w-full btn-hero text-lg font-semibold py-4 rounded-xl group"
              onClick={handleAnalyze}
              disabled={!file || !hasConsented || isAnalyzing}
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Analyzing Your Coverage...
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Analyze My Coverage
                </>
              )}
            </Button>
            
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Analysis typically completes in 30 seconds or less
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default FileUpload;