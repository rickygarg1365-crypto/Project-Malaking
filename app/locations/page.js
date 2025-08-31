import Image from 'next/image'

import Link from 'next/link'

export default function LocationsPage() {
  return (
    <>
      {/* Modern Location Hero */}
      <section className="locations-hero-modern">
        <div className="hero-bg-locations">
          <Image 
            src="/assets/images/Checkout Area.jpg" 
            alt="Location Hero Background"
            fill
            style={{ objectFit: 'cover' }}
            priority={true}
            quality={85}
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-overlay-locations"></div>
        </div>
        <div className="container">
          <div className="locations-hero-content">
            <h1 className="locations-hero-title">
              Visit Our Surrey<br/>
              <span className="title-red">Location</span>
            </h1>
            <p className="locations-hero-description">
              Located in the heart of Surrey, we're easily accessible and ready to serve you 
              the best hot pot experience in the city. Come discover your new favorite dining destination.
            </p>
          </div>
        </div>
      </section>

      {/* Complete Location Redesign */}
      <section className="location-section-redesigned">
        <div className="container">
          
          {/* Section Header */}
          <div className="location-header-redesigned">
            <div className="header-badge">Our Location</div>
            <h2 className="location-title-main">Find Us in Surrey</h2>
            <p className="location-description-main">
              Located in the heart of Surrey at Central City, we're your go-to destination for authentic hot pot dining. 
              Easy to find, easy to love.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="location-content-grid">
            
            {/* Interactive Map Card */}
            <div className="map-card-redesigned">
              <div className="map-card-header">
                <h3>Interactive Map</h3>
                <span className="map-status">📍 Live Location</span>
              </div>
              <div className="map-wrapper-redesigned">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2608.666!2d-122.8498!3d49.1868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d8c0e2b8b8b1%3A0x1234567890abcdef!2sMala%20King%20Hot%20Pot%2C%2010302%20City%20Pkwy%20%239%2C%20Surrey%2C%20BC%20V3T%204C2%2C%20Canada!5e0!3m2!1sen!2sca!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Information Cards */}
            <div className="contact-cards-redesigned">
              
              {/* Address Card */}
              <div className="info-card-redesigned address-card">
                <div className="card-icon">🏢</div>
                <div className="card-content">
                  <h4>Visit Our Restaurant</h4>
                  <p>10302 City Pkwy #9<br/>Surrey, BC V3T 4C2<br/>Canada</p>
                </div>
              </div>

              {/* Contact Card */}
              <div className="info-card-redesigned contact-card">
                <div className="card-icon">📱</div>
                <div className="card-content">
                  <h4>Get In Touch</h4>
                  <p>
                    <a href="tel:+16044963148">+1 (604) 496-3148</a><br/>
                    <a href="mailto:info@malakinghotpot.ca">info@malakinghotpot.ca</a>
                  </p>
                </div>
              </div>

              {/* Hours Card */}
              <div className="info-card-redesigned hours-card">
                <div className="card-icon">⏰</div>
                <div className="card-content">
                  <h4>Operating Hours</h4>
                  <p>Monday - Sunday<br/>10:30 AM - 1:30 AM<br/><span className="hours-note">Open Late!</span></p>
                </div>
              </div>

              {/* Directions Card */}
              <div className="info-card-redesigned directions-card">
                <div className="card-icon">🗺️</div>
                <div className="card-content">
                  <h4>Easy to Find</h4>
                  <p>Central City Shopping Centre<br/>Transit & Parking Available</p>
                </div>
              </div>

            </div>
          </div>



        </div>
      </section>

      {/* Getting Here - Homepage Style */}
      <section className="getting-here-homepage">
        <div className="container">
          
          {/* Section Header */}
          <div className="getting-here-header">
            <div className="section-badge">Getting Here</div>
            <h2 className="section-title">Easy to Reach</h2>
            <p className="section-description">
              Multiple convenient ways to visit us, whether you're driving, taking transit, or walking
            </p>
          </div>

          <div className="getting-here-grid">
            
            {/* By Car */}
            <div className="transport-card-homepage">
              <div className="transport-icon-main">🚗</div>
              <h3 className="transport-title-homepage">By Car</h3>
              <p className="transport-info-homepage">
                Located in the Surrey Central area, we're easily accessible from King George 
                Boulevard and Central Avenue. Free parking is available in the plaza.
              </p>
              <div className="transport-details-homepage">
                <div className="detail-row">
                  <strong>From Vancouver:</strong> Take Highway 99 South, exit at King George Boulevard
                </div>
                <div className="detail-row">
                  <strong>From Richmond:</strong> Take Highway 99 North, exit at Central Avenue
                </div>
              </div>
            </div>

            {/* By Transit */}
            <div className="transport-card-homepage">
              <div className="transport-icon-main">🚊</div>
              <h3 className="transport-title-homepage">By Transit</h3>
              <p className="transport-info-homepage">
                We're conveniently located near several bus routes and the Surrey Central SkyTrain station.
              </p>
              <div className="transport-details-homepage">
                <div className="detail-row">
                  <strong>Bus Routes:</strong> 321, 323, 324, 325, 326
                </div>
                <div className="detail-row">
                  <strong>SkyTrain:</strong> Surrey Central Station (5 min walk)
                </div>
              </div>
            </div>

            {/* Walking */}
            <div className="transport-card-homepage">
              <div className="transport-icon-main">🚶</div>
              <h3 className="transport-title-homepage">Walking</h3>
              <p className="transport-info-homepage">
                If you're in the Surrey Central area, we're just a short walk away from the mall and other attractions.
              </p>
              <div className="transport-details-homepage">
                <div className="detail-row">
                  <strong>From Surrey Central Mall:</strong> 3 minute walk
                </div>
                <div className="detail-row">
                  <strong>From Surrey Central Station:</strong> 5 minute walk
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Explore the Area - Redesigned */}
      <section className="explore-area-redesigned">
        <div className="container">
          
          {/* Section Header */}
          <div className="explore-header">
            <div className="section-badge">Explore the Area</div>
            <h2 className="section-title">What's Around Us</h2>
            <p className="section-description">
              Discover the vibrant Surrey Central area with shopping, entertainment, and cultural attractions
            </p>
          </div>

          {/* 4-Card Attractions Grid */}
          <div className="attractions-4card-grid">
            
            {/* Card 1 - Central City Mall */}
            <div className="attraction-card-uniform">
              <div className="attraction-image-uniform">
                <Image 
                  src="/assets/images/central-city-mall.png" 
                  alt="Central City Shopping Centre"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="walk-badge">2 min walk</div>
              </div>
              <div className="attraction-content-uniform">
                <h3>Central City Shopping Centre</h3>
                <p>Major shopping destination with 200+ stores, dining, and entertainment options</p>
                <div className="attraction-tags">
                  <span className="tag">Shopping</span>
                  <span className="tag">Dining</span>
                  <span className="tag">Entertainment</span>
                </div>
              </div>
            </div>

            {/* Card 2 - Surrey Central Library */}
            <div className="attraction-card-uniform">
              <div className="attraction-image-uniform">
                <Image 
                  src="/assets/images/surrey-central-library.png" 
                  alt="Surrey Central Library"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="walk-badge">5 min walk</div>
              </div>
              <div className="attraction-content-uniform">
                <h3>Surrey Central Library</h3>
                <p>Modern library with study spaces, community programs, and educational resources</p>
                <div className="attraction-tags">
                  <span className="tag">Education</span>
                  <span className="tag">Community</span>
                </div>
              </div>
            </div>

            {/* Card 3 - Surrey Museum */}
            <div className="attraction-card-uniform">
              <div className="attraction-image-uniform">
                <Image 
                  src="/assets/images/surrey-museum.png" 
                  alt="Surrey Museum"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="walk-badge">10 min walk</div>
              </div>
              <div className="attraction-content-uniform">
                <h3>Surrey Museum</h3>
                <p>Local history and cultural exhibits showcasing Surrey's rich heritage and development</p>
                <div className="attraction-tags">
                  <span className="tag">History</span>
                  <span className="tag">Culture</span>
                </div>
              </div>
            </div>

            {/* Card 4 - Holland Park */}
            <div className="attraction-card-uniform">
              <div className="attraction-image-uniform">
                <Image 
                  src="/assets/images/holland-park.png" 
                  alt="Holland Park"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div className="walk-badge">8 min walk</div>
              </div>
              <div className="attraction-content-uniform">
                <h3>Holland Park</h3>
                <p>Beautiful green space perfect for relaxation, outdoor activities, and family time</p>
                <div className="attraction-tags">
                  <span className="tag">Nature</span>
                  <span className="tag">Recreation</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


    </>
  )
}