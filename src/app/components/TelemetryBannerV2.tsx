import React from 'react';

export default function TelemetryBanner() {
    return (
        <div className="w-full bg-[#050505] border-b border-accent/10 py-1.5 overflow-hidden whitespace-nowrap">
            <div className="animate-marquee inline-block w-full font-mono text-[10px] tracking-widest text-emerald-500/80 uppercase">
                <span className="mx-4">SYSTEM STATUS: NOMINAL</span>
                <span className="mx-4 text-accent/30">|</span>
                <span className="mx-4">INFRASTRUCTURE: ONLINE [V2.0-SECURE]</span>
                <span className="mx-4 text-accent/30">|</span>
                <span className="mx-4">SYSTEM AUDIT: LIVE</span>
                <span className="mx-4 text-accent/30">|</span>
                <span className="mx-4">REVENUE SYNC: <span className="text-emerald-400">LIVE</span></span>
                <span className="mx-4 text-accent/30">|</span>
                <span className="mx-4">SECURITY: ENCRYPTED (SOC-2)</span>
                <span className="mx-4 text-accent/30">|</span>
                <span className="mx-4">UTILITY MODULATION: OPTIMIZED</span>
                <span className="mx-4 text-accent/30">|</span>
                <span className="mx-4">LAST HEARTBEAT: {new Date().toISOString()}</span>
            </div>
        </div>
    );
}
