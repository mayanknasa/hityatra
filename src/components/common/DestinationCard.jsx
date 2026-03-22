import React from 'react';
import { motion } from 'framer-motion';

const DestinationCard = ({ destination }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        height: '250px',
        boxShadow: 'var(--shadow-md)',
        cursor: 'pointer'
      }}
    >
      <motion.img 
        src={destination.image} 
        alt={destination.name}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
      />
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
        padding: '2rem 1rem 1rem',
        color: '#fff',
        textAlign: 'center'
      }}>
        <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>{destination.name}</h3>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
