import React from 'react';

export default function Contact() {
    return (
        <section id="contact" className="section container">
            <div className="glass-panel contact-card">
                <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Get in <span className="text-gradient">Touch</span></h2>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <input type="text" placeholder="Your Name" className="input-field" />
                    <input type="email" placeholder="Your Email" className="input-field" />
                    <textarea placeholder="Tell us about your event" rows={4} className="input-field"></textarea>
                    <button className="btn-primary" style={{ alignSelf: 'center', width: '100%', cursor: 'pointer' }}>Send Message</button>
                </form>
            </div>
        </section>
    );
}
