import { FiArrowLeft } from 'react-icons/fi';
import SectionLink from '../ui/SectionLink';

/** Heading block for sub-pages, with a way back to the matching home section. */
const PageIntro = ({ eyebrow, title, lead, backTo = 'home', backLabel = 'Back to home', children }) => (
  <header className="page-intro container">
    <SectionLink section={backTo} className="page-intro__back">
      <FiArrowLeft aria-hidden="true" /> {backLabel}
    </SectionLink>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h1>{title}</h1>
    {lead && <p className="page-intro__lead">{lead}</p>}
    {children}
  </header>
);

export default PageIntro;
