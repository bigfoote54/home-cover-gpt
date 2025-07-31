import { Loader2, FileText, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  variant?: 'default' | 'success' | 'error' | 'file';
  size?: 'sm' | 'md' | 'lg';
  message?: string;
  className?: string;
}

export function LoadingSpinner({ 
  variant = 'default', 
  size = 'md', 
  message,
  className 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const iconClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  };

  const getIcon = () => {
    switch (variant) {
      case 'success':
        return <CheckCircle className={cn(iconClasses[size], "text-success")} />;
      case 'error':
        return <AlertCircle className={cn(iconClasses[size], "text-destructive")} />;
      case 'file':
        return <FileText className={cn(iconClasses[size], "text-primary")} />;
      default:
        return <Loader2 className={cn(iconClasses[size], "animate-spin text-primary")} />;
    }
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="flex flex-col items-center space-y-2">
        {getIcon()}
        {message && (
          <p className="text-sm text-muted-foreground text-center">{message}</p>
        )}
      </div>
    </div>
  );
}

interface ProcessingStepsProps {
  steps: Array<{
    id: string;
    label: string;
    status: 'pending' | 'processing' | 'completed' | 'error';
  }>;
  currentStep?: string;
}

export function ProcessingSteps({ steps, currentStep }: ProcessingStepsProps) {
  return (
    <div className="space-y-3">
      {steps.map((step, index) => {
        const isActive = step.id === currentStep;
        const isCompleted = step.status === 'completed';
        const isError = step.status === 'error';
        
        return (
          <div key={step.id} className="flex items-center space-x-3">
            <div className={cn(
              "w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium",
              isCompleted && "bg-success text-success-foreground",
              isError && "bg-destructive text-destructive-foreground",
              isActive && !isCompleted && !isError && "bg-primary text-primary-foreground",
              !isActive && !isCompleted && !isError && "bg-muted text-muted-foreground"
            )}>
              {isCompleted ? (
                <CheckCircle className="w-4 h-4" />
              ) : isError ? (
                <AlertCircle className="w-4 h-4" />
              ) : isActive ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                index + 1
              )}
            </div>
            <span className={cn(
              "text-sm",
              isCompleted && "text-success",
              isError && "text-destructive",
              isActive && "text-foreground font-medium",
              !isActive && !isCompleted && !isError && "text-muted-foreground"
            )}>
              {step.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}