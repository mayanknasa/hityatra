import React from 'react';
import { useData } from '../../context/DataContext';

const Footer = () => {
  const { contact } = useData();

  return (
    <footer style={{
      backgroundColor: '#1a202c',
      color: '#e2e8f0',
      padding: '4rem 2rem 2rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '3rem',
        marginBottom: '3rem'
      }}>
        {/* Column 1 */}
        <div>
          <img src="/images/logo.png" alt="Hit Yatra Logo" style={{ height: '60px', width: 'auto', marginBottom: '1.5rem', borderRadius: '4px' }} />
          <p style={{ lineHeight: 1.6, color: '#a0aec0' }}>
            Experience divine journeys and breathtaking destinations across India with our premium travel packages.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 style={{ color: '#fff', marginBottom: '1.25rem' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            <li><a href="#home" style={{ color: '#a0aec0' }}>Home</a></li>
            <li><a href="#tours" style={{ color: '#a0aec0' }}>Tour Packages</a></li>
            <li><a href="#faq" style={{ color: '#a0aec0' }}>FAQ</a></li>
            <li><a href="#terms" style={{ color: '#a0aec0' }}>Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 style={{ color: '#fff', marginBottom: '1.25rem' }}>Contact Us</h3>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#a0aec0' }}>
            <li>{contact.phone}</li>
            <li>{contact.email}</li>
            <li>{contact.address}</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 style={{ color: '#fff', marginBottom: '1.25rem' }}>Connect With Us</h3>
          <a 
            href={contact.instagramUrl} 
            target="_blank" 
            rel="noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--color-primary)',
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600
            }}
          >
            Follow on Instagram
          </a>
        </div>
      </div>

      <div style={{
        textAlign: 'center',
        paddingTop: '2rem',
        borderTop: '1px solid #2d3748',
        color: '#718096',
        fontSize: '0.9rem'
      }}>
        &copy; {new Date().getFullYear()} Hit Yatra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
