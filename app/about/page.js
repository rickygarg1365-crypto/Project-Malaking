'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      {/* Simple Hero Section */}
      <section className="about-hero-simple">
        <div className="hero-background-simple">
          <Image 
            src="/assets/images/hero-background-77cf30.png" 
            alt="About Hero Background"
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className="hero-overlay-simple"></div>
        </div>
        
        <div className="container">
          <div className="hero-content-simple">
            <h1 className="hero-title-simple">
              Surrey's Premier <span className="title-highlight">Hot</span><br />
              <span className="title-highlight">Pot</span> Destination
            </h1>
            <p className="hero-description-simple">
              At Mala King Hot Pot, we bring you an authentic hot pot experience with fresh ingredients, 
              signature broths, and warm hospitality. Discover the perfect blend of tradition and innovation 
              in every bowl we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Redesigned Mission Section */}
      <section className="mission-section-new">
        <div className="container">
          <div className="mission-header-new">
            <div className="section-badge">Our Mission</div>
            <h2 className="mission-title-new">
              Creating Memorable 
              <span className="title-highlight"> Dining Experiences</span>
            </h2>
            <p className="mission-subtitle-new">
              We believe in bringing people together through exceptional food, authentic flavors, and warm hospitality
            </p>
          </div>
          
          <div className="mission-content-new">
            <div className="mission-story">
              <div className="story-card">
                <div className="story-header">
                  <div className="story-icon">🌟</div>
                  <h3>Our Story</h3>
                </div>
                <p>
                  Founded with a passion for authentic Asian cuisine, Mala King Hot Pot was born from the desire to bring the communal joy of hot pot dining to Surrey. We're more than a restaurant – we're a gathering place where memories are made.
                </p>
              </div>
              
              <div className="story-card">
                <div className="story-header">
                  <div className="story-icon">🎯</div>
                  <h3>Our Vision</h3>
                </div>
                <p>
                  To become Surrey's most beloved hot pot destination by delivering exceptional quality, authentic flavors, and creating a space where every guest feels like family.
                </p>
              </div>
            </div>
            
            <div className="mission-pillars">
              <h3 className="pillars-title">What Makes Us Special</h3>
              <div className="pillars-grid">
                <div className="pillar-item">
                  <div className="pillar-number">01</div>
                  <div className="pillar-content">
                    <h4>Fresh Daily</h4>
                    <p>Over 100 ingredients sourced fresh every morning</p>
                  </div>
                </div>
                
                <div className="pillar-item">
                  <div className="pillar-number">02</div>
                  <div className="pillar-content">
                    <h4>Authentic Broths</h4>
                    <p>10+ signature broths crafted with traditional recipes</p>
                  </div>
                </div>
                
                <div className="pillar-item">
                  <div className="pillar-number">03</div>
                  <div className="pillar-content">
                    <h4>Fair Pricing</h4>
                    <p>Weight-based pricing ensures you pay for what you eat</p>
                  </div>
                </div>
                
                <div className="pillar-item">
                  <div className="pillar-number">04</div>
                  <div className="pillar-content">
                    <h4>Community First</h4>
                    <p>Creating connections through shared dining experiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="values-header">
            <div className="section-badge">Our Values</div>
            <h2 className="values-title">What Drives Us</h2>
            <p className="values-subtitle">
              The core principles that guide everything we do at Mala King Hot Pot
            </p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3 className="value-title">Excellence</h3>
              <p className="value-description">
                We strive for perfection in every aspect of our service, from the quality of our ingredients to the warmth of our hospitality.
              </p>
              <div className="value-accent"></div>
            </div>
            <div className="value-card">
              <div className="value-icon">🔥</div>
              <h3 className="value-title">Authenticity</h3>
              <p className="value-description">
                Our recipes honor traditional hot pot culture while incorporating modern techniques to enhance flavor and presentation.
              </p>
              <div className="value-accent"></div>
            </div>
            <div className="value-card">
              <div className="value-icon">💝</div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-description">
                We continuously evolve our menu and experience, introducing new flavors and concepts while staying true to our roots.
              </p>
              <div className="value-accent"></div>
            </div>
            <div className="value-card">
              <div className="value-icon">🏠</div>
              <h3 className="value-title">Community</h3>
              <p className="value-description">
                We believe food brings people together, creating a welcoming space where everyone feels like family.
              </p>
              <div className="value-accent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section-modern">
        <div className="container">
          <div className="team-header-modern">
            <div className="section-badge">Our Team</div>
            <h2 className="team-title-modern">Meet the Masters</h2>
            <p className="team-subtitle-modern">
              The passionate culinary artists and hospitality experts who make the magic happen
            </p>
          </div>
          <div className="team-grid-modern">
            <div className="team-card-modern">
              <div className="member-image-modern">
                <Image 
                  src="/assets/images/social-2-250f0d.png" 
                  alt="Chef Li"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="member-overlay-modern"></div>
                <div className="member-badge">Head Chef</div>
              </div>
              <div className="member-content-modern">
                <h3 className="member-name-modern">Chef Li</h3>
                <p className="member-title-modern">Culinary Master</p>
                <p className="member-bio-modern">
                  With over 15 years of experience in authentic Chinese cuisine, Chef Li brings traditional techniques and modern innovation to every dish we serve.
                </p>
                <div className="member-achievements">
                  <div className="achievement">
                    <span className="achievement-number">15+</span>
                    <span className="achievement-label">Years Experience</span>
                  </div>
                  <div className="achievement">
                    <span className="achievement-number">50+</span>
                    <span className="achievement-label">Signature Recipes</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="team-card-modern">
              <div className="member-image-modern">
                <Image 
                  src="/assets/images/social-3-27e44e.png" 
                  alt="Manager Sarah"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="member-overlay-modern"></div>
                <div className="member-badge">General Manager</div>
              </div>
              <div className="member-content-modern">
                <h3 className="member-name-modern">Sarah Chen</h3>
                <p className="member-title-modern">Hospitality Expert</p>
                <p className="member-bio-modern">
                  Sarah ensures every guest feels welcome and every experience is exceptional. Her passion for hospitality drives our commitment to outstanding service.
                </p>
                <div className="member-achievements">
                  <div className="achievement">
                    <span className="achievement-number">10+</span>
                    <span className="achievement-label">Years Service</span>
                  </div>
                  <div className="achievement">
                    <span className="achievement-number">1000+</span>
                    <span className="achievement-label">Happy Guests</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="team-card-modern">
              <div className="member-image-modern">
                <Image 
                  src="/assets/images/social-4-3557d9.png" 
                  alt="Sous Chef Mike"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="member-overlay-modern"></div>
                <div className="member-badge">Sous Chef</div>
              </div>
              <div className="member-content-modern">
                <h3 className="member-name-modern">Mike Zhang</h3>
                <p className="member-title-modern">Quality Specialist</p>
                <p className="member-bio-modern">
                  Mike's expertise in ingredient preparation and quality control ensures that every ingredient that reaches your table is fresh, safe, and delicious.
                </p>
                <div className="member-achievements">
                  <div className="achievement">
                    <span className="achievement-number">8+</span>
                    <span className="achievement-label">Years Experience</span>
                  </div>
                  <div className="achievement">
                    <span className="achievement-number">100+</span>
                    <span className="achievement-label">Ingredients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section-about">
        <div className="container">
          <div className="cta-content">
            <div className="cta-badge">Ready to Experience?</div>
            <h2 className="cta-title">Visit Mala King Today</h2>
            <p className="cta-description">
              Come and discover what makes our hot pot experience truly special. We can't wait to welcome you to our family.
            </p>
            <div className="cta-actions">
              <Link href="/locations" className="btn btn-primary cta-btn-primary">
                Find Our Location
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link href="/menu" className="btn btn-secondary cta-btn-secondary">View Our Menu</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}