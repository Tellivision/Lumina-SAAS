
import React from 'react';
import { Sparkles } from 'lucide-react';

const Navbar: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center py-6 px-6 md:px-10 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.1s_both] z-50 relative">
      <div className="flex gap-3 group cursor-pointer items-center z-50">
        <div className="flex items-center gap-3 select-none">
            {/* Logo Icon */}
            <div className="w-9 h-9 bg-lumina-500 rounded-lg flex items-center justify-center relative overflow-hidden flex-shrink-0 shadow-lg shadow-lumina-500/20">
                <svg viewBox="0 0 24 24" className="w-full h-full text-white p-1.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" y1="20" x2="12" y2="12" />
                    <line x1="4" y1="20" x2="15" y2="16" />
                    <line x1="4" y1="20" x2="15" y2="9" />
                </svg>
            </div>
            {/* Logo Text */}
            <div className="flex flex-col justify-center">
                <span className="text-white font-bold text-lg leading-none tracking-tight">Lumina</span>
                <span className="text-cool-gray text-[0.55rem] font-bold tracking-[0.1em] uppercase leading-none mt-0.5">SaaS Company</span>
            </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 items-center">
        <a href="#product" onClick={(e) => scrollToSection(e, 'product')} className="text-xs font-medium tracking-widest uppercase hover:text-off-white transition-colors text-cool-gray">
          Home
        </a>
        <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="uppercase hover:text-off-white transition-colors text-xs font-medium text-cool-gray tracking-widest">
          Features
        </a>
        <a href="#integration" onClick={(e) => scrollToSection(e, 'integration')} className="uppercase hover:text-off-white transition-colors text-xs font-medium text-cool-gray tracking-widest">
          Integration
        </a>
        <a href="#workflow" onClick={(e) => scrollToSection(e, 'workflow')} className="uppercase hover:text-off-white transition-colors text-xs font-medium text-cool-gray tracking-widest">
          Workflow
        </a>
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex items-center gap-6">
        <a href="#" className="hidden sm:block hover:text-off-white transition-colors text-sm font-medium text-cool-gray">Login</a>
        <button type="button" className="button-custom scale-95">
          <div className="points_wrapper">
            <i className="point"></i>
            <i className="point"></i>
            <i className="point"></i>
            <i className="point"></i>
          </div>
          <span className="inner flex gap-2">
            <Sparkles className="w-4 h-4" />
            Get Started
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
