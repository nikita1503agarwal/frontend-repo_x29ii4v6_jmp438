import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Home, Compass, School, Calendar, Briefcase, LogIn } from 'lucide-react'

function Navbar() {
  const nav = [
    { to: '/services', label: 'Services' },
    { to: '/advising', label: 'Advising' },
    { to: '/scheduling', label: 'Scheduling' },
    { to: '/career', label: 'Career' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl px-4 py-2 text-white shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
          <div className="flex items-center justify-between gap-3">
            <Link to="/" className="inline-flex items-center gap-2 font-semibold">
              <Home size={18} />
              <span>NUPal</span>
            </Link>
            <nav className="hidden md:flex items-center gap-1">
              {nav.map((n) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-full text-sm hover:bg-white/10 ${isActive ? 'bg-white/15' : ''}`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
              <NavLink to="/career" className={({ isActive }) => `px-3 py-1.5 rounded-full text-sm hover:bg-white/10 ${isActive ? 'bg-white/15' : ''}`}>
                <Briefcase size={16} className="inline -mt-0.5 mr-1" /> Career
              </NavLink>
            </nav>
            <div className="flex items-center gap-2">
              <NavLink to="/auth" className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/90 px-4 py-1.5 text-sm font-semibold text-black hover:bg-cyan-400">
                <LogIn size={16} /> Login
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
