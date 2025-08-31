import Image from 'next/image'


export default function RewardsPage() {
  return (
    <>
      {/* Modern Rewards Page */}
      <section className="rewards-page-modern">
        
        {/* Hero Section */}
        <section className="rewards-hero-modern">
          <div className="hero-bg-rewards">
                                             <Image 
             src="/assets/images/Drinks section.jpg" 
             alt="Rewards Hero Background"
             fill
             priority={true}
             quality={85}
             sizes="100vw"
             className="hero-image"
           />
            <div className="hero-overlay-rewards"></div>
          </div>
          <div className="container">
            <div className="rewards-hero-content">
              <h1 className="rewards-hero-title">
                Mala King <span className="title-red">Rewards</span>
              </h1>
              <p className="rewards-hero-description">
                Join our loyalty program and start earning points with every visit. 
                Unlock exclusive benefits and enjoy special member perks!
              </p>
            </div>
          </div>
        </section>

        {/* Embedded Portal */}
        <div className="rewards-portal-wrapper">
          <div className="portal-container">
            <div className="portal-header">
              <div className="portal-status">
                <span className="status-indicator">🟢</span>
                <span className="status-text">Live Portal</span>
              </div>
              <div className="portal-actions">
                <a href="https://mala-king-hot-pot.member.rewardup.io/" target="_blank" rel="noopener noreferrer" className="open-new-tab">
                  Open in New Tab ↗
                </a>
              </div>
            </div>
            
            <div className="iframe-wrapper">
              <iframe
                src="https://mala-king-hot-pot.member.rewardup.io/"
                title="Mala King Hot Pot Rewards Program"
                className="rewards-iframe-enhanced"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
              ></iframe>
              
              <div className="loading-overlay">
                <div className="loading-spinner">
                  <div className="spinner-ring"></div>
                </div>
                <p className="loading-text">Loading Rewards Portal...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="rewards-info-footer">
          <div className="container">
            <div className="info-cards-grid">
              <div className="info-card-quick">
                <div className="card-icon">💰</div>
                <h3>Earn Points</h3>
                <p>Get 1 point for every $1 spent</p>
              </div>
              <div className="info-card-quick">
                <div className="card-icon">🎁</div>
                <h3>Redeem Rewards</h3>
                <p>Use points for discounts and free items</p>
              </div>
              <div className="info-card-quick">
                <div className="card-icon">⭐</div>
                <h3>VIP Status</h3>
                <p>Unlock exclusive member benefits</p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

