import { useState, useEffect } from 'react'

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const msgs = ['Initializing...', 'Loading assets...', 'Almost there...', 'Welcome.']
    const interval = setInterval(() => {
      setProgress(p => {
        const next = p + Math.random() * 18 + 5
        if (next >= 100) {
          clearInterval(interval)
          setTimeout(onDone, 600)
          return 100
        }
        return next
      })
    }, 120)
    const phaseInterval = setInterval(() => {
      setPhase(p => Math.min(p + 1, msgs.length - 1))
    }, 500)
    return () => { clearInterval(interval); clearInterval(phaseInterval) }
  }, [onDone])

  const msgs = ['Initializing...', 'Loading assets...', 'Almost there...', 'Welcome.']

  return (
    <div className="loader-wrap" style={{
      animation: progress >= 100 ? 'loaderFade 0.6s var(--easing) 0.4s both' : 'none'
    }}>
      {/* Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      {/* Waveform animation */}
      <div style={{ display:'flex', gap:'4px', alignItems:'center', marginBottom:'0.5rem' }}>
        {[...Array(12)].map((_,i) => (
          <div key={i} style={{
            width:'3px',
            height:'24px',
            background:'linear-gradient(to top,var(--primary),var(--secondary))',
            borderRadius:'99px',
            animation:`waveform ${0.6 + i*0.08}s ease-in-out infinite`,
            animationDelay:`${i*0.07}s`,
            opacity:0.7
          }} />
        ))}
      </div>

      <div className="loader-logo">COREX</div>

      <div className="loader-bar-wrap">
        <div className="loader-bar" style={{ width: `${progress}%` }} />
      </div>

      <div className="loader-text">{msgs[phase]}</div>
    </div>
  )
}
