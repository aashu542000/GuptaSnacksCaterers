"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="section container">
            <motion.div
                className="glass-panel contact-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Get in <span className="text-gradient">Touch</span></h2>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <input type="text" placeholder="Your Name" className="input-field" />
                    <input type="email" placeholder="Your Email" className="input-field" />
                    <textarea placeholder="Tell us about your event" rows={4} className="input-field"></textarea>
                    <motion.button
                        className="btn-primary"
                        style={{ alignSelf: 'center', width: '100%', cursor: 'pointer' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
}
