import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Mail, 
  Send, 
  Edit, 
  Eye, 
  Download, 
  User, 
  Calendar,
  FileText,
  DollarSign
} from "lucide-react";

interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  preview: string;
  type: "analysis" | "reminder" | "quote" | "general";
}

const EmailPreview: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>("analysis");
  const [isEditing, setIsEditing] = useState(false);
  const [emailData, setEmailData] = useState({
    to: "john.doe@example.com",
    subject: "Your Insurance Analysis Report is Ready",
    content: ""
  });

  const templates: EmailTemplate[] = [
    {
      id: "analysis",
      name: "Analysis Report",
      subject: "Your Insurance Analysis Report is Ready",
      preview: "Your comprehensive insurance analysis has been completed. We've identified potential savings of $850 annually.",
      type: "analysis"
    },
    {
      id: "reminder",
      name: "Policy Renewal",
      subject: "Policy Renewal Reminder",
      preview: "Your auto insurance policy is due for renewal in 30 days. Review your options and save money.",
      type: "reminder"
    },
    {
      id: "quote",
      name: "Quote Request",
      subject: "Insurance Quote Request",
      preview: "We've prepared a personalized quote based on your needs. Compare and save on your insurance.",
      type: "quote"
    },
    {
      id: "general",
      name: "General Update",
      subject: "Insurance Policy Update",
      preview: "Important updates about your insurance policy and coverage options.",
      type: "general"
    }
  ];

  const getTemplateContent = (templateId: string) => {
    switch (templateId) {
      case "analysis":
        return `Dear John Doe,

Your comprehensive insurance analysis has been completed! We've thoroughly reviewed your current policies and identified several opportunities for improvement.

Key Findings:
• Potential annual savings: $850
• Coverage gaps identified: 3
• Recommendations: 4 actionable items

Your detailed report is attached to this email. We recommend reviewing the findings and scheduling a consultation to discuss implementation.

Best regards,
Your Insurance Team

Home Cover GPT`;

      case "reminder":
        return `Dear John Doe,

This is a friendly reminder that your auto insurance policy (Policy #: SF-123456789) is due for renewal in 30 days.

Current Premium: $1,200/year
Renewal Date: January 15, 2025

We've prepared a renewal quote with updated coverage options. You may be eligible for additional discounts based on your driving record and loyalty.

Please review your options and contact us if you have any questions.

Best regards,
Your Insurance Team

Home Cover GPT`;

      case "quote":
        return `Dear John Doe,

Thank you for your interest in our insurance services. We've prepared a personalized quote based on your specific needs and circumstances.

Quote Summary:
• Home Insurance: $1,100/year
• Auto Insurance: $800/year
• Bundle Discount: $200/year
• Total Annual Premium: $1,700

This represents a potential savings of $500 compared to your current policies.

Please review the attached quote and contact us to discuss your options.

Best regards,
Your Insurance Team

Home Cover GPT`;

      default:
        return `Dear John Doe,

We hope this email finds you well. We wanted to provide you with an update regarding your insurance policies.

If you have any questions or need assistance, please don't hesitate to contact us.

Best regards,
Your Insurance Team

Home Cover GPT`;
    }
  };

  const selectedTemplateData = templates.find(t => t.id === selectedTemplate);

  return (
    <div className="space-y-6">
      {/* Template Selection */}
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            Email Templates
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {templates.map((template) => (
              <Card
                key={template.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-soft ${
                  selectedTemplate === template.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-primary" />
                    <h4 className="font-medium text-sm">{template.name}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {template.preview}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Email Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Email Form */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Edit className="w-5 h-5" />
                Email Details
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Save
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="to">To</Label>
              <Input
                id="to"
                value={emailData.to}
                onChange={(e) => setEmailData({...emailData, to: e.target.value})}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                value={emailData.subject}
                onChange={(e) => setEmailData({...emailData, subject: e.target.value})}
                disabled={!isEditing}
              />
            </div>
            <div>
              <Label htmlFor="content">Content</Label>
              <Textarea
                id="content"
                value={getTemplateContent(selectedTemplate)}
                onChange={(e) => setEmailData({...emailData, content: e.target.value})}
                className="min-h-[200px]"
                disabled={!isEditing}
              />
            </div>
            <div className="flex gap-2">
              <Button className="flex-1">
                <Send className="w-4 h-4 mr-2" />
                Send Email
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Email Preview */}
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              Email Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border border-border rounded-lg p-4 bg-background">
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>From: Home Cover GPT <noreply@homecovergpt.com></span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className="text-sm text-muted-foreground">
                  To: {emailData.to}
                </div>
                <div className="text-sm text-muted-foreground">
                  Subject: {emailData.subject}
                </div>
                <div className="border-t border-border pt-4">
                  <div className="prose prose-sm max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-sm text-foreground">
                      {getTemplateContent(selectedTemplate)}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="card-elevated">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Mail className="w-6 h-6" />
              <span>Send Analysis Report</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <Calendar className="w-6 h-6" />
              <span>Send Renewal Reminder</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col gap-2">
              <DollarSign className="w-6 h-6" />
              <span>Send Quote</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailPreview;