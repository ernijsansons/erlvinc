// src/app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">ERLV INC</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-gray-600 hover:text-gray-900 font-medium">
                Login
              </Link>
              <Link
                href="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 font-medium transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-24 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Building the Future of<br />
            <span className="text-blue-600">Business Operations</span>
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            AI-powered platform for managing your entire business portfolio with intelligent automation and real-time insights.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/register"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Start Free Trial
            </Link>
            <Link
              href="/login"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Our Portfolio</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Powering innovative businesses across multiple industries
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'NxtSpin',
                desc: 'Laundromat management SaaS platform',
                url: 'https://nxtspin.com',
                color: 'blue'
              },
              {
                name: 'InvestInWash',
                desc: 'Laundromat investment marketplace',
                url: 'https://investinwash.com',
                color: 'green'
              },
              {
                name: 'CoreFlow360',
                desc: 'Business automation platform',
                url: 'https://coreflow360.com',
                color: 'purple'
              },
            ].map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-600">{project.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'AI Agents', desc: 'Autonomous task execution' },
              { title: 'Real-time Analytics', desc: 'Live business insights' },
              { title: 'Multi-Domain', desc: 'Manage all your ventures' },
              { title: 'Secure', desc: 'Enterprise-grade security' },
            ].map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <h3 className="font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-xl font-bold">ERLV INC</span>
            <p className="text-gray-400">© 2024 ERLV Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
