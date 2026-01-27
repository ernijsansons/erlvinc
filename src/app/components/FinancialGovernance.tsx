import React from 'react';
import { FileCheck, Scale, AlertTriangle, Building2 } from 'lucide-react';

export default function FinancialGovernance() {
    return (
        <section className="w-full px-6 py-20 border-b border-accent/20 bg-background">
            <div className="max-w-7xl mx-auto">
                <h4 className="text-xs font-mono text-accent/40 uppercase tracking-widest mb-10 text-center">
                    Institutional Compliance Framework
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Card 1 */}
                    <div className="p-6 border border-accent/10 bg-accent/[0.02] hover:bg-accent/[0.05] transition-colors">
                        <FileCheck className="text-emerald-500 mb-4" size={24} />
                        <h5 className="text-sm font-bold text-foreground mb-2">AUDIT READINESS</h5>
                        <p className="text-xs text-accent/60 leading-relaxed">
                            Automated reconciliation of all revenue streams. Daily P&L snapshots available for lender review via the Secure Portal.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="p-6 border border-accent/10 bg-accent/[0.02] hover:bg-accent/[0.05] transition-colors">
                        <Scale className="text-blue-400 mb-4" size={24} />
                        <h5 className="text-sm font-bold text-foreground mb-2">LEGAL STRUCTURE</h5>
                        <p className="text-xs text-accent/60 leading-relaxed">
                            Strict separation of assets. Operating entities are ring-fenced from Holding IP.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="p-6 border border-accent/10 bg-accent/[0.02] hover:bg-accent/[0.05] transition-colors">
                        <AlertTriangle className="text-amber-400 mb-4" size={24} />
                        <h5 className="text-sm font-bold text-foreground mb-2">RISK MITIGATION</h5>
                        <p className="text-xs text-accent/60 leading-relaxed">
                            Full commercial liability coverage. 24/7 automated surveillance and leak detection systems active.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="p-6 border border-accent/10 bg-accent/[0.02] hover:bg-accent/[0.05] transition-colors">
                        <Building2 className="text-accent mb-4" size={24} />
                        <h5 className="text-sm font-bold text-foreground mb-2">BANKING RELATIONS</h5>
                        <p className="text-xs text-accent/60 leading-relaxed">
                            We maintain primary treasury relationships with Tier-1 institutions. Capital allocation strictly governed by CapEx mandates.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
