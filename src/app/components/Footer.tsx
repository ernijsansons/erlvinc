import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full border-t border-accent/20 bg-background py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-xs">

                {/* Column 1: Identity */}
                <div className="md:col-span-1 space-y-4">
                    <div className="font-bold text-lg tracking-tighter text-foreground font-sans">
                        ERLV INC.
                    </div>
                    <p className="text-accent/60 leading-relaxed">
                        North American Operations<br />
                        Los Angeles, California<br />
                        United States
                    </p>
                    <div className="flex items-center gap-2 text-emerald-500 font-mono text-[10px] uppercase tracking-widest">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        Systems Nominal
                    </div>
                </div>

                {/* Column 2: Governance */}
                <div className="md:col-span-2 space-y-4">
                    <h4 className="font-mono text-accent/40 uppercase tracking-widest mb-2">Corporate Governance</h4>
                    <p className="text-accent/60 leading-relaxed max-w-md">
                        ERLV Inc. maintains strict separation of assets. Operating entities are managed as distinct operational units. Consolidated financial reporting is available exclusively for qualified lending institutions and strategic partners via the Secure Portal.
                    </p>
                </div>

                {/* Column 3: Legal */}
                <div className="md:col-span-1 space-y-4 text-right md:text-left">
                    <div className="flex flex-col gap-2 text-accent/40 hover:text-accent transition-colors cursor-pointer">
                        <span>Privacy Policy</span>
                        <span>Terms of Use</span>
                        <span>Commercial Disclosures</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-accent/10 flex flex-col md:flex-row justify-between items-center text-[10px] text-accent/30 font-mono uppercase tracking-wider">
                <p>© 2025 ERLV Inc. All Rights Reserved.</p>
                <p>Authorized Access Only // ID: 88-ALPHA-CTX</p>
            </div>
        </footer>
    );
}
