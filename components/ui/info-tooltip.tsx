import React, { useState, useEffect } from 'react';
import { Info, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface InfoTooltipProps {
  title: string;
  description: string;
  onDismiss: () => void;
  className?: string;
}

const InfoTooltip = ({ title, description, onDismiss, className }: InfoTooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has seen this tooltip before
    const hasSeenTooltip = localStorage.getItem('data-deletion-tooltip-dismissed');
    if (!hasSeenTooltip) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('data-deletion-tooltip-dismissed', 'true');
    onDismiss();
  };

  if (!isVisible) return null;

  return (
    <Card className={`bg-blue-50 border-blue-200 shadow-soft ${className}`}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
            <Info className="w-3 h-3 text-blue-600" />
          </div>
          <div className="flex-1">
            <h4 className="font-medium text-blue-900 mb-1">{title}</h4>
            <p className="text-sm text-blue-700 mb-3">{description}</p>
            <Button
              size="sm"
              variant="outline"
              onClick={handleDismiss}
              className="text-blue-700 border-blue-300 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Got it
            </Button>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleDismiss}
            className="text-blue-600 hover:text-blue-800 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfoTooltip;