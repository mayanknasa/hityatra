import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Footer from './components/layout/Footer';
import Destinations from './components/home/Destinations';
import TopSelling from './components/home/TopSelling';
import Testimonials from './components/home/Testimonials';
import FAQ from './components/home/FAQ';

function App() {
  return (
    <>
      <Navbar />
      <main style={{ marginTop: '70px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Hero />
        <Destinations />
        <TopSelling />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

export default App;
