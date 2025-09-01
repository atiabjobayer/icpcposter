import React, { useState } from 'react';
import { Trophy, Target, TrendingUp, Users, Code, Award } from 'lucide-react';
import './ICPCPoster.css'; // Import the CSS file

const ICPCTeamPoster = () => {
  const [teamDataList, setTeamDataList] = useState([
    {
      region: "ASIA WEST",
      country: "Bangladesh",
      teamName: "SUST_Fanatics",
      university: "Shahjalal University of Science and Technology",
      icpcLogo: "https://worldfinals.icpc.global/images/brand-logo.svg",
      teamImage: "https://gzcitest.sgp1.digitaloceanspaces.com/uploads/lp8cErsT97roKU3dICYmFIQtwUA7RY8zQdn91MsB.jpg",
      members: [
        {
          name: "Alfeh Sani",
          cfUsername: "Alfeh",
          cfColor: "orange",
          cfMaxColor: "orange",
          cfRankTitle: "International Master",
          currentRating: 2354,
          maxRating: 2354
        },
        {
          name: "Najmul Hasan Nayeem", 
          cfUsername: "nh_nayeem",
          cfColor: "blue",
          cfMaxColor: "violet",
          cfRankTitle: "Expert",
          currentRating: 1714,
          maxRating: 1981
        },
        {
          name: "Sarwar Rifat",
          cfUsername: "Ryuga_",
          cfColor: "blue",
          cfMaxColor: "violet",
          cfRankTitle: "Expert",
          currentRating: 1882,
          maxRating: 1998
        }
      ]
    },
    {
      region: "ASIA WEST",
      country: "Bangladesh",
      teamName: "BRACU_Crows",
      university: "BRAC University",
      icpcLogo: "https://worldfinals.icpc.global/images/brand-logo.svg",
      teamImage: "https://gzcitest.sgp1.digitaloceanspaces.com/uploads/Sg8yDbz0pjqleYNZQkI6mcxbbHd2rNqda6cSA8km.jpg",
      members: [
        {
          name: "Arman Ferdous",
          cfUsername: "arman_ferdous",
          cfColor: "violet",
          cfMaxColor: "orange",
          cfRankTitle: "Candidate Master",
          currentRating: 1992,
          maxRating: 2162
        },
        {
          name: "Ruhan Habib", 
          cfUsername: "ruhan.habib39",
          cfColor: "violet",
          cfMaxColor: "orange",
          cfRankTitle: "Candidate Master",
          currentRating: 1940,
          maxRating: 2115
        },
        {
          name: "Mazed Hossain Parag",
          cfUsername: "MH_Parag",
          cfColor: "blue",
          cfMaxColor: "blue",
          cfRankTitle: "Expert",
          currentRating: 1726,
          maxRating: 1773
        }
      ]
    },
    {
      region: "ASIA WEST",
      country: "India",
      teamName: "IcyPeasy",
      university: "National Institute of Technology Trichy",
      icpcLogo: "https://worldfinals.icpc.global/images/brand-logo.svg",
      teamImage: "https://gzcitest.sgp1.digitaloceanspaces.com/uploads/pvnbo8fFMJxvj3qiZgTP1wpksxR1YTke1LMGLBWG.png",
      members: [
        {
          name: "Ashwanth K",
          cfUsername: "Ashwanth.K",
          cfColor: "orange",
          cfMaxColor: "orange",
          cfRankTitle: "Master",
          currentRating: 2206,
          maxRating: 2325
        },
        {
          name: "Rohit Meena", 
          cfUsername: "Cyber_Hunterr",
          cfColor: "blue",
          cfMaxColor: "blue",
          cfRankTitle: "Expert",
          currentRating: 1833,
          maxRating: 1833
        },
        {
          name: "Satish Kumar Prajapati",
          cfUsername: "NinjaSenpai",
          cfColor: "blue",
          cfMaxColor: "violet",
          cfRankTitle: "Expert",
          currentRating: 1779,
          maxRating: 1984
        }
      ]
    }
  ]);

  const getColorCode = (color) => {
    const colors = {
      'red': '#ff0000',
      'orange': '#ff8c00',
      'violet': '#aa00aa',
      'purple': '#aa00aa',
      'blue': '#0077ff',
      'green': '#00aa00',
      'gray': '#808080',
      'grey': '#808080'
    };
    return colors[color.toLowerCase()] || '#808080';
  };

  const getRankTitle = (color) => {
    const ranks = {
      'red': 'INTERNATIONAL GRANDMASTER',
      'orange': 'International Master',
      'violet': 'Candidate Master',
      'blue': 'Specialist',
      'green': 'Pupil',
      'gray': 'Newbie',
      'grey': 'Newbie'
    };
    return ranks[color.toLowerCase()] || 'UNRATED';
  };

  const handleJsonInput = (jsonString) => {
    try {
      const data = JSON.parse(jsonString);
      if (Array.isArray(data)) {
        setTeamDataList(data);
      } else {
        setTeamDataList([data]);
      }
    } catch (error) {
      alert('Invalid JSON format!');
    }
  };

  // Helper to calculate stats for each team
  const getAvgRating = (members) => Math.round(members.reduce((sum, m) => sum + m.currentRating, 0) / members.length);
  const getPeakRating = (members) => Math.max(...members.map(m => m.maxRating));

  return (
    <div className="poster-container">
      {/* Input Section */}
      <div className="max-width-container input-section">
        <div className="input-card">
          <h2 className="input-title">Team Data Input</h2>
          <textarea
            className="input-textarea"
            placeholder={`[{"teamName": "Algorithm Masters", "university": "MIT", "icpcLogo": "https://icpc.global/logo.png", "teamImage": "url", "members": [...]}, {...}]`}
            onChange={(e) => handleJsonInput(e.target.value)}
          />
        </div>
      </div>

      {/* Posters for each team */}
      {teamDataList.map((teamData, idx) => (
        <div className="max-width-container" key={idx}>
          <div className="main-poster">
            {/* Header Strip */}
            <div className="header-strip"></div>
            {/* Main Content */}
            <div className="main-content">
              {/* Top Section */}
              <div className="top-section">
                <div className="logo-section">
                  {teamData.icpcLogo ? (
                    <img 
                      src={teamData.icpcLogo} 
                      alt="ICPC Logo" 
                      className="icpc-logo"
                    />
                  ) : (
                    <div className="icpc-logo-fallback">
                      <span className="icpc-logo-text">ICPC</span>
                    </div>
                  )}
                  <div className="year-info">
                    <div className="year-number">{teamData.region}</div>
                    <div className="season-text">{teamData.country}</div>
                  </div>
                </div>
                <div className="team-info">
                  <div className="team-name">
                    {teamData.teamName?.toUpperCase()}
                  </div>
                  <div className="university-name">
                    {teamData.university}
                  </div>
                  <div className="team-accent-line"></div>
                </div>
              </div>
              {/* Main Content Grid */}
              <div className="main-grid">
                <div className="grid-container">
                  {/* Team Photo & Quick Stats */}
                  <div className="photo-stats-column">
                    {/* Team Photo */}
                    <div className="team-photo-container">
                      <div className="photo-border"></div>
                      <div className="photo-inner">
                        {teamData.teamImage ? (
                          <img 
                            src={teamData.teamImage} 
                            alt="Team Photo"
                            className="team-image"
                          />
                        ) : (
                          <div className="photo-placeholder">
                            <div className="photo-placeholder-content">
                              <Users className="photo-placeholder-icon" />
                              <span className="photo-placeholder-text">Team Photo</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {/* Team Stats */}
                    <div className="team-stats">
                      <div className="stats-grid">
                        <div className="stat-item with-border">
                          <div className="rating-value stat-value avg-rating">{getAvgRating(teamData.members)}</div>
                          <div className="stat-label">AVG RATING</div>
                        </div>
                        <div className="stat-item">
                          <div className="rating-value stat-value peak-rating">{getPeakRating(teamData.members)}</div>
                          <div className="stat-label">MAX RATING</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Player Profiles */}
                  <div className="players-column">
                    {teamData.members.map((member, index) => (
                      <div key={index} className="player-card">
                        <div className="player-card-inner">
                          <div className="jersey-number">
                            #{String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="player-info">
                            <div className="player-content">
                              <div className="player-details">
                                <h3 className="player-name">
                                  {member.name.toUpperCase()}
                                </h3>
                                <div className="player-username-container">
                                  <div className="username-section">
                                    <img src='https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-svg-png-download-2944796.png' alt="Codeforces Logo" className="code-icon" />
                                    <span 
                                      className="username-badge"
                                      data-color={member.cfColor}
                                      style={{ 
                                        color: getColorCode(member.cfColor),
                                        borderColor: getColorCode(member.cfColor)
                                      }}
                                    >
                                      {member.cfUsername}
                                    </span>
                                  </div>
                                </div>
                                <div className="rank-title" style={{ color: getColorCode(member.cfColor) }}>
                                  {member.cfRankTitle}
                                </div>
                              </div>
                              <div className="player-stats">
                                <div className="stat-box">
                                  <div className="current-rating-box">
                                    <div className="rating-value" style={{ fontFamily: 'monospace' }}>{member.currentRating}</div>
                                  </div>
                                  <div className="rating-label">CURRENT RATING</div>
                                </div>
                                <div className="stat-box">
                                  <div className="peak-rating-box" style={{ backgroundColor: getColorCode(member.cfMaxColor), border: `2px solid ${getColorCode(member.cfMaxColor)}` }}>
                                    <div className="rating-value peak-rating-value" style={{ color: 'white', fontFamily: 'monospace' }}>{member.maxRating}</div>
                                  </div>
                                  <div className="rating-label">MAX RATING</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Bottom Banner */}
              <div className="bottom-banner">
                <div className="banner-content">
                  <div className="banner-left">
                    <Trophy className="trophy-icon" />
                    <div>
                      <div className="banner-title">COMPETITIVE PROGRAMMING</div>
                      <div className="banner-subtitle">ELITE DIVISION</div>
                    </div>
                  </div>
                  <div className="banner-right">
                    <div className="total-power-value">
                      {teamData.members.reduce((sum, m) => sum + m.currentRating, 0)}
                    </div>
                    <div className="total-power-label">TOTAL POWER</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Corner Accents */}
            <div className="corner-accent-top"></div>
            <div className="corner-accent-bottom"></div>
          </div>
          <br /><br />
        </div>
      ))}

      {/* JSON Helper */}
      <div className="max-width-container json-helper">
        <details className="json-details">
          <summary className="json-summary">
            📋 JSON Format Guide
          </summary>
          <div className="json-content">
            <pre className="json-code">
{`[
  {
    "region": "ASIA WEST",
    "country": "Bangladesh",
    "teamName": "Algorithm Masters",
    "university": "Stanford University", 
    "icpcLogo": "https://icpc.global/logo.png",
    "teamImage": "https://example.com/team.jpg",
    "members": [
      {
        name: "John Doe",
        cfUsername: "johndoe",
        cfColor: "orange",
        cfMaxColor: "orange",
        cfRankTitle: "International Grandmaster",
        currentRating: 2354,
        maxRating: 2354
      }
    ]
  },
  {...}
]`}
            </pre>
          </div>
        </details>
      </div>
    </div>
  );
};

export default ICPCTeamPoster;