import React from 'react';
import { useData } from '../../context/DataContext';
import TourCard from '../common/TourCard';

const TopSelling = ({ onBook }) => {
  const { topSelling } = useData();

  return (
    <section id="tours" style={{ padding: '5rem 2rem', backgroundColor: 'var(--color-bg)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', color: 'var(--color-primary)', marginBottom: '1rem' }}>
            Trending Packages
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Explore our most popular spiritual journeys meticulously crafted for your peace of mind.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {topSelling.map(tour => (
            <TourCard key={tour.id} tour={tour} onBook={onBook} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopSelling;
