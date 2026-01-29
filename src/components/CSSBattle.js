import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CSSBattle = () => {
  const componentRef = useRef(null);
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Cached profile data - update this manually by visiting your CSS Battle profile
  const cachedProfileData = {
    avatar: 'https://ik.imagekit.io/cssbattle/user%2FqIp1Xec6M1gO1E8qZdIHy4jPazB3%2Favatar_qIp1Xec6M1gO1E8qZdIHy4jPazB3.jpeg?alt=media',
    name: 'Zerhouni Omar',
    username: 'zerhouni',
    country: 'Morocco',
    job: 'Full-Stack Developer',
    isLiveData: false,
    lastUpdated: '2026-01-25',
    battleStats: {
      globalRank: 6918,
      targetsPlayed: 33,
      totalScore: 21052.09,
    },
    dailyStats: {
      targetsPlayed: 31,
      avgMatch: '99.94%',
      avgCharacters: 252,
    },
    versusStats: {
      rating: 1200,
      gamesPlayed: 0,
      wins: 0,
    },
    streaks: {
      current: 16,
      longest: 16,
    }
  };

  useEffect(() => {
    const fetchCSSBattleProfile = async () => {
      try {
        setLoading(true);
        
        // Use the CSS Battle API proxy
        const response = await fetch('https://cssbattle-api.vercel.app/api/player/zerhouni');
        
        if (!response.ok) {
          throw new Error('Failed to fetch profile');
        }
        
        const data = await response.json();
        
        // Transform the API response to our component format
        const profileData = {
          avatar: data.profilePicture || cachedProfileData.avatar,
          name: 'Zerhouni Omar',
          username: data.username || 'zerhouni',
          country: 'Morocco',
          job: 'Full-Stack Developer',
          isLiveData: true,
          lastUpdated: new Date().toISOString().split('T')[0],
          battleStats: {
            globalRank: data.battleStats?.globalRank || 0,
            targetsPlayed: data.battleStats?.targetsPlayed || 0,
            totalScore: parseFloat(data.battleStats?.totalScore || 0),
          },
          dailyStats: {
            targetsPlayed: data.dailyTargets?.targetsPlayed || 0,
            avgMatch: data.dailyTargets?.avgMatch ? `${data.dailyTargets.avgMatch}%` : '0%',
            avgCharacters: data.dailyTargets?.avgCharacters || 0,
          },
          versusStats: {
            rating: data.versus?.rating || 1200,
            gamesPlayed: data.versus?.gamesPlayed || 0,
            wins: data.versus?.wins || 0,
          },
          streaks: {
            current: data.streaks?.current || 0,
            longest: data.streaks?.longest || 0,
          }
        };
        
        setProfileData(profileData);
        setError(null);
        setLoading(false);
      } catch (err) {
        console.warn('Could not fetch live data, using cached stats:', err);
        // Use cached data as fallback
        setProfileData(cachedProfileData);
        setError(null);
        setLoading(false);
      }
    };

    fetchCSSBattleProfile();
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
            <h2 className="display-5 fw-bold mb-3 css-battle-stagger">
              <span className="text-gradient">Pure CSS Challenges</span>
            </h2>
            <p className="lead text-muted mb-4 css-battle-stagger" style={{ maxWidth: '720px', marginBottom: '2rem' }}>
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
                {/* {!profileData.isLiveData && (
                  <div className="alert alert-info css-battle-stagger mb-4" role="alert">
                    📊 Showing cached profile data. Visit CSS Battle for live stats!
                  </div>
                )} */}
                
                <div className="css-battle-header css-battle-stagger mb-5">
                  <div className="d-flex align-items-center gap-4 mb-4">
                    <div className="css-battle-avatar">
                      {profileData.avatar && (
                        <img 
                          src={profileData.avatar} 
                          alt={profileData.name}
                          className="rounded-circle"
                          style={{ width: '100px', height: '100px', border: '3px solid #60a5fa' }}
                        />
                      )}
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

                {/* Streaks Section */}
                <div className="row g-4 mb-4">
                  <div className="col-md-6">
                    <div className="css-battle-stat css-battle-stagger">
                      <div className="stat-label">🔥 Current Streak</div>
                      <div className="stat-number">{profileData.streaks.current}</div>
                      <div className="stat-sublabel">days</div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="css-battle-stat css-battle-stagger">
                      <div className="stat-label">⭐ Longest Streak</div>
                      <div className="stat-number">{profileData.streaks.longest}</div>
                      <div className="stat-sublabel">days</div>
                    </div>
                  </div>
                </div>

                {/* Battle Stats */}
                <h3 className="mb-3 css-battle-stagger" style={{ color: '#e8ecf5', fontSize: '1.1rem' }}>Battle Stats</h3>
                <div className="row g-3 mb-4">
                  <div className="col-md-6 col-lg-4">
                    <div className="css-battle-stat css-battle-stagger">
                      <div className="stat-label">Global Rank</div>
                      <div className="stat-number">#{profileData.battleStats.globalRank.toLocaleString()}</div>
                      <div className="stat-sublabel">position</div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="css-battle-stat css-battle-stagger">
                      <div className="stat-label">Targets Played</div>
                      <div className="stat-number">{profileData.battleStats.targetsPlayed}</div>
                      <div className="stat-sublabel">challenges</div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="css-battle-stat css-battle-stagger">
                      <div className="stat-label">Total Score</div>
                      <div className="stat-number" style={{ fontSize: '1.5rem' }}>
                        {typeof profileData.battleStats.totalScore === 'number' 
                          ? profileData.battleStats.totalScore.toLocaleString('en-US', { 
                              maximumFractionDigits: 0 
                            }) 
                          : '0'}
                      </div>
                      <div className="stat-sublabel">points</div>
                    </div>
                  </div>
                </div>

                {/* Daily Stats */}
                <h3 className="mb-3 css-battle-stagger" style={{ color: '#e8ecf5', fontSize: '1.1rem' }}>Daily Stats</h3>
                <div className="row g-3 mb-4">
                  <div className="col-md-6 col-lg-4">
                    <div className="css-battle-stat css-battle-stagger">
                      <div className="stat-label">Targets Played</div>
                      <div className="stat-number">{profileData.dailyStats.targetsPlayed}</div>
                      <div className="stat-sublabel">daily</div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="css-battle-stat css-battle-stagger">
                      <div className="stat-label">Avg Match</div>
                      <div className="stat-number" style={{ fontSize: '1.5rem' }}>
                        {profileData.dailyStats.avgMatch}
                      </div>
                      <div className="stat-sublabel">accuracy</div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="css-battle-stat css-battle-stagger">
                      <div className="stat-label">Avg Characters</div>
                      <div className="stat-number">{profileData.dailyStats.avgCharacters}</div>
                      <div className="stat-sublabel">per solution</div>
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
                    View Full Profile on CSS Battle →
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
          border-radius: 12px;
          padding: 1.5rem;
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 150px;
        }

        .css-battle-header {
          background: rgba(96, 165, 250, 0.05);
          border: 1px solid rgba(96, 165, 250, 0.2);
          border-radius: 12px;
          padding: 1.5rem;
          backdrop-filter: blur(10px);
          margin-bottom: 2rem;
        }

        .css-battle-stat {
          background: linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(168, 85, 247, 0.05) 100%);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1.2rem 1rem;
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
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(96, 165, 250, 0.08);
        }

        .css-battle-stat:hover::before {
          opacity: 1;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #a0aabc;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin-bottom: 0.35rem;
          font-weight: 600;
        }

        .stat-number {
          font-size: 1.6rem;
          font-weight: 700;
          background: linear-gradient(120deg, #60a5fa, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin: 0.25rem 0;
        }

        .stat-sublabel {
          font-size: 0.7rem;
          color: #8b9bb7;
          margin-top: 0.3rem;
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
          padding: 10px 24px;
          font-size: 0.95rem;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(96, 165, 250, 0.25);
          color: #fff;
        }

        @media (max-width: 768px) {
          .css-battle-header {
            padding: 1rem;
          }

          .css-battle-stat {
            padding: 1rem 0.8rem;
          }

          .stat-number {
            font-size: 1.4rem;
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
