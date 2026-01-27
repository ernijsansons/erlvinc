import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="w-full px-6 py-24 md:py-32 border-b border-accent/20">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-8 leading-tight font-sans">
                    CAPITAL EFFICIENCY <br />
                    <span className="text-accent/60">THROUGH ALGORITHMIC OPERATIONS.</span>
                </h1>

                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <p className="text-lg md:text-xl text-accent max-w-2xl leading-relaxed font-light">
                        ERLV Inc. is a private holding company integrating high-value physical assets with proprietary operational software. We acquire, digitize, and optimize legacy cash-flow businesses.
                    </p>

                    <a
                        href="#portfolio"
                        className="group flex items-center gap-3 px-6 py-3 border border-accent/30 bg-accent/5 hover:bg-accent/10 hover:border-emerald-500/50 transition-all duration-300"
                    >
                        <span className="font-mono text-sm font-bold text-emerald-500 tracking-wider">
                            [ VIEW PORTFOLIO ASSETS ]
                        </span>
                        <ArrowRight className="w-4 h-4 text-emerald-500 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
}
