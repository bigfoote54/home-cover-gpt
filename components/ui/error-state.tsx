import React from "react";
import { AlertCircle, RefreshCw, X } from "lucide-react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface ErrorStateProps {
  title?: string;
  message: string;
  onRetry?: () => void;
  onDismiss?: () => void;
  variant?: 'default' | 'warning' | 'critical';
  className?: string;
}

export function ErrorState({ 
  title = "Something went wrong",
  message,
  onRetry,
  onDismiss,
  variant = 'default',
  className 
}: ErrorStateProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'warning':
        return {
          container: "bg-warning/10 border-warning/20",
          icon: "text-warning",
          title: "text-warning-foreground",
          message: "text-warning-foreground/80"
        };
      case 'critical':
        return {
          container: "bg-destructive/10 border-destructive/20",
          icon: "text-destructive",
          title: "text-destructive-foreground",
          message: "text-destructive-foreground/80"
        };
      default:
        return {
          container: "bg-muted/50 border-border",
          icon: "text-muted-foreground",
          title: "text-foreground",
          message: "text-muted-foreground"
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <div className={cn(
      "rounded-xl border p-4 space-y-3",
      styles.container,
      className
    )}>
      <div className="flex items-start space-x-3">
        <AlertCircle className={cn("w-5 h-5 mt-0.5 flex-shrink-0", styles.icon)} />
        <div className="flex-1 min-w-0">
          <h3 className={cn("font-medium text-sm", styles.title)}>
            {title}
          </h3>
          <p className={cn("text-sm mt-1", styles.message)}>
            {message}
          </p>
        </div>
        {onDismiss && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onDismiss}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
      
      {onRetry && (
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={onRetry}
            className="text-xs"
          >
            <RefreshCw className="w-3 h-3 mr-1" />
            Try Again
          </Button>
        </div>
      )}
    </div>
  );
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback && this.state.error) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />;
      }

      return (
        <ErrorState
          title="Unexpected Error"
          message="Something went wrong while processing your request. Please try again."
          onRetry={this.resetError}
        />
      );
    }

    return this.props.children;
  }
}