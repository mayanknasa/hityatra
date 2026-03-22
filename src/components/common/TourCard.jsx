import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';

const TourCard = ({ tour, onBook }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      style={{
        backgroundColor: 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative'
      }}
    >
      {tour.tag && (
        <div style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          backgroundColor: 'var(--color-accent)',
          color: '#1a202c',
          padding: '0.25rem 0.75rem',
          borderRadius: 'var(--radius-sm)',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          zIndex: 10
        }}>
          {tour.tag}
        </div>
      )}

      {/* Image Container */}
      <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
        <motion.img 
          src={tour.image} 
          alt={tour.title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--color-text)' }}>{tour.title}</h3>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
          <span>⏱ {tour.duration}</span>
          <span>★ {tour.rating} ({tour.reviews})</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
          <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>
            {tour.price}
          </div>
          <Button variant="primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }} onClick={() => onBook && onBook(tour.title)}>
            Book Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default TourCard;
