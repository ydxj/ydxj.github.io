import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <section ref={aboutRef} className="section shell-light about-shell" id="about">
      <div className="container-lg">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <p className="eyebrow">About</p>
            <h2 className="fw-bold mb-3">Full-stack builder with competition-grade rigor.</h2>
            <p className="text-muted mb-3">
              Full-stack developer based in Morocco, Top 3 nationally at WorldSkills Web Technologies (1st in the Oriental region).
              I craft responsive interfaces and robust backends that hold up under pressure.
            </p>
            <p className="text-muted mb-3">
              Go-to stack: React.js + GSAP for UX, Node.js/Express or PHP/Laravel for APIs, MySQL & MongoDB for data,
              and CI/CD to ship fast and safely.
            </p>
            <p className="text-muted mb-4">
              I thrive under tight timelines, measure performance (Lighthouse, p95), and document both user journeys and team workflows.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <div className="pill">Full Stack JS/PHP</div>
              <div className="pill">APIs & Auth</div>
              <div className="pill">Responsive UX</div>
              <div className="pill">Perf & QA</div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-showcase shadow-lg">
              <div className="showcase-title">
                <span className="badge-accent">Highlights</span>
              </div>
              
              <div className="achievement-grid">
                <div className="achievement-card">
                  <div className="achievement-icon">🏆</div>
                  <div className="achievement-content">
                    <h4>WorldSkills Top 3</h4>
                    <p>National ranking 2025, 1st Oriental region</p>
                  </div>
                </div>

                <div className="achievement-card">
                  <div className="achievement-icon">💼</div>
                  <div className="achievement-content">
                    <h4>CHU Oujda Internship</h4>
                    <p>Training site + user support, live</p>
                  </div>
                </div>

                <div className="achievement-card">
                  <div className="achievement-icon">📚</div>
                  <div className="achievement-content">
                    <h4>4 Key Certs</h4>
                    <p>Node.js, React, Python, Full-Stack (2025)</p>
                  </div>
                </div>

                <div className="achievement-card">
                  <div className="achievement-icon">⚡</div>
                  <div className="achievement-content">
                    <h4>Full-Stack Shipped</h4>
                    <p>React/GSAP + Node/Laravel + SQL/NoSQL</p>
                  </div>
                </div>
              </div>

              <div className="showcase-divider"></div>

              <div className="skills-breakdown">
                <div className="skill-row">
                  <span className="skill-label">Frontend Mastery</span>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: '95%' }}></div>
                  </div>
                </div>
                <div className="skill-row">
                  <span className="skill-label">Backend Architecture</span>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div className="skill-row">
                  <span className="skill-label">Performance Optimization</span>
                  <div className="skill-bar">
                    <div className="skill-fill" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
