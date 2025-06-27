import { useEffect } from 'react';
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;

const Navbar = () => {
  useEffect(() => {
    const links = document.querySelectorAll('a.nav-link');
    const bsCollapse = document.getElementById('navbarNav');

    const collapseNavbar = () => {
      const collapseInstance = window.bootstrap.Collapse.getInstance(bsCollapse);
      if (collapseInstance) {
        collapseInstance.hide();
      }
    };

    links.forEach((link) => {
      const handleClick = (e) => {
        e.preventDefault();

        const href = link.getAttribute('href');
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }

        if (window.innerWidth < 992 && bsCollapse.classList.contains('show')) {
          collapseNavbar();
        }
      };

      link.addEventListener('click', handleClick);

      return () => link.removeEventListener('click', handleClick);
    });

    const toggler = document.querySelector('.navbar-toggler');
    toggler?.addEventListener('click', () => {
      const collapseInstance = window.bootstrap.Collapse.getOrCreateInstance(bsCollapse);
      if (bsCollapse.classList.contains('show')) {
        collapseInstance.hide();
      } else {
        collapseInstance.show();
      }
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#hero">
          YDXJ
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#hero">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Languages">Languages</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
