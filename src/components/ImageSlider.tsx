"use client";
import React, { useState, useEffect } from 'react';

export default function ImageSlider() {
    const images = [
        "https://placehold.co/1200x600/1e293b/f59e0b?text=Premium+Catering",
        "https://placehold.co/1200x600/0f172a/ec4899?text=Authentic+Sweels",
        "https://placehold.co/1200x600/1e293b/10b981?text=Royal+Weddings",
        "https://placehold.co/1200x600/0f172a/f59e0b?text=Delicious+Snacks"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="slider-container" style={{ borderRadius: '1rem', boxShadow: 'var(--glass-shadow)', margin: '2rem 0' }}>
            <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((img, index) => (
                    <div key={index} className="slide">
                        <img src={img} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto', display: 'block' }} />
                    </div>
                ))}
            </div>
            <div style={{ position: 'absolute', bottom: '1rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem' }}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            background: currentIndex === index ? 'var(--primary)' : 'rgba(255,255,255,0.5)',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'var(--transition)'
                        }}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
