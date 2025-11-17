import React from 'react'

export default function RiverSeparator({ invert = false }) {
  return (
    <div className="relative h-28 w-full overflow-hidden">
      <svg
        className={`absolute ${invert ? 'rotate-180' : ''}`}
        width="100%"
        height="100%"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="url(#grad)"
          fillOpacity="1"
          d="M0,160L60,165.3C120,171,240,181,360,170.7C480,160,600,128,720,128C840,128,960,160,1080,165.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0A1B2E" />
            <stop offset="50%" stopColor="#05325A" />
            <stop offset="100%" stopColor="#001A39" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
