"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section id="home" className="hero-bg">
            <div className="hero-blob hero-blob-1"></div>
            <div className="hero-blob hero-blob-2"></div>
            <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Taste the <span className="text-gradient">Tradition</span>,<br />
                    Celebrate the <span className="text-gradient">Flavor</span>
                </motion.h1>
                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Gupta Snacks & Caterers brings you the finest selection of authentic Indian snacks and premium catering for all your special occasions.
                </motion.p>
                <motion.div
                    style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a href="#contact" className="btn-primary">Book Now</a>
                    <a href="#menu" className="glass-panel" style={{ padding: '0.75rem 2rem', borderRadius: '9999px', fontWeight: 600, transition: 'var(--transition)', textDecoration: 'none' }}>View Menu</a>
                </motion.div>
            </div>
        </section>
    );
}
