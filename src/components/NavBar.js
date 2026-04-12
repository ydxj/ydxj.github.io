import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef(null);

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#journey', label: 'Journey' },
    { href: '#lab', label: 'Lab' },
    { href: '#Languages', label: 'Languages' },
    // { href: '#css-battle', label: 'CSS Battle' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const links = Array.from(document.querySelectorAll('a[data-scroll="true"]'));
    const listeners = links.map((link) => {
      const handleClick = (e) => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) {
          return;
        }

        const target = document.querySelector(href);
        if (!target) {
          return;
        }

        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };

      link.addEventListener('click', handleClick);
      return { link, handleClick };
    });

    return () => {
      listeners.forEach(({ link, handleClick }) => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setMobileOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setMobileOpen(false);
      }
    };

    const handleOutsideClick = (event) => {
      if (!mobileOpen || !navRef.current) {
        return;
      }

      if (!navRef.current.contains(event.target)) {
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('keydown', handleEscape);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [mobileOpen]);

  return (
    <nav className="power-navbar fixed-top" ref={navRef}>
      <div className="container power-navbar-inner">
        <a className="power-brand" href="#hero" data-scroll="true" aria-label="Go to home section">
          YDXJ
        </a>

        <ul className="power-desktop-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className="power-link" href={link.href} data-scroll="true">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="power-mobile-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="power-mobile-menu"
          aria-label="Toggle mobile menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div id="power-mobile-menu" className={`power-mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="container power-mobile-menu-inner">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="power-mobile-link"
              href={link.href}
              data-scroll="true"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a className="power-mobile-cta" href="#contact" data-scroll="true" onClick={() => setMobileOpen(false)}>
            Let&apos;s Work Together
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
