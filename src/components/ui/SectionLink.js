import { Link, useLocation } from 'react-router-dom';

/**
 * Link to a section of the home page. On the home page it scrolls in place;
 * from a sub-page it navigates to "/#section" and ScrollManager takes over.
 */
const SectionLink = ({ section, onClick, children, ...rest }) => {
  const { pathname } = useLocation();
  const to = section === 'home' ? '/' : `/#${section}`;

  const handleClick = (event) => {
    onClick?.(event);
    if (pathname !== '/') return;

    const target = section === 'home' ? null : document.getElementById(section);
    if (section !== 'home' && !target) return;

    event.preventDefault();
    if (target) {
      target.scrollIntoView({ block: 'start' });
      target.focus?.({ preventScroll: true });
    } else {
      window.scrollTo({ top: 0 });
    }
    window.history.replaceState(window.history.state, '', to);
  };

  return (
    <Link to={to} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
};

export default SectionLink;
