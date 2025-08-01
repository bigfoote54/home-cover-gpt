import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { question, context } = req.body;

  if (!question || typeof question !== 'string') {
    return res.status(400).json({ error: 'Question is required.' });
  }

  try {
    // Simulate AI response based on question type
    const responses = {
      coverage: "Your current policy provides standard coverage for dwelling, personal property, and liability. However, I notice some gaps in natural disaster coverage that you might want to consider.",
      cost: "Based on your current premium of $1,200/year, you could potentially save $200-300 annually by bundling policies or adjusting your deductible.",
      renewal: "Your policy expires on January 15, 2025. I recommend reviewing your coverage options 30 days before renewal to ensure you're getting the best rates.",
      claims: "For filing a claim, you'll need to contact your insurance provider directly. Make sure to document any damage with photos and keep all receipts for repairs.",
      default: "I understand your question about insurance. Let me help you with that. Could you provide more details about your specific situation?"
    };

    let response = responses.default;
    
    if (question.toLowerCase().includes('coverage') || question.toLowerCase().includes('cover')) {
      response = responses.coverage;
    } else if (question.toLowerCase().includes('cost') || question.toLowerCase().includes('price') || question.toLowerCase().includes('premium')) {
      response = responses.cost;
    } else if (question.toLowerCase().includes('renewal') || question.toLowerCase().includes('expire')) {
      response = responses.renewal;
    } else if (question.toLowerCase().includes('claim') || question.toLowerCase().includes('damage')) {
      response = responses.claims;
    }

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));

    return res.status(200).json({
      answer: response,
      confidence: 0.85,
      sources: ['Your current policy', 'Market analysis', 'Industry standards']
    });
  } catch (error) {
    console.error('❌ ask.ts error:', error);
    return res.status(500).json({ error: 'Failed to process question.' });
  }
}