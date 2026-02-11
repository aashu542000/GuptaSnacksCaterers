import React from 'react';

export default function Footer() {
    return (
        <footer style={{ background: 'var(--gradient-dark)', padding: '2rem 0', textAlign: 'center', marginTop: '4rem', color: 'rgba(255,255,255,0.6)' }}>
            <p>&copy; {new Date().getFullYear()} Gupta Snacks & Caterers. All rights reserved.</p>
        </footer>
    );
}
