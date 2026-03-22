import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseStyle = {
    padding: '0.8rem 1.5rem',
    borderRadius: 'var(--radius-md)',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    border: '2px solid transparent',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const variants = {
    primary: {
      background: 'linear-gradient(135deg, var(--color-primary) 0%, #00B4B6 100%)',
      color: '#fff',
      boxShadow: '0 8px 20px rgba(0, 116, 143, 0.25)',
      textShadow: '0 1px 2px rgba(0,0,0,0.1)',
      border: '2px solid transparent'
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: 'var(--color-primary)',
      color: 'var(--color-primary)'
    }
  };

  return (
    <motion.button 
      style={{ ...baseStyle, ...variants[variant] }}
      className={className}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
