import React from 'react';

const Services = () => {
    const projects = [
        { img: '/daniel7.jpg', title: 'Kitchen Remodel', description: 'Complete kitchen transformation with modern finishes.' },
        { img: '/daniel8.jpg', title: 'Kitchen Remodel', description: 'Another angle of our beautiful kitchen renovation.' },
        { img: '/daniel3.jpg', title: 'Bathroom Renovation', description: 'Custom shower installation with quality craftsmanship.' },
        { img: '/daniel1.jpg', title: 'Basement Framing', description: 'Professional basement framing for finished living space.' },
        { img: '/daniel4.jpg', title: 'Basement Insulation', description: 'Framing and insulation for energy-efficient basements.' },
        { img: '/daniel6.jpg', title: 'Basement Framing', description: 'Quality framing work for basement finishing projects.' },
        { img: '/daniel2.jpg', title: 'House Framing', description: 'Complete house framing from the ground up.' },
        { img: '/daniel5.jpg', title: 'Custom Shed', description: 'Custom-built outdoor structures and sheds.' },
    ];

    return (
        <div className="services" style={{ padding: '60px 40px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2.5rem', color: '#333333', marginBottom: '15px' }}>Our Services</h1>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '40px', color: '#666' }}>
                DJ Home Improvements offers a wide range of construction and remodeling services. 
                From kitchen and bathroom renovations to complete basement finishing and custom builds, 
                we bring quality craftsmanship to every project.
            </p>
            
            <ul style={{ fontSize: '1.1rem', lineHeight: '2', listStyleType: 'none', padding: 0, marginBottom: '50px' }}>
                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35' }}>✓</span>
                    Kitchen Remodeling
                </li>
                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35' }}>✓</span>
                    Bathroom Renovation
                </li>
                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35' }}>✓</span>
                    Basement Finishing & Framing
                </li>
                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35' }}>✓</span>
                    House Framing
                </li>
                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35' }}>✓</span>
                    Custom Sheds & Outdoor Structures
                </li>
                <li style={{ marginBottom: '15px', paddingLeft: '25px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#ff6b35' }}>✓</span>
                    Insulation Installation
                </li>
            </ul>

            <h2 style={{ fontSize: '2rem', color: '#333333', marginBottom: '30px' }}>Our Work</h2>
            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                gap: '25px' 
            }}>
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        style={{ 
                            backgroundColor: 'white', 
                            borderRadius: '10px', 
                            boxShadow: '0 2px 10px rgba(0,0,0,0.1)', 
                            overflow: 'hidden' 
                        }}
                    >
                        <img 
                            src={project.img} 
                            alt={project.title} 
                            style={{ 
                                width: '100%', 
                                height: '220px', 
                                objectFit: 'cover' 
                            }} 
                        />
                        <div style={{ padding: '20px' }}>
                            <h3 style={{ color: '#ff6b35', marginBottom: '10px' }}>{project.title}</h3>
                            <p style={{ color: '#666', fontSize: '0.95rem' }}>{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;