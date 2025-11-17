import React from 'react'

function FooterToggle({ mode, setMode }) {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        className="px-4 py-2 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 text-white"
      >
        {mode === 'light' ? 'Dark mode' : 'Light mode'}
      </button>
    </div>
  )
}

export default FooterToggle
