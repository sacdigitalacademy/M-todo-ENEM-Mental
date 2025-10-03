import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductPreview from './components/ProductPreview';
import Problem from './components/Problem';
import PainPoints from './components/PainPoints';
import Benefits from './components/Benefits';
import ProductDescription from './components/ProductDescription';
import WhatsIncluded from './components/WhatsIncluded';
import Bonuses from './components/Bonuses';
import Comparison from './components/Comparison';
import TargetAudience from './components/TargetAudience';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import Urgency from './components/Urgency';
import Contact from './components/Contact';

function App() {
  React.useEffect(() => {
    // Smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Update page title
    document.title = 'MÉTODO DESBLOQUEIO MENTAL ENEM - Redação Nota 900+';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductPreview />
      <Problem />
      <PainPoints />
      <Benefits />
      <ProductDescription />
      <WhatsIncluded />
      <Bonuses />
      <Comparison />
      <TargetAudience />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <FAQ />
      <Urgency />
      <Contact />
    </div>
  );
}

export default App;