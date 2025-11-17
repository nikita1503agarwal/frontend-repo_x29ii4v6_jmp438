import React from 'react'

function GlassPanel({ children, className = '' }) {
  return (
    <div
      className={`backdrop-blur-xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.2)] rounded-2xl ${className}`}
    >
      {children}
    </div>
  )
}

export default GlassPanel
