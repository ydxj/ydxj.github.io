import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const MobileNavBar = ({ navLinks }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [open]);

  return (
    <div className="mobile-shell">
      <button
        className="mobile-toggle d-lg-none"
        aria-label="Toggle navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`mobile-overlay ${open ? 'is-open' : ''}`}>
        <div className="mobile-backdrop" onClick={() => setOpen(false)} />
        <div className="mobile-panel">
          <header className="mobile-panel-header">
            <span className="mobile-logo">YDXJ</span>
            <button className="mobile-close" aria-label="Close menu" onClick={() => setOpen(false)}>
              <FaTimes />
            </button>
          </header>

          <div className="mobile-panel-meta">
            <span className="mobile-badge">MENU</span>
            <span className="mobile-status">Available for projects</span>
          </div>

          <div className="mobile-panel-chips">
            <span className="chip">Full-Stack · React / Node / Laravel</span>
            <span className="chip soft">Based in Morocco · Remote friendly</span>
          </div>

          <ul className="mobile-links">
            {navLinks.map((link, idx) => (
              <li key={link.href} style={{ '--delay': `${idx * 70}ms` }}>
                <a className="mobile-link" href={link.href} onClick={() => setOpen(false)}>
                  <span className="link-num">0{idx + 1}</span>
                  <span className="link-text">{link.label}</span>
                  <span className="link-arrow">→</span>
                </a>
              </li>
            ))}
          </ul>

          <a className="mobile-cta-btn" href="#contact" onClick={() => setOpen(false)}>
            Start a project
          </a>

          <footer className="mobile-panel-footer">Full-Stack Developer · React / Node / Laravel</footer>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
