import React from 'react';
import { useData } from '../../context/DataContext';
import DestinationCard from '../common/DestinationCard';

const Destinations = () => {
  const { destinations } = useData();

  return (
    <section id="destinations" style={{ padding: '5rem 2rem', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: 'var(--color-primary)', marginBottom: '1rem' }}>
            Explore Divine Destinations
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Discover the most sacred and peaceful places across India with Hit Yatra.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          {destinations.map(dest => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
