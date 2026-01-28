// Protected dashboard page
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  email: string;
  name: string | null;
  role: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status
    fetch('/api/auth/me')
      .then(res => {
        if (!res.ok) {
          router.push('/');
          return null;
        }
        return res.json();
      })
      .then((data: any) => {
        if (data) {
          setUser(data.user);
        }
        setLoading(false);
      })
      .catch(() => {
        router.push('/');
      });
  }, [router]);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      window.location.href = '/';
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-emerald-400 font-mono">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white font-mono">
      {/* Header */}
      <header className="border-b border-emerald-500/30 bg-black/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-4">
              <span className="text-xl font-bold">ERLV INC.</span>
              <span className="text-xs text-gray-500">[PARTNER DASHBOARD]</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-sm text-emerald-400">{user?.email}</span>
              <button
                onClick={handleLogout}
                className="text-sm text-gray-400 hover:text-red-400 transition-colors"
              >
                LOGOUT
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-emerald-400">
            WELCOME, {user?.name?.toUpperCase() || user?.email.toUpperCase()}
          </h1>
          <p className="text-gray-400 text-sm">
            Access Level: <span className="text-emerald-400 uppercase">{user?.role}</span>
          </p>
        </div>

        {/* Projects Section */}
        <section className="bg-black/30 border border-gray-800 p-8 mb-6">
          <h2 className="text-xl font-bold mb-6 text-emerald-400">// PORTFOLIO PROJECTS</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black/50 border border-emerald-500/30 p-6">
              <div className="text-2xl mb-2">🧺</div>
              <h3 className="font-bold mb-2">NxtSpin</h3>
              <p className="text-xs text-gray-400 mb-4">Laundromat equipment marketplace</p>
              <a
                href="https://nxtspin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Visit Project →
              </a>
            </div>

            <div className="bg-black/50 border border-emerald-500/30 p-6">
              <div className="text-2xl mb-2">⚡</div>
              <h3 className="font-bold mb-2">CoreFlow360</h3>
              <p className="text-xs text-gray-400 mb-4">Business operations platform</p>
              <a
                href="https://coreflow360.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Visit Project →
              </a>
            </div>

            <div className="bg-black/50 border border-emerald-500/30 p-6">
              <div className="text-2xl mb-2">🚛</div>
              <h3 className="font-bold mb-2">Priority1 Freight</h3>
              <p className="text-xs text-gray-400 mb-4">Freight logistics management</p>
              <a
                href="https://priority1freight.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Visit Project →
              </a>
            </div>
          </div>
        </section>

        {/* Status Section */}
        <section className="bg-black/30 border border-gray-800 p-8">
          <h2 className="text-xl font-bold mb-6 text-emerald-400">// SYSTEM STATUS</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-800 pb-3">
              <span className="text-sm text-gray-400">Authentication Status</span>
              <span className="text-emerald-400 text-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                ACTIVE
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-gray-800 pb-3">
              <span className="text-sm text-gray-400">Database Connection</span>
              <span className="text-emerald-400 text-sm flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                CONNECTED
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Last Login</span>
              <span className="text-gray-400 text-sm">{new Date().toLocaleString()}</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
