import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';

// Configure OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Configuration
const DAILY_SPEND_THRESHOLD = 10; // $10 per day
const ALERT_EMAIL = process.env.ALERT_EMAIL || 'admin@example.com';

interface UsageData {
  total_usage: number;
  daily_costs: Array<{
    timestamp: number;
    line_items: Array<{
      name: string;
      cost: number;
    }>;
  }>;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests (for cron jobs)
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify cron secret if provided
  const cronSecret = req.headers['x-cron-secret'];
  if (process.env.CRON_SECRET && cronSecret !== process.env.CRON_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Get yesterday's date
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const startDate = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate());
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + 1);

    // Note: OpenAI doesn't provide a direct usage API in the client library
    // This is a placeholder implementation. In production, you would:
    // 1. Use OpenAI's billing API (requires separate authentication)
    // 2. Track usage in your own database
    // 3. Use a third-party service like LogRocket or DataDog
    
    // For now, we'll simulate usage tracking
    console.log('📊 Checking usage for:', startDate.toDateString());
    
    // Simulate usage data (replace with actual implementation)
    const mockUsage = {
      totalCost: Math.random() * 15, // Random cost between 0-15
      breakdown: {
        'gpt-4': Math.random() * 10,
        'gpt-3.5-turbo': Math.random() * 5,
      }
    };
    
    const totalCost = mockUsage.totalCost;
    const costBreakdown = mockUsage.breakdown;

    console.log(`💰 Daily OpenAI spend: $${totalCost.toFixed(2)}`);

    // Check if spending exceeds threshold
    if (totalCost > DAILY_SPEND_THRESHOLD) {
      const alertMessage = {
        subject: `🚨 OpenAI Spending Alert: $${totalCost.toFixed(2)} spent yesterday`,
        body: `
Daily OpenAI spending has exceeded the threshold of $${DAILY_SPEND_THRESHOLD}.

📊 Spending Summary:
- Total spent: $${totalCost.toFixed(2)}
- Threshold: $${DAILY_SPEND_THRESHOLD}
- Date: ${yesterday.toDateString()}

📈 Cost Breakdown:
${Object.entries(costBreakdown)
  .map(([model, cost]) => `- ${model}: $${cost.toFixed(2)}`)
  .join('\n')}

⚠️ Action Required:
- Review usage patterns
- Consider implementing rate limiting
- Monitor for unusual activity

Environment: ${process.env.NODE_ENV || 'development'}
        `.trim(),
      };

      // Log the alert (in production, you'd send an email)
      console.error('🚨 BILLING ALERT:', alertMessage);

      // TODO: Implement email sending (e.g., using SendGrid, AWS SES, etc.)
      // await sendAlertEmail(alertMessage);

      return res.status(200).json({
        alert: true,
        message: 'Spending threshold exceeded',
        data: {
          totalCost: totalCost.toFixed(2),
          threshold: DAILY_SPEND_THRESHOLD,
          breakdown: costBreakdown,
          date: yesterday.toDateString(),
        },
      });
    }

    return res.status(200).json({
      alert: false,
      message: 'Spending within normal range',
      data: {
        totalCost: totalCost.toFixed(2),
        threshold: DAILY_SPEND_THRESHOLD,
        breakdown: costBreakdown,
        date: yesterday.toDateString(),
      },
    });

  } catch (error) {
    console.error('❌ Billing alert error:', error);
    return res.status(500).json({ 
      error: 'Failed to check billing usage',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

// Helper function to send email alerts (implement based on your email service)
async function sendAlertEmail(alertMessage: { subject: string; body: string }) {
  // Implementation depends on your email service
  // Example with SendGrid:
  /*
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
  await sgMail.send({
    to: ALERT_EMAIL,
    from: 'alerts@yourdomain.com',
    subject: alertMessage.subject,
    text: alertMessage.body,
  });
  */
  
  console.log('📧 Email alert would be sent:', alertMessage);
}