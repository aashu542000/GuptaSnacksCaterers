"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
    const services = [
        { title: "Wedding Catering", desc: "Make your big day unforgettable with our royal feast." },
        { title: "Corporate Events", desc: "Professional catering services for your business meetings." },
        { title: "Parties & Gatherings", desc: "Delicious snacks and meals for birthdays and anniversaries." },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="services" className="section container">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}
            >
                Our <span className="text-gradient">Services</span>
            </motion.h2>
            <motion.div
                className="grid-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {services.map((s, i) => (
                    <motion.div key={i} className="card" variants={itemVariants}>
                        <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{s.title}</h3>
                        <p>{s.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
