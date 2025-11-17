import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import NavHUD from './components/NavHUD'
import { ServicesSection, AdvisingSection, SchedulingSection, CareerSection } from './components/SceneSections'
import FooterToggle from './components/FooterToggle'

function App() {
  const [entered, setEntered] = useState(false)
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
      <NavHUD />
      <Hero onEnter={() => setEntered(true)} />

      <main className="relative">
        <ServicesSection />
        <AdvisingSection />
        <SchedulingSection />
        <CareerSection />
      </main>

      <FooterToggle mode={mode} setMode={setMode} />
    </div>
  )
}

export default App
