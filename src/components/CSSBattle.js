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
                <div className="css-battle-main-card css-battle-stagger">
                  <div className="card-left">
                    <div className="profile-section">
                      {profileData.avatar && (
                        <img 
                          src={profileData.avatar} 
                          alt={profileData.name}
                          className="profile-image"
                        />
                      )}
                      <h3 className="profile-name">{profileData.name}</h3>
                      <p className="profile-username">@{profileData.username}</p>
                      {profileData.country && (
                        <p className="profile-location">📍 {profileData.country}</p>
                      )}
                      <a 
                        href="https://cssbattle.dev/player/zerhouni"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-profile-btn"
                      >
                        View Profile →
                      </a>
                    </div>
                  </div>
                  
                  <div className="card-right">
                    {/* Streaks */}
                    <div className="stats-section">
                      <div className="stats-row">
                        <div className="stat-item">
                          <div className="stat-icon">🔥</div>
                          <div className="stat-content">
                            <div className="stat-value">{profileData.streaks.current}</div>
                            <div className="stat-label">Current Streak</div>
                          </div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-icon">⭐</div>
                          <div className="stat-content">
                            <div className="stat-value">{profileData.streaks.longest}</div>
                            <div className="stat-label">Longest Streak</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Battle Stats */}
                    <div className="stats-section">
                      <h4 className="section-title">Battle Stats</h4>
                      <div className="stats-row">
                        <div className="stat-item">
                          <div className="stat-content">
                            <div className="stat-value">#{profileData.battleStats.globalRank.toLocaleString()}</div>
                            <div className="stat-label">Global Rank</div>
                          </div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-content">
                            <div className="stat-value">{profileData.battleStats.targetsPlayed}</div>
                            <div className="stat-label">Targets Played</div>
                          </div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-content">
                            <div className="stat-value">
                              {typeof profileData.battleStats.totalScore === 'number' 
                                ? profileData.battleStats.totalScore.toLocaleString('en-US', { maximumFractionDigits: 0 }) 
                                : '0'}
                            </div>
                            <div className="stat-label">Total Score</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Daily Stats */}
                    <div className="stats-section">
                      <h4 className="section-title">Daily Stats</h4>
                      <div className="stats-row">
                        <div className="stat-item">
                          <div className="stat-content">
                            <div className="stat-value">{profileData.dailyStats.targetsPlayed}</div>
                            <div className="stat-label">Targets Played</div>
                          </div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-content">
                            <div className="stat-value">{profileData.dailyStats.avgMatch}</div>
                            <div className="stat-label">Avg Match</div>
                          </div>
                        </div>
                        <div className="stat-item">
                          <div className="stat-content">
                            <div className="stat-value">{profileData.dailyStats.avgCharacters}</div>
                            <div className="stat-label">Avg Characters</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .css-battle-card {
          background: linear-gradient(145deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8));
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 16px;
          padding: 2rem;
          backdrop-filter: blur(20px);
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 180px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .css-battle-main-card {
          background: linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.9));
          border: 1px solid rgba(96, 165, 250, 0.15);
          border-radius: 24px;
          backdrop-filter: blur(20px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4),
                      0 0 0 1px rgba(96, 165, 250, 0.1),
                      inset 0 1px 0 rgba(255, 255, 255, 0.05);
          overflow: hidden;
          display: flex;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .css-battle-main-card:hover {
          box-shadow: 0 30px 80px rgba(96, 165, 250, 0.2),
                      0 0 0 1px rgba(96, 165, 250, 0.2),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transform: translateY(-4px);
        }

        .card-left {
          flex: 0 0 280px;
          padding: 3rem 2rem;
          border-right: 1px solid rgba(96, 165, 250, 0.2);
          background: linear-gradient(180deg, rgba(96, 165, 250, 0.03), transparent);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .profile-section {
          text-align: center;
          width: 100%;
        }

        .profile-image {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          border: 4px solid rgba(96, 165, 250, 0.3);
          box-shadow: 0 12px 40px rgba(96, 165, 250, 0.3),
                      0 0 0 8px rgba(96, 165, 250, 0.05);
          margin-bottom: 1.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .profile-image:hover {
          transform: scale(1.08);
          box-shadow: 0 16px 60px rgba(96, 165, 250, 0.5),
                      0 0 0 12px rgba(96, 165, 250, 0.1);
        }

        .profile-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #e8ecf5;
          margin: 0 0 0.5rem 0;
          background: linear-gradient(135deg, #60a5fa, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .profile-username {
          font-size: 0.95rem;
          color: #94a3b8;
          margin: 0 0 0.5rem 0;
        }

        .profile-location {
          font-size: 0.9rem;
          color: #64748b;
          margin: 0 0 1.5rem 0;
        }

        .view-profile-btn {
          display: inline-block;
          padding: 10px 24px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          text-decoration: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(96, 165, 250, 0.3);
        }

        .view-profile-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(96, 165, 250, 0.5);
          color: white;
        }

        .card-right {
          flex: 1;
          padding: 2.5rem 3rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .stats-section {
          position: relative;
        }

        .section-title {
          font-size: 0.85rem;
          font-weight: 700;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin: 0 0 1rem 0;
          padding-bottom: 0.5rem;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #60a5fa, #a855f7);
          border-radius: 2px;
        }

        .stats-row {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1.5rem;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem;
          background: linear-gradient(135deg, rgba(96, 165, 250, 0.05), rgba(168, 85, 247, 0.05));
          border: 1px solid rgba(148, 163, 184, 0.1);
          border-radius: 12px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(96, 165, 250, 0.1), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .stat-item:hover {
          border-color: rgba(96, 165, 250, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(96, 165, 250, 0.15);
        }

        .stat-item:hover::before {
          opacity: 1;
        }

        .stat-icon {
          font-size: 2rem;
          line-height: 1;
          position: relative;
          z-index: 1;
        }

        .stat-content {
          flex: 1;
          position: relative;
          z-index: 1;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #60a5fa, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 1.2;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        @media (max-width: 992px) {
          .css-battle-main-card {
            flex-direction: column;
          }

          .card-left {
            flex: none;
            border-right: none;
            border-bottom: 1px solid rgba(96, 165, 250, 0.2);
            padding: 2rem;
          }

          .profile-image {
            width: 100px;
            height: 100px;
          }

          .card-right {
            padding: 2rem;
          }

          .stats-row {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 1rem;
          }

          .stat-item {
            flex-direction: column;
            text-align: center;
            padding: 1rem;
            gap: 0.5rem;
          }

          .stat-icon {
            font-size: 1.5rem;
          }

          .stat-value {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default CSSBattle;
