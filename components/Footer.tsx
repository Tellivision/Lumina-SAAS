
import React from 'react';
import { Settings, Mail, User, MessageSquare, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <div className="overflow-hidden text-slate-50 w-full border-white/5 border-t relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[1000px] h-[400px] bg-lumina-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-lumina-500/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="px-6 md:px-10 z-10 flex flex-col max-w-7xl mr-auto ml-auto pt-16 md:pt-32 pr-6 pb-16 pl-6 relative items-center">
                
                <div className="mb-16 md:mb-24 hover:scale-105 transition-transform duration-300 group cursor-default">
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

                {/* Main Headline - Mobile Optimized */}
                <div className="flex items-center w-full max-w-6xl gap-4 md:gap-8 mb-16 md:mb-32 opacity-95 relative">
                    <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-white/60 flex-1 shadow-[0_1px_2px_rgba(255,255,255,0.1)]"></div>
                    <h2 className="text-2xl md:text-5xl font-serif font-medium uppercase tracking-[0.15em] text-center text-off-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] px-2 md:px-4 leading-tight relative z-10 whitespace-normal break-words w-full max-w-[80vw] md:max-w-none">
                        Design the Future
                    </h2>
                    <div className="h-px bg-gradient-to-l from-transparent via-white/30 to-white/60 flex-1 shadow-[0_1px_2px_rgba(255,255,255,0.1)]"></div>
                </div>

                {/* Contact Form Section - Mobile Stacked */}
                <div className="w-full max-w-5xl mb-16 md:mb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both]">
                    {/* Text Side */}
                    <div className="flex flex-col gap-6 pt-4 text-center lg:text-left">
                        <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                            Get in touch
                        </h3>
                        <p className="text-cool-gray text-lg leading-relaxed">
                            Have questions about Lumina? We're here to help you get started with the next generation of creative tools.
                        </p>
                        <a href="mailto:hello@lumina.design" className="flex items-center justify-center lg:justify-start gap-3 text-lumina-400 hover:text-lumina-300 transition-colors mt-2 group w-full lg:w-fit">
                            <div className="w-10 h-10 rounded-full bg-lumina-500/10 flex items-center justify-center border border-lumina-500/20 group-hover:bg-lumina-500/20 transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span className="font-medium">hello@lumina.design</span>
                        </a>
                    </div>

                    {/* Form Side */}
                    <form className="flex flex-col gap-4 w-full bg-white/5 p-6 md:p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
                        <div className="relative">
                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cool-gray/50" />
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-cool-gray/50 focus:outline-none focus:border-lumina-500/50 focus:ring-1 focus:ring-lumina-500/20 transition-all"
                            />
                        </div>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cool-gray/50" />
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-cool-gray/50 focus:outline-none focus:border-lumina-500/50 focus:ring-1 focus:ring-lumina-500/20 transition-all"
                            />
                        </div>
                        <div className="relative">
                            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-cool-gray/50" />
                            <textarea 
                                placeholder="How can we help?" 
                                rows={4}
                                className="w-full bg-black/20 border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-white placeholder-cool-gray/50 focus:outline-none focus:border-lumina-500/50 focus:ring-1 focus:ring-lumina-500/20 transition-all resize-none"
                            />
                        </div>
                        <button 
                            type="button" 
                            className="w-full bg-gradient-to-r from-lumina-600 to-lumina-500 hover:from-lumina-500 hover:to-lumina-400 text-white font-semibold shadow-lg shadow-lumina-500/20 rounded-xl px-6 py-3.5 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 mt-2"
                        >
                            Send Message
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </form>
                </div>

                <div className="w-full border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-medium text-cool-gray">
                    <p className="hover:text-neutral-300 transition-colors cursor-default text-center md:text-left">© 2025 Lumina Inc. All rights reserved.</p>
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
