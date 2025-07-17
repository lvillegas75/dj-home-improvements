import nodemailer from 'nodemailer';
import twilio from 'twilio';

const sendEmail = async (contactInfo) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Use your email service
        auth: {
            user: process.env.EMAIL_USER, // Your email
            pass: process.env.EMAIL_PASS, // Your email password
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_RECEIVER, // Owner's email
        subject: 'New Bid Request',
        text: `You have received a new bid request:\n\nName: ${contactInfo.name}\nEmail: ${contactInfo.email}\nPhone: ${contactInfo.phone}\nMessage: ${contactInfo.message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

const sendText = async (contactInfo) => {
    const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

    try {
        await client.messages.create({
            body: `New Bid Request from ${contactInfo.name}: ${contactInfo.message}`,
            from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
            to: contactInfo.phone,
        });
        console.log('Text message sent successfully');
    } catch (error) {
        console.error('Error sending text message:', error);
    }
};

export { sendEmail, sendText };