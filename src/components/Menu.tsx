import React from 'react';

export default function Menu() {
    const items = [
        { name: "Samosa Platter", price: "Starting ₹50" },
        { name: "Paneer Tikka", price: "Premium Starters" },
        { name: "Gulab Jamun", price: "Sweet Delights" },
        { name: "Thali Special", price: "Full Course Meal" },
    ];
    return (
        <section id="menu" className="section container">
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem' }}>Menu <span className="text-gradient">Highlights</span></h2>
            <div className="grid-3">
                {items.map((item, i) => (
                    <div key={i} className="glass-panel menu-card">
                        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🍽️</div>
                        <h3>{item.name}</h3>
                        <p style={{ color: 'var(--primary)', fontWeight: 'bold' }}>{item.price}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
