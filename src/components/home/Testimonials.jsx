import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../../context/DataContext';

const Testimonials = () => {
  const { testimonials } = useData();

  return (
    <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--color-bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: 'var(--color-primary)', marginBottom: '1rem' }}>
            What Our Travelers Say
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
            Real experiences from the Hit Yatra family.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem' 
        }}>
          {testimonials.map((review) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                backgroundColor: '#fff',
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)',
                border: '1px solid var(--color-border)'
              }}
            >
              <div style={{ color: '#fbbf24', fontSize: '1.25rem', marginBottom: '1rem' }}>
                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
              </div>
              <p style={{ fontStyle: 'italic', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                "{review.text}"
              </p>
              <div style={{ fontWeight: 'bold', color: 'var(--color-text)' }}>
                - {review.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
