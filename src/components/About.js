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
    <section ref={aboutRef} className="section shell-light" id="about">
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
            <div className="about-card shadow-lg">
              <div className="d-flex justify-content-between mb-3">
                <span className="badge bg-dark-subtle text-dark fw-semibold">Delivery</span>
                <span className="text-muted">Recent impact</span>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="about-list">Top 3 national – WorldSkills Web Technologies 2025 (1st Oriental region).</li>
                <li className="about-list">Internship at CHU Oujda: internal training site + user support.</li>
                <li className="about-list">Front: React/GSAP · Back: Node.js/Laravel with auth and REST APIs.</li>
                <li className="about-list">Key certs (2025): Node.js, React Auth, Python, Full-Stack Bootcamp.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
