import { Link } from 'react-router-dom'
import useReveal from '../components/useReveal'

const SERVICES = [
  {
    icon: '🌐',
    title: 'Website Development',
    tag: 'Web',
    headline: 'Your Digital Home — Built to Convert',
    desc: 'We design and develop custom websites that are fast, secure, and built to rank. From pixel-perfect landing pages to complex web platforms, every site we build is a business asset — not just a digital brochure.',
    features: ['Custom UI/UX Design', 'Mobile-First Responsive', 'SEO-Ready Architecture', 'CMS Integration', 'Lightning Performance', 'E-Commerce Capable'],
    color: 'var(--primary)',
    glow: 'var(--glow-p)',
  },
  {
    icon: '📱',
    title: 'App Development',
    tag: 'Mobile',
    headline: 'Apps That Users Actually Love',
    desc: 'We engineer intuitive mobile and web applications that solve real problems elegantly. From MVP to full-scale product, we build with scalability and user experience at the core.',
    features: ['iOS & Android', 'React Native / Flutter', 'Web Apps (PWA)', 'API Integration', 'User Testing', 'Ongoing Maintenance'],
    color: 'var(--secondary)',
    glow: 'var(--glow-s)',
  },
  {
    icon: '🔍',
    title: 'SEO Optimization',
    tag: 'SEO',
    headline: 'Rank Higher. Stay There. Grow Faster.',
    desc: 'Search visibility is your most powerful long-term asset. We craft technical and content-driven SEO strategies that elevate your domain authority, drive qualified organic traffic, and compound results over time.',
    features: ['Technical SEO Audit', 'Keyword Strategy', 'On-Page Optimization', 'Link Building', 'Local SEO', 'Monthly Reporting'],
    color: 'var(--accent)',
    glow: 'var(--glow-a)',
  },
  {
    icon: '📊',
    title: 'Digital Marketing',
    tag: 'Marketing',
    headline: 'Data-Driven Growth at Scale',
    desc: 'We build end-to-end digital marketing ecosystems — from funnel architecture to content calendars, email sequences to performance dashboards — that turn browsers into buyers and buyers into advocates.',
    features: ['Full-Funnel Strategy', 'Email Marketing', 'Content Marketing', 'CRO Optimization', 'Analytics Setup', 'Growth Roadmaps'],
    color: 'var(--primary)',
    glow: 'var(--glow-p)',
  },
  {
    icon: '📣',
    title: 'Social Media Management',
    tag: 'Social',
    headline: 'Presence That Builds Communities',
    desc: 'Consistent, creative, and community-driven social media that grows your following and converts it into revenue. We handle strategy, content creation, scheduling, moderation, and analytics across all platforms.',
    features: ['Multi-Platform Strategy', 'Content Creation', 'Community Management', 'Story & Reel Production', 'Growth Analytics', 'Competitor Benchmarking'],
    color: 'var(--secondary)',
    glow: 'var(--glow-s)',
  },
  {
    icon: '🤝',
    title: 'Influencer Marketing',
    tag: 'Influencer',
    headline: 'Authentic Voices, Real Impact',
    desc: 'We connect your brand with the right creators — not just the biggest ones. Our influencer campaigns are built on alignment, authenticity, and measurable outcomes across Instagram, YouTube, and beyond.',
    features: ['Creator Sourcing & Vetting', 'Campaign Strategy', 'Contract Negotiation', 'Content Brief Creation', 'Performance Tracking', 'ROI Reporting'],
    color: 'var(--accent)',
    glow: 'var(--glow-a)',
  },
  {
    icon: '🎯',
    title: 'Meta Ads',
    tag: 'Paid Ads',
    headline: 'Precision Advertising. Maximum Returns.',
    desc: 'We run Meta advertising campaigns that are laser-targeted, creatively driven, and continuously optimized. Whether you want leads, sales, or brand awareness — we make every rupee of ad spend count.',
    features: ['Campaign Architecture', 'Audience Research', 'Creative Testing (A/B)', 'Retargeting Funnels', 'ROAS Optimization', 'Weekly Reporting'],
    color: 'var(--primary)',
    glow: 'var(--glow-p)',
  },
  {
    icon: '🎬',
    title: 'Advertisement Shoot',
    tag: 'Production',
    headline: 'Cinematic Content That Stops the Scroll',
    desc: 'We handle everything from concept to camera to cut. Our advertisement shoots produce high-quality brand films, product demos, social ads, and reels that are visually stunning and strategically positioned to perform.',
    features: ['Concept Development', 'Scriptwriting', 'Professional Shoot', 'Video Editing & VFX', 'Short-Form Reels', 'Thumbnail Design'],
    color: 'var(--secondary)',
    glow: 'var(--glow-s)',
  },
]

