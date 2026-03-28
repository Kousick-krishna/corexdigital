import { Link } from 'react-router-dom'
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaWhatsapp } from 'react-icons/fa'

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

          {/* ✅ Updated Social Icons */}
          <div className="footer-socials">
            <a href="https://www.instagram.com/corex.inn?igsh=MTZudjEyd2gwd29lYw%3D%3D&utm_source=qr" className="social-pill" title="Instagram">
              <FaInstagram />
            </a>
            <a href="AQFZsnmwqkj4RQAAAZ0zEgwQQawYz1Bo8WKTccDpdLR3hA6JRFhAla9EekXdGQsp1NXEyQARe2JZU8QxAaLIDCnMpyA03qHZu8zkUNrmONHES43IM8iFKlPdMueA6BpK5HgUExM" className="social-pill" title="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://www.facebook.com/people/Core-X/61588527081633/?mibextid=wwXIfr&rdid=PtIF72qmxOIN2REo&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1G3aUfmS4u%2F%3Fmibextid%3DwwXIfr" className="social-pill" title="Facebook">
              <FaFacebookF />
            </a>
            <a
  href="https://wa.me/917305758584"
  target="_blank"
  rel="noopener noreferrer"
  className="social-pill"
  title="WhatsApp"
>
  <FaWhatsapp />
</a>
          </div>

          <p className="footer-copy" style={{ fontSize: '0.78rem' }}>
            Designed & Built with ❤️ by Corex Digital
          </p>
        </div>
      </div>
    </footer>
  )
}