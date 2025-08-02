import { useState, useCallback } from "react";
import { Upload, File, X, CloudUpload, FileText, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { LoadingSpinner, ProcessingSteps } from "@/components/ui/loading-spinner";
import { ErrorState } from "@/components/ui/error-state";
import { AnalysisResult } from "@/shared/types";

interface FileUploaderProps {
  onAnalyze?: (file: File) => Promise<AnalysisResult>;
}

const FileUploader = ({ onAnalyze }: FileUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<string>('');
  type ProcessingStep = {
    id: string;
    label: string;
    status: 'pending' | 'processing' | 'completed' | 'error';
  };

  const [processingSteps, setProcessingSteps] = useState<ProcessingStep[]>([
    { id: 'upload', label: 'Uploading file', status: 'pending' },
    { id: 'extract', label: 'Extracting text', status: 'pending' },
    { id: 'analyze', label: 'Analyzing policy', status: 'pending' },
    { id: 'complete', label: 'Generating report', status: 'pending' }
  ]);

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

  const resetProcessingState = () => {
    setError(null);
    setCurrentStep('');
    setUploadProgress(0);
    setProcessingSteps([
      { id: 'upload', label: 'Uploading file', status: 'pending' },
      { id: 'extract', label: 'Extracting text', status: 'pending' },
      { id: 'analyze', label: 'Analyzing policy', status: 'pending' },
      { id: 'complete', label: 'Generating report', status: 'pending' }
    ]);
  };

  const updateStepStatus = (stepId: string, status: 'pending' | 'processing' | 'completed' | 'error') => {
    setProcessingSteps(prev => 
      prev.map(step => 
        step.id === stepId ? { ...step, status } : step
      )
    );
  };

  const handleAnalyze = async () => {
    if (!file || !hasConsented || !onAnalyze) return;
    
    setIsAnalyzing(true);
    setError(null);
    resetProcessingState();

    try {
      // Step 1: Upload and process
      setCurrentStep('upload');
      updateStepStatus('upload', 'processing');
      setUploadProgress(25);
      
      updateStepStatus('upload', 'completed');
      updateStepStatus('extract', 'processing');
      setUploadProgress(50);

      // Step 2: Extract and analyze
      updateStepStatus('extract', 'completed');
      updateStepStatus('analyze', 'processing');
      setUploadProgress(75);
      
      const analysisResult = await onAnalyze(file);
      updateStepStatus('analyze', 'completed');
      setUploadProgress(90);

      // Step 3: Complete
      setCurrentStep('complete');
      updateStepStatus('complete', 'processing');
      setUploadProgress(100);
      
      updateStepStatus('complete', 'completed');
      
      setTimeout(() => {
        setIsAnalyzing(false);
      }, 500);

    } catch (err) {
      console.error('❌ Analysis failed:', err);
      setError(err instanceof Error ? err.message : 'Analysis failed. Please try again.');
      
      // Update current step to error
      if (currentStep) {
        updateStepStatus(currentStep, 'error');
      }
      
      setIsAnalyzing(false);
    }
  };

  const removeFile = () => {
    setFile(null);
    setUploadProgress(0);
    setError(null);
    resetProcessingState();
  };

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

              {/* Error State */}
              {error && (
                <ErrorState
                  title="Analysis Failed"
                  message={error}
                  onRetry={handleAnalyze}
                  onDismiss={() => setError(null)}
                  variant="critical"
                  className="mt-4"
                />
              )}

              {/* Progress and Steps */}
              {isAnalyzing && (
                <div className="space-y-4 mt-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Processing your policy...</span>
                      <span className="text-foreground font-medium">{uploadProgress}%</span>
                    </div>
                    <Progress value={uploadProgress} className="h-2" />
                  </div>
                  
                  <ProcessingSteps 
                    steps={processingSteps} 
                    currentStep={currentStep}
                  />
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
                  Processing Your Policy...
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Analyze My Coverage
                </>
              )}
            </Button>
            
            <p className="mt-4 text-center text-sm text-muted-foreground">
              {isAnalyzing 
                ? "Processing large documents may take up to 2 minutes"
                : "Analysis typically completes in 30 seconds or less"
              }
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default FileUploader;