function ServiceCard({ svc, i }) {
  const handleMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const glow = card.querySelector('.service-card-glow')
    if (glow) {
      glow.style.left = `${e.clientX - rect.left}px`
      glow.style.top  = `${e.clientY - rect.top}px`
    }
  }

  return (
    <div
      className={`service-card reveal delay-${(i % 3) + 1}`}
      onMouseMove={handleMove}
      style={{ '--s-color': svc.color, '--s-glow': svc.glow }}
    >
      <div className="service-card-glow" />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div className="service-icon" style={{ marginBottom: 0 }}>{svc.icon}</div>
        <span style={{
          padding: '0.3rem 0.85rem',
          background: svc.color + '22',
          border: `1px solid ${svc.color}44`,
          borderRadius: 99,
          fontSize: '0.75rem',
          fontWeight: 600,
          color: svc.color,
          letterSpacing: '0.05em',
        }}>{svc.tag}</span>
      </div>
      <h3 style={{ marginBottom: '0.4rem' }}>{svc.title}</h3>
      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: svc.color, marginBottom: '1rem', fontFamily: 'Syne, sans-serif' }}>
        {svc.headline}
      </div>
      <p style={{ fontSize: '0.88rem', marginBottom: '1.5rem' }}>{svc.desc}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {svc.features.map(f => (
          <span key={f} style={{
            padding: '0.25rem 0.7rem',
            background: 'var(--bg3)',
            border: '1px solid var(--border)',
            borderRadius: 99,
            fontSize: '0.75rem',
            color: 'var(--text2)',
          }}>✓ {f}</span>
        ))}
      </div>
      <div className="service-arrow" style={{ color: svc.color }}>Get Started →</div>
    </div>
  )
}

export default function Services() {
  useReveal()

  return (
    <div className="page-transition">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">What We Offer</div>
          <h1>Digital Services <span className="gradient-text">Built to Perform</span></h1>
          <p>
            Eight powerful service lines, one unified vision: to grow your brand with
            strategy, creativity, and measurable results.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {SERVICES.map((svc, i) => (
              <ServiceCard key={i} svc={svc} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Teaser */}
      <section className="section" style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container text-center">
          <div className="section-label" style={{ justifyContent: 'center' }}>How We Work</div>
          <h2 className="reveal">Every Service Follows Our <span className="gradient-text">Proven Process</span></h2>
          <p className="reveal" style={{ maxWidth: 500, margin: '1rem auto 2rem' }}>
            Every engagement starts with deep discovery and ends with measurable outcomes.
            No guesswork. No fluff. Just results.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }} className="reveal">
            <Link to="/process" className="btn btn-primary">See Our Process ↗</Link>
            <Link to="/contact" className="btn btn-outline">Start a Project</Link>
          </div>
        </div>
      </section>

      {/* Packages CTA */}
      <div className="cta-section">
        <div className="container">
          <h2>Not Sure Where to <span className="gradient-text">Start</span>?</h2>
          <p>Book a free 30-minute strategy call and let's figure out exactly what your brand needs to grow.</p>
          <Link to="/contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            Book Free Strategy Call →
          </Link>
        </div>
      </div>
    </div>
  )
}
