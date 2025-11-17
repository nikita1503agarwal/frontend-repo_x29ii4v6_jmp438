import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ParallaxDecor from './components/ParallaxDecor'
import RiverSeparator from './components/RiverSeparator'
import StyleGuide from './components/StyleGuide'
import Home from './pages/Home'
import Services from './pages/Services'
import Advising from './pages/Advising'
import Scheduling from './pages/Scheduling'
import Career from './pages/Career'
import Auth from './pages/Auth'

function App() {
  const [mode, setMode] = useState('dark')

  useEffect(() => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [mode])

  return (
    <div className="min-h-screen bg-[#0A1B2E]">
      <Navbar />
      <ParallaxDecor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/advising" element={<Advising />} />
        <Route path="/scheduling" element={<Scheduling />} />
        <Route path="/career" element={<Career />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>

      <RiverSeparator />
      <StyleGuide />

      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-white backdrop-blur-xl"
        >
          {mode === 'light' ? 'Dark mode' : 'Light mode'}
        </button>
      </div>
    </div>
  )
}

export default App
