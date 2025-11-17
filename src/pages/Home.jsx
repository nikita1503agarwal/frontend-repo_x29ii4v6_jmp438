import React from 'react'
import Hero from '../components/Hero'
import FooterToggle from '../components/FooterToggle'
import { ServicesSection, AdvisingSection, SchedulingSection, CareerSection } from '../components/SceneSections'

function Home() {
  const [mode, setMode] = React.useState('dark')

  React.useEffect(() => {
    if (mode === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [mode])

  return (
    <div className="min-h-screen bg-[#0A1B2E]">
      <Hero onEnter={() => {}} />
      <main>
        <ServicesSection />
        <AdvisingSection />
        <SchedulingSection />
        <CareerSection />
      </main>
      <FooterToggle mode={mode} setMode={setMode} />
    </div>
  )
}

export default Home
