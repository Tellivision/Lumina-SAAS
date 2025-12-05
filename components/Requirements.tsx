
import React from 'react';
import { Cpu, Globe, Zap, ShieldCheck } from 'lucide-react';

const REQUIREMENTS_DATA = [
    {
        title: "Cloud Native",
        desc: "Access your files from any browser. No installation required. All your changes saved instantly.",
        icon: Globe,
        delay: "0.5s"
    },
    {
        title: "GPU Acceleration",
        desc: "Built on WebGL and WebAssembly to deliver 60fps performance even with complex vector networks.",
        icon: Cpu,
        delay: "0.6s"
    },
    {
        title: "Instant Sync",
        desc: "Multiplayer CRDT technology ensures that your team sees every pixel change in real-time.",
        icon: Zap,
        delay: "0.7s"
    },
    {
        title: "Enterprise Secure",
        desc: "SOC 2 Type II compliant. SSO, audit logs, and advanced permissions for your organization.",
        icon: ShieldCheck,
        delay: "0.8s"
    }
];

const Requirements: React.FC = () => {
    return (
        <div className="z-10 md:px-10 lg:py-32 w-full max-w-7xl border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-lumina-500/5 blur-[100px] -z-10 rounded-full pointer-events-none"></div>

            <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-lumina-500/10 border border-lumina-500/20 text-lumina-500 text-xs font-semibold tracking-widest uppercase mb-6 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
                    <span className="w-1.5 h-1.5 rounded-full bg-lumina-500 animate-pulse"></span>
                    Integration
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter text-off-white mb-6 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both]">
                    Seamless Integration
                </h2>
                <p className="text-lg text-cool-gray leading-relaxed animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both]">
                    Lumina works where you work. Our cloud-native infrastructure ensures compatibility across all modern devices and workflows.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                {REQUIREMENTS_DATA.map((item, idx) => (
                    <div 
                        key={idx} 
                        className={`group h-[320px] [perspective:1000px] animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_${item.delay}_both]`}
                    >
                        <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                            {/* Front Face */}
                            <div className="absolute inset-0 h-full w-full rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.07] p-8 flex flex-col items-center justify-center text-center [backface-visibility:hidden] shadow-2xl">
                                <div className="w-16 h-16 rounded-2xl bg-lumina-500/10 flex items-center justify-center text-lumina-500 mb-6 group-hover:scale-110 transition-all duration-300 border border-lumina-500/20 shadow-[0_0_20px_rgba(255,45,85,0.1)]">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{item.title}</h3>
                                <span className="absolute bottom-8 text-xs font-medium text-cool-gray/40 uppercase tracking-widest border border-white/5 px-3 py-1 rounded-full bg-white/5">
                                    Hover to flip
                                </span>
                            </div>

                            {/* Back Face */}
                            <div className="absolute inset-0 h-full w-full rounded-2xl bg-[#1C1E21] border border-lumina-500/30 p-8 flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden] shadow-[0_0_30px_rgba(255,45,85,0.15)]">
                                <div className="w-10 h-10 rounded-full bg-lumina-500/20 flex items-center justify-center text-lumina-500 mb-4">
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-semibold text-white mb-4">{item.title}</h3>
                                <p className="text-sm text-cool-gray leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Requirements;
