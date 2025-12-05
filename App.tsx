import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Requirements from './components/Requirements';
import Workflow from './components/Workflow';
import Footer from './components/Footer';

// Declare the window function
declare global {
  interface Window {
    initInViewAnimations: (selector?: string) => void;
  }
}

const App: React.FC = () => {
  useEffect(() => {
    // Initialize animations after component mount to catch all elements
    if (window.initInViewAnimations) {
      setTimeout(() => window.initInViewAnimations(), 100);
    }
  }, []);

  return (
    <div className="antialiased overflow-x-hidden selection:bg-lumina-500/30 selection:text-white flex flex-col min-h-screen text-off-white bg-charcoal font-sans">
      
      {/* Main Background Image with Overlay */}
      <div className="fixed z-0 top-0 right-0 bottom-0 left-0 pointer-events-none">
        <img 
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2864&auto=format&fit=crop" 
            alt="Creative Background" 
            className="opacity-40 w-full h-full object-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/70 to-charcoal"></div>
      </div>

      {/* Content Wrapper */}
      <div className="flex-1 flex flex-col w-full max-w-7xl mr-auto ml-auto relative">
        <Navbar />
        <Hero />
        <Features />
        <Requirements />
        <Workflow />
      </div>
      <Footer />
    </div>
  );
};

export default App;