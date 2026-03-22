import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Footer from './components/layout/Footer';
import Destinations from './components/home/Destinations';
import TopSelling from './components/home/TopSelling';
import Testimonials from './components/home/Testimonials';
import FAQ from './components/home/FAQ';
import InquiryModal from './components/common/InquiryModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const handleBookNow = (packageName = '') => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };
  return (
    <>
      <Navbar onBook={() => handleBookNow()} />
      <main style={{ marginTop: '70px', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div id="home">
          <Hero onBook={() => handleBookNow()} />
        </div>
        <Destinations />
        <TopSelling onBook={handleBookNow} />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <InquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultPackage={selectedPackage} 
      />
    </>
  );
}

export default App;
