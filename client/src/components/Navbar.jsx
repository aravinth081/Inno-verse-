import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    if (href === '#hero' || href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="navbar-inner">
          <a href="#" className="navbar-logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <img src="/logo.png" alt="Innoverse" className="navbar-logo-img" />
            <span className="brand-text">INNOVERSE</span>
          </a>

          <div className="navbar-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`navbar-link${activeSection === link.href ? ' active' : ''}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="navbar-actions">
            <a
              href="#contact"
              className="navbar-cta"
              onClick={(e) => handleNavClick(e, '#contact')}
            >
              Get Started
            </a>
            <button
              className="navbar-mobile-toggle"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <div className="mobile-menu-header">
          <a href="#" className="navbar-logo">
            <img src="/logo.png" alt="Innoverse" className="navbar-logo-img" />
            <span className="brand-text">INNOVERSE</span>
          </a>
          <button
            className="navbar-mobile-toggle"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{ display: 'flex' }}
          >
            <X size={22} />
          </button>
        </div>

        <div className="mobile-menu-links">
          {navLinks.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-menu-link${activeSection === link.href ? ' active' : ''}`}
              style={{ '--item-index': idx }}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="mobile-menu-cta" style={{ marginTop: 'auto', paddingTop: '2rem', '--item-index': navLinks.length }}>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ width: '100%' }}
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}
