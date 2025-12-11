import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { resume } from '../assets/assets';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;

    gsap.fromTo(
      el.querySelectorAll('.hero-stagger'),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.1,
        stagger: 0.15,
        ease: 'power3.out',
      }
    );
  }, []);

  // SEO: set page title and key meta tags on mount
  useEffect(() => {
    const setMeta = (name, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const setOg = (property, content) => {
      if (!content) return;
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    const title = 'Zerhouni Omar | Full-Stack Developer | WorldSkills Morocco';
    const description = 'Full-stack developer based in Morocco (WorldSkills Top 3). React, Node.js, Laravel, CI/CD. Available for freelance projects and high-velocity delivery.';
    const url = 'https://ydxj.github.io/';
    const image = 'https://ydxj.github.io/og-image.png';
    const keywords = 'Zerhouni Omar, Full-Stack Developer, React, Node.js, Laravel, WorldSkills Morocco, freelance developer, web developer Morocco, API development, CI/CD';

    document.title = title;
    setMeta('description', description);
    setMeta('keywords', keywords);
    setMeta('robots', 'index, follow');

    setOg('og:type', 'website');
    setOg('og:title', title);
    setOg('og:description', description);
    setOg('og:url', url);
    setOg('og:image', image);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', image);
  }, []);

  return (
    <section id="hero" ref={heroRef} className="hero-shell">
      <div className="container-lg">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <p className="eyebrow hero-stagger">Zerhouni Omar · Full-Stack · WorldSkills Top 3</p>
            <h1 className="display-4 fw-bold hero-title hero-stagger">
              I ship fast, resilient products end-to-end.
            </h1>
            <p className="lead text-muted hero-stagger" style={{ maxWidth: '620px' }}>
              React/GSAP on the front, Node.js & Laravel at the core, MySQL/MongoDB for data, CI/CD for safe velocity. 1st Oriental region · Top 3 national at WorldSkills Web Technologies.
            </p>
            <div className="d-flex flex-wrap gap-3 hero-stagger">
              <a className="btn btn-primary px-4 py-2 rounded-pill fw-semibold" href="#projects">
                🚀 View Projects
              </a>
              <a className="btn btn-outline-light px-4 py-2 rounded-pill fw-semibold" href={resume} download>
                📄 Download CV
              </a>
            </div>
            <div className="d-flex flex-wrap gap-2 mt-4 hero-stagger">
              <span className="chip">React.js</span>
              <span className="chip">Node.js / Express</span>
              <span className="chip">PHP / Laravel</span>
              <span className="chip">MySQL · MongoDB</span>
              <span className="chip">WorldSkills Top 3</span>
            </div>
          </div>

          <div className="col-lg-5 hero-stagger">
            <div className="hero-glow" />
            <div className="hero-showcase shadow-lg">
              <div className="showcase-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <div className="showcase-body">
                <div className="code-line">
                  <span className="keyword">const</span> <span className="variable">portfolio</span> = {'{'}
                </div>
                <div className="code-line indent-1">
                  <span className="prop">Name</span>: <span className="string">'Zerhouni Omar'</span>,
                </div>
                <div className="code-line indent-1">
                  <span className="prop">fullStack</span>: <span className="string">'React + Node'</span>,
                </div>
                <div className="code-line indent-1">
                  <span className="prop">experience</span>: <span className="string">'2+ years'</span>,
                </div>
                <div className="code-line indent-1">
                  <span className="prop">worldSkills</span>: <span className="string">'Top 3 National'</span>,
                </div>
                <div className="code-line indent-1">
                  <span className="prop">mission</span>: <span className="string">'Ship fast & reliable'</span>,
                </div>
                <div className="code-line">
                  {'}'};
                </div>
                <div className="code-line mt-3">
                  <span className="keyword">await</span> <span className="variable">buildAwesome</span>();
                </div>
              </div>
              <div className="showcase-stats">
                <div className="stat-item">
                  <span className="stat-label">Projects</span>
                  <span className="stat-value">5+</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Stack</span>
                  <span className="stat-value">8+</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Performance</span>
                  <span className="stat-value">95+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
