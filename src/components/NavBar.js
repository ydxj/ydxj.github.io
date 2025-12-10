import { useEffect } from 'react';
import MobileNavBar from './MobileNavBar';

const Navbar = () => {
  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#journey', label: 'Journey' },
    { href: '#lab', label: 'Lab' },
    { href: '#Languages', label: 'Languages' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  // Smooth scroll for all nav links (desktop & mobile)
  useEffect(() => {
    const links = document.querySelectorAll('a.nav-link');

    links.forEach((link) => {
      const handleClick = (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      };

      link.addEventListener('click', handleClick);

      return () => link.removeEventListener('click', handleClick);
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#hero">
          YDXJ
        </a>

        {/* Desktop menu */}
        <div className="d-none d-lg-flex ms-auto" id="navbarNav">
          <ul className="navbar-nav">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <a className="nav-link" href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu component */}
        <MobileNavBar navLinks={navLinks} />
      </div>
    </nav>
  );
};

export default Navbar;
