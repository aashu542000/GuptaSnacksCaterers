"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Menu() {
    const items = [
        { name: "Samosa Platter", price: "Starting ₹50" },
        { name: "Paneer Tikka", price: "Premium Starters" },
        { name: "Gulab Jamun", price: "Sweet Delights" },
        { name: "Thali Special", price: "Full Course Meal" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="menu" className="section container">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}
            >
                Menu <span className="text-gradient">Highlights</span>
            </motion.h2>
            <motion.div
                className="grid-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {items.map((item, i) => (
                    <motion.div key={i} className="glass-panel menu-card" variants={itemVariants}>
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🍽️</div>
                        <h3>{item.name}</h3>
                        <p style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{item.price}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
