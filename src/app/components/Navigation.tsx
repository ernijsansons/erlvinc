// app/components/Navigation.tsx
"use client"; // This allows interactivity
import React, { useState } from 'react';
import { Lock } from 'lucide-react';
import LoginModal from './LoginModal';

export default function Navigation() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    return (
        <>
            <header className="w-full border-b border-accent/20 bg-background">
                {/* Top Bar */}
                <div className="flex items-center justify-between px-6 py-2 text-xs font-medium tracking-wider border-b border-accent/10 text-accent/80 font-mono">
                    <div className="flex items-center gap-4">
                        <span>ERLV INC.</span>
                        <span className="hidden sm:inline">[NORTH AMERICAN OPS]</span>
                    </div>
                    <button
                        onClick={() => setIsLoginOpen(true)}
                        className="flex items-center gap-2 cursor-pointer hover:text-emerald-500 transition-colors"
                    >
                        <Lock size={12} />
                        <span>[SECURE PORTAL LOGIN]</span>
                    </button>
                </div>

                {/* Main Nav */}
                <nav className="flex items-center justify-between px-6 py-6">
                    <div className="text-2xl font-bold tracking-tighter text-foreground font-sans">
                        ERLV INC.
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-accent hover:text-foreground transition-colors">
                        <a href="/#portfolio" className="hover:text-emerald-500 transition-colors">STRATEGY</a>
                        <a href="/#thesis" className="hover:text-emerald-500 transition-colors">THESIS</a>
                        <a href="/legal" className="hover:text-emerald-500 transition-colors">LEGAL & COMPLIANCE</a>
                    </div>
                </nav>
            </header>

            {/* Render the Login Modal */}
            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    );
}
