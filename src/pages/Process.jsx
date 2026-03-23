import { useState } from 'react'
import { Link } from 'react-router-dom'
import useReveal from '../components/useReveal'

const STEPS = [
  {
    num: '01',
    icon: '🔍',
    title: 'Discovery & Deep Dive',
    desc: 'We start by learning everything about your business — your goals, your audience, your competitors, and your current digital footprint. This phase shapes every decision that follows.',
    deliverables: ['Brand Audit', 'Competitor Analysis', 'Goal Definition', 'Scope Agreement'],
    color: 'var(--primary)',
  },
  {
    num: '02',
    icon: '🎨',
    title: 'Strategy & Creative Direction',
    desc: 'With research in hand, we develop a bespoke strategy and creative blueprint. Positioning, messaging, visual direction, and KPIs are defined before a single pixel is moved.',
    deliverables: ['Strategy Deck', 'Creative Brief', 'Content Roadmap', 'KPI Framework'],
    color: 'var(--secondary)',
  },
  {
    num: '03',
    icon: '⚙️',
    title: 'Design & Development',
    desc: 'Our team executes the plan with precision. Every design is reviewed, every line of code is tested, and every campaign asset is crafted to perform — not just impress.',
    deliverables: ['UI Prototypes', 'Dev Builds', 'Campaign Assets', 'Quality Review'],
    color: 'var(--accent)',
  },
  {
    num: '04',
    icon: '🚀',
    title: 'Launch & Go Live',
    desc: 'We manage the rollout end-to-end — from domain setup and staging tests to campaign activation and tracking verification. Your launch is handled with zero stress.',
    deliverables: ['Deployment', 'Campaign Activation', 'Tracking Setup', 'Post-Launch QA'],
    color: 'var(--primary)',
  },
  {
    num: '05',
    icon: '📊',
    title: 'Optimise & Scale',
    desc: 'The work doesn\'t stop at launch. We monitor performance, run experiments, and continuously improve — turning initial success into compounding, long-term growth.',
    deliverables: ['Monthly Reports', 'A/B Testing', 'Scaling Strategy', 'Ongoing Support'],
    color: 'var(--secondary)',
  },
]

const FAQS = [
  { q: 'How long does a typical project take?', a: 'Timelines vary by scope — a landing page can go live in 1–2 weeks, while a full brand relaunch or app build typically takes 6–12 weeks. We always set clear timelines during the Discovery phase.' },
  { q: 'Do you work with startups or only established brands?', a: 'We work with both. Our approach scales — whether you\'re pre-launch and building your first digital presence or an established brand looking to grow faster, we adapt our services to fit your stage.' },
  { q: 'How do you measure success?', a: 'We define success metrics during the Discovery phase and report against them throughout the engagement. Metrics vary by service — from ROAS for ads to organic rankings for SEO to conversion rates for web.' },
  { q: 'What does working with Corex look like day-to-day?', a: 'You get direct access to the people actually doing the work. No account managers in the middle. We use Notion or Trello for project management, and you\'ll always know exactly where things stand.' },
  { q: 'Can I hire Corex for just one service?', a: 'Absolutely. You can start with a single service and expand as our relationship grows. Many of our clients start with one service and end up trusting us with their entire digital ecosystem.' },
]

export default function Process() {
  useReveal()

  return (
    <div className="page-transition">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">How We Work</div>
          <h1>Our <span className="gradient-text">Process</span> — Clear, Proven, Repeatable</h1>
          <p>
            Every project follows a structured five-step framework designed to eliminate guesswork,
            align expectations, and deliver results with precision.
          </p>
        </div>
      </div>

      {/* Steps */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '5rem' }}>
            <div className="process-steps">
              {STEPS.map((step, i) => (
                <div key={i} className={`process-step reveal delay-${i + 1}`}>
                  <div className="step-num" style={{ borderColor: step.color, color: step.color }}>
                    {step.num}
                  </div>
                  <div className="step-content">
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span>{step.icon}</span> {step.title}
                    </h3>
                    <p style={{ marginTop: '0.5rem', marginBottom: '1rem', fontSize: '0.9rem' }}>{step.desc}</p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {step.deliverables.map(d => (
                        <span key={d} style={{
                          padding: '0.25rem 0.7rem',
                          background: step.color + '18',
                          border: `1px solid ${step.color}44`,
                          borderRadius: 99,
                          fontSize: '0.75rem',
                          color: step.color,
                          fontWeight: 500,
                        }}>↳ {d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Sticky sidebar */}
            <div style={{ position: 'sticky', top: 'calc(var(--nav-h) + 2rem)' }} className="reveal-right">
              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
                <h3 style={{ marginBottom: '0.5rem' }}>Fast, Not Rushed</h3>
                <p style={{ fontSize: '0.88rem' }}>
                  Our process is designed to move quickly without cutting corners.
                  Clear phases mean faster decisions, fewer revisions, and better outcomes.
                </p>
              </div>
              <div className="card" style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🔭</div>
                <h3 style={{ marginBottom: '0.5rem' }}>Full Transparency</h3>
                <p style={{ fontSize: '0.88rem' }}>
                  You'll have visibility into every stage. We document progress, share weekly updates,
                  and always give you honest assessments — even when it's not what you want to hear.
                </p>
              </div>
              <div className="highlight-box" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>🗓️</div>
                <h4 style={{ marginBottom: '0.5rem', fontFamily: 'Syne, sans-serif' }}>Ready to kick off?</h4>
                <p style={{ fontSize: '0.88rem', marginBottom: '1.25rem' }}>
                  Book your free strategy call and let's map out your project together.
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Book Free Call →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="text-center mb-3 reveal">
            <div className="section-label" style={{ justifyContent: 'center' }}>FAQs</div>
            <h2>Common <span className="gradient-text">Questions</span></h2>
          </div>
          <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {FAQS.map((faq, i) => (
              <FaqItem key={i} faq={faq} i={i} />
            ))}
          </div>
        </div>
      </section>

      <div className="cta-section">
        <div className="container">
          <h2>Process Sounds Good? <span className="gradient-text">Let's Begin.</span></h2>
          <p>The first step is a conversation. Tell us about your project and let's build a roadmap.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
              Get Started ↗
            </Link>
            <Link to="/services" className="btn btn-outline">View Services</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function FaqItem({ faq, i }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`card reveal delay-${(i % 4) + 1}`}
      style={{ cursor: 'none', transition: 'all 0.3s var(--easing)' }}
      onClick={() => setOpen(o => !o)}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
        <h4 style={{ fontSize: '1rem', fontFamily: 'Syne, sans-serif' }}>{faq.q}</h4>
        <div style={{
          width: 28, height: 28, flexShrink: 0,
          borderRadius: '50%',
          background: 'var(--bg3)',
          border: '1px solid var(--border2)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1rem',
          transition: 'transform 0.3s var(--easing)',
          transform: open ? 'rotate(45deg)' : 'none',
          color: 'var(--primary)',
        }}>+</div>
      </div>
      {open && (
        <p style={{ marginTop: '1rem', fontSize: '0.88rem', animation: 'fadeUp 0.3s var(--easing) both' }}>
          {faq.a}
        </p>
      )}
    </div>
  )
}
