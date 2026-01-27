import React from 'react';
import { ArrowRightLeft, Database, Lock } from 'lucide-react';

export default function OperationalThesis() {
    return (
        <section id="thesis" className="w-full px-6 py-24 border-b border-accent/20 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left: The Philosophy */}
                    <div className="lg:col-span-5">
                        <h2 className="text-sm font-mono text-emerald-500 mb-4 tracking-widest uppercase">
                            // 01. OPERATIONAL DOCTRINE
                        </h2>
                        <h3 className="text-3xl font-bold text-foreground font-sans mb-6">
                            THE "DIGITAL WRAPPER" STRATEGY.
                        </h3>
                        <p className="text-accent/80 leading-relaxed mb-8 text-sm">
                            Banks view physical service businesses as "high labor, high leakage." We view them as <strong>Hardware Nodes</strong>.
                            <br /><br />
                            By wrapping legacy assets (Laundromats) with our proprietary software, we invert the cost structure:
                        </p>

                        {/* The Comparison Table (Banker Candy) */}
                        <div className="border border-accent/20 bg-accent/5 p-6">
                            <div className="grid grid-cols-3 gap-4 text-xs font-mono uppercase tracking-wider border-b border-accent/10 pb-4 mb-4 text-accent/50">
                                <div>Metric</div>
                                <div>Legacy Model</div>
                                <div className="text-emerald-500">ERLV Model</div>
                            </div>
                            <div className="space-y-4">
                                <div className="grid grid-cols-3 gap-4 text-sm border-b border-accent/5 pb-2">
                                    <div className="font-bold text-foreground">Labor Ratio</div>
                                    <div className="text-red-400">22-28%</div>
                                    <div className="text-emerald-500 font-bold">&lt; 8% (Remote)</div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 text-sm border-b border-accent/5 pb-2">
                                    <div className="font-bold text-foreground">Revenue Audit</div>
                                    <div className="text-red-400">Manual/Coin</div>
                                    <div className="text-emerald-500 font-bold">100% Digital/Tracked</div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <div className="font-bold text-foreground">Utility Cost</div>
                                    <div className="text-red-400">Fixed/Unmanaged</div>
                                    <div className="text-emerald-500 font-bold">Dynamic Modulation</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: The Infrastructure Map (Visualizing Control) */}
                    <div className="lg:col-span-7 relative">
                        <div className="absolute inset-0 bg-emerald-500/5 blur-3xl rounded-full"></div>
                        <div className="relative h-full border border-accent/20 bg-[#080C14] p-8 flex flex-col justify-between">

                            {/* Diagram Header */}
                            <div className="flex justify-between items-center border-b border-accent/10 pb-4 mb-8">
                                <span className="font-mono text-xs text-accent/50">INFRASTRUCTURE ARCHITECTURE</span>
                                <span className="font-mono text-xs text-emerald-500 animate-pulse">● LIVE CONNECTION</span>
                            </div>

                            {/* The Diagram Nodes */}
                            <div className="space-y-8">
                                {/* Layer 1: Physical */}
                                <div className="flex items-center gap-4">
                                    <div className="p-3 border border-accent/30 bg-accent/5 rounded">
                                        <Database size={20} className="text-accent" />
                                    </div>
                                    <div className="flex-1 border-b border-dashed border-accent/20 relative">
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-background px-2 text-accent/50">IOT TELEMETRY</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-foreground">PHYSICAL ASSET</div>
                                        <div className="text-xs text-accent/50">INFRASTRUCTURE (Hardware)</div>
                                    </div>
                                </div>

                                {/* Layer 2: Control */}
                                <div className="flex items-center gap-4">
                                    <div className="p-3 border border-blue-500/30 bg-blue-500/10 rounded">
                                        <ArrowRightLeft size={20} className="text-blue-400" />
                                    </div>
                                    <div className="flex-1 border-b border-blue-500/20 relative">
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-background px-2 text-blue-400">API / CONTROL LAYER</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-blue-400">OPERATING SYSTEM</div>
                                        <div className="text-xs text-accent/50">PROPRIETARY SUITE (Software)</div>
                                    </div>
                                </div>

                                {/* Layer 3: Security */}
                                <div className="flex items-center gap-4">
                                    <div className="p-3 border border-emerald-500/30 bg-emerald-500/10 rounded">
                                        <Lock size={20} className="text-emerald-500" />
                                    </div>
                                    <div className="flex-1 border-b border-emerald-500/20 relative">
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-background px-2 text-emerald-500">AUDIT & REPORTING</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm font-bold text-emerald-500">GOVERNANCE</div>
                                        <div className="text-xs text-accent/50">ERLV INC (Holding)</div>
                                    </div>
                                </div>
                            </div>

                            {/* Diagram Footer */}
                            <div className="mt-8 pt-4 border-t border-accent/10 text-[10px] font-mono text-accent/30 flex justify-between">
                                <span>LATENCY: 24ms</span>
                                <span>PROTOCOL: ERLV-SECURE-V4</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
