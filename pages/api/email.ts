import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  const { to, subject, content, template } = req.body;

  if (!to || !subject || !content) {
    return res.status(400).json({ error: 'To, subject, and content are required.' });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(to)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  try {
    // Simulate email sending
    console.log('📧 Sending email:', { to, subject, template });
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulate success/failure based on email domain
    const isSuccess = !to.includes('invalid') && !to.includes('error');

    if (isSuccess) {
      return res.status(200).json({
        success: true,
        messageId: `msg_${Date.now()}`,
        sentAt: new Date().toISOString(),
        template: template || 'custom'
      });
    } else {
      return res.status(400).json({
        success: false,
        error: 'Failed to send email. Please check the email address and try again.'
      });
    }
  } catch (error) {
    console.error('❌ email.ts error:', error);
    return res.status(500).json({ error: 'Failed to send email.' });
  }
}