import { useState, useCallback } from "react";
import { Upload, File, X, CloudUpload, FileText, Loader2, AlertCircle, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { LoadingSpinner, ProcessingSteps } from "@/components/ui/loading-spinner";
import { ErrorState } from "@/components/ui/error-state";
import { generateFileHash, getCachedResult, cacheResult, extractTextFromPDF } from "@/lib/parser";
import { analyzePolicy } from "@/lib/openai";
import { AnalysisResult } from "@/shared/types";
import InfoTooltip from "@/components/ui/info-tooltip";

interface FileUploaderProps {
  onAnalysisComplete?: (results: any) => void;
  onFileSelect?: (file: File) => void;
}

const FileUploader = ({ onAnalysisComplete, onFileSelect }: FileUploaderProps) => {
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
  const [fileValidationError, setFileValidationError] = useState<string | null>(null);

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
    setFileValidationError(null);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === 'application/pdf') {
      if (droppedFile.size > 10 * 1024 * 1024) { // 10MB limit
        setFileValidationError('File too large. Please select a file under 10MB.');
        return;
      }
      setFile(droppedFile);
      onFileSelect?.(droppedFile);
    } else {
      setFileValidationError('Invalid file type. Please select a PDF file.');
    }
  }, [onFileSelect]);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFileValidationError(null);
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.type !== 'application/pdf') {
        setFileValidationError('Invalid file type. Please select a PDF file.');
        return;
      }
      if (selectedFile.size > 10 * 1024 * 1024) { // 10MB limit
        setFileValidationError('File too large. Please select a file under 10MB.');
        return;
      }
      setFile(selectedFile);
      onFileSelect?.(selectedFile);
    }
  }, [onFileSelect]);

  const resetProcessingState = () => {
    setError(null);
    setFileValidationError(null);
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
    if (!file || !hasConsented) return;
    
    setIsAnalyzing(true);
    setError(null);
    resetProcessingState();

    try {
      // Step 1: Upload and hash file
      setCurrentStep('upload');
      updateStepStatus('upload', 'processing');
      setUploadProgress(10);
      
      const fileHash = await generateFileHash(file);
      
      // Check cache first
      const cachedResult = getCachedResult(fileHash);
      if (cachedResult) {
        updateStepStatus('upload', 'completed');
        updateStepStatus('extract', 'completed');
        updateStepStatus('analyze', 'completed');
        updateStepStatus('complete', 'completed');
        setUploadProgress(100);
        setTimeout(() => {
          setIsAnalyzing(false);
          onAnalysisComplete?.(cachedResult);
        }, 500);
        return;
      }

      updateStepStatus('upload', 'completed');
      setUploadProgress(25);

      // Step 2: Extract text from PDF
      setCurrentStep('extract');
      updateStepStatus('extract', 'processing');
      setUploadProgress(40);
      
      const text = await extractTextFromPDF(file);
      updateStepStatus('extract', 'completed');
      setUploadProgress(60);

      // Step 3: Analyze policy
      setCurrentStep('analyze');
      updateStepStatus('analyze', 'processing');
      setUploadProgress(80);
      
      const analysisResult = await analyzePolicy(text);
      updateStepStatus('analyze', 'completed');
      setUploadProgress(90);

      // Step 4: Complete and cache result
      setCurrentStep('complete');
      updateStepStatus('complete', 'processing');
      setUploadProgress(100);
      
      cacheResult(fileHash, analysisResult);
      updateStepStatus('complete', 'completed');
      
      setTimeout(() => {
        setIsAnalyzing(false);
        onAnalysisComplete?.(analysisResult);
      }, 500);

    } catch (err) {
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
    setFileValidationError(null);
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
              className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-150 ease-in-out cursor-pointer group ${
                isDragOver 
                  ? 'border-primary bg-primary/5 shadow-glow' 
                  : 'border-border hover:border-primary/50 hover:bg-primary/5'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              role="button"
              tabIndex={0}
              aria-label="Upload insurance policy PDF file"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  document.getElementById('file-input')?.click();
                }
              }}
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
                    <label className="text-primary hover:text-primary/80 cursor-pointer underline font-medium focus:outline-none focus:ring-2 focus:ring-accent rounded">
                      browse to upload
                      <input
                        id="file-input"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileSelect}
                        className="hidden"
                        aria-label="Select PDF file to upload"
                      />
                    </label>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    PDF files only • Maximum 10MB • Secure processing
                  </p>
                  
                  {/* Security messaging with lock icon */}
                  <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                    <Lock className="w-4 h-4" />
                    <span>Bank-level security. Data deleted after analysis.</span>
                  </div>
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
                  className="text-muted-foreground hover:text-destructive focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label="Remove uploaded file"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* File Validation Error */}
              {fileValidationError && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm text-red-600 mb-2">{fileValidationError}</p>
                      <button
                        onClick={() => setFileValidationError(null)}
                        className="text-sm text-red-700 underline hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        Try again
                      </button>
                    </div>
                  </div>
                </div>
              )}

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
                className="mt-1 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                <span className="text-foreground font-medium">Data Processing Consent:</span>{" "}
                I consent to have my document analyzed by AI. My data will be processed securely using 
                bank-level encryption and completely deleted within 24 hours of analysis.
              </label>
            </div>
            
            {/* Info Tooltip */}
            <InfoTooltip
              title="Your Data is Secure"
              description="We use bank-level encryption and automatically delete your data within 24 hours. Your privacy is our top priority."
              onDismiss={() => {}}
              className="mt-4"
            />
          </div>
          
          {/* Analyze Button */}
          <div className="mt-8">
            <Button 
              size="lg"
              className="w-full btn-hero text-lg font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-xl group transition-all duration-150 ease-in-out"
              onClick={handleAnalyze}
              disabled={!file || !hasConsented || isAnalyzing}
              aria-label={isAnalyzing ? "Processing your policy" : "Run analysis on uploaded policy"}
              onMouseEnter={() => {
                if (!isAnalyzing && file && hasConsented) {
                  fetch('/api/parse');
                }
              }}
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing Your Policy...
                </>
              ) : (
                <>
                  <Upload className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Run Analysis →
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