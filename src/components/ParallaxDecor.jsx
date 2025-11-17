import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Blob({ className = '', offset = 0, color = 'rgba(0, 200, 255, 0.15)' }) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [offset, offset - 200])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15])
  return (
    <motion.div
      style={{ y, rotate }}
      className={`pointer-events-none absolute blur-3xl ${className}`}
    >
      <div
        style={{
          background: `radial-gradient(ellipse at center, ${color} 0%, transparent 60%)`,
        }}
        className="h-72 w-72 rounded-full"
      />
    </motion.div>
  )
}

function FloatingCard({ delay = 0, className = '', children }) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ type: 'spring', stiffness: 120, damping: 18, delay }}
      whileHover={{ y: -4, rotateX: 2, rotateY: -2 }}
      className={`rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl text-white shadow-[0_12px_40px_rgba(0,0,0,0.25)] ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default function ParallaxDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <Blob className="left-[-4rem] top-[10%]" color="rgba(0, 174, 239, 0.18)" offset={0} />
      <Blob className="right-[-6rem] top-[30%]" color="rgba(0, 64, 128, 0.22)" offset={60} />
      <Blob className="left-1/2 bottom-[-6rem] -translate-x-1/2" color="rgba(255, 215, 0, 0.12)" offset={120} />

      <div className="absolute inset-x-0 top-1/3 flex justify-center gap-6">
        <FloatingCard className="hidden md:block">
          <div className="h-16 w-28 rounded-xl bg-gradient-to-br from-cyan-400/40 to-blue-500/30" />
        </FloatingCard>
        <FloatingCard delay={0.1} className="hidden lg:block">
          <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-white/20 to-white/5" />
        </FloatingCard>
        <FloatingCard delay={0.2} className="hidden md:block">
          <div className="h-14 w-24 rounded-xl bg-gradient-to-br from-cyan-300/30 to-emerald-300/10" />
        </FloatingCard>
      </div>
    </div>
  )
}
