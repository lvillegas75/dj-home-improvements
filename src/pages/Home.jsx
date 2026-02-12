import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section 
                className="hero-section"
                style={{
                    position: 'relative',
                    height: '80vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textAlign: 'center',
                    overflow: 'hidden'
                }}
            >
                {/* Background Image */}
                <img 
                    src="/daniel0.png" 
                    alt="Kitchen Renovation" 
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center 80%',
                        zIndex: 1
                    }}
                />
                {/* Dark Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 2
                }}></div>
                {/* Content */}
                <div style={{ position: 'relative', zIndex: 3 }}>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '20px', color: 'white' }}>
                        We design the home that reflects who you are.
                    </h1>
                    <Link to="/contact">
                        <button style={{
                            backgroundColor: '#ff6b35',
                            color: 'white',
                            padding: '15px 30px',
                            fontSize: '1.2rem',
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}>
                            GET A QUOTE
                        </button>
                    </Link>
                </div>
            </section>

            {/* Services Preview Section */}
            <section style={{ padding: '60px 20px', backgroundColor: '#f8f9fa' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#333333' }}>Our Services</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                            <img src="/daniel7.jpg" alt="Kitchen Remodel" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ color: '#ff6b35', marginBottom: '15px' }}>Kitchen Remodeling</h3>
                                <p>Transform your kitchen into a beautiful, functional space that your family will love.</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                            <img src="/daniel3.jpg" alt="Bathroom Renovation" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ color: '#ff6b35', marginBottom: '15px' }}>Bathroom Renovation</h3>
                                <p>Create a luxurious bathroom retreat with modern fixtures and elegant design.</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                            <img src="/daniel1.jpg" alt="Basement Framing" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ color: '#ff6b35', marginBottom: '15px' }}>Basement Finishing</h3>
                                <p>Expand your living space with expertly crafted basement framing and finishing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section style={{ padding: '60px 20px', backgroundColor: 'white' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#333333' }}>Why Choose DJ Home Improvements?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                        <div>
                            <h3 style={{ color: '#ff6b35', marginBottom: '10px' }}>20+ Years Experience</h3>
                            <p>Decades of expertise in home improvement and construction.</p>
                        </div>
                        <div>
                            <h3 style={{ color: '#ff6b35', marginBottom: '10px' }}>Licensed & Insured</h3>
                            <p>Fully licensed professionals you can trust with your home.</p>
                        </div>
                        <div>
                            <h3 style={{ color: '#ff6b35', marginBottom: '10px' }}>Quality Guaranteed</h3>
                            <p>We stand behind our work with comprehensive warranties.</p>
                        </div>
                        <div>
                            <h3 style={{ color: '#ff6b35', marginBottom: '10px' }}>Free Estimates</h3>
                            <p>Get a detailed quote for your project at no cost.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '60px 20px', backgroundColor: '#ffffff', color: 'black', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to Start Your Project?</h2>
                <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>Contact us today for a free estimate!</p>
                <Link to="/contact">
                    <button style={{
                        backgroundColor: '#ff6b35',
                        color: 'white',
                        padding: '15px 30px',
                        fontSize: '1.2rem',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}>
                        GET YOUR FREE ESTIMATE
                    </button>
                </Link>
            </section>
        </div>
    );
};

export default Home;