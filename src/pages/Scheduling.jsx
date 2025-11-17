import React from 'react'
import GlassPanel from '../components/GlassPanel'

export default function Scheduling() {
  return (
    <div className="min-h-screen bg-[#0A1B2E] pt-28 px-6">
      <section className="mx-auto max-w-7xl text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Course Scheduling</h1>
        <p className="text-white/70 mt-2 max-w-2xl">Pick blocks, preview your week, and manage course info.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <GlassPanel className="p-6">
            <h3 className="text-xl font-semibold">Block Picker</h3>
            <div className="mt-4 h-40 rounded-xl bg-white/5" />
            <p className="mt-3 text-white/70">Select times with friendly controls.</p>
          </GlassPanel>
          <GlassPanel className="p-6">
            <h3 className="text-xl font-semibold">Weekly Timetable</h3>
            <div className="mt-4 h-40 rounded-xl bg-white/5" />
            <p className="mt-3 text-white/70">Glassy grid updates seamlessly.</p>
          </GlassPanel>
          <GlassPanel className="p-6">
            <h3 className="text-xl font-semibold">Course Info Panel</h3>
            <div className="mt-4 h-40 rounded-xl bg-white/5" />
            <p className="mt-3 text-white/70">Details, instructors, times.</p>
          </GlassPanel>
        </div>
      </section>
    </div>
  )
}
