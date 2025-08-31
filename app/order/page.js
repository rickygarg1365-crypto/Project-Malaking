'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function OrderPage() {
  const deliveryApps = [
    {
      name: 'DoorDash',
      logo: '/assets/images/doordash-logo.svg',
      description: 'Fast delivery with real-time tracking',
      estimatedTime: '25-35 min',
      deliveryFee: '$2.99',
      url: '#',
      color: '#FF3008',
      popular: true
    },
    {
      name: 'Uber Eats',
      logo: '/assets/images/ubereats-logo.svg', 
      description: 'Quick and reliable delivery service',
      estimatedTime: '20-30 min',
      deliveryFee: '$3.49',
      url: '#',
      color: '#00B14F'
    },
    {
      name: 'Skip The Dishes',
      logo: '/assets/images/skip-logo.svg',
      description: 'Canada\'s favorite delivery app',
      estimatedTime: '30-40 min', 
      deliveryFee: '$2.49',
      url: '#',
      color: '#E8002A',
      popular: true
    },
    {
      name: 'Fantuan',
      logo: '/assets/images/fantuan-logo.svg',
      description: 'Authentic Asian food delivery',
      estimatedTime: '25-35 min',
      deliveryFee: '$2.99',
      url: '#',
      color: '#FF6B35'
    }
  ]

  const orderSteps = [
    {
      step: 1,
      title: 'Choose Your App',
      description: 'Select your preferred delivery platform from the options below',
      icon: '📱'
    },
    {
      step: 2,
      title: 'Build Your Hot Pot',
      description: 'Pick your favorite broth and add fresh ingredients',
      icon: '🍲'
    },
    {
      step: 3,
      title: 'Customize & Add-ons',
      description: 'Add drinks, sauces, and any special requests',
      icon: '🥤'
    },
    {
      step: 4,
      title: 'Enjoy at Home',
      description: 'Receive your fresh hot pot delivered to your door',
      icon: '🏠'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="order-hero-modern">
        <div className="hero-bg-order">
          <Image
            src="/assets/images/Fresh Ingredients.jpg"
            alt="Order Hero Background"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-overlay-order"></div>
        </div>
        <div className="container">
          <div className="order-hero-content">
            <div className="order-badge">
              <span>🚚</span>
              <span>Now Delivering</span>
            </div>
            <h1 className="order-hero-title">
              Order <span className="title-red">Mala King</span><br />
              Hot Pot Delivery
            </h1>
            <p className="order-hero-description">
              Craving authentic hot pot? Get our signature broths and fresh ingredients 
              delivered straight to your door through your favorite delivery app.
            </p>
            <div className="order-hero-stats">
              <div className="stat-item">
                <span className="stat-number">4.8★</span>
                <span className="stat-label">Rating</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20-40</span>
                <span className="stat-label">Minutes</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">$2.49+</span>
                <span className="stat-label">Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order Steps */}
      <section className="order-steps-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-badge">Simple Process</div>
            <h2 className="section-title">How to Order</h2>
            <p className="section-subtitle">
              Get your hot pot delivered in just a few easy steps
            </p>
          </div>
          
          <div className="order-steps-grid">
            {orderSteps.map((step, index) => (
              <div key={index} className="order-step-card">
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
                {index < orderSteps.length - 1 && (
                  <div className="step-connector">
                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none">
                      <path d="M0 10H35M35 10L25 5M35 10L25 15" stroke="var(--primary-red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Apps Section */}
      <section className="delivery-apps-section">
        <div className="container">
          <div className="section-header-center">
            <div className="section-badge">Choose Your Platform</div>
            <h2 className="section-title">Order Through Your Favorite App</h2>
            <p className="section-subtitle">
              Available on all major delivery platforms for your convenience
            </p>
          </div>
          
          <div className="delivery-apps-grid">
            {deliveryApps.map((app, index) => (
              <div key={index} className={`delivery-app-card ${app.popular ? 'popular-app' : ''}`}>
                {app.popular && (
                  <div className="popular-badge">
                    <span>⭐</span>
                    <span>Most Popular</span>
                  </div>
                )}
                
                <div className="app-logo-container">
                  <div className="app-logo-placeholder" style={{ backgroundColor: app.color }}>
                    <span className="app-name-initial">{app.name.charAt(0)}</span>
                  </div>
                </div>
                
                <div className="app-content">
                  <h3 className="app-name">{app.name}</h3>
                  <p className="app-description">{app.description}</p>
                  
                  <div className="app-details">
                    <div className="app-detail">
                      <span className="detail-icon">⏱️</span>
                      <span className="detail-text">{app.estimatedTime}</span>
                    </div>
                    <div className="app-detail">
                      <span className="detail-icon">💰</span>
                      <span className="detail-text">{app.deliveryFee} delivery</span>
                    </div>
                  </div>
                  
                  <button className="order-now-btn" style={{ backgroundColor: app.color }}>
                    <span>Order Now</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Information */}
      <section className="delivery-info-section">
        <div className="container">
          <div className="delivery-info-grid">
            <div className="delivery-info-content">
              <h2 className="delivery-title">Delivery Information</h2>
              <div className="delivery-details">
                <div className="delivery-detail-item">
                  <div className="detail-icon-large">🚚</div>
                  <div className="detail-content">
                    <h4>Delivery Area</h4>
                    <p>We deliver within 10km of our Surrey location. Check your delivery app for availability in your area.</p>
                  </div>
                </div>
                
                <div className="delivery-detail-item">
                  <div className="detail-icon-large">⏰</div>
                  <div className="detail-content">
                    <h4>Delivery Hours</h4>
                    <p>Monday - Sunday: 11:00 AM - 10:00 PM<br />Last order 30 minutes before closing</p>
                  </div>
                </div>
                
                <div className="delivery-detail-item">
                  <div className="detail-icon-large">🍲</div>
                  <div className="detail-content">
                    <h4>Fresh & Hot</h4>
                    <p>All broths are prepared fresh and packaged in insulated containers to maintain temperature during delivery.</p>
                  </div>
                </div>
                
                <div className="delivery-detail-item">
                  <div className="detail-icon-large">💡</div>
                  <div className="detail-content">
                    <h4>Ordering Tips</h4>
                    <p>For the best experience, order ingredients and broth together. Don't forget to add sauces and drinks!</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="delivery-info-visual">
              <div className="delivery-showcase">
                <div className="showcase-image">
                  <Image
                    src="/assets/images/Counter.jpg"
                    alt="Fresh Hot Pot Preparation"
                    width={400}
                    height={300}
                    className="showcase-img"
                  />
                </div>
                <div className="showcase-overlay">
                  <div className="showcase-badge">
                    <span>🔥</span>
                    <span>Fresh & Hot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="order-cta-section">
        <div className="container">
          <div className="order-cta-content">
            <h2 className="cta-title">Ready to Order?</h2>
            <p className="cta-description">
              Choose your delivery app above and start building your perfect hot pot experience!
            </p>
            <div className="cta-actions">
              <Link href="/menu" className="btn btn-secondary">
                View Full Menu
              </Link>
              <Link href="/locations" className="btn btn-primary">
                Visit In-Store
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
