import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import LoadingSpinner from './components/LoadingSpinner';
import About from './components/About';
import Education from './components/Education';
import Footer from './components/Footer';
import Hero from './components/Hero';
import PricingSection from './components/PricingSection';
import ScrollToTopButton from './components/ScrollToTopButton';
import Services from './components/Services';
import WhyUs from './components/WhyUs';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      AOS.init({ duration: 1000, once: false }); 
    }, 1500); 
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen overflow-hidden">
      <Hero />
      <About />
      <Education />
      <PricingSection />
      <Services />
      <WhyUs />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
