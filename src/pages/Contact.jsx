import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div className="contact" style={{ padding: '60px 40px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2.5rem', color: '#333333', marginBottom: '15px' }}>Contact Us</h1>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px', color: '#666' }}>
                Please fill out the form below to receive a bid for your project.
            </p>
            <div id="contact-form">
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;