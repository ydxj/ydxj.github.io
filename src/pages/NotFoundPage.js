import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import usePageMeta from '../hooks/usePageMeta';

const NotFoundPage = () => {
  usePageMeta({
    title: 'Page not found · Omar Zerhouni',
    description: 'This page does not exist. Head back to the portfolio of Omar Zerhouni, full-stack developer.',
    path: '/404',
  });

  return (
    <section className="page-intro container section">
      <p className="eyebrow">404</p>
      <h1>This page doesn&apos;t exist.</h1>
      <p className="page-intro__lead">The link may be outdated. The rest of the portfolio is one click away.</p>
      <Link to="/" className="btn btn--primary">
        Back to home <FiArrowRight aria-hidden="true" />
      </Link>
    </section>
  );
};

export default NotFoundPage;
