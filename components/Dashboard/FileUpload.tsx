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
    <section className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-8 max-w-3xl mx-auto my-16">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upload Your Insurance Policy</h2>
      {!file ? (
        <div
          className={`w-full border-2 border-dashed ${
            isDragOver 
              ? 'border-teal-400' 
              : 'border-gray-300 hover:border-teal-400'
          } rounded-lg p-6 flex flex-col items-center justify-center text-gray-500 cursor-pointer transition`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="w-12 h-12 text-gray-400 mb-4" />
          <div className="text-center space-y-2">
            <p className="text-lg font-medium text-gray-700">
              Drop your insurance PDF here
            </p>
            <p className="text-gray-500">
              or{" "}
              <label className="text-teal-500 hover:text-teal-600 cursor-pointer underline">
                browse to upload
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </label>
            </p>
            <p className="text-sm text-gray-400">
              PDF files only, max 10MB
            </p>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* File Preview */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
            <div className="flex items-center gap-3">
              <File className="w-8 h-8 text-teal-500" />
              <div>
                <div className="font-medium text-gray-800">{file.name}</div>
                <div className="text-sm text-gray-500">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </div>
              </div>
            </div>
            <button
              onClick={removeFile}
              className="p-2 text-gray-400 hover:text-gray-600 transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
      
      <label className="mt-4 flex items-center space-x-2 text-gray-700">
        <input 
          type="checkbox" 
          className="h-5 w-5 text-teal-400"
          checked={hasConsented}
          onChange={(e) => setHasConsented(e.target.checked)}
        />
        <span>I consent to have my document analyzed by AI. My data will be processed securely and deleted after analysis.</span>
      </label>
      
      <button 
        className="mt-6 w-full bg-gradient-to-r from-teal-400 to-blue-600 hover:from-teal-500 hover:to-blue-700 text-white py-3 rounded-lg font-medium transition"
        onClick={handleAnalyze}
        disabled={!file || !hasConsented || isAnalyzing}
      >
        {isAnalyzing ? (
          <>
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2 inline-block" />
            Analyzing...
          </>
        ) : (
          'Analyze My Coverage'
        )}
      </button>
    </section>
  );
};

export default FileUpload;