import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const handleGetEstimate = () => {
        setMenuOpen(false);
        if (location.pathname === '/contact') {
            const contactForm = document.getElementById('contact-form');
            if (contactForm) {
                contactForm.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate('/contact');
        }
    };

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 20px',
            backgroundColor: 'white',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
        }}>
            <Link to="/" style={{ textDecoration: 'none' }} onClick={handleLinkClick}>
                <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#333333' }}>
                    DJ Home Improvements
                </div>
            </Link>
            
            {/* Hamburger Menu Button - Mobile Only */}
            <button 
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                    display: 'none',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '10px',
                    zIndex: 1001
                }}
                className="hamburger-btn"
                aria-label="Toggle menu"
            >
                <div style={{
                    width: '25px',
                    height: '3px',
                    backgroundColor: '#2c5530',
                    margin: '5px 0',
                    transition: 'all 0.3s',
                    transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
                }}></div>
                <div style={{
                    width: '25px',
                    height: '3px',
                    backgroundColor: '#2c5530',
                    margin: '5px 0',
                    transition: 'all 0.3s',
                    opacity: menuOpen ? 0 : 1
                }}></div>
                <div style={{
                    width: '25px',
                    height: '3px',
                    backgroundColor: '#2c5530',
                    margin: '5px 0',
                    transition: 'all 0.3s',
                    transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'
                }}></div>
            </button>

            {/* Navigation */}
            <nav 
                style={{ 
                    display: 'flex', 
                    gap: '30px', 
                    alignItems: 'center' 
                }}
                className={`nav-menu ${menuOpen ? 'nav-open' : ''}`}
            >
                <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }} onClick={handleLinkClick}>Home</Link>
                <Link to="/about" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }} onClick={handleLinkClick}>About</Link>
                <Link to="/services" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }} onClick={handleLinkClick}>Services</Link>
                <Link to="/contact" style={{ textDecoration: 'none', color: '#333', fontWeight: '500' }} onClick={handleLinkClick}>Contact</Link>
                <button 
                    onClick={handleGetEstimate}
                    style={{
                        backgroundColor: '#ff6b35',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    GET ESTIMATE
                </button>
            </nav>
        </header>
    );
};

export default Header;