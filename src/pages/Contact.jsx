import { useState } from 'react'
import useReveal from '../components/useReveal'

const SERVICES_LIST = [
  'Website Development',
  'App Development',
  'SEO Optimization',
  'Digital Marketing',
  'Social Media Management',
  'Influencer Marketing',
  'Meta Ads',
  'Advertisement Shoot',
  'Multiple Services',
]

const BUDGETS = [
  '₹10,000 – ₹30,000',
  '₹30,000 – ₹75,000',
  '₹75,000 – ₹1,50,000',
  '₹1,50,000+',
  'Let\'s discuss',
]

export default function Contact() {
  useReveal()
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    service: '', budget: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
  e.preventDefault()
  setLoading(true)

  // Build the WhatsApp message
  const text = `🚀 *New Project Enquiry — Corex Digital*

👤 *Name:* ${form.name}
📧 *Email:* ${form.email}
📱 *Phone:* ${form.phone || 'Not provided'}
🏢 *Company:* ${form.company || 'Not provided'}
🛠️ *Service Needed:* ${form.service}
💰 *Budget Range:* ${form.budget || 'Not specified'}

💬 *Message:*
${form.message}`

  const whatsappURL = `https://wa.me/917305758584?text=${encodeURIComponent(text)}`

  // ✅ Open WhatsApp IMMEDIATELY — must be directly triggered by user click
  // Browser blocks window.open() inside setTimeout as a popup
  window.open(whatsappURL, '_blank')

  // Then show success screen after a short delay
  setTimeout(() => {
    setLoading(false)
    setSubmitted(true)
  }, 800)
}

  return (
    <div className="page-transition">
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Get In Touch</div>
          <h1>Let's Build <span className="gradient-text">Together</span></h1>
          <p>
            Whether you have a brief, a budget, or just an idea scrawled on a napkin —
            we're ready to turn it into something remarkable.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'flex-start' }}>

            {/* ── FORM ── */}
            <div className="reveal-left">
              {submitted ? (
                <div className="contact-form-wrap" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                  <div style={{
                    fontSize: '4rem',
                    marginBottom: '1.5rem',
                    animation: 'scaleIn 0.5s var(--easing) both',
                  }}>🎉</div>
                  <h3 style={{ marginBottom: '1rem' }}>Message Received!</h3>
                  <p>
                    Thanks for reaching out. We review every message personally and will
                    get back to you within 24 hours.
                  </p>
                  <div className="divider" />
                  <p style={{ fontSize: '0.85rem', color: 'var(--primary)' }}>
                    In the meantime, feel free to explore our work or follow us on social media.
                  </p>
                  <button
                    className="btn btn-outline"
                    style={{ marginTop: '1.5rem' }}
                    onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',company:'',service:'',budget:'',message:'' }) }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form-wrap" onSubmit={handleSubmit}>
                  <h3 style={{ marginBottom: '0.25rem' }}>Tell Us About Your Project</h3>
                  <p style={{ fontSize: '0.88rem', marginBottom: '2rem' }}>
                    Fill in the details below and we'll craft a tailored proposal for you.
                  </p>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Your Name *</label>
                      <input
                        type="text" name="name" required
                        placeholder="Alex Johnson"
                        value={form.name} onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email" name="email" required
                        placeholder="alex@company.com"
                        value={form.email} onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="tel" name="phone"
                        placeholder="+91 98765 43210"
                        value={form.phone} onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Company / Brand</label>
                      <input
                        type="text" name="company"
                        placeholder="Your Company"
                        value={form.company} onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Service Needed *</label>
                      <select name="service" required value={form.service} onChange={handleChange}>
                        <option value="">Select a service…</option>
                        {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Budget Range</label>
                      <select name="budget" value={form.budget} onChange={handleChange}>
                        <option value="">Select a range…</option>
                        {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Tell Us About Your Project *</label>
                    <textarea
                      name="message" required
                      placeholder="Describe your goals, timeline, and anything else we should know…"
                      value={form.message} onChange={handleChange}
                      style={{ minHeight: 140 }}
                    />
                  </div>

                  <button
  type="submit"
  className="btn btn-primary"
  style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', padding: '1rem' }}
  disabled={loading}
>
  {loading ? (
    <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
      <span style={{
        width: 18, height: 18,
        border: '2px solid rgba(255,255,255,0.3)',
        borderTopColor: '#fff',
        borderRadius: '50%',
        animation: 'spin 0.7s linear infinite',
        display: 'inline-block',
      }} />
      Opening WhatsApp…
    </span>
  ) : 'Send Message ↗'}
</button>
                </form>
              )}
            </div>

            {/* ── CONTACT INFO ── */}
            <div className="reveal-right">
              <div className="contact-info-card">
                <div style={{ marginBottom: '0.5rem' }}>
                  <div className="section-label">Contact Info</div>
                  <h3 style={{ marginBottom: '0.5rem' }}>We're Always <span className="gradient-text">Reachable</span></h3>
                  <p style={{ fontSize: '0.88rem' }}>
                    Direct lines to the people doing the work. No support tickets.
                    No bots. Just real conversations.
                  </p>
                </div>

                {[
                  { icon: '📧', label: 'Email Us', value: 'info@corexdigital.in' },
                  { icon: '📱', label: 'Call / WhatsApp', value: '+91 7305758584' },
                  { icon: '📍', label: 'Based In', value: 'India (Serving Globally)' },
                  { icon: '⏰', label: 'Response Time', value: 'Within 24 hours' },
                ].map((info, i) => (
                  <div key={i} className={`info-item delay-${i + 1}`}>
                    <div className="info-icon">{info.icon}</div>
                    <div>
                      <h4>{info.label}</h4>
                      <p>{info.value}</p>
                    </div>
                  </div>
                ))}

                {/* Quick CTA */}
                <div style={{
                  background: 'linear-gradient(135deg, var(--primary)18, var(--secondary)18)',
                  border: '1px solid var(--border2)',
                  borderRadius: 'var(--radius)',
                  padding: '1.5rem',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>📅</div>
                  <h4 style={{ fontFamily: 'Syne, sans-serif', marginBottom: '0.4rem' }}>
                    Prefer a Quick Call?
                  </h4>
                  <p style={{ fontSize: '0.85rem', marginBottom: '1rem' }}>
                    Book a 30-minute free strategy session — no strings attached.
                  </p>
                  <a
                    href="tel:+917305758584"
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}
                  >
                    Schedule a Call →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map / Office vibe */}
      <section className="section" style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '4rem 0',
      }}>
        <div className="container">
          <div className="text-center reveal">
            <div className="section-label" style={{ justifyContent: 'center' }}>Work Style</div>
            <h2>Remote-First, <span className="gradient-text">Results-Always</span></h2>
            <p style={{ maxWidth: 540, margin: '1rem auto 3rem' }}>
              We're a fully remote team that collaborates across time zones
              to serve clients anywhere in the world — with the discipline and
              communication of an in-house team.
            </p>
          </div>

          <div className="grid-3">
            {[
              { icon: '🌏', title: 'Global Clients', desc: 'We serve brands across India, Southeast Asia, the Middle East, and beyond.' },
              { icon: '📡', title: 'Always Online', desc: 'Async-friendly with dedicated response windows and real-time availability on request.' },
              { icon: '🔐', title: 'NDAs & Contracts', desc: 'All client work is protected by signed NDAs and clear milestone-based contracts.' },
            ].map((item, i) => (
              <div key={i} className={`card text-center reveal delay-${i + 1}`}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h4 style={{ fontFamily: 'Syne, sans-serif', marginBottom: '0.5rem' }}>{item.title}</h4>
                <p style={{ fontSize: '0.88rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
