import { navigation, profile, socials } from '../../data/site';
import MoroccoFlag from '../ui/MoroccoFlag';
import SectionLink from '../ui/SectionLink';
import './Footer.css';

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="site-footer__top">
        <div className="site-footer__brand">
          <p className="site-footer__name">
            {profile.firstName} <span className="text-accent">{profile.lastName}</span>
          </p>
          <p className="site-footer__role">{profile.role}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="site-footer__nav">
            {navigation.map((item) => (
              <li key={item.section}>
                <SectionLink section={item.section}>{item.label}</SectionLink>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="site-footer__socials">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                <Icon aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="site-footer__bottom">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p className="site-footer__made">
          Made with passion in Morocco <MoroccoFlag />
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
