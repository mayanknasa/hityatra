import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../../context/DataContext';
import Button from '../common/Button';

const Hero = ({ onBook }) => {
  const { hero } = useData();

  return (
    <section style={{
      position: 'relative',
      height: '80vh',
      minHeight: '600px',
      width: '100%',
      backgroundImage: 'url(/images/hero_bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 2rem'
    }}>
      {/* Dark overlay for readability */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        zIndex: 1
      }}></div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px'
        }}
      >
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', 
          color: '#ffffff',
          marginBottom: '1.5rem',
          lineHeight: 1.1
        }}>
          {hero.title}
        </h1>
        <p style={{ 
          fontSize: 'clamp(1rem, 2vw, 1.25rem)', 
          color: '#e2e8f0',
          marginBottom: '2.5rem'
        }}>
          {hero.subtitle}
        </p>
        <Button variant="primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }} onClick={onBook}>
          {hero.ctaText}
        </Button>
      </motion.div>
    </section>
  );
};

export default Hero;
