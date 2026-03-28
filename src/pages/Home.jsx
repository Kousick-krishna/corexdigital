import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../components/useReveal'

const SERVICES_PREVIEW = [
  { icon: '🌐', title: 'Website Development', desc: 'Blazing-fast, conversion-optimised websites that look stunning on every device.' },
  { icon: '📱', title: 'App Development', desc: 'Native and cross-platform apps built for seamless, delightful user experiences.' },
  { icon: '📈', title: 'SEO & Digital Marketing', desc: 'Data-driven strategies that grow your organic reach and dominate search rankings.' },
  { icon: '📣', title: 'Social Media & Ads', desc: 'Hyper-targeted campaigns across Meta, Reels, and beyond — built to convert.' },
  { icon: '🤝', title: 'Influencer Marketing', desc: 'Authentic creator partnerships that amplify your brand voice and drive real results.' },
  { icon: '🎬', title: 'Advertisement Shoot', desc: 'Cinematic brand content that stops the scroll and lives in memory.' },
]

const STATS = [
  { num: '80+', label: 'Projects Delivered' },
  { num: '30+', label: 'Happy Clients' },
  { num: '1+', label: 'Years of Excellence' },
  { num: '7+', label: 'Industries Served' },
]

const MARQUEE_ITEMS = [
  'Website Development', 'App Development', 'SEO', 'Digital Marketing',
  'Social Media Management', 'Influencer Marketing', 'Meta Ads', 'Advertisement Shoot',
  'Brand Identity', 'Content Strategy', 'Performance Marketing', 'Creative Direction',
]

