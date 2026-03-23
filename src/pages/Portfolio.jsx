import { useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../components/useReveal'

const PROJECTS = [
  { icon: '🛒', tag: 'Website', title: 'ShopNest', sub: 'Full-stack e-commerce platform', result: '↑ 210% conversion rate', color: '#00F0FF' },
  { icon: '🏋️', tag: 'App Dev', title: 'FitFlow', sub: 'AI-powered fitness tracking app', result: '4.9★ App Store rating', color: '#FF0099' },
  { icon: '🍕', tag: 'Social Media', title: 'PizzaHub', sub: '90-day brand relaunch', result: '2.4M impressions', color: '#FFB800' },
  { icon: '🎵', tag: 'Meta Ads', title: 'BeatDrop Music', sub: 'Lead gen campaign', result: '340% ROAS achieved', color: '#00F0FF' },
  { icon: '💄', tag: 'Influencer', title: 'Glamora Beauty', sub: 'Creator partnership program', result: '50+ brand collaborations', color: '#FF0099' },
  { icon: '🏠', tag: 'Ad Shoot', title: 'LuxeNest Realty', sub: 'Cinematic brand film', result: '1.2M video views', color: '#FFB800' },
  { icon: '🔍', tag: 'SEO', title: 'MedCore Clinic', sub: 'Local SEO domination', result: '#1 Google ranking × 28 keywords', color: '#00F0FF' },
  { icon: '📊', tag: 'Digital Marketing', title: 'StartupVault', sub: 'Full-funnel growth campaign', result: '3× MoM revenue growth', color: '#FF0099' },
  { icon: '🎮', tag: 'Website', title: 'GameSphere', sub: 'Gaming community platform', result: '80K monthly active users', color: '#FFB800' },
  { icon: '☕', tag: 'Social Media', title: 'Brewnetic Café', sub: 'Instagram growth strategy', result: '0 → 45K followers in 6 months', color: '#00F0FF' },
  { icon: '🧴', tag: 'Meta Ads', title: 'DermGlow', sub: 'Skincare launch campaign', result: '₹5L revenue in 30 days', color: '#FF0099' },
  { icon: '🎓', tag: 'App Dev', title: 'LearnLoop', sub: 'EdTech learning platform', result: '10K students onboarded', color: '#FFB800' },
]

const FILTERS = ['All', 'Website', 'App Dev', 'SEO', 'Digital Marketing', 'Social Media', 'Meta Ads', 'Influencer', 'Ad Shoot']

export default function Portfolio() {
  useReveal()
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? PROJECTS : PROJECTS.filter(p => p.tag === active)

  return (
    <div className="page-transition">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Our Work</div>
          <h1>Projects That <span className="gradient-text">Define</span> Corex</h1>
          <p>
            Real brands. Real campaigns. Real numbers. Here's a selection of
            work we're proud to have built and the results they delivered.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Filters */}
          <div className="port-filters">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`port-filter-btn ${active === f ? 'active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="port-grid">
            {filtered.map((p, i) => (
              <div
                key={p.title}
                className="port-card"
                style={{
                  animation: `scaleIn 0.4s var(--easing) ${i * 0.06}s both`,
                }}
              >
                <div className="port-card-img" style={{
                  background: `radial-gradient(circle at 50% 50%, ${p.color}18, var(--bg3))`,
                  fontSize: '4rem',
                }}>
                  {p.icon}
                </div>
                <div className="port-overlay">
                  <span className="port-tag" style={{ background: p.color, color: p.color === '#FFB800' ? '#000' : '#fff' }}>
                    {p.tag}
                  </span>
                  <h4>{p.title}</h4>
                  <p>{p.sub}</p>
                  <div style={{
                    marginTop: '0.5rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: p.color,
                    fontFamily: 'Syne, sans-serif',
                  }}>
                    {p.result}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text2)' }}>
              No projects in this category yet. More coming soon!
            </div>
          )}
        </div>
      </section>

      {/* Testimonials strip */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="text-center mb-3 reveal">
            <div className="section-label" style={{ justifyContent: 'center' }}>Testimonials</div>
            <h2>What Our <span className="gradient-text">Clients</span> Say</h2>
          </div>

          <div className="grid-3">
            {[
              { name: 'Riya S.', role: 'Founder, ShopNest', quote: 'Corex didn\'t just build our website — they built a revenue engine. Within 90 days our conversion rate doubled.', avatar: '👩‍💼' },
              { name: 'Arjun M.', role: 'CMO, BeatDrop', quote: 'The Meta Ads team at Corex cracked our funnel when nobody else could. 340% ROAS speaks for itself.', avatar: '👨‍💻' },
              { name: 'Priya K.', role: 'Owner, Glamora Beauty', quote: 'Influencer marketing felt like a gamble before Corex. Now it\'s our most reliable growth channel.', avatar: '👩‍🎨' },
            ].map((t, i) => (
              <div key={i} className={`card reveal delay-${i + 1}`}>
                <div style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent)' }}>★★★★★</div>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>"{t.quote}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: '50%',
                    background: 'var(--bg3)',
                    border: '1px solid var(--border2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem',
                  }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.9rem' }}>{t.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text2)' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="cta-section">
        <div className="container">
          <h2>Your Project Could Be <span className="gradient-text">Next</span></h2>
          <p>Let's create something remarkable together. We're ready when you are.</p>
          <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            Start Your Project ↗
          </Link>
        </div>
      </div>
    </div>
  )
}
