import React from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';

const Navbar = ({ onBook }) => {
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
      
      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }} className="nav-links hidden-mobile">
        <a href="#home" style={{ fontWeight: 600 }}>Home</a>
        <a href="#tours" style={{ fontWeight: 600 }}>Packages</a>
        <a href="#destinations" style={{ fontWeight: 600 }}>Destinations</a>
        <a href="#faq" style={{ fontWeight: 600 }}>FAQ</a>
      </div>

      <Button variant="primary" onClick={onBook}>
        Book Now
      </Button>
    </motion.nav>
  );
};

export default Navbar;
