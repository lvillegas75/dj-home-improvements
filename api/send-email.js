// DJ Home Improvements - Contact Form Email Handler
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, projectType, timeline, budget, message } = req.body;
    
    // Check if required fields are present
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY not found');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    console.log('🔑 API Key status:', process.env.RESEND_API_KEY ? 'EXISTS' : 'MISSING');
    console.log('🔑 API Key prefix:', process.env.RESEND_API_KEY?.substring(0, 8) || 'NONE');
    console.log('📧 About to call Resend API...');

    // Send email using Resend
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2c5530; border-bottom: 2px solid #6b9071; padding-bottom: 10px;">
          New Project Estimate Request - DJ Home Improvements
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c5530; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        </div>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c5530; margin-top: 0;">Project Details</h3>
          <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
          <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
          <p><strong>Budget Range:</strong> ${budget || 'Not specified'}</p>
        </div>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #2c5530; margin-top: 0;">Message</h3>
          <p style="white-space: pre-wrap;">${message || 'No message provided'}</p>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 14px;">
          <p>This email was sent from the DJ Home Improvements website contact form.</p>
        </div>
      </div>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Simplified - no custom name
      to: ['lvillegas75@gmail.com'], // Your email for testing
      subject: `New Project Estimate Request from ${name}`,
      html: emailHtml,
    });

    if (error) {
      console.error('❌ Resend error details:', JSON.stringify(error, null, 2));
      return res.status(500).json({ 
        error: 'Failed to send email',
        details: error.message || error.name || 'Resend API error',
        resendError: error
      });
    }

    console.log('✅ Email sent:', data);

    return res.status(200).json({ 
      message: 'Email sent successfully!',
      emailId: data.id
    });

  } catch (error) {
    console.error('❌ Email error:', error.message);
    
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message
    });
  }
};
