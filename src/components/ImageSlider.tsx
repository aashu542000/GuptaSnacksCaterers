"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ImageSlider() {
    const images = [
        "https://d3fx71eiz7ljr8.cloudfront.net/uploads/photo/image/2024/w_1500_h_dsc_0359.jpg",
        "https://www.uaezoom.com/wp-content/uploads/2022/06/%D8%A3%D8%A8%D8%B1%D8%B2-%D8%B4%D8%B1%D9%83%D8%A7%D8%AA-%D8%A8%D9%88%D9%81%D9%8A%D9%87-%D9%85%D9%86%D8%B2%D9%84%D9%8A-%D9%81%D9%8A-%D8%A7%D8%A8%D9%88%D8%B8%D8%A8%D9%8A.jpg",
        "https://media-api.xogrp.com/images/cd3b17e1-8c56-4987-a150-7ad58fc61bee",
        "https://images.pexels.com/photos/15062605/pexels-photo-15062605.jpeg?cs=srgb&dl=pexels-angel-obregon-15062605.jpg&fm=jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            className="slider-container"
            style={{ borderRadius: '1rem', boxShadow: 'var(--glass-shadow)', margin: '2rem 0' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
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
        </motion.div>
    );
}
