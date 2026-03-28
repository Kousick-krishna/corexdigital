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
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>

      {/* Full bleed row — no container class, manual padding so logo touches edge */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: isMobile ? '0 1rem' : '0 2rem',
        height: '72px',
      }}>

        {/* ── Logo — extreme LEFT ── */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <div style={{
            width: isMobile ? '150px' : '210px',
            height: isMobile ? '34px' : '44px',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <img
              src="/corexlogo.PNG"
              alt="Corex Logo"
              style={{
                position: 'absolute',
                width: isMobile ? '320px' : '420px',
                height: 'auto',
                top: '50%',
                left: '50%',
                transform: 'translate(-48%, -50%)',
                mixBlendMode: 'screen',
                pointerEvents: 'none',
              }}
            />
          </div>
        </Link>

        {/* ── Desktop nav links — centered between logo and cta ── */}
        {!isMobile && (
          <ul className="nav-links" style={{ margin: '0 auto' }}>
            {links.map(l => (
              <li key={l.to}>
                <Link to={l.to} className={location.pathname === l.to ? 'active' : ''}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* ── Right side — extreme RIGHT ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: isMobile ? '0.5rem' : '1rem',
          flexShrink: 0,
        }}>
          <ThemeToggler />

          {!isMobile && (
            <Link to="/contact" className="btn btn-primary"
              style={{ fontSize: '0.85rem', padding: '0.65rem 1.5rem' }}>
              Let's Talk →
            </Link>
          )}

          {isMobile && (
            <button
              className={`hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          )}
        </div>

      </div>

      {menuOpen && (
  <div className="mobile-menu open" style={{ padding: '1.75rem 1.5rem 2rem' }}>
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