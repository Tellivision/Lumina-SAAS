import React, { useState, useEffect } from 'react';
import { 
    PenTool, Box, Users, Layers, ChevronRight, Check, ArrowRight, 
    Monitor, Cpu, Cloud, ShieldCheck, RefreshCw, Smartphone, 
    Zap, Code, Workflow
} from 'lucide-react';
import { FeatureDetail, MainCategory } from '../types';

const FEATURE_DATA: Record<string, FeatureDetail> = {
    'vector': {
        title: 'Vector Engine',
        subtitle: 'Precision Design',
        desc: 'Industry-leading vector networks allowing for complex shapes with fewer points. Non-destructive boolean operations and smart alignment tools built for professionals.',
        reqs: [
            { label: 'Platform', val: 'Web / Desktop', sub: 'Cross-platform', icon: <Monitor className="w-4 h-4" /> },
            { label: 'Engine', val: 'WebGL 2.0', sub: 'GPU Accelerated', icon: <Cpu className="w-4 h-4" /> },
            { label: 'Export', val: 'SVG / PDF', sub: 'Production Ready', icon: <Code className="w-4 h-4" /> },
        ],
        list: ['Boolean Groups & Masks', 'Auto Layout Support', 'Variable Fonts', 'Component Properties', 'Smart Selection'],
        btnText: 'Start Designing'
    },
    '3d': {
        title: '3D Studio',
        subtitle: 'Web-based Modeling',
        desc: 'Create stunning 3D assets directly in the browser. Import OBJ/GLTF or build from scratch. Apply physical materials and lighting in real-time.',
        reqs: [
            { label: 'Rendering', val: 'Ray Tracing', sub: 'Real-time', icon: <Zap className="w-4 h-4" /> },
            { label: 'Assets', val: 'Library', sub: '10k+ Models', icon: <Box className="w-4 h-4" /> }
        ],
        list: ['PBR Materials', 'Environment Lighting', 'Animation Timeline', 'Interactive States'],
        btnText: 'Explore 3D'
    },
    'proto': {
        title: 'Smart Prototyping',
        subtitle: 'Interaction Design',
        desc: 'Connect your screens with advanced logic. Use variables, conditionals, and expressions to create realistic prototypes that feel like the final product.',
        reqs: [
            { label: 'Preview', val: 'Mobile App', sub: 'iOS / Android', icon: <Smartphone className="w-4 h-4" /> },
            { label: 'Logic', val: 'Variables', sub: 'Advanced', icon: <Workflow className="w-4 h-4" /> }
        ],
        list: ['Smart Animate', 'Drag & Drop Triggers', 'Device Sensors', 'Voice Input'],
        btnText: 'Prototype Now'
    },
    'collab': {
        title: 'Team Sync',
        subtitle: 'Real-time Collaboration',
        desc: 'Work together in the same file without conflict. See cursors, leave comments, and follow presenters in observation mode. Version history included.',
        reqs: [
            { label: 'Users', val: 'Unlimited', sub: 'Per File', icon: <Users className="w-4 h-4" /> },
            { label: 'Sync', val: '< 50ms', sub: 'Latency', icon: <RefreshCw className="w-4 h-4" /> }
        ],
        list: ['Multiplayer Editing', 'Contextual Comments', 'Branching & Merging', 'Audio Chat'],
        btnText: 'Invite Team'
    },
     'systems': {
        title: 'Design Systems',
        subtitle: 'Scalable Libraries',
        desc: 'Publish components and styles to a shared library. Update once, propagate changes everywhere. Manage tokens and themes with ease.',
        reqs: [
            { label: 'Storage', val: 'Cloud', sub: 'Global CDN', icon: <Cloud className="w-4 h-4" /> },
            { label: 'Security', val: 'SSO', sub: 'Enterprise', icon: <ShieldCheck className="w-4 h-4" /> }
        ],
        list: ['Component Properties', 'Design Tokens', 'Theme Switcher', 'Analytics'],
        btnText: 'Build System'
    }
};

