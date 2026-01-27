// app/components/PrivatePortfolio.tsx
import React from 'react';
import { Lock, ShieldAlert, Briefcase } from 'lucide-react';

export default function PrivatePortfolio() {
    return (
        <section id="portfolio" className="w-full px-6 py-24 border-b border-accent/20 bg-background">
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <h2 className="text-sm font-mono text-emerald-500 mb-2 tracking-widest uppercase">
                            // CAPITAL DEPLOYMENT
                        </h2>
                        <h3 className="text-3xl font-bold text-foreground font-sans">
                            STRATEGIC VEHICLES
                        </h3>
                    </div>
                    <div className="text-right hidden md:block">
                        <p className="text-xs font-mono text-accent/40 uppercase">Cumulative Transaction Value</p>
                        <div className="flex items-center justify-end gap-2 text-accent/60 font-mono">
                            <Lock size={12} />
                            <span>[REDACTED - LP ACCESS ONLY]</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* STRATEGY 1: CLOSED */}
                    <div className="relative p-8 border border-accent/10 bg-accent/[0.02] overflow-hidden group">
                        {/* The "Closed" Overlay */}
                        <div className="absolute top-4 right-4">
                            <div className="inline-flex items-center px-2 py-1 border border-accent/20 bg-accent/10 text-[10px] font-mono text-accent/50 uppercase tracking-wider">
                                Status: Closed
                            </div>
                        </div>

                        <div className="mb-8 opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500">
                            <span className="font-mono text-4xl text-accent/20 font-bold">01</span>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-2">NORTH AMERICAN INDUSTRIAL I</h3>
                        <p className="text-xs font-mono text-accent/60 uppercase tracking-wider mb-6">Vintage: 2023 | Strategy: Roll-up</p>

                        <p className="text-sm text-accent/60 leading-relaxed mb-8 blur-[2px] select-none">
                            A concentrated portfolio of high-cash-flow light industrial assets focused on the Texas Triangle. Operational improvements driven by proprietary telemetry.
                        </p>

                        <div className="flex items-center gap-2 text-xs text-accent/40 font-mono">
                            <Lock size={12} />
                            <span>DETAILS RESTRICTED</span>
                        </div>
                    </div>

                    {/* STRATEGY 2: OVERSUBSCRIBED (Implies high demand) */}
                    <div className="relative p-8 border border-emerald-900/30 bg-emerald-900/[0.05] overflow-hidden">
                        <div className="absolute top-4 right-4">
                            <div className="inline-flex items-center px-2 py-1 border border-emerald-500/30 bg-emerald-500/10 text-[10px] font-bold font-mono text-emerald-500 uppercase tracking-wider">
                                Status: Oversubscribed
                            </div>
                        </div>

                        <div className="mb-8">
                            <span className="font-mono text-4xl text-emerald-500/20 font-bold">02</span>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-2">VERTICAL SAAS & INFRA II</h3>
                        <p className="text-xs font-mono text-emerald-500/60 uppercase tracking-wider mb-6">Vintage: 2024 | Strategy: Operational VC</p>

                        <p className="text-sm text-accent/80 leading-relaxed mb-8">
                            Active deployment into "Blue Collar" software architectures. Focusing on revenue assurance, audit-grade telemetry, and labor-reduction protocols.
                        </p>

                        <button className="w-full py-2 border border-emerald-500/30 text-emerald-500 text-xs font-bold tracking-wider hover:bg-emerald-500/10 transition-colors">
                            LP LOGIN REQUIRED FOR PERFORMANCE DATA
                        </button>
                    </div>

                    {/* STRATEGY 3: PRIVATE */}
                    <div className="relative p-8 border border-accent/10 bg-accent/[0.02] overflow-hidden group">
                        <div className="absolute top-4 right-4">
                            <div className="inline-flex items-center px-2 py-1 border border-accent/20 bg-accent/10 text-[10px] font-mono text-accent/50 uppercase tracking-wider">
                                Status: By Invitation
                            </div>
                        </div>

                        <div className="mb-8 opacity-50">
                            <span className="font-mono text-4xl text-accent/20 font-bold">03</span>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-2">SPECIAL SITUATIONS III</h3>
                        <p className="text-xs font-mono text-accent/60 uppercase tracking-wider mb-6">Vintage: 2025 | Strategy: Distressed/Value</p>

                        <p className="text-sm text-accent/60 leading-relaxed mb-8 blur-[2px] select-none">
                            Opportunistic acquisition of distressed operational assets with heavy technological upside. Currently evaluating targets in logistics and fabric care.
                        </p>

                        <div className="flex items-center gap-2 text-xs text-accent/40 font-mono">
                            <ShieldAlert size={12} />
                            <span>WAITLIST ONLY</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
