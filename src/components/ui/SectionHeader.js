import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

/** Title + subtitle with an optional "View all" link aligned to the right. */
const SectionHeader = ({ eyebrow, title, subtitle, action, id }) => (
  <div className="section-header" data-reveal>
    <div>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section-title" id={id}>
        {title}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
    {action && (
      <Link className="btn btn--outline btn--sm" to={action.to}>
        {action.label} <FiArrowRight aria-hidden="true" />
      </Link>
    )}
  </div>
);

export default SectionHeader;
