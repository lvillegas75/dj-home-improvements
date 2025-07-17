import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#333',
            color: 'white',
            padding: '40px 20px',
            textAlign: 'center'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ marginBottom: '30px' }}>
                    <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Get in touch</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', textAlign: 'left' }}>
                        <div>
                            <p style={{ margin: '5px 0' }}>123 Construction Ave</p>
                            <p style={{ margin: '5px 0' }}>Your City, State 12345</p>
                        </div>
                        <div>
                            <p style={{ margin: '5px 0' }}>Email: info@constructioncompany.com</p>
                            <p style={{ margin: '5px 0' }}>Phone: (555) 123-4567</p>
                        </div>
                    </div>
                </div>
                
                <div style={{ borderTop: '1px solid #555', paddingTop: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                        <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} Construction Company. All rights reserved.</p>
                        <nav>
                            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '20px' }}>
                                <li><a href="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</a></li>
                                <li><a href="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</a></li>
                                <li><a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;