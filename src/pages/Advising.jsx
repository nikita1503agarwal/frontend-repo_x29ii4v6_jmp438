import React from 'react'
import GlassPanel from '../components/GlassPanel'

export default function Advising() {
  return (
    <div className="min-h-screen bg-[#0A1B2E] pt-28 px-6">
      <section className="mx-auto max-w-7xl text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Core Advising</h1>
        <p className="text-white/70 mt-2 max-w-2xl">Check prerequisites, get smart recommendations, and build a semester plan.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <GlassPanel className="p-6">
            <h3 className="text-xl font-semibold">Prerequisite Lookup</h3>
            <div className="mt-4 h-40 rounded-xl bg-white/5" />
            <p className="mt-3 text-white/70">Search course codes, see dependencies.</p>
          </GlassPanel>
          <GlassPanel className="p-6">
            <h3 className="text-xl font-semibold">Recommendations</h3>
            <div className="mt-4 h-40 rounded-xl bg-white/5" />
            <p className="mt-3 text-white/70">Tailored picks based on progress.</p>
          </GlassPanel>
          <GlassPanel className="p-6">
            <h3 className="text-xl font-semibold">Study Plan Timeline</h3>
            <div className="mt-4 h-40 rounded-xl bg-white/5" />
            <p className="mt-3 text-white/70">Multi-semester structure with milestones.</p>
          </GlassPanel>
        </div>
      </section>
    </div>
  )
}
