import React from 'react';

export default function Governance() {
    return (
        <section className="w-full px-6 py-20 border-t border-accent/10 bg-background">
            <div className="max-w-7xl mx-auto">
                <h4 className="text-xs font-mono text-accent/40 uppercase tracking-widest mb-8">Corporate Governance & Infrastructure</h4>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h5 className="text-foreground font-bold text-sm mb-2">Financial Controls</h5>
                        <p className="text-xs text-accent/60 leading-relaxed">
                            Strict separation of operational and holding accounts. Real-time P&L tracking via Proprietary Suite.
                        </p>
                    </div>
                    <div>
                        <h5 className="text-foreground font-bold text-sm mb-2">Data Security</h5>
                        <p className="text-xs text-accent/60 leading-relaxed">
                            SOC-2 aligned infrastructure. Encrypted telemetry and customer payment data.
                        </p>
                    </div>
                    <div>
                        <h5 className="text-foreground font-bold text-sm mb-2">Risk Management</h5>
                        <p className="text-xs text-accent/60 leading-relaxed">
                            Comprehensive commercial liability coverage. Automated facility monitoring 24/7.
                        </p>
                    </div>
                    <div>
                        <h5 className="text-foreground font-bold text-sm mb-2">Lending Compliance</h5>
                        <p className="text-xs text-accent/60 leading-relaxed">
                            Standardized reporting for institutional debt partners.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
