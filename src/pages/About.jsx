import React from 'react';

const About = () => {
    return (
        <div className="about" style={{ padding: '60px 40px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2.5rem', color: '#333333', marginBottom: '30px' }}>About Us</h1>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Welcome to our construction company! We have been in the industry for over 20 years, providing top-notch construction services to our clients.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Our mission is to deliver high-quality projects on time and within budget, ensuring complete customer satisfaction.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                We value integrity, teamwork, and excellence in every project we undertake. Our experienced team is dedicated to making your vision a reality.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                Thank you for considering us for your construction needs!
            </p>
        </div>
    );
};

export default About;