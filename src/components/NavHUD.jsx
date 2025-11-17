import React from 'react'
import { Menu, Home, Compass, Calendar, School, Briefcase, LogIn } from 'lucide-react'

function NavHUD() {
  const items = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: Compass, label: 'Services', href: '#services' },
    { icon: School, label: 'Advising', href: '#advising' },
    { icon: Calendar, label: 'Scheduling', href: '#scheduling' },
    { icon: Briefcase, label: 'Career', href: '#career' },
  ]

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-white">
        <button className="p-2 hover:bg-white/10 rounded-full" aria-label="Menu">
          <Menu size={18} />
        </button>
        {items.map(({ icon: Icon, label, href }) => (
          <a key={label} href={href} className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded-full hover:bg-white/10 text-sm">
            <Icon size={16} />
            <span>{label}</span>
          </a>
        ))}
        <a href="#login" className="ml-1 inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-black text-sm font-semibold">
          <LogIn size={16} />
          <span>Login</span>
        </a>
      </div>
    </div>
  )
}

export default NavHUD
