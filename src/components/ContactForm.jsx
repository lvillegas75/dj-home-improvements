import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');
        
        try {
            console.log('🚀 Submitting form data:', formData);
            
            // Always call the production API (no more fake local testing)
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            console.log('📧 API Response:', result);

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
                console.log('✅ Email sent successfully!');
            } else {
                console.error('❌ API Error:', result);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('❌ Network error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputStyle = {
        width: '100%',
        padding: '15px',
        border: '2px solid #e0e0e0',
        borderRadius: '5px',
        fontSize: '1rem',
        marginBottom: '20px',
        boxSizing: 'border-box',
        transition: 'border-color 0.3s'
    };

    const buttonStyle = {
        backgroundColor: '#ff6b35',
        color: 'white',
        padding: '15px 30px',
        border: 'none',
        borderRadius: '5px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        width: '100%',
        transition: 'background-color 0.3s'
    };

    return (
        <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Full Name *"
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        style={inputStyle}
                    />
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address *"
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        style={inputStyle}
                    />
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="Phone Number *"
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                        style={inputStyle}
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    >
                        <option value="">Select Project Type *</option>
                        <option value="New Home">New Home</option>
                        <option value="Home Addition">Home Addition</option>
                        <option value="Kitchen Remodel">Kitchen Remodel</option>
                        <option value="Bathroom Remodel">Bathroom Remodel</option>
                        <option value="Basement Finishing">Basement Finishing</option>
                        <option value="Other Remodel">Other Remodel</option>
                    </select>
                </div>
                
                <div style={{ marginBottom: '20px' }}>
                    <textarea 
                        name="message" 
                        placeholder="Tell us about your project..."
                        value={formData.message} 
                        onChange={handleChange} 
                        rows="5"
                        style={{
                            ...inputStyle,
                            resize: 'vertical',
                            minHeight: '120px'
                        }}
                    ></textarea>
                </div>
                
                <button 
                    type="submit" 
                    disabled={isSubmitting}
                    style={{
                        backgroundColor: isSubmitting ? '#ccc' : '#ff6b35',
                        color: 'white',
                        padding: '15px 30px',
                        border: 'none',
                        borderRadius: '5px',
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        width: '100%',
                        transition: 'background-color 0.3s'
                    }}
                >
                    {isSubmitting ? 'Sending...' : 'GET MY ESTIMATE'}
                </button>

                {submitStatus === 'success' && (
                    <div style={{ 
                        backgroundColor: '#d4edda', 
                        color: '#155724', 
                        padding: '15px', 
                        borderRadius: '5px', 
                        marginTop: '20px',
                        textAlign: 'center'
                    }}>
                        <strong>Thank you!</strong> Your estimate request has been sent successfully. We'll get back to you soon!
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div style={{ 
                        backgroundColor: '#f8d7da', 
                        color: '#721c24', 
                        padding: '15px', 
                        borderRadius: '5px', 
                        marginTop: '20px',
                        textAlign: 'center'
                    }}>
                        <strong>Sorry!</strong> There was an error sending your message. Please try again or call us directly.
                    </div>
                )}
            </form>
        </div>
    );
};

export default ContactForm;