function CountUp({ target, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const isPlus = target.includes('+')
        const num = parseInt(target)
        const start = Date.now()
        const tick = () => {
          const elapsed = Date.now() - start
          const prog = Math.min(elapsed / duration, 1)
          const ease = 1 - Math.pow(1 - prog, 3)
          setCount(Math.floor(ease * num))
          if (prog < 1) requestAnimationFrame(tick)
          else setCount(target)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [target, duration])

  return <span ref={ref}>{typeof count === 'string' ? count : `${count}${target.includes('+') ? '+' : ''}`}</span>
}

export default function Home() {
  useReveal()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = e => setMousePos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const handleCardMove = (e, card) => {
    const rect = card.getBoundingClientRect()
    const glow = card.querySelector('.service-card-glow')
    if (glow) {
      glow.style.left = `${e.clientX - rect.left}px`
      glow.style.top  = `${e.clientY - rect.top}px`
    }
  }

  return (
    <div className="page-transition">
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          {/* Floating particles */}
          {[...Array(16)].map((_, i) => (
            <div key={i} style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              bottom: 0,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: i % 3 === 0 ? 'var(--primary)' : i % 3 === 1 ? 'var(--secondary)' : 'var(--accent)',
              borderRadius: '50%',
              '--drift': `${(Math.random() - 0.5) * 200}px`,
              animation: `particleFloat ${6 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: 0,
            }} />
          ))}
        </div>

        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="hero-content">
              <div className="hero-tag">
                <span className="hero-tag-dot" />
                End-to-End Digital Agency
              </div>

              <h1>
                We Build <br />
                <span className="gradient-text">Digital</span> <br />
                Futures.
              </h1>

              <p className="hero-desc">
                From pixel-perfect websites to viral campaigns — Corex Digital
                is your end-to-end partner for growth, visibility, and brand power
                in the digital era.
              </p>

              <div className="hero-actions">
                <Link to="/portfolio" className="btn btn-primary">
                  Explore Our Work ↗
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Start a Project
                </Link>
              </div>
            </div>

            <div className="hero-visual">
  <div className="hero-orb-wrap">
    <div className="hero-ring" />
    <div className="hero-ring-2" />

    {/* Extra inner ring */}
    <div style={{
      position: 'absolute', inset: '35px',
      borderRadius: '50%',
      border: '1px dashed var(--border2)',
      animation: 'spin 25s linear infinite',
      opacity: 0.5,
    }} />

    <div className="hero-center-orb" />

    {/* ── Floating service icons — positioned around the rings ── */}

    {/* Top */}
    <div className="hero-icon-float" style={{ top: '2%', left: '50%', transform: 'translateX(-50%)' }}>🌐</div>

    {/* Top right */}
    <div className="hero-icon-float" style={{ top: '15%', right: '2%', animationDelay: '0.8s' }}>📱</div>

    {/* Right */}
    <div className="hero-icon-float" style={{ top: '45%', right: '-2%', animationDelay: '1.5s' }}>📈</div>

    {/* Bottom right */}
    <div className="hero-icon-float" style={{ bottom: '12%', right: '5%', animationDelay: '2.2s' }}>🎯</div>

    {/* Bottom */}
    <div className="hero-icon-float" style={{ bottom: '0%', left: '50%', transform: 'translateX(-50%)', animationDelay: '3s' }}>🎬</div>

    {/* Bottom left */}
    <div className="hero-icon-float" style={{ bottom: '12%', left: '5%', animationDelay: '3.8s' }}>🤝</div>

    {/* Left */}
    <div className="hero-icon-float" style={{ top: '45%', left: '-2%', animationDelay: '4.5s' }}>📣</div>

    {/* Top left */}
    <div className="hero-icon-float" style={{ top: '15%', left: '2%', animationDelay: '5.2s' }}>🔍</div>

    {/* Center logo text */}
    <div style={{
      position: 'absolute', inset: '25%',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'Orbitron, sans-serif', fontWeight: 900,
      fontSize: 'clamp(1.2rem,3vw,1.8rem)',
      background: 'linear-gradient(135deg,var(--primary),var(--secondary))',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      animation: 'pulse 3s ease-in-out infinite',
    }}>
      COREX
    </div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div className="marquee-item" key={i}>
              <span className="marquee-dot" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES PREVIEW ── */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-3 reveal">
            <div className="section-label" style={{ justifyContent: 'center' }}>What We Do</div>
            <h2>End-to-End <span className="gradient-text">Digital Services</span></h2>
            <p style={{ maxWidth: 540, margin: '1rem auto 0' }}>
              Every service we offer is engineered to move the needle — from your first impression to your last conversion.
            </p>
          </div>

          <div className="grid-3">
            {SERVICES_PREVIEW.map((svc, i) => (
              <div
                key={i}
                className={`service-card reveal delay-${i + 1}`}
                onMouseMove={e => handleCardMove(e, e.currentTarget)}
              >
                <div className="service-card-glow" />
                <div className="service-icon">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="service-arrow">Explore → </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/services" className="btn btn-outline">View All Services →</Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="stats-strip">
        <div className="container">
          <div className="stats-grid">
            {STATS.map((s, i) => (
              <div key={i} className="text-center reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="stat-num"><CountUp target={s.num} /></div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURED WORK ── */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-3 reveal">
            <div className="section-label" style={{ justifyContent: 'center' }}>Our Work</div>
            <h2>Recent <span className="gradient-text">Projects</span></h2>
          </div>

          <div className="port-grid">
            {[
              { icon: '🛒', tag: 'E-Commerce', title: 'ShopNest Platform', sub: 'Full-stack e-commerce website' },
              { icon: '🏋️', tag: 'App Dev', title: 'FitFlow App', sub: 'Fitness tracking mobile app' },
              { icon: '🍕', tag: 'Social Media', title: 'PizzaHub Campaign', sub: '2.4M impressions in 30 days' },
              { icon: '🎵', tag: 'Meta Ads', title: 'BeatDrop Music', sub: '340% ROAS on Meta Ads' },
              { icon: '💄', tag: 'Influencer', title: 'Glamora Beauty', sub: '50+ creator partnerships' },
              { icon: '🏠', tag: 'Ad Shoot', title: 'LuxeNest Realty', sub: 'Cinematic brand campaign' },
            ].map((p, i) => (
              <div key={i} className={`port-card reveal delay-${i + 1}`}>
                <div className="port-card-img">{p.icon}</div>
                <div className="port-overlay">
                  <span className="port-tag">{p.tag}</span>
                  <h4>{p.title}</h4>
                  <p>{p.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '3rem' }}>
            <Link to="/portfolio" className="btn btn-outline">See All Work →</Link>
          </div>
        </div>
      </section>

      {/* ── WHY COREX ── */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <div className="reveal-left">
              <div className="section-label">Why Choose Us</div>
              <h2>Built for <span className="gradient-text">Results</span>, Not Just Aesthetics</h2>
              <p style={{ marginTop: '1rem', marginBottom: '2rem' }}>
                We don't just make things look great — we make them perform. Every project
                at Corex is rooted in strategy, driven by data, and executed with craft.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: '⚡', text: 'Lightning-fast delivery without compromise' },
                  { icon: '🎯', text: 'Strategy-first, design-second approach' },
                  { icon: '🔄', text: 'Transparent communication at every step' },
                  { icon: '📊', text: 'Performance tracked, reported, and optimised' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                    className={`reveal delay-${i + 1}`}>
                    <div style={{
                      width: 40, height: 40, flexShrink: 0,
                      background: 'var(--card)',
                      border: '1px solid var(--border2)',
                      borderRadius: 'var(--radius-sm)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1.2rem',
                    }}>{item.icon}</div>
                    <span style={{ fontSize: '0.95rem', color: 'var(--text)' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { icon: '🏆', title: 'Award-Winning', sub: 'Creative work that earns recognition' },
                { icon: '🚀', title: 'Fast Launch', sub: 'Quick turnaround, zero compromise' },
                { icon: '🔒', title: 'NDA Protected', sub: 'Your ideas stay strictly confidential' },
                { icon: '📞', title: '24/7 Support', sub: 'Always available when you need us' },
              ].map((item, i) => (
                <div key={i} className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <h4 style={{ fontSize: '1rem', fontFamily: 'Syne, sans-serif', marginBottom: '0.35rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.8rem' }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <div className="cta-section">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Ready to Grow?</div>
          <h2>Let's Build Something <span className="gradient-text">Extraordinary</span></h2>
          <p>
            Whether you're launching a brand or scaling an empire — Corex is ready
            to turn your vision into a high-performance digital reality.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
              Start Your Project ↗
            </Link>
            <Link to="/process" className="btn btn-outline">
              See How We Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
