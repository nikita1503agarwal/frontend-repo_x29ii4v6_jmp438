import React from 'react'
import GlassPanel from '../components/GlassPanel'

export default function Career() {
  return (
    <div className="min-h-screen bg-[#0A1B2E] pt-28 px-6">
      <section className="mx-auto max-w-7xl text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Career Advising</h1>
        <p className="text-white/70 mt-2 max-w-2xl">Explore internships, visualize skills, and prep for success.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <GlassPanel className="p-6">
            <h3 className="text-xl font-semibold">Internship Cards</h3>
            <div className="mt-4 h-40 rounded-xl bg-white/5" />
            <p className="mt-3 text-white/70">Role previews with actions.</p>
          </GlassPanel>
          <GlassPanel className="p-6">
            <h3 className="text-xl font-semibold">Skill Gap Chart</h3>
            <div className="mt-4 h-40 rounded-xl bg-white/5" />
            <p className="mt-3 text-white/70">Radar/spider visualization.</p>
          </GlassPanel>
          <GlassPanel className="p-6">
            <h3 className="text-xl font-semibold">Resume & Interview</h3>
            <div className="mt-4 h-40 rounded-xl bg-white/5" />
            <p className="mt-3 text-white/70">Guided checklists & tips.</p>
          </GlassPanel>
        </div>
      </section>
    </div>
  )
}
