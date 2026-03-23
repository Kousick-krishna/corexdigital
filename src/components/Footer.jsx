import { Link } from 'react-router-dom'

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Our Work' },
  { to: '/process', label: 'Process' },
  { to: '/contact', label: 'Contact' },
]

const services = [
  'Website Development',
  'App Development',
  'SEO Optimization',
  'Digital Marketing',
  'Social Media Mgmt',
  'Meta Ads',
  'Influencer Marketing',
  'Advertisement Shoot',
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="nav-logo logo-font">
              COR<span style={{ color: 'var(--primary)' }}>EX</span>
            </Link>
            <p>
              A full-spectrum digital agency crafting high-performance brands, experiences,
              and campaigns that move fast and convert faster.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <span className="tag">🏆 Award-Winning</span>
              <span className="tag">🚀 Results-Driven</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <ul>
              {quickLinks.map(l => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              {services.map(s => (
                <li key={s}><Link to="/services">{s}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} <strong>Corex Digital</strong>. All rights reserved.
          </p>

          <div className="footer-socials">
            {['𝕏', '𝕀', '𝕃', '𝔽'].map((icon, i) => (
              <a key={i} href="#" className="social-pill" title={['Twitter/X','Instagram','LinkedIn','Facebook'][i]}>
                {['X','IG','in','f'][i]}
              </a>
            ))}
          </div>

          <p className="footer-copy" style={{ fontSize: '0.78rem' }}>
            Designed & Built with ❤️ by Corex Digital
          </p>
        </div>
      </div>
    </footer>
  )
}
