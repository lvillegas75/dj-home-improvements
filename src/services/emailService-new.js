// Mock email service for frontend demo
// In production, you'd want to use a backend API or service like EmailJS

const sendEmail = async (contactInfo) => {
    // Simulate email sending with a promise
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Email sent successfully:', contactInfo);
            // In production, this would make an API call to your backend
            // or use a service like EmailJS
            resolve({ success: true });
        }, 1000);
    });
};

const sendText = async (contactInfo) => {
    // Simulate SMS sending with a promise
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('SMS sent successfully:', contactInfo);
            // In production, this would make an API call to your backend
            // or use a service like Twilio's frontend SDK
            resolve({ success: true });
        }, 1000);
    });
};

// Create a default export object with the functions
const emailService = {
    sendEmail,
    sendText
};

export default emailService;
export { sendEmail, sendText };
