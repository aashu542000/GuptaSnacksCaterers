"use client";
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="glass-panel navbar-container">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                {/* <img src="/images/GuptaSnacks_logo.png" alt="Gupta Snacks Logo" style={{ height: '40px', width: 'auto' }} /> */}
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>
                    <span className="text-gradient">Gupta Snacks</span> <span className="desktop-only">& Caterers</span>
                </div>
            </Link>

            {/* Mobile Toggle Button */}
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                {isMenuOpen ? '✕' : '☰'}
            </button>

            {/* Navigation Links */}
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <Link href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</Link>
                <Link href="#menu" className="nav-link" onClick={() => setIsMenuOpen(false)}>Menu</Link>
                <Link href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </div>
        </nav>
    );
}
