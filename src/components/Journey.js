import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGraduationCap, FaServer, FaCodeBranch, FaAward } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  {
    year: '2022 — 2023',
    title: 'Baccalaureate in Physical Sciences',
    subtitle: 'Scientific foundations',
    icon: FaGraduationCap,
    body: 'Scientific grounding, logic, and rigor that drive my product and engineering approach.',
  },
  {
    year: '2023 — 2025',
    title: 'Digital Development (Full Stack)',
    subtitle: 'Program + PIE innovation',
    icon: FaCodeBranch,
    body: 'Full-stack training and entrepreneurial innovation program: React, Node.js/Laravel, UX, project delivery.',
  },
  {
    year: '01 — 02 / 2025',
    title: 'Internship · CHU Oujda',
    subtitle: 'Internal training site',
    icon: FaServer,
    body: 'Built an internal training site for hospital staff, with user support and continuous integration.',
  },
  {
    year: '2025 — 2026',
    title: 'WorldSkills Web Technologies',
    subtitle: 'Top 3 national, 1st Oriental region',
    icon: FaAward,
    body: 'Competition track: performance, accessibility, security, and deliverables under strict constraints and technical juries.',
  },
];

const Journey = () => {
  const wrapRef = useRef(null);

  useEffect(() => {
    const cards = wrapRef.current?.querySelectorAll('.journey-card');
    const line = wrapRef.current?.querySelector('.journey-progress');

    if (cards && line) {
      gsap.set(line, { scaleY: 0, transformOrigin: 'top center' });

      ScrollTrigger.create({
        trigger: wrapRef.current,
        start: 'top center',
        end: 'bottom center',
        onUpdate: (self) => {
          gsap.to(line, { scaleY: self.progress, overwrite: true, ease: 'none' });
        },
      });

      cards.forEach((card, idx) => {
        const dir = idx % 2 === 0 ? -80 : 80;
        gsap.fromTo(
          card,
          { opacity: 0, x: dir, rotateY: -8, filter: 'blur(4px)' },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            filter: 'blur(0px)',
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
            },
          }
        );
      });
    }

    return () => ScrollTrigger.getAll().forEach((st) => st.kill());
  }, []);

  return (
    <section id="journey" className="section shell-dark py-5">
      <div className="container-lg">
        <div className="text-center mb-5">
          <p className="eyebrow">Path & Progress</p>
          <h2 className="display-6 fw-bold text-gradient">Journey</h2>
          <p className="text-muted" style={{ maxWidth: '640px', margin: '0 auto' }}>
            From fundamentals to production systems—here is the arc of how I build, ship, and grow as a full-stack engineer.
          </p>
        </div>

        <div className="journey-grid" ref={wrapRef}>
          <div className="journey-line" />
          <div className="journey-progress" />
          {milestones.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div className={`journey-row ${idx % 2 ? 'right' : 'left'}`} key={idx}>
                <div className="journey-card shadow journey-card-glass">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <div className="journey-icon"><Icon size={20} /></div>
                    <div>
                      <div className="text-uppercase small text-muted fw-semibold">{item.year}</div>
                      <h5 className="mb-0">{item.title}</h5>
                      <div className="text-secondary" style={{ fontSize: '0.95rem' }}>{item.subtitle}</div>
                    </div>
                  </div>
                  <p className="mb-0 text-light-50">{item.body}</p>
                </div>
                <div className="journey-dot" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Journey;
