import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './CSSBattle.css';

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
        setError('Showing cached stats (live CSS Battle data is currently unavailable).');
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
    </section>
  );
};

export default CSSBattle;