const CATEGORIES: MainCategory[] = [
    {
        id: 'design',
        name: 'Design Tools',
        icon: <PenTool className="w-5 h-5" />,
        subCategories: [
            { id: 'vector', name: 'Vector Engine', data: FEATURE_DATA['vector'] },
            { id: '3d', name: '3D Studio', subLabel: 'New', data: FEATURE_DATA['3d'] }
        ]
    },
    {
        id: 'prototype',
        name: 'Prototyping',
        icon: <Smartphone className="w-5 h-5" />,
        subCategories: [
             { id: 'proto', name: 'Interactions', data: FEATURE_DATA['proto'] }
        ]
    },
    {
        id: 'collaborate',
        name: 'Collaboration',
        icon: <Users className="w-5 h-5" />,
        subCategories: [
             { id: 'collab', name: 'Team Sync', data: FEATURE_DATA['collab'] }
        ]
    },
    {
        id: 'system',
        name: 'Design Systems',
        icon: <Box className="w-5 h-5" />,
        subCategories: [
             { id: 'systems', name: 'Libraries', data: FEATURE_DATA['systems'] }
        ]
    }
];

const Features: React.FC = () => {
    const [activeCatId, setActiveCatId] = useState<string>('design');
    const [activeSubId, setActiveSubId] = useState<string>('vector');

    const activeData = FEATURE_DATA[activeSubId];

    useEffect(() => {
        if (window.initInViewAnimations) {
            // Re-run animations when content changes
            setTimeout(() => window.initInViewAnimations('.animate-on-scroll'), 50);
        }
    }, [activeSubId, activeCatId]);

    return (
        <div id="features" className="z-10 flex flex-col md:px-10 lg:py-32 w-full max-w-7xl border-white/5 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
             <div className="flex justify-start mb-12 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both] [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both] [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both]">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm text-lumina-400 text-sm font-medium tracking-wide uppercase hover:bg-white/10 transition-colors cursor-default">
                    <Zap className="w-4 h-4 fill-lumina-500/50" />
                    <span>Explore the Suite</span>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both] [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.5s_both] relative z-20 font-sans">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[80%] bg-lumina-500/10 blur-[120px] -z-10 rounded-full pointer-events-none"></div>

                <div className="bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 shadow-2xl ring-1 ring-white/5 animate-on-scroll [animation:fadeSlideIn_1s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both]">
                    
                    {/* Sidebar */}
                    <div className="lg:col-span-4 lg:border-b-0 lg:border-r flex flex-col bg-black/20 border-white/5 border-b pt-6 pr-6 pb-6 pl-6 gap-x-2 gap-y-2">
                        <h2 className="text-xl font-semibold text-off-white mb-6 px-2 tracking-tight">Modules</h2>
                        
                        {CATEGORIES.map(cat => (
                            <div key={cat.id} className="flex flex-col gap-1 w-full relative">
                                <button
                                    onClick={() => setActiveCatId(prev => prev === cat.id ? '' : cat.id)}
                                    className={`flex group transition-all duration-200 text-left w-full border rounded-xl pt-3.5 pr-4 pb-3.5 pl-4 items-center justify-between ${activeCatId === cat.id ? 'bg-lumina-500/10 border-lumina-500/50 text-white' : 'border-transparent text-cool-gray hover:bg-white/5 hover:text-white'}`}
                                >
                                    <div className="flex items-center gap-3">
                                        {cat.icon}
                                        <span className="font-normal text-sm">{cat.name}</span>
                                    </div>
                                    <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${activeCatId === cat.id ? 'rotate-90 opacity-100' : 'rotate-0 opacity-0 group-hover:opacity-100'}`} />
                                </button>

                                {activeCatId === cat.id && (
                                    <div className="flex flex-col gap-1 pl-4 ml-3 border-l border-lumina-500/20 my-1 transition-all">
                                        {cat.subCategories.map(sub => (
                                            <button
                                                key={sub.id}
                                                onClick={() => setActiveSubId(sub.id)}
                                                className={`flex transition-all group text-sm text-left w-full border rounded-lg pt-2.5 pr-4 pb-2.5 pl-4 items-center justify-between ${activeSubId === sub.id ? 'bg-white/5 border-white/5 text-white' : 'border-transparent text-cool-gray hover:text-white hover:bg-white/5'}`}
                                            >
                                                <div className="flex flex-col gap-0.5">
                                                    <span className="font-normal">{sub.name}</span>
                                                    {sub.subLabel && <span className="text-[10px] text-cool-gray/80 font-normal">{sub.subLabel}</span>}
                                                </div>
                                                {activeSubId === sub.id && <span className="w-1.5 h-1.5 rounded-full bg-lumina-500"></span>}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="min-h-[600px] lg:col-span-8 md:p-10 bg-gradient-to-bl from-black/0 via-black/10 to-black/0 px-8 py-8 relative">
                        {activeData && (
                            <div key={activeSubId} className="animate-on-scroll [animation:fadeSlideIn_0.4s_cubic-bezier(0.2,0.8,0.2,1)_both]">
                                <div className="flex items-start gap-5 mb-8 animate-on-scroll [animation:fadeSlideIn_0.4s_cubic-bezier(0.2,0.8,0.2,1)_both]">
                                    <div className="w-16 h-16 rounded-2xl bg-lumina-500/10 flex items-center justify-center border border-lumina-500/20 shadow-[0_0_30px_rgba(255,45,85,0.1)]">
                                        <Layers className="w-8 h-8 text-lumina-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-3xl font-semibold text-off-white tracking-tight mb-1">{activeData.title}</h3>
                                        <p className="font-medium text-lumina-500">{activeData.subtitle}</p>
                                    </div>
                                </div>

                                <p className="text-cool-gray leading-relaxed mb-10 text-sm md:text-base max-w-2xl animate-on-scroll [animation:fadeSlideIn_0.4s_cubic-bezier(0.2,0.8,0.2,1)_0.1s_both]">
                                    {activeData.desc}
                                </p>

                                <div className="mb-10 animate-on-scroll [animation:fadeSlideIn_0.4s_cubic-bezier(0.2,0.8,0.2,1)_0.2s_both]">
                                    <h4 className="text-off-white font-medium mb-4 flex items-center gap-2">
                                        <span className="w-1 h-4 bg-lumina-500 rounded-full"></span>
                                        Specifications
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {activeData.reqs.map((req, idx) => (
                                            <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors">
                                                <div className="flex items-center gap-2 mb-2 text-cool-gray">
                                                    {req.icon}
                                                    <span className="text-xs uppercase tracking-wider font-semibold">{req.label}</span>
                                                </div>
                                                <div className="text-white font-semibold">{req.val}</div>
                                                <div className="text-cool-gray/70 text-xs mt-0.5">{req.sub}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-10 animate-on-scroll [animation:fadeSlideIn_0.4s_cubic-bezier(0.2,0.8,0.2,1)_0.3s_both]">
                                    <h4 className="text-off-white font-medium mb-4 flex items-center gap-2">
                                        <span className="w-1 h-4 bg-lumina-500 rounded-full"></span>
                                        Key Features
                                    </h4>
                                    <div className="space-y-3">
                                        {activeData.list.map((item, idx) => (
                                            <div key={idx} className="flex items-center gap-3 group/item">
                                                <div className="w-5 h-5 rounded-lg bg-green-500/10 flex items-center justify-center border border-green-500/20 group-hover/item:bg-green-500/20 transition-colors">
                                                    <Check className="w-3 h-3 text-green-500" />
                                                </div>
                                                <span className="text-cool-gray text-sm">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-lumina-600 to-lumina-500 hover:from-lumina-500 hover:to-lumina-400 text-white font-semibold shadow-lg shadow-lumina-500/20 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 animate-on-scroll [animation:fadeSlideIn_0.4s_cubic-bezier(0.2,0.8,0.2,1)_0.4s_both]">
                                    {activeData.btnText}
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;