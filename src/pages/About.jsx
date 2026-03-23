import { Link } from 'react-router-dom'
import useReveal from '../components/useReveal'

const TEAM = [
  {
    emoji: '🧠',
    name: 'Alex Mercer',
    role: 'Creative Director & Co-Founder',
    bio: 'A visionary creative with over 8 years of experience building brands that resonate. Alex leads the design and strategy arm of Corex, combining bold aesthetics with measurable business impact.',
    skills: ['Brand Strategy', 'UI/UX', 'Creative Direction'],
  },
  {
    emoji: '⚡',
    name: 'Jordan Kim',
    role: 'Digital Growth Lead & Co-Founder',
    bio: 'A performance-obsessed marketer and developer who lives at the intersection of code and commerce. Jordan drives Corex digital campaigns, technical builds, and growth engines.',
    skills: ['Dev & Tech', 'Performance Marketing', 'SEO'],
  },
]

const VALUES = [
  { icon: '💡', title: 'Innovation First', desc: 'We stay ahead of trends and adopt emerging technologies before they go mainstream.' },
  { icon: '🎯', title: 'Precision Execution', desc: 'Every pixel, every word, every ad — crafted with intention and measured against outcomes.' },
  { icon: '🤝', title: 'Client Partnership', desc: 'We treat your business as our own and your goals as our KPIs.' },
  { icon: '🔥', title: 'Relentless Drive', desc: 'We don\'t settle. Each project is an opportunity to do the best work of our lives.' },
]

export default function About() {
  useReveal()
  return (
    <div className="page-transition">
      {/* Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Our Story</div>
          <h1>The <span className="gradient-text">Minds</span> Behind Corex</h1>
          <p>
            A boutique powerhouse built on the belief that exceptional digital experiences
            come from deeply human creativity, backed by relentless strategy.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '2rem', marginBottom: '5rem' }}>
            <div className="card reveal-left" style={{ borderColor: 'var(--primary)', boxShadow: '0 0 30px var(--glow-p)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎯</div>
              <div className="section-label">Our Mission</div>
              <h3 style={{ marginBottom: '1rem' }}>Transform Brands Through Digital Excellence</h3>
              <p>
                To empower businesses of every size with the digital infrastructure, creative firepower,
                and marketing intelligence they need to thrive in an attention-scarce world.
              </p>
            </div>
            <div className="card reveal-right" style={{ borderColor: 'var(--secondary)', boxShadow: '0 0 30px var(--glow-s)' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌟</div>
              <div className="section-label" style={{ color: 'var(--secondary)' }}>
                <span style={{ background: 'var(--secondary)', display: 'inline-block', width: 24, height: 2, borderRadius: 99, marginRight: 8 }} />
                Our Vision
              </div>
              <h3 style={{ marginBottom: '1rem' }}>A World Where Every Brand Has Digital Power</h3>
              <p>
                We envision a digital landscape where innovative ideas get the visibility they deserve —
                where a great product meets a great strategy and the world takes notice.
              </p>
            </div>
          </div>

          {/* Team */}
          <div className="text-center mb-3 reveal">
            <div className="section-label" style={{ justifyContent: 'center' }}>Meet the Team</div>
            <h2>The People <span className="gradient-text">Powering</span> Your Growth</h2>
          </div>

          <div className="grid-2" style={{ maxWidth: 800, margin: '0 auto 5rem', gap: '2rem' }}>
            {TEAM.map((member, i) => (
              <div key={i} className={`team-card reveal delay-${i + 1}`}>
                <div className="team-avatar">{member.emoji}</div>
                <h3>{member.name}</h3>
                <div className="team-role">{member.role}</div>
                <p className="team-bio">{member.bio}</p>
                <div className="tag-strip" style={{ justifyContent: 'center', marginTop: '1.25rem' }}>
                  {member.skills.map(s => <span key={s} className="tag">{s}</span>)}
                </div>
                <div className="team-socials">
                  {['X', 'IG', 'in'].map(s => (
                    <a key={s} href="#" className="social-pill" style={{ width: 32, height: 32, fontSize: '0.75rem' }}>{s}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="text-center mb-3 reveal">
            <div className="section-label" style={{ justifyContent: 'center' }}>Core Values</div>
            <h2>What <span className="gradient-text">Drives</span> Us</h2>
          </div>

          <div className="grid-4">
            {VALUES.map((v, i) => (
              <div key={i} className={`value-card reveal delay-${i + 1}`}>
                <div className="value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p style={{ fontSize: '0.88rem' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Numbers */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="text-center mb-3 reveal">
            <div className="section-label" style={{ justifyContent: 'center' }}>By the Numbers</div>
            <h2>Small Team, <span className="gradient-text">Massive</span> Impact</h2>
            <p style={{ maxWidth: 520, margin: '1rem auto 0' }}>
              We're lean by design and powerful by intent. Our focus and agility mean your project
              gets full attention, not a handoff to juniors.
            </p>
          </div>

          <div className="grid-4" style={{ marginTop: '3rem' }}>
            {[
              { num: '120+', label: 'Projects Completed', icon: '✅' },
              { num: '98%', label: 'Client Satisfaction', icon: '⭐' },
              { num: '3×', label: 'Avg. ROI Delivered', icon: '📈' },
              { num: '0', label: 'Projects Abandoned', icon: '🔒' },
            ].map((s, i) => (
              <div key={i} className={`card text-center reveal delay-${i + 1}`}>
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{s.icon}</div>
                <div className="stat-num" style={{ fontSize: '2.5rem' }}>{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <div className="container">
          <h2>Ready to Work with <span className="gradient-text">Corex</span>?</h2>
          <p>Let's connect and figure out how we can help you grow, faster.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
              Get in Touch ↗
            </Link>
            <Link to="/services" className="btn btn-outline">See What We Offer</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
