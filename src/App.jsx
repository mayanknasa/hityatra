import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '70px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Hero />
        {/* Future sections (Packages, Destination, FAQ, Testimonials) will go here */}
        <div style={{ flex: 1, padding: '4rem 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--color-primary)' }}>Welcome to Hit Yatra</h2>
          <p style={{ marginTop: '1rem', color: 'var(--color-text-muted)' }}>Scroll down to see our packages (coming next).</p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
