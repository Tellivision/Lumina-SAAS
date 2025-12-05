import React from 'react';
import { Lightbulb, PenTool, Share2, Rocket } from 'lucide-react';

const Workflow: React.FC = () => {
    return (
        <div id="workflow" className="z-10 md:px-10 lg:py-32 w-full max-w-7xl border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
            <div className="flex flex-col md:flex-row justify-between md:items-end mb-20 gap-8">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-lumina-500/10 border border-lumina-500/20 text-lumina-500 text-xs font-semibold tracking-widest uppercase mb-6 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
                        <span className="w-1.5 h-1.5 rounded-full bg-lumina-500 animate-pulse"></span>
                        Process
                    </div>
                    <h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-off-white animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both] mb-6">
                        From Idea to Product
                    </h2>
                    <p className="text-lg text-cool-gray max-w-xl animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both]">
                        Accelerate your product delivery lifecycle with a toolchain designed for modern agile teams.
                    </p>
                </div>
            </div>

            <div className="flex flex-col w-full max-w-5xl mx-auto relative">
                <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-lumina-500 via-white/10 to-transparent md:left-8"></div>

                {/* Step 1 */}
                <div className="relative pl-20 md:pl-28 py-4 group animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both]">
                    <div className="absolute left-0 top-4 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center z-10 group-hover:border-lumina-500/50 group-hover:shadow-[0_0_20px_rgba(255,45,85,0.2)] transition-all duration-300">
                        <span className="text-lumina-500 font-bold text-lg md:text-xl">01</span>
                    </div>
                    <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all duration-300 hover:border-white/10 cursor-default">
                        <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3 tracking-tight">
                            Ideation & Wireframing
                            <Lightbulb className="w-5 h-5 text-cool-gray" />
                        </h3>
                        <p className="text-cool-gray text-sm leading-relaxed max-w-2xl">
                            Start with infinite whiteboard canvases. Brainstorm, stickie-note, and sketch out low-fidelity wireframes with your team in real-time.
                        </p>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="relative pl-20 md:pl-28 py-4 group animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.6s_both]">
                    <div className="absolute left-0 top-4 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center z-10 group-hover:border-lumina-500/50 group-hover:shadow-[0_0_20px_rgba(255,45,85,0.2)] transition-all duration-300">
                        <span className="text-cool-gray group-hover:text-lumina-500 transition-colors font-bold text-lg md:text-xl">02</span>
                    </div>
                    <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all duration-300 hover:border-white/10 cursor-default">
                        <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3 tracking-tight">
                            High-Fidelity Design
                            <PenTool className="w-5 h-5 text-cool-gray" />
                        </h3>
                        <p className="text-cool-gray text-sm leading-relaxed max-w-2xl">
                            Move to the editor. Use components, variables, and auto-layout to build pixel-perfect interfaces that scale across devices.
                        </p>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="relative pl-20 md:pl-28 py-4 group animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.7s_both]">
                    <div className="absolute left-0 top-4 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center z-10 group-hover:border-lumina-500/50 group-hover:shadow-[0_0_20px_rgba(255,45,85,0.2)] transition-all duration-300">
                        <span className="text-cool-gray group-hover:text-lumina-500 transition-colors font-bold text-lg md:text-xl">03</span>
                    </div>
                    <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.07] transition-all duration-300 hover:border-white/10 cursor-default">
                        <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3 tracking-tight">
                            Review & Handoff
                            <Share2 className="w-5 h-5 text-cool-gray" />
                        </h3>
                        <p className="text-cool-gray text-sm leading-relaxed max-w-2xl">
                            Share links with stakeholders for comments. Developers get a dedicated inspect mode with generated CSS, Swift, and Kotlin code.
                        </p>
                    </div>
                </div>

                {/* Step 4 */}
                <div className="relative pl-20 md:pl-28 py-4 group animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.8s_both]">
                    <div className="absolute left-0 top-4 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-lumina-500 to-amber-600 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(255,45,85,0.4)] scale-110">
                        <Rocket className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-lumina-500/30 transition-all duration-300 cursor-default relative overflow-hidden">
                        <div className="absolute inset-0 bg-lumina-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-3 relative z-10 tracking-tight">
                            Ship It!
                            <span className="px-2 py-0.5 rounded-lg bg-lumina-500/20 text-lumina-400 text-[10px] font-bold uppercase tracking-wider">Production</span>
                        </h3>
                        <p className="text-neutral-300 text-sm leading-relaxed max-w-2xl relative z-10">
                            Push to production with confidence. Your design system is synchronized with your codebase, ensuring the final product matches the vision.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workflow;