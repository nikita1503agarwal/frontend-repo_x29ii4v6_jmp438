import React from 'react'
import { motion } from 'framer-motion'
import GlassPanel from './GlassPanel'
import { Calendar, Bus, UtensilsCrossed, Users, Briefcase, Grid3X3 } from 'lucide-react'

function Section({ id, title, subtitle, children, accent = 'cyan' }) {
  const accentColor = {
    cyan: 'from-cyan-500/20 via-cyan-500/10 to-transparent',
    blue: 'from-blue-500/20 via-blue-500/10 to-transparent',
    gold: 'from-yellow-400/20 via-yellow-400/10 to-transparent'
  }[accent]

  return (
    <section id={id} className="relative min-h-screen py-24 px-6 md:px-10">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${accentColor}`} />
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-white"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <p className="mt-3 text-white/70 max-w-2xl">{subtitle}</p>
        )}
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {children}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <Section
      id="services"
      title="Campus Services"
      subtitle="Order food, reserve courts, join study groups, and catch your ride — all in one place."
      accent="cyan"
    >
      <GlassPanel className="p-5 text-white">
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="text-cyan-300" />
          <h3 className="text-xl font-semibold">Kitchen Ordering</h3>
        </div>
        <p className="mt-2 text-white/70">A 3D menu with live queue times and nutrition info.</p>
      </GlassPanel>
      <GlassPanel className="p-5 text-white">
        <div className="flex items-center gap-3">
          <Grid3X3 className="text-cyan-300" />
          <h3 className="text-xl font-semibold">Court Reservation</h3>
        </div>
        <p className="mt-2 text-white/70">Reserve courts in a visual calendar timeline.</p>
      </GlassPanel>
      <GlassPanel className="p-5 text-white">
        <div className="flex items-center gap-3">
          <Users className="text-cyan-300" />
          <h3 className="text-xl font-semibold">Study Groups</h3>
        </div>
        <p className="mt-2 text-white/70">Join topic rooms represented by floating cubes.</p>
      </GlassPanel>
      <GlassPanel className="p-5 text-white">
        <div className="flex items-center gap-3">
          <Bus className="text-cyan-300" />
          <h3 className="text-xl font-semibold">Bus Schedule</h3>
        </div>
        <p className="mt-2 text-white/70">Live timetable on a glassy transport board.</p>
      </GlassPanel>
    </Section>
  )
}

function AdvisingSection() {
  return (
    <Section
      id="advising"
      title="Core Advising"
      subtitle="Check prerequisites, get recommendations, and map your semester plan."
      accent="blue"
    >
      <GlassPanel className="p-5 text-white">
        <h3 className="text-xl font-semibold">Prerequisite Lookup</h3>
        <p className="mt-2 text-white/70">Search courses via a holographic input panel.</p>
      </GlassPanel>
      <GlassPanel className="p-5 text-white">
        <h3 className="text-xl font-semibold">AI Recommendations</h3>
        <p className="mt-2 text-white/70">Receive tailored 3D recommendation cards.</p>
      </GlassPanel>
      <GlassPanel className="p-5 text-white">
        <h3 className="text-xl font-semibold">Study Plan Timeline</h3>
        <p className="mt-2 text-white/70">Walk your plan as a glowing timeline walkway.</p>
      </GlassPanel>
    </Section>
  )
}

function SchedulingSection() {
  return (
    <Section
      id="scheduling"
      title="Course Scheduling"
      subtitle="Design your week with rotating block pickers and a floating timetable."
      accent="cyan"
    >
      <GlassPanel className="p-5 text-white">
        <h3 className="text-xl font-semibold">3D Block Picker</h3>
        <p className="mt-2 text-white/70">Select times with rotating cube selectors.</p>
      </GlassPanel>
      <GlassPanel className="p-5 text-white">
        <h3 className="text-xl font-semibold">Weekly Grid</h3>
        <p className="mt-2 text-white/70">A glass panel grid that updates as you pick blocks.</p>
      </GlassPanel>
      <GlassPanel className="p-5 text-white">
        <h3 className="text-xl font-semibold">Course Info</h3>
        <p className="mt-2 text-white/70">Hover a course to reveal details on floating panels.</p>
      </GlassPanel>
    </Section>
  )
}

function CareerSection() {
  return (
    <Section
      id="career"
      title="Career Advising"
      subtitle="Explore internships, visualize skills, and prep with confidence."
      accent="gold"
    >
      <GlassPanel className="p-5 text-white">
        <h3 className="text-xl font-semibold">Internship Carousel</h3>
        <p className="mt-2 text-white/70">Browse roles as floating 3D cards.</p>
      </GlassPanel>
      <GlassPanel className="p-5 text-white">
        <h3 className="text-xl font-semibold">Skill Radar</h3>
        <p className="mt-2 text-white/70">A spherical chart highlighting your strengths.</p>
      </GlassPanel>
      <GlassPanel className="p-5 text-white">
        <h3 className="text-xl font-semibold">Resume & Interview</h3>
        <p className="mt-2 text-white/70">Guidance screens with interactive checklists.</p>
      </GlassPanel>
    </Section>
  )
}

export { ServicesSection, AdvisingSection, SchedulingSection, CareerSection }
