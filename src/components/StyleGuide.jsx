import React from 'react'
import GlassPanel from './GlassPanel'

export default function StyleGuide() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 text-white">
      <h2 className="text-3xl md:text-5xl font-bold">UI Style Guide</h2>
      <p className="mt-3 text-white/70 max-w-2xl">Colors, type, spacing, and reusable components for a consistent premium academic look.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <GlassPanel className="p-6">
          <h3 className="text-xl font-semibold">Palette</h3>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[
              { name: 'Deep NU Blue', color: '#002E6D' },
              { name: 'River Cyan', color: '#00AEEF' },
              { name: 'Sandstone', color: '#D8C7A3' },
              { name: 'Off-white', color: '#F6F7FB' },
            ].map((c) => (
              <div key={c.name} className="text-center">
                <div className="h-16 w-full rounded-xl" style={{ background: c.color }} />
                <p className="mt-2 text-xs text-white/70">{c.name}</p>
              </div>
            ))}
          </div>
        </GlassPanel>

        <GlassPanel className="p-6">
          <h3 className="text-xl font-semibold">Typography</h3>
          <p className="mt-2 text-white/70">Inter / IBM Plex Sans — calm, generous line height.</p>
          <div className="mt-4 space-y-2">
            <p className="text-4xl font-bold">Heading XL</p>
            <p className="text-2xl font-semibold">Heading L</p>
            <p className="text-lg">Body Large</p>
            <p className="text-sm text-white/70">Caption</p>
          </div>
        </GlassPanel>

        <GlassPanel className="p-6">
          <h3 className="text-xl font-semibold">Components</h3>
          <div className="mt-4 space-y-3">
            <button className="rounded-full bg-cyan-500/90 px-4 py-2 text-black font-semibold hover:bg-cyan-400">Primary</button>
            <button className="rounded-full border border-white/20 px-4 py-2 hover:bg-white/10">Secondary</button>
            <div className="rounded-xl border border-white/15 bg-white/10 p-4">Card</div>
          </div>
        </GlassPanel>
      </div>
    </section>
  )
}
