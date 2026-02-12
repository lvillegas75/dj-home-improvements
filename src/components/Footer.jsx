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
                    <h3 style={{ marginBottom: '20px', fontSize: '1.5rem', color: 'white' }}>Get in touch</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', textAlign: 'left' }}>
                        <div>
                            <p style={{ margin: '5px 0' }}>Serving the Greater Area</p>
                            <p style={{ margin: '5px 0' }}>Licensed & Insured</p>
                        </div>
                        <div>
                            <p style={{ margin: '5px 0' }}>
                                Email: <a href="mailto:danieljimenezbusiness01@gmail.com" style={{ color: '#ff6b35', textDecoration: 'none' }}>danieljimenezbusiness01@gmail.com</a>
                            </p>
                            <p style={{ margin: '5px 0' }}>
                                Phone: <a href="tel:3823316140" style={{ color: '#ff6b35', textDecoration: 'none' }}>(382) 331-6140</a>
                            </p>
                        </div>
                    </div>
                </div>
                
                <div style={{ borderTop: '1px solid #555', paddingTop: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
                        <p style={{ margin: 0 }}>&copy; {new Date().getFullYear()} DJ Home Improvements. All rights reserved.</p>
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