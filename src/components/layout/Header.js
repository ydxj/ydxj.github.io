import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FiArrowRight, FiMenu, FiX } from 'react-icons/fi';
import { navigation, profile, socials } from '../../data/site';
import useActiveSection from '../../hooks/useActiveSection';
import useScrollLock from '../../hooks/useScrollLock';
import SectionLink from '../ui/SectionLink';
import './Header.css';

const SECTION_IDS = navigation.map((item) => item.section);

const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS, isHome);

  useScrollLock(menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (event) => event.key === 'Escape' && setMenuOpen(false);
    const onResize = () => window.innerWidth > 1080 && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen]);

  const isActive = (item) => (isHome ? activeSection === item.section : Boolean(item.match && pathname.startsWith(item.match)));
  const close = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' is-open' : ''}`}>
      <div className="container site-header__inner">
        <SectionLink section="home" className="brand" aria-label={`${profile.name}, home`} onClick={close}>
          <span className="brand__name">
            {profile.name}
          </span>
          <span className="brand__role">{profile.role}</span>
        </SectionLink>

        <nav className="site-nav" aria-label="Primary">
          <ul>
            {navigation.map((item) => (
              <li key={item.section}>
                <SectionLink
                  section={item.section}
                  className={`site-nav__link${isActive(item) ? ' is-active' : ''}`}
                  aria-current={isActive(item) ? (isHome ? 'location' : 'page') : undefined}
                >
                  {item.label}
                </SectionLink>
              </li>
            ))}
          </ul>
        </nav>

        <SectionLink section="contact" className="btn btn--primary btn--sm site-header__cta">
          Let&apos;s connect <FiArrowRight aria-hidden="true" />
        </SectionLink>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!menuOpen}>
        <nav className="container" aria-label="Mobile">
          <ul className="mobile-menu__list">
            {navigation.map((item) => (
              <li key={item.section}>
                <SectionLink
                  section={item.section}
                  className={`mobile-menu__link${isActive(item) ? ' is-active' : ''}`}
                  onClick={close}
                >
                  {item.label}
                  <FiArrowRight aria-hidden="true" />
                </SectionLink>
              </li>
            ))}
          </ul>
          <SectionLink section="contact" className="btn btn--primary btn--block" onClick={close}>
            Let&apos;s connect <FiArrowRight aria-hidden="true" />
          </SectionLink>
          <div className="mobile-menu__socials">
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
                <Icon aria-hidden="true" />
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
