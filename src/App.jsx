import { motion } from 'framer-motion';
import { useData } from './context/DataContext';

function App() {
  const { hero } = useData();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}
    >
      <h1 style={{ fontSize: '3rem', color: 'var(--color-primary)' }}>
        {hero.title}
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '600px', margin: '1rem 0 2rem' }}>
        {hero.subtitle}
      </p>
      <button style={{
        backgroundColor: 'var(--color-primary)',
        color: '#fff',
        padding: '1rem 2rem',
        borderRadius: 'var(--radius-md)',
        fontWeight: 'bold',
        fontSize: '1rem'
      }}>
        {hero.ctaText}
      </button>
    </motion.div>
  );
}

export default App;
