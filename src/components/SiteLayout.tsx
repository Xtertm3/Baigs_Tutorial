import { useState, useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Courses', to: '/courses' },
  { label: 'Contact', to: '/contact' },
]

function SiteLayout() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className="site-shell">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />

      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-wrap">
          <NavLink className="brand" to="/">
            <div className="logo-container">
              <img src="/logo.png" alt="Baigs Tutorial" className="brand-logo" />
              <div className="logo-placeholder">BT</div>
            </div>
            <span>Baigs Tutorial</span>
          </NavLink>

          <nav className="nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <div className="footer-brand">
            <img src="/logo.png" alt="Baigs Tutorial" className="footer-logo" />
            <p>© {new Date().getFullYear()} Baigs Tutorial. All rights reserved.</p>
          </div>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/baigs_tutorial?igsh=bHk3a2dvaWViMWJ6"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a
              href="https://wa.me/919148641081"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title="WhatsApp"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.5 8.5 0 0 1 3.5.8L21 3l-1.3 4.2a8.38 8.38 0 0 1 .8 4.3z"></path></svg>
            </a>
            <a href="mailto:ashwaqullabaig4@gmail.com" className="social-link" title="Email">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SiteLayout
