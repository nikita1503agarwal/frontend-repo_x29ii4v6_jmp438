import React from 'react'
import GlassPanel from '../components/GlassPanel'
import { UtensilsCrossed, Grid3X3, Users, Bus } from 'lucide-react'

export default function Services() {
  return (
    <div className="min-h-screen bg-[#0A1B2E] pt-28 px-6">
      <section className="mx-auto max-w-7xl">
        <h1 className="text-white text-4xl md:text-5xl font-bold">Campus Services</h1>
        <p className="text-white/70 mt-2 max-w-2xl">Order food, reserve courts, join study groups, and track buses with a modern, calm UI.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <GlassPanel className="p-6 text-white">
            <div className="flex items-center gap-3">
              <UtensilsCrossed className="text-cyan-300" />
              <h3 className="text-xl font-semibold">Kitchen Ordering</h3>
            </div>
            <div className="mt-4 h-40 rounded-xl bg-white/5" />
            <p className="mt-3 text-white/70">Floating 3D menu with live queue times.</p>
          </GlassPanel>
          <GlassPanel className="p-6 text-white">
            <div className="flex items-center gap-3">
              <Grid3X3 className="text-cyan-300" />
              <h3 className="text-xl font-semibold">Court Reservation</h3>
            </div>
            <div className="mt-4 h-40 rounded-xl bg-white/5" />
            <p className="mt-3 text-white/70">Visual calendar with time slots and confirmations.</p>
          </GlassPanel>
          <GlassPanel className="p-6 text-white">
            <div className="flex items-center gap-3">
              <Users className="text-cyan-300" />
              <h3 className="text-xl font-semibold">Study Groups</h3>
            </div>
            <div className="mt-4 h-40 rounded-xl bg-white/5" />
            <p className="mt-3 text-white/70">Topic-based groups with join requests.</p>
          </GlassPanel>
          <GlassPanel className="p-6 text-white">
            <div className="flex items-center gap-3">
              <Bus className="text-cyan-300" />
              <h3 className="text-xl font-semibold">Bus Schedule</h3>
            </div>
            <div className="mt-4 h-40 rounded-xl bg-white/5" />
            <p className="mt-3 text-white/70">Live timetable with route filters.</p>
          </GlassPanel>
        </div>
      </section>
    </div>
  )
}
