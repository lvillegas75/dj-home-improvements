// DJ Home Improvements - Contact Form Email Handler
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  console.log('🔍 FUNCTION CALLED! - EMAIL VERSION');
  console.log('🔍 Method:', req.method);

  if (req.method === 'OPTIONS') {
    console.log('✅ OPTIONS request handled');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, projectType, timeline, budget, message } = req.body;
    
    console.log('📧 Form data received:', { name, email, phone, projectType, timeline, budget });
    console.log('🔑 API Key exists:', !!process.env.RESEND_API_KEY);
    console.log('🔑 API Key first 10 chars:', process.env.RESEND_API_KEY?.substring(0, 10));

    // Check if all required fields are present
    if (!name || !email) {
      console.error('❌ Missing required fields:', { name: !!name, email: !!email });
      return res.status(400).json({ error: 'Name and email are required' });
    }

    console.log('📧 About to send email...');

    // Create HTML email template
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

    console.log('📧 Email template created, calling Resend API...');

    // Send email using Resend - but let's use a real email address for testing
    const emailData = {
      from: 'onboarding@resend.dev',
      to: ['lvillegas75@gmail.com'], // Using your email for testing first
      subject: `New Project Estimate Request from ${name}`,
      html: emailHtml,
    };

    console.log('📧 Email data:', emailData);

    const data = await resend.emails.send(emailData);

    console.log('✅ Resend API response:', data);

    return res.status(200).json({ 
      message: 'Email sent successfully!',
      emailId: data.id,
      debug: {
        apiKeyExists: !!process.env.RESEND_API_KEY,
        recipient: emailData.to[0]
      }
    });

  } catch (error) {
    console.error('❌ Detailed error:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      apiKeyExists: !!process.env.RESEND_API_KEY
    });
    
    return res.status(500).json({ 
      error: 'Failed to send email',
      details: error.message,
      debug: {
        apiKeyExists: !!process.env.RESEND_API_KEY,
        errorType: error.name
      }
    });
  }
}
