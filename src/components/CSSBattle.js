import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CSSBattle = () => {
  const componentRef = useRef(null);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Load the CSS Battle API from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@edixon/css-battle-api@0.7.3/dist/bundle/CSSBattleAPI.min.js';
    script.async = true;

    script.onload = async () => {
      try {
        setLoading(true);
        // Access the library from window
        const { CSSBattleAPI } = window;
        
        if (!CSSBattleAPI) {
          throw new Error('CSSBattleAPI not loaded');
        }

        // Create instance with default proxy
        const cba = new CSSBattleAPI({
          proxy: true
        });

        // Fetch profile
        const profile = await cba.profile('zerhouni');
        
        if (profile && typeof profile === 'string') {
          // Error message returned as string
          setError(profile);
          setLoading(false);
        } else if (profile) {
          setProfileData(profile);
          setError(null);
          setLoading(false);
        }
      } catch (err) {
        console.error('CSS Battle API Error:', err);
        setError('Unable to load CSS Battle profile. Please try again later.');
        setLoading(false);
      }
    };

    script.onerror = () => {
      setError('Failed to load CSS Battle API library');
      setLoading(false);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (componentRef.current && profileData) {
      gsap.fromTo(
        componentRef.current.querySelectorAll('.css-battle-stagger'),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        }
      );
    }
  }, [profileData]);

  return (
    <section id="css-battle" ref={componentRef} className="shell-dark">
      <div className="container-lg">
        <div className="row align-items-center g-5 py-5">
          <div className="col-lg-12">
            <p className="eyebrow css-battle-stagger">CSS Battle</p>
            <h2 className="display-5 fw-bold mb-4 css-battle-stagger">
              <span className="text-gradient">Pure CSS Challenges</span>
            </h2>
            <p className="lead text-muted mb-5 css-battle-stagger" style={{ maxWidth: '720px' }}>
              Competing in CSS Battle, a global platform for CSS developers to tackle creative design challenges. Showcasing pixel-perfect accuracy and modern CSS techniques.
            </p>

            {loading && (
              <div className="css-battle-card css-battle-stagger">
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}

            {error && (
              <div className="alert alert-warning css-battle-stagger" role="alert">
                {error}
              </div>
            )}

            {profileData && !loading && (
              <>
                <div className="css-battle-header css-battle-stagger mb-5">
                  <div className="d-flex align-items-center gap-4 mb-4">
                    <div className="css-battle-avatar">
                      <img 
                        src={profileData.avatar} 
                        alt={profileData.name}
                        className="rounded-circle"
                        style={{ width: '100px', height: '100px', border: '3px solid #60a5fa' }}
                      />
                    </div>
                    <div>
                      <h3 className="mb-1" style={{ color: '#e8ecf5' }}>
                        {profileData.name}
                      </h3>
                      <p className="text-muted mb-0">@{profileData.username}</p>
                      {profileData.job && (
                        <p className="text-muted mb-0">{profileData.job}</p>
                      )}
                      {profileData.country && (
                        <p className="text-muted mb-0">📍 {profileData.country}</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="row g-4 mb-5">
                  <div className="col-md-6 col-lg-3">
                    <div className="css-battle-stat css-battle-stagger">
                      <div className="stat-label">Global Rank</div>
                      <div className="stat-number">#{profileData.ranking.rank}</div>
                      <div className="stat-sublabel">out of {profileData.ranking.totalPlayers.toLocaleString()}</div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3">
                    <div className="css-battle-stat css-battle-stagger">
                      <div className="stat-label">Total Score</div>
                      <div className="stat-number" style={{ fontSize: '2.5rem' }}>
                        {profileData.ranking.totalScore.toLocaleString()}
                      </div>
                      <div className="stat-sublabel">points earned</div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3">
                    <div className="css-battle-stat css-battle-stagger">
                      <div className="stat-label">Battles Played</div>
                      <div className="stat-number">{profileData.ranking.battlesPlayed}</div>
                      <div className="stat-sublabel">challenges completed</div>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3">
                    <div className="css-battle-stat css-battle-stagger">
                      <div className="stat-label">Avg Score</div>
                      <div className="stat-number">
                        {Math.round(profileData.ranking.totalScore / profileData.ranking.battlesPlayed)}
                      </div>
                      <div className="stat-sublabel">per battle</div>
                    </div>
                  </div>
                </div>

                <div className="css-battle-cta css-battle-stagger">
                  <a 
                    href="https://cssbattle.dev/player/zerhouni"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                  >
                    View Full Profile →
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .css-battle-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 200px;
        }

        .css-battle-header {
          background: rgba(96, 165, 250, 0.05);
          border: 1px solid rgba(96, 165, 250, 0.2);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(10px);
        }

        .css-battle-stat {
          background: linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 2rem 1.5rem;
          backdrop-filter: blur(10px);
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .css-battle-stat::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .css-battle-stat:hover {
          border-color: rgba(96, 165, 250, 0.5);
          transform: translateY(-5px);
          box-shadow: 0 8px 32px rgba(96, 165, 250, 0.1);
        }

        .css-battle-stat:hover::before {
          opacity: 1;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #a0aabc;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(120deg, #60a5fa, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0.5rem 0;
        }

        .stat-sublabel {
          font-size: 0.75rem;
          color: #8b9bb7;
          margin-top: 0.5rem;
        }

        .css-battle-avatar {
          position: relative;
          z-index: 1;
        }

        .css-battle-cta {
          text-align: center;
        }

        .btn-primary {
          background: linear-gradient(135deg, #60a5fa 0%, #a855f7 100%);
          border: none;
          font-weight: 600;
          letter-spacing: 0.05em;
          padding: 12px 32px;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(96, 165, 250, 0.3);
          color: #fff;
        }

        @media (max-width: 768px) {
          .css-battle-header {
            padding: 1.5rem;
          }

          .css-battle-stat {
            padding: 1.5rem 1rem;
          }

          .stat-number {
            font-size: 1.75rem;
          }

          .d-flex {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
};

export default CSSBattle;
