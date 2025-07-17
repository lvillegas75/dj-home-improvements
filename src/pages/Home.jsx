import React from 'react';
import ContactForm from '../components/ContactForm';

const Home = () => {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero-section" style={{
                background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textAlign: 'center'
            }}>
                <div>
                    <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '20px' , color: 'white'}}>
                        We design the home that reflects who you are.
                    </h1>
                    <button 
                        onClick={() => {
                            document.getElementById('contact-form').scrollIntoView({ 
                                behavior: 'smooth' 
                            });
                        }}
                        style={{
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
                </div>
            </section>

            {/* Services Section */}
            <section style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#333' }}>General Contractor</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                        <h3>• New Homes</h3>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                        <h3>• Home Additions</h3>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                        <h3>• Remodels</h3>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                        <h3>• Kitchens</h3>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                        <h3>• Bathrooms</h3>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                        <h3>• Basement</h3>
                    </div>
                </div>
            </section>

            {/* Recent Projects Section */}
            <section style={{ padding: '60px 20px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#333' }}>RECENT PROJECTS</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                        <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                             alt="Home Addition" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '20px' }}>
                            <h3 style={{ color: '#ff6b35', fontSize: '1.3rem', marginBottom: '10px' }}>$250k Home Addition</h3>
                            <p style={{ color: '#666' }}>Sandy, Utah [Completed]</p>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                        <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                             alt="Kitchen Remodel" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '20px' }}>
                            <h3 style={{ color: '#ff6b35', fontSize: '1.3rem', marginBottom: '10px' }}>$70k Kitchen Remodel</h3>
                            <p style={{ color: '#666' }}>Lehi, Utah [Completed]</p>
                        </div>
                    </div>
                    <div style={{ backgroundColor: 'white', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                             alt="Bathroom Remodel" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '20px' }}>
                            <h3 style={{ color: '#ff6b35', fontSize: '1.3rem', marginBottom: '10px' }}>$140k Remodel</h3>
                            <p style={{ color: '#666' }}>Park City, Utah [Completed]</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section style={{ padding: '60px 20px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#333' }}>TESTIMONIALS</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
                        <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '15px', color: '#555' }}>
                            "I would highly recommend this crew. They were kind, honest, efficient and easy to work with. I love the results of their hard work! I felt comfortable having them in my home."
                        </p>
                        <h4 style={{ color: '#ff6b35' }}>- Amy B.</h4>
                    </div>
                    <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                        <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '15px', color: '#555' }}>
                            "Amazing transformation! The crew did such a phenomenal job with new flooring, all new trim work, fresh paint. We loved our experience!"
                        </p>
                        <h4 style={{ color: '#ff6b35' }}>- Lisa N.</h4>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section style={{ padding: '60px 20px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#333' }}>ABOUT US</h2>
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        WE ARE A BUILDING AND REMODELING COMPANY WITH HIGHLY SKILLED WORKERS. OUR TEAM IS COMMITTED TO PROVIDING THE HIGHEST LEVEL OF CUSTOMER SERVICE FROM START TO FINISH. WE SPECIALIZE IN CUSTOM HOMES, RENOVATIONS, AND ADDITION PROJECTS, FROM DEMOLITION TO COMPLETION.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact-form" style={{ padding: '60px 20px', backgroundColor: '#f8f9fa' }}>
                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', color: '#333', textAlign: 'center' }}>Get in touch</h2>
                    <ContactForm />
                </div>
            </section>
        </div>
    );
};

export default Home;