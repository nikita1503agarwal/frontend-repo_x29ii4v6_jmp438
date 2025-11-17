import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero({ onEnter }) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0A1B2E] via-[#061322] to-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hGDm7Foxug7C6E8s/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A1B2E]/30 via-[#0A1B2E]/20 to-[#0A1B2E]" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <motion.h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            NUPal
          </motion.h1>
          <p className="mt-4 text-lg md:text-2xl text-white/80">
            Your Intelligent Companion for University Life
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onEnter}
              className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-black font-semibold px-8 py-3 shadow-lg shadow-cyan-500/30 transition-colors"
            >
              Enter Campus
            </button>
            <a
              href="#features"
              className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3 backdrop-blur-md"
            >
              Explore Features
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
