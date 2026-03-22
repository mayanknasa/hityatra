import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const InquiryModal = ({ isOpen, onClose, defaultPackage }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', query: '', package: defaultPackage || '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({ ...prev, package: defaultPackage || '' }));
      setIsSubmitted(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen, defaultPackage]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setIsSubmitted(true);
      // Simulate API call
      console.log('Submitted Inquiry:', formData);
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '0.8rem',
    marginBottom: '1rem',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-sm)',
    fontSize: '1rem',
    fontFamily: 'inherit'
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.6)',
            zIndex: 100,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '1rem'
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            style={{
              backgroundColor: '#fff',
              padding: '2.5rem',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '500px',
              width: '100%',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: 'var(--color-text-muted)'
              }}
            >
              &times;
            </button>

            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '3rem', color: '#48bb78', marginBottom: '1rem' }}>✓</div>
                <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Request Sent!</h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                  Thank you, {formData.name}. Our Hit Yatra team will contact you shortly regarding the "{formData.package || 'General Inquiry'}" package.
                </p>
                <Button variant="primary" onClick={onClose} style={{ width: '100%' }}>
                  Close
                </Button>
              </div>
            ) : (
              <>
                <h2 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Book Your Yatra</h2>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                  Enter your details below and we will get back to you immediately.
                </p>
                <form onSubmit={handleSubmit}>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name (Required)" 
                    required 
                    value={formData.name} 
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <input 
                    type="tel" 
                    name="phone" 
                    placeholder="Phone Number (Required)" 
                    required 
                    value={formData.phone} 
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <input 
                    type="text" 
                    name="package" 
                    placeholder="Package of Interest" 
                    value={formData.package} 
                    onChange={handleChange}
                    style={inputStyle}
                  />
                  <textarea 
                    name="query"
                    placeholder="Any special requests or queries?"
                    rows="3"
                    value={formData.query} 
                    onChange={handleChange}
                    style={{...inputStyle, resize: 'vertical'}}
                  ></textarea>
                  <Button type="submit" variant="primary" style={{ 
                    width: '100%', 
                    padding: '1rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    letterSpacing: '0.5px',
                    borderRadius: 'var(--radius-sm)',
                    boxShadow: 'none'
                  }}>
                    Send Inquiry Request
                  </Button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InquiryModal;
