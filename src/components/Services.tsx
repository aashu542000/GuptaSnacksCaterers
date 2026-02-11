import React from 'react';

export default function Services() {
    const services = [
        { title: "Wedding Catering", desc: "Make your big day unforgettable with our royal feast." },
        { title: "Corporate Events", desc: "Professional catering services for your business meetings." },
        { title: "Parties & Gatherings", desc: "Delicious snacks and meals for birthdays and anniversaries." },
    ];
    return (
        <section id="services" className="section container">
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Our <span className="text-gradient">Services</span></h2>
            <div className="grid-3">
                {services.map((s, i) => (
                    <div key={i} className="card">
                        <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{s.title}</h3>
                        <p>{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
