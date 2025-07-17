import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{
            backgroundColor: 'white',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
        }}>
            <div style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#333', marginLeft: '30px' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
                        DJ Home Improvements
                    </Link>
                </div>
                <nav>
                    <ul style={{
                        listStyle: 'none',
                        margin: 0,
                        padding: 0,
                        display: 'flex',
                        gap: '25px',
                        alignItems: 'center'
                    }}>
                        <li>
                            <Link to="/" style={{
                                textDecoration: 'none',
                                color: '#333',
                                fontSize: '1.1rem',
                                fontWeight: '500',
                                transition: 'color 0.3s'
                            }}>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" style={{
                                textDecoration: 'none',
                                color: '#333',
                                fontSize: '1.1rem',
                                fontWeight: '500',
                                transition: 'color 0.3s'
                            }}>About</Link>
                        </li>
                        <li>
                            <Link to="/services" style={{
                                textDecoration: 'none',
                                color: '#333',
                                fontSize: '1.1rem',
                                fontWeight: '500',
                                transition: 'color 0.3s'
                            }}>Services</Link>
                        </li>
                        <li>
                            <Link to="/contact" style={{
                                textDecoration: 'none',
                                color: '#333',
                                fontSize: '1.1rem',
                                fontWeight: '500',
                                transition: 'color 0.3s'
                            }}>Contact</Link>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/DanielJimenezhomes/" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               style={{
                                   textDecoration: 'none',
                                   color: '#1877f2',
                                   fontSize: '1.1rem',
                                   fontWeight: '500',
                                   transition: 'color 0.3s',
                                   display: 'flex',
                                   alignItems: 'center',
                                   gap: '5px'
                               }}>
                                <span style={{
                                    backgroundColor: '#1877f2',
                                    color: 'white',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '14px',
                                    fontWeight: 'bold'
                                }}>f</span>
                                Facebook
                            </a>
                        </li>
                        <li>
                            <button style={{
                                backgroundColor: '#ff6b35',
                                color: 'white',
                                padding: '10px 20px',
                                border: 'none',
                                marginRight: '10px',
                                borderRadius: '5px',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s'
                            }}>
                                GET ESTIMATE
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
