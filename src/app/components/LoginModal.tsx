// app/components/LoginModal.tsx
"use client";
import React, { useState } from 'react';
import { X, Lock, Loader2 } from 'lucide-react';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (!isOpen) return null;

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json() as { error?: string; success?: boolean };

            if (!response.ok) {
                setError(data.error || 'Login failed');
                setIsLoading(false);
                return;
            }

            // Redirect to dashboard on success
            window.location.href = '/dashboard';
        } catch (err) {
            setError('Network error. Please try again.');
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
            <div className="w-full max-w-md border border-accent/20 bg-background shadow-2xl relative">

                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-accent/10 bg-accent/[0.02]">
                    <div className="flex items-center gap-2 text-emerald-500 font-mono text-xs tracking-widest">
                        <Lock size={14} />
                        SECURE PARTNER PORTAL
                    </div>
                    <button onClick={onClose} className="text-accent/50 hover:text-white transition-colors">
                        <X size={18} />
                    </button>
                </div>

                {/* Body */}
                <form onSubmit={handleLogin} className="p-8 space-y-6">
                    <div className="text-center mb-8">
                        <h2 className="text-xl font-bold text-white font-sans tracking-tight">AUTHORIZED PERSONNEL ONLY</h2>
                        <p className="text-xs text-accent/40 mt-2 font-mono">
                            IP ADDRESS LOGGED: {typeof window !== 'undefined' ? '127.0.0.1' : '---'}
                        </p>
                    </div>

                    {error && (
                        <div className="bg-red-900/20 border border-red-500/30 text-red-400 p-3 text-xs font-mono">
                            ⚠ {error}
                        </div>
                    )}

                    <div className="space-y-2">
                        <label className="text-[10px] font-mono text-accent/60 uppercase tracking-wider">Client ID / Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full bg-accent/5 border border-accent/20 p-3 text-sm text-white focus:border-emerald-500 focus:outline-none font-mono transition-colors"
                            placeholder="test@erlvinc.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-mono text-accent/60 uppercase tracking-wider">Secure Token</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full bg-accent/5 border border-accent/20 p-3 text-sm text-white focus:border-emerald-500 focus:outline-none font-mono transition-colors"
                            placeholder="••••••••••••"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2"
                    >
                        {isLoading ? <Loader2 className="animate-spin" size={14} /> : "AUTHENTICATE"}
                    </button>

                    <div className="text-center pt-4 border-t border-accent/5">
                        <a href="#" className="text-[10px] text-accent/30 hover:text-emerald-500 transition-colors font-mono">
                            REQUEST ACCESS CREDENTIALS
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
}
