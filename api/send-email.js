import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Add debugging
  console.log('🔍 API called - Method:', req.method);
  console.log('🔍 Request body:', JSON.stringify(req.body, null, 2));
  console.log('🔍 Environment variable exists:', !!process.env.RESEND_API_KEY);

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, phone, projectType, message } = req.body;

    console.log('🔍 Extracted fields:', { name, email, phone, projectType, message });

    // Validate required fields
    if (!name || !email || !phone) {
      console.log('❌ Validation failed - missing required fields');
      return res.status(400).json({ error: 'Name, email, and phone are required' });
    }

    console.log('✅ Validation passed, attempting to send email...');

    // Send email to DJ
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Free default domain from Resend
      to: ['lany.villegas@gmail.com'], // DJ's email CHANGE LATER danieljimenez@djhomeimprovements.com
      subject: `New Estimate Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ff6b35; border-bottom: 2px solid #ff6b35; padding-bottom: 10px;">
            New Estimate Request - DJ Home Improvements
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Project Details:</h3>
            <p style="background-color: #fff; border-left: 4px solid #ff6b35; padding: 15px; margin: 10px 0;">
              ${message || 'No additional details provided.'}
            </p>
          </div>
          
          <hr style="border: 1px solid #eee; margin: 30px 0;">
          
          <p style="color: #666; font-size: 14px;">
            <strong>Reply directly to:</strong> ${email}<br>
            <strong>Call:</strong> ${phone}<br>
            <strong>Submitted:</strong> ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    console.log('📧 Resend API call completed');
    
    if (error) {
      console.error('❌ Resend error:', error);
      return res.status(400).json({ error: error.message });
    }

    console.log('✅ Email sent successfully:', data);
    res.status(200).json({ 
      message: 'Email sent successfully', 
      id: data.id 
    });

  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
}
