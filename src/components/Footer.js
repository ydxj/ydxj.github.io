import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4 border-top">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0">© {year} YDXJ. All rights reserved.</p>
        <div className="d-flex gap-4 fs-4">
          <a
            href="https://github.com/ydxj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
            aria-label="GitHub"
            title="GitHub"
          >
            <FaGithub aria-hidden="true" focusable="false" />
          </a>
          <a
            href="https://www.linkedin.com/in/zerhouni-omar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <FaLinkedin aria-hidden="true" focusable="false" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
