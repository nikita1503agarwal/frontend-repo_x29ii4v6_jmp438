import React from 'react'
import GlassPanel from '../components/GlassPanel'

export default function Auth() {
  return (
    <div className="min-h-screen bg-[#0A1B2E] pt-28 px-6 text-white">
      <section className="mx-auto max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold">Welcome to NUPal</h1>
        <p className="text-white/70 mt-2 max-w-2xl">Login or create an account to personalize your campus journey.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <GlassPanel className="p-6">
            <h3 className="text-xl font-semibold">Login</h3>
            <form className="mt-4 space-y-3">
              <input className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-2 placeholder-white/60" placeholder="Email" />
              <input type="password" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-2 placeholder-white/60" placeholder="Password" />
              <button className="w-full rounded-xl bg-cyan-500/90 text-black font-semibold py-2 hover:bg-cyan-400">Login</button>
            </form>
          </GlassPanel>

          <GlassPanel className="p-6">
            <h3 className="text-xl font-semibold">Sign Up</h3>
            <form className="mt-4 space-y-3">
              <input className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-2 placeholder-white/60" placeholder="Name" />
              <input className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-2 placeholder-white/60" placeholder="Email" />
              <input type="password" className="w-full rounded-xl bg-white/10 border border-white/20 px-4 py-2 placeholder-white/60" placeholder="Password" />
              <button className="w-full rounded-xl bg-white/10 border border-white/20 py-2 hover:bg-white/20">Create Account</button>
            </form>
          </GlassPanel>
        </div>
      </section>
    </div>
  )
}
