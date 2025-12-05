
import React from 'react';
import { Settings } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <div className="overflow-hidden text-slate-50 w-full border-white/5 border-t relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[400px] bg-lumina-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-lumina-500/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="md:px-10 z-10 flex flex-col max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-16 pl-6 relative items-center">
                
                <div className="mb-24 hover:scale-105 transition-transform duration-300 group cursor-default">
                    <div className="flex items-center gap-4 justify-center">
                        <div className="w-12 h-12 bg-lumina-500 rounded-xl flex items-center justify-center relative overflow-hidden flex-shrink-0 shadow-xl shadow-lumina-500/20">
                            <svg viewBox="0 0 24 24" className="w-full h-full text-white p-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="4" y1="20" x2="12" y2="12" />
                                <line x1="4" y1="20" x2="15" y2="16" />
                                <line x1="4" y1="20" x2="15" y2="9" />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center text-left">
                            <span className="text-white font-bold text-3xl leading-none tracking-tight">Lumina</span>
                            <span className="text-cool-gray text-[0.65rem] font-bold tracking-[0.15em] uppercase leading-none mt-1.5">SaaS Company</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center w-full max-w-6xl gap-8 mb-32 opacity-95 relative">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-white/60 flex-1 shadow-[0_1px_2px_rgba(255,255,255,0.1)]"></div>
                    <h2 className="text-3xl md:text-5xl font-serif font-medium uppercase tracking-[0.15em] text-center text-off-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] whitespace-nowrap px-4 leading-none relative z-10">
                        Design the Future
                    </h2>
                    <div className="h-px bg-gradient-to-l from-transparent via-white/30 to-white/60 flex-1 shadow-[0_1px_2px_rgba(255,255,255,0.1)]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full mb-32 text-center md:text-left relative z-20">
                    <div className="flex flex-col gap-8 items-center md:items-start group">
                        <h3 className="font-medium text-sm uppercase tracking-widest text-lumina-500 border-b border-lumina-500/20 pb-3 w-full md:w-auto group-hover:border-lumina-500/50 transition-colors">Headquarters</h3>
                        <div className="space-y-3 text-cool-gray font-normal text-lg leading-relaxed group-hover:text-white transition-colors">
                            <p className="font-medium text-white">Lumina Inc.</p>
                            <p>88 Townsend St.</p>
                            <p>San Francisco, CA 94107</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 items-center md:items-start group">
                        <h3 className="font-medium text-sm uppercase tracking-widest text-lumina-500 border-b border-lumina-500/20 pb-3 w-full md:w-auto group-hover:border-lumina-500/50 transition-colors">Contact</h3>
                        <div className="space-y-3 text-cool-gray font-normal text-lg leading-relaxed group-hover:text-white transition-colors">
                            <p>Sales: <span className="text-white tabular-nums tracking-wide">+1 (555) 123-4567</span></p>
                            <a href="mailto:hello@lumina.design" className="block mt-1 hover:text-lumina-400 transition-colors underline decoration-white/10 hover:decoration-lumina-400/50 underline-offset-4 decoration-1">hello@lumina.design</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-8 items-center md:items-start group">
                        <h3 className="font-medium text-sm uppercase tracking-widest text-lumina-500 border-b border-lumina-500/20 pb-3 w-full md:w-auto group-hover:border-lumina-500/50 transition-colors">Legal</h3>
                        <div className="space-y-4 text-cool-gray font-normal text-lg leading-relaxed group-hover:text-white transition-colors">
                            <div className="flex flex-col">
                                <a href="#" className="hover:text-lumina-400 transition-colors">Terms of Service</a>
                            </div>
                            <div className="flex flex-col">
                                <a href="#" className="hover:text-lumina-400 transition-colors">Privacy Policy</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-medium text-cool-gray">
                    <p className="hover:text-neutral-300 transition-colors cursor-default">© 2025 Lumina Inc. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                        <a href="#" className="hover:text-white transition-colors hover:underline decoration-white/20 underline-offset-4">Twitter</a>
                        <a href="#" className="hover:text-white transition-colors hover:underline decoration-white/20 underline-offset-4">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors hover:underline decoration-white/20 underline-offset-4">GitHub</a>
                        <button className="text-neutral-400 bg-white/5 hover:bg-white/10 hover:text-white p-2.5 rounded-xl transition-all border border-white/5" aria-label="Settings">
                            <Settings className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
