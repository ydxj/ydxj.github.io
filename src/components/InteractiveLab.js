import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FaBolt, FaCloudUploadAlt, FaBug, FaCheckCircle } from 'react-icons/fa';

const commands = [
  {
    label: 'deploy --env=prod --dry-run',
    icon: <FaCloudUploadAlt />,
    lines: [
      'Building client bundle... ✓',
      'Running integration tests... ✓',
      'Running smoke tests... ✓',
      'Deploy manifest ready. No outages detected.',
    ],
    accent: '#38bdf8',
  },
  {
    label: 'observe --trace api/payment',
    icon: <FaBolt />,
    lines: [
      'p95: 132ms   |   p99: 188ms',
      'errors: < 0.1% | circuit: closed',
      'live tail: POST /charge, status=201, db=14ms',
    ],
    accent: '#a855f7',
  },
  {
    label: 'fix --detect-regressions',
    icon: <FaBug />,
    lines: [
      'Analyzing diff... looking for perf hits',
      'JS bundle: -12%  | API latency: -8%',
      'Accessibility audit: passed (98/100)',
    ],
    accent: '#f59e0b',
  },
  {
    label: 'ship --story=DX-142',
    icon: <FaCheckCircle />,
    lines: [
      'Feature flags updated for cohort=beta',
      'Rollout plan: 5% → 25% → 50% → 100%',
      'Observability hooks armed. Ready to ship.',
    ],
    accent: '#22c55e',
  },
];

const InteractiveLab = () => {
  const [active, setActive] = useState(0);
  const codeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.lab-command',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' }
      );

      gsap.fromTo(
        codeRef.current?.querySelectorAll('.line'),
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, stagger: 0.08, ease: 'power2.out' }
      );
    });
    return () => ctx.revert();
  }, [active]);

  const current = commands[active];

  return (
    <section id="lab" className="section shell-dark py-5">
      <div className="container-lg">
        <div className="row align-items-center g-4">
          <div className="col-lg-5">
            <p className="eyebrow">Interactive</p>
            <h2 className="fw-bold text-gradient mb-3">Full-Stack Control Room</h2>
            <p className="text-muted mb-4">
              Toggle between deploy, observability, and quality scenarios. The panel simulates the workflows I build to ship, monitor, and iterate safely.
            </p>
            <div className="d-flex flex-column gap-2">
              {commands.map((cmd, idx) => (
                <button
                  key={idx}
                  className={`lab-command btn w-100 text-start ${idx === active ? 'lab-command-active' : 'lab-command-idle'}`}
                  style={{ borderColor: idx === active ? cmd.accent : 'transparent' }}
                  onClick={() => setActive(idx)}
                >
                  <span className="me-2">{cmd.icon}</span>
                  {cmd.label}
                </button>
              ))}
            </div>
          </div>

          <div className="col-lg-7">
            <div className="lab-panel shadow-lg" style={{ borderColor: current.accent }}>
              <div className="lab-panel-header">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
                <div className="flex-grow-1 text-center text-muted" style={{ fontSize: '0.9rem' }}>
                  {current.label}
                </div>
              </div>
              <div className="lab-panel-body" ref={codeRef}>
                {current.lines.map((line, i) => (
                  <div key={i} className="line" style={{ borderLeftColor: current.accent }}>
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveLab;
