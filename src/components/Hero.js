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

  return (
    <section id="hero" ref={heroRef} className="hero-shell">
      <div className="container-lg">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <p className="eyebrow hero-stagger">Full-Stack · WorldSkills Top 3</p>
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
            <div className="hero-card shadow-lg">
              <div className="hero-graph">
                <div className="bar" style={{ height: '70%' }} />
                <div className="bar" style={{ height: '55%' }} />
                <div className="bar" style={{ height: '90%' }} />
                <div className="bar" style={{ height: '62%' }} />
                <div className="bar" style={{ height: '80%' }} />
              </div>
              <div className="hero-metrics">
                <div className="metric">
                  <span className="label">Latency</span>
                  <span className="value">132 ms</span>
                </div>
                <div className="metric">
                  <span className="label">Uptime</span>
                  <span className="value">99.97%</span>
                </div>
                <div className="metric">
                  <span className="label">Deploys</span>
                  <span className="value">250+/yr</span>
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
