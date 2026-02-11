import React from 'react';

export default function Hero() {
    return (
        <section id="home" className="hero-bg">
            <div className="hero-blob hero-blob-1"></div>
            <div className="hero-blob hero-blob-2"></div>
            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <h1 className="hero-title animate-fade-in">
                    Taste the <span className="text-gradient">Tradition</span>,<br />
                    Celebrate the <span className="text-gradient">Flavor</span>
                </h1>
                <p className="hero-subtitle animate-fade-in delay-1">
                    Gupta Snacks & Caterers brings you the finest selection of authentic Indian snacks and premium catering for all your special occasions.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }} className="animate-fade-in delay-2">
                    <a href="#contact" className="btn-primary">Book Now</a>
                    <a href="#menu" className="glass-panel" style={{ padding: '0.75rem 2rem', borderRadius: '9999px', fontWeight: 600, transition: 'var(--transition)', textDecoration: 'none' }}>View Menu</a>
                </div>
            </div>
        </section>
    );
}
