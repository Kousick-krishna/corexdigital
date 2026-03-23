import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ThemeToggler from './ThemeToggler'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Work' },
  { to: '/process', label: 'Process' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-inner">

          <Link to="/" className="nav-logo logo-font">
            COR<span>EX</span>
          </Link>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.to}>
                <Link to={l.to} className={location.pathname === l.to ? 'active' : ''}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-cta">
            <ThemeToggler />
            <Link to="/contact" className="btn btn-primary desktop-cta-btn"
              style={{ fontSize: '0.85rem', padding: '0.65rem 1.5rem' }}>
              Let's Talk →
            </Link>
            <button
  className={`hamburger ${menuOpen ? 'open' : ''}`}
  onClick={() => setMenuOpen(o => !o)}
  aria-label={menuOpen ? 'Close menu' : 'Open menu'}
>
  <span></span>
  <span></span>
  <span></span>
</button>
          </div>

        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu open">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className={location.pathname === l.to ? 'active' : ''}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-primary"
            style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
            Let's Talk →
          </Link>
        </div>
      )}
    </nav>
  )
}
