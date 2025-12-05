import React, { useState } from 'react';
import { ArrowRight, Sparkles, Layers, Monitor, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<'design' | 'workspace'>('design');

  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 pt-24 pb-10 items-center relative z-10">
      {/* Left: Title & Description */}
      <div className="col-span-1 lg:col-span-6 pl-6 md:pl-10 pt-10 lg:pt-0 flex flex-col justify-center">
        <div className="inline-flex gap-2 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.1s_both] text-lumina-500 mb-8 items-center">
             <span className="w-2 h-2 rounded-full bg-lumina-500 animate-pulse"></span>
             <span className="uppercase text-xs font-bold text-lumina-500/80 tracking-widest">Next Gen Creative Suite</span>
        </div>

        <h1 className="md:text-7xl lg:text-8xl leading-[0.9] animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both] text-6xl font-medium text-off-white tracking-tighter mb-6">
          Unleash your <br/>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-off-white via-cool-gray to-cool-gray/50">
            Creative Flow.
          </span>
        </h1>

        <p className="leading-relaxed animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.35s_both] text-lg font-medium text-cool-gray max-w-lg">
          Whether it's vector design, 3D modeling, or interactive prototyping – Lumina empowers you. Experience the future of collaborative design with real-time sync.
        </p>

        <div className="flex flex-wrap gap-6 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both] mt-10 items-center">
          <a href="#" className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_10px_rgba(255,45,85,0.45)] bg-gradient-to-b from-white/20 via-white/0 to-white/5 rounded-xl relative shadow-[0_0_25px_rgba(255,45,85,0.3),0_8px_40px_rgba(255,45,85,0.15)]">
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <div className="absolute inset-[-100%] w-[300%] h-[300%] left-[-100%] top-[-100%] animate-spin-slow" style={{ background: 'conic-gradient(from 0deg, transparent 0deg, transparent 80deg, rgba(255,45,85,0.8) 180deg, transparent 280deg, transparent 360deg)' }}>
              </div>
            </div>
            <div className="absolute inset-[1px] rounded-xl backdrop-blur-xl z-0 bg-charcoal/90"></div>
            <div className="z-10 flex gap-3 sm:w-auto overflow-hidden text-sm font-medium text-off-white w-full rounded-xl pt-3 pr-5 pb-3 pl-4 relative items-center">
              <div className="relative z-20 w-7 h-7 rounded-lg bg-gradient-to-b from-lumina-400 to-lumina-600 flex items-center justify-center shadow-lg shadow-lumina-500/30 ring-1 ring-white/20 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="whitespace-nowrap group-hover:text-white transition-colors text-base font-medium text-off-white/95 tracking-tight z-10 relative">Start Free Trial</span>
              <span className="inline-flex items-center justify-center z-10 bg-white/10 w-6 h-6 rounded-lg ml-1 relative group-hover:translate-x-0.5 transition-transform text-white/80 group-hover:text-white">
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>
          </a>
          <div className="flex items-center gap-2 text-xs font-medium text-cool-gray">
             <span>No credit card required.</span>
          </div>
        </div>
      </div>

      {/* Right: Preview & Steps */}
      <div className="col-span-1 lg:col-span-6 md:pr-10 flex flex-col lg:pt-20 h-full pt-10 pr-6 items-end justify-center relative z-10">
        <div className="overflow-hidden group lg:mr-0 bg-[#0a0a0a]/50 w-full max-w-lg border-white/10 border rounded-2xl mr-auto ml-auto p-2.5 relative shadow-2xl backdrop-blur-sm animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
          
          {/* Slides Viewport */}
          <div className="relative w-full aspect-[4/3] md:aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-white/5">
            
            {/* Slide 1 */}
            <div className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeSlide === 'design' ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-105 pointer-events-none z-10'}`}>
              <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1600" className="hover:scale-105 transition-transform duration-1000 opacity-80 w-full h-full object-cover" alt="Design UI" />
              <div className="bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex items-center gap-2 mb-2">
                     <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-lumina-500 text-white uppercase tracking-wider">Editor</span>
                </div>
                <h3 className="text-2xl font-semibold text-off-white tracking-tight mb-1">Pixel Perfect</h3>
                <p className="text-sm text-cool-gray line-clamp-2 leading-relaxed">
                  Advanced vector editing with GPU acceleration.
                </p>
              </div>
            </div>

            {/* Slide 2 */}
            <div className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${activeSlide === 'workspace' ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-105 pointer-events-none z-10'}`}>
              <img src="https://images.unsplash.com/photo-1600697395543-ef3ee6e9af7b?auto=format&fit=crop&q=80&w=1600" className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-1000" alt="Workspace" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-500 text-white uppercase tracking-wider">
                      Collaborate
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-off-white tracking-tight mb-1">
                  Team Sync
                </h3>
                <p className="text-sm text-cool-gray line-clamp-2 leading-relaxed">
                  Real-time multiplayer editing for your entire product team.
                </p>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="grid grid-cols-2 gap-2 mt-2.5">
            <button 
              onClick={() => setActiveSlide('design')}
              className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 text-left group ${activeSlide === 'design' ? 'bg-white/10 border-white/10' : 'bg-transparent border-transparent hover:bg-white/5'}`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg ${activeSlide === 'design' ? 'bg-lumina-500 text-white shadow-lumina-500/10' : 'bg-white/5 text-cool-gray'}`}>
                <Layers className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className={`text-xs font-semibold tracking-wide transition-colors ${activeSlide === 'design' ? 'text-off-white' : 'text-cool-gray'}`}>Design</span>
                <span className="text-[10px] font-medium text-cool-gray tracking-wider uppercase">Vector & Raster</span>
              </div>
            </button>

            <button 
              onClick={() => setActiveSlide('workspace')}
              className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-300 text-left group ${activeSlide === 'workspace' ? 'bg-white/10 border-white/10' : 'bg-transparent border-transparent hover:bg-white/5'}`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 border border-white/5 shadow-lg ${activeSlide === 'workspace' ? 'bg-blue-500 text-white' : 'bg-white/5 text-cool-gray'}`}>
                <Monitor className="w-3.5 h-3.5" />
              </div>
              <div className="flex flex-col">
                <span className={`text-xs font-semibold tracking-wide transition-colors ${activeSlide === 'workspace' ? 'text-off-white' : 'text-cool-gray'}`}>Workspace</span>
                <span className="text-[10px] font-medium text-cool-gray tracking-wider uppercase">Live Sync</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Background Beams */}
       <div className="fixed z-0 pointer-events-none flex opacity-60 w-full max-w-7xl border-white/5 border-r mr-auto ml-auto top-0 right-0 bottom-0 left-0">
        <div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
            <span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">01</span>
        </div>
        <div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
            <div className="absolute top-0 -left-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-lumina-500/60 to-transparent animate-beam-1"></div>
            <span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">02</span>
        </div>
        <div className="flex-1 border-l border-white/5 h-full flex justify-center relative overflow-hidden">
            <div className="absolute top-0 -left-[1px] w-[1px] h-96 bg-gradient-to-b from-transparent via-lumina-500/80 to-transparent animate-beam-2"></div>
            <div className="h-full border-r border-dashed border-lumina-500/20 w-px"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-64 bg-gradient-to-b from-transparent via-lumina-500 to-transparent animate-beam-1" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute bottom-[30%] translate-y-1/2 text-lumina-500/80 rotate-90">
                <Play className="w-4 h-4 fill-current" />
            </div>
            <span className="absolute bottom-8 text-lumina-500/30 text-xs font-mono">03</span>
        </div>
        <div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
            <div className="absolute top-0 -left-[1px] w-[1px] h-48 bg-gradient-to-b from-transparent via-lumina-500/60 to-transparent animate-beam-3"></div>
            <span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">04</span>
        </div>
        <div className="flex-1 border-l border-white/5 h-full relative overflow-hidden">
            <span className="absolute bottom-8 left-4 text-white/10 text-xs font-mono">05</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;