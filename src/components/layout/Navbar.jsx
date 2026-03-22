import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 50,
        backgroundColor: '#ffffff',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem'
      }}
    >
      <div style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '1.5rem' }}>
        Hit Yatra
      </div>
      
      <div style={{ display: 'flex', gap: '2rem', display: 'none' }} className="nav-links">
        {/* Placeholder for desktop links, hidden on mobile for simplicity in the mockup */}
        <a href="#home" style={{ fontWeight: 600 }}>Home</a>
        <a href="#tours" style={{ fontWeight: 600 }}>Tour Packages</a>
        <a href="#destinations" style={{ fontWeight: 600 }}>Destinations</a>
        <a href="#contact" style={{ fontWeight: 600 }}>Contact</a>
      </div>

      <button style={{
        backgroundColor: 'var(--color-primary)',
        color: '#ffffff',
        padding: '0.6rem 1.25rem',
        borderRadius: 'var(--radius-md)',
        fontWeight: 'bold',
        fontSize: '0.9rem'
      }}>
        Book Now
      </button>
    </motion.nav>
  );
};

export default Navbar;
