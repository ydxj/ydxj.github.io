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
    accentLight: 'rgba(56, 189, 248, 0.2)',
    stats: { servers: 12, uptime: '99.99%', latency: '45ms' },
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
    accentLight: 'rgba(168, 85, 247, 0.2)',
    stats: { requests: '2.4K/s', throughput: '850MB/s', health: '100%' },
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
    accentLight: 'rgba(245, 158, 11, 0.2)',
    stats: { coverage: '98%', bugs: 0, score: '94/100' },
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
    accentLight: 'rgba(34, 197, 94, 0.2)',
    stats: { progress: '5%', eta: '4.2h', confidence: '99.8%' },
  },
];

const InteractiveLab = () => {
  const [active, setActive] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const codeRef = useRef(null);
  const containerRef = useRef(null);
  const textIndexRef = useRef(0);

  const current = commands[active];

  // Typewriter effect for command label
  useEffect(() => {
    const fullText = current.label;
    const speed = 30;
    let timeout;

    if (textIndexRef.current < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, textIndexRef.current + 1));
        textIndexRef.current += 1;
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [active, current.label]);

  // Reset typewriter on active change
  useEffect(() => {
    textIndexRef.current = 0;
    setDisplayedText('');
  }, [active]);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in command buttons
      gsap.fromTo(
        '.lab-command',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' }
      );

      // Stagger lines with character reveal
      const lines = codeRef.current?.querySelectorAll('.lab-line');
      if (lines) {
        gsap.fromTo(
          lines,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.4, stagger: 0.12, ease: 'power2.out' }
        );

        // Glow pulse for each line
        lines.forEach((line, i) => {
          gsap.to(line, {
            textShadow: `0 0 20px ${current.accent}`,
            duration: 1.2,
            delay: i * 0.12 + 0.4,
            ease: 'power1.inOut',
          });
        });
      }

      // Rotate network visualization
      gsap.to('.lab-network svg', {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
      });

      // Panel glow pulse
      gsap.to('.lab-panel-glow', {
        boxShadow: `0 0 60px ${current.accent}, inset 0 0 40px ${current.accentLight}`,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, [active, current.accent, current.accentLight]);

  return (
    <section id="lab" className="section shell-dark py-5" ref={containerRef}>
      <div className="container-lg">
        {/* Decorative background elements */}
        <div className="lab-bg-accent" style={{ background: current.accentLight }} />

        <div className="row align-items-center g-5">
          {/* Left: Command Interface */}
          <div className="col-lg-5">
            <p className="eyebrow" style={{ color: current.accent }}>Advanced Workflows</p>
            <h2 className="fw-bold text-gradient mb-3">Full-Stack Control Room</h2>
            <p className="text-muted mb-4">
              Dive into production-grade scenarios. Deploy, observe, fix, and ship with real-time metrics. Each command reveals the DevOps workflows that power scalable systems.
            </p>

            {/* Command Buttons with 3D effect */}
            <div className="d-flex flex-column gap-3">
              {commands.map((cmd, idx) => (
                <button
                  key={idx}
                  className={`lab-command-btn ${idx === active ? 'lab-command-btn-active' : ''}`}
                  style={{
                    '--accent-color': cmd.accent,
                    '--accent-light': cmd.accentLight,
                  }}
                  onClick={() => setActive(idx)}
                >
                  <div className="lab-btn-icon">{cmd.icon}</div>
                  <div className="lab-btn-content">
                    <div className="lab-btn-label">{cmd.label}</div>
                    <div className="lab-btn-status">{idx === active ? 'ACTIVE' : 'Ready'}</div>
                  </div>
                  <div className="lab-btn-pulse" style={{ background: cmd.accent }} />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Terminal Panel + Network */}
          <div className="col-lg-7">
            {/* Terminal Panel */}
            <div className="lab-panel-glow shadow-lg" style={{ borderColor: current.accent }}>
              <div className="lab-panel-header" style={{ borderBottomColor: current.accent }}>
                <div className="lab-header-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="lab-header-title">
                  <span className="lab-cursor">›</span>
                  {displayedText}
                  {displayedText.length < current.label.length && <span className="lab-blink">_</span>}
                </div>
              </div>

              <div className="lab-panel-body" ref={codeRef}>
                {current.lines.map((line, i) => (
                  <div
                    key={i}
                    className="lab-line"
                    style={{
                      borderLeftColor: current.accent,
                      '--line-accent': current.accent,
                    }}
                  >
                    <span className="lab-prefix">$</span>
                    {line}
                    <span className="lab-success">✓</span>
                  </div>
                ))}
              </div>

              {/* Stats Footer */}
              <div className="lab-panel-stats" style={{ borderTopColor: current.accent }}>
                <div className="lab-stat-item">
                  <span className="lab-stat-label">{Object.keys(current.stats)[0]}</span>
                  <span className="lab-stat-value" style={{ color: current.accent }}>
                    {Object.values(current.stats)[0]}
                  </span>
                </div>
                <div className="lab-stat-item">
                  <span className="lab-stat-label">{Object.keys(current.stats)[1]}</span>
                  <span className="lab-stat-value" style={{ color: current.accent }}>
                    {Object.values(current.stats)[1]}
                  </span>
                </div>
                <div className="lab-stat-item">
                  <span className="lab-stat-label">{Object.keys(current.stats)[2]}</span>
                  <span className="lab-stat-value" style={{ color: current.accent }}>
                    {Object.values(current.stats)[2]}
                  </span>
                </div>
              </div>
            </div>

            {/* Network Visualization */}
            <div className="lab-network lab-terminal-output" style={{ borderColor: current.accent }}>
              <div className="lab-terminal-header" style={{ borderBottomColor: current.accent }}>
                <span style={{ color: current.accent }}>$ Live Output Stream</span>
              </div>
              <div className="lab-terminal-content">
                {current.lines.map((line, i) => (
                  <div key={i} className="lab-terminal-line" style={{ '--line-color': current.accent }}>
                    <span className="lab-terminal-prefix">›</span>
                    <span className="lab-terminal-text">{line}</span>
                    <span className="lab-terminal-checkmark" style={{ color: current.accent }}>✓</span>
                  </div>
                ))}
                {/* Live cursor */}
                <div className="lab-terminal-line lab-terminal-active">
                  <span className="lab-terminal-prefix" style={{ color: current.accent }}>›</span>
                  <span className="lab-terminal-cursor" style={{ borderColor: current.accent }}>_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @keyframes pulse-ring {
          0% {
            r: 8px;
            opacity: 0.8;
          }
          100% {
            r: 20px;
            opacity: 0;
          }
        }
        .lab-blink {
          animation: blink 0.7s infinite;
          margin-left: 2px;
        }
        .node-pulse {
          animation: pulse-ring 1.5s ease-out infinite;
        }
      `}</style>
    </section>
  );
};

export default InteractiveLab;