// Simple mock service - just for UI demo
const emailService = {
    sendEmail: async (contactInfo) => {
        console.log('Mock email sent:', contactInfo);
        return Promise.resolve({ success: true });
    },
    sendText: async (contactInfo) => {
        console.log('Mock SMS sent:', contactInfo);
        return Promise.resolve({ success: true });
    }
};

export default emailService;
