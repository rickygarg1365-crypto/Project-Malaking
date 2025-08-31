'use client'

import { useState } from 'react'
import Image from 'next/image'


export default function CareersPage() {
  const [applicationData, setApplicationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    availability: {
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false
    },
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setApplicationData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleAvailabilityChange = (day) => {
    setApplicationData(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: !prev.availability[day]
      }
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create email body with application data
    const availabilityText = Object.entries(applicationData.availability)
      .filter(([day, available]) => available)
      .map(([day]) => day.charAt(0).toUpperCase() + day.slice(1))
      .join(', ')
    
    const emailBody = `
Job Application - ${applicationData.position}

Personal Information:
Name: ${applicationData.firstName} ${applicationData.lastName}
Email: ${applicationData.email}
Phone: ${applicationData.phone}

Position Details:
Position: ${applicationData.position}
Experience: ${applicationData.experience}

Availability: ${availabilityText || 'None selected'}

Additional Information:
${applicationData.message}
    `.trim()
    
    // Open default email client with pre-filled data
    const mailtoLink = `mailto:info@malakinghotpot.ca?subject=Job Application: ${applicationData.position}&body=${encodeURIComponent(emailBody)}`
    window.open(mailtoLink)
    
    // Reset form
    setApplicationData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      availability: {
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
        saturday: false,
        sunday: false
      },
      message: ''
    })
    
    // Show success message
    alert('Thank you for your application! Your email client should open with the application details pre-filled.')
  }

  return (
    <>
      {/* Hero Section - Recreated */}
      <section className="careers-hero-simple">
        <div className="careers-hero-background-simple">
          <Image 
            src="/assets/images/Table.jpg" 
            alt="Careers Hero Background"
            fill
            priority={true}
            quality={90}
            sizes="100vw"
            className="careers-hero-image-simple"
            style={{ objectFit: 'cover' }}
          />
          <div className="careers-hero-overlay-simple"></div>
        </div>
        <div className="container">
          <div className="careers-hero-content-simple">
            <h1 className="careers-hero-title-simple">
              Join Our <span className="title-white">Team</span>
            </h1>
            <p className="careers-hero-description-simple">
              Be part of Surrey's premier hot pot destination. We're looking for passionate individuals 
              who want to create exceptional dining experiences and grow with us.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="why-work-section">
        <div className="container">
          <div className="why-work-header">
            <div className="section-badge">Why Work With Us</div>
            <h2 className="section-title">More Than Just a Job</h2>
            <p className="section-description">
              Join a family that values growth, creativity, and authentic experiences
            </p>
          </div>
          
          <div className="why-work-grid">
            <div className="why-work-card">
              <div className="work-icon">🤝</div>
              <h3>Team Collaboration</h3>
              <p>Work alongside passionate team members who support each other and celebrate success together</p>
            </div>
            <div className="why-work-card">
              <div className="work-icon">📈</div>
              <h3>Career Growth</h3>
              <p>Clear advancement opportunities with training programs and mentorship to help you reach your goals</p>
            </div>
            <div className="why-work-card">
              <div className="work-icon">🎯</div>
              <h3>Purpose-Driven</h3>
              <p>Make a real impact by creating memorable experiences and sharing authentic hot pot culture</p>
            </div>
            <div className="why-work-card">
              <div className="work-icon">🌟</div>
              <h3>Recognition</h3>
              <p>Your hard work is noticed and rewarded with performance incentives and employee appreciation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="positions-section">
        <div className="container">
          <div className="positions-header">
            <div className="section-badge">Open Positions</div>
            <h2 className="section-title">Current Opportunities</h2>
            <p className="section-description">
              Explore our current job openings and find the perfect role for you
            </p>
          </div>
          
          <div className="positions-grid">
            
            {/* Kitchen Staff */}
            <div className="position-card">
              <div className="position-header">
                <div className="position-icon">👨‍🍳</div>
                <div className="position-info">
                  <h3>Kitchen Staff</h3>
                  <span className="position-type">Full-time / Part-time</span>
                </div>
                <div className="position-badge">Hiring</div>
              </div>
              <p className="position-description">
                Join our kitchen team to prepare fresh ingredients, maintain quality standards, and ensure smooth operations.
              </p>
              <div className="position-requirements">
                <h4>What We're Looking For:</h4>
                <ul>
                  <li>Kitchen experience preferred</li>
                  <li>Food Safe certification</li>
                  <li>Fast-paced environment comfort</li>
                  <li>Strong communication skills</li>
                </ul>
              </div>
              <div className="position-benefits">
                <span className="benefit-tag">💰 Competitive Pay</span>
                <span className="benefit-tag">📅 Flexible Schedule</span>
                <span className="benefit-tag">🍜 Meal Discounts</span>
              </div>
              <button className="apply-btn-modern" onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}>Apply Now</button>
            </div>

            {/* Server */}
            <div className="position-card">
              <div className="position-header">
                <div className="position-icon">🍽️</div>
                <div className="position-info">
                  <h3>Server</h3>
                  <span className="position-type">Full-time / Part-time</span>
                </div>
                <div className="position-badge">Hiring</div>
              </div>
              <p className="position-description">
                Provide exceptional service, guide guests through our menu, and create memorable dining experiences.
              </p>
              <div className="position-requirements">
                <h4>What We're Looking For:</h4>
                <ul>
                  <li>Customer service experience</li>
                  <li>Friendly, outgoing personality</li>
                  <li>Asian cuisine knowledge helpful</li>
                  <li>Weekend availability</li>
                </ul>
              </div>
              <div className="position-benefits">
                <span className="benefit-tag">💰 Tips + Hourly</span>
                <span className="benefit-tag">📅 Flexible Schedule</span>
                <span className="benefit-tag">🎓 Training Provided</span>
              </div>
              <button className="apply-btn-modern" onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}>Apply Now</button>
            </div>

            {/* Cashier */}
            <div className="position-card">
              <div className="position-header">
                <div className="position-icon">💳</div>
                <div className="position-info">
                  <h3>Cashier</h3>
                  <span className="position-type">Part-time</span>
                </div>
                <div className="position-badge">Hiring</div>
              </div>
              <p className="position-description">
                Handle transactions, manage our weigh-to-pay system, and provide excellent front counter service.
              </p>
              <div className="position-requirements">
                <h4>What We're Looking For:</h4>
                <ul>
                  <li>Cash handling experience</li>
                  <li>Strong math skills</li>
                  <li>Attention to detail</li>
                  <li>Professional demeanor</li>
                </ul>
              </div>
              <div className="position-benefits">
                <span className="benefit-tag">💰 Competitive Pay</span>
                <span className="benefit-tag">📅 Part-time Hours</span>
                <span className="benefit-tag">🎓 Training Provided</span>
              </div>
              <button className="apply-btn-modern" onClick={() => document.getElementById('application-form').scrollIntoView({ behavior: 'smooth' })}>Apply Now</button>
            </div>

          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="application-section-modern">
        <div className="container">
          <div className="application-header">
            <div className="section-badge">Apply Today</div>
            <h2 className="section-title">Ready to Join Us?</h2>
            <p className="section-description">
              Fill out our application form and take the first step towards an exciting career with us
            </p>
          </div>
          
          <div className="application-form-modern">
            <form onSubmit={handleSubmit} className="careers-form">
              <div className="form-section personal-info">
                <h3 className="form-section-title">Personal Information</h3>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="firstName">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={applicationData.firstName}
                      onChange={handleInputChange}
                      required
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={applicationData.lastName}
                      onChange={handleInputChange}
                      required
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={applicationData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="+1 (604) 000-0000"
                    />
                  </div>
                </div>
              </div>

              <div className="form-section position-info">
                <h3 className="form-section-title">Position Details</h3>
                <div className="form-field">
                  <label htmlFor="position">Position of Interest *</label>
                  <select
                    id="position"
                    name="position"
                    value={applicationData.position}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Choose a position</option>
                    <option value="kitchen-staff">👨‍🍳 Kitchen Staff</option>
                    <option value="server">🍽️ Server</option>
                    <option value="cashier">💳 Cashier</option>
                    <option value="other">📝 Other</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="experience">Previous Experience</label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={applicationData.experience}
                    onChange={handleInputChange}
                    placeholder="Tell us about your relevant work experience..."
                    rows="4"
                  ></textarea>
                </div>
              </div>

              <div className="form-section availability-section">
                <h3 className="form-section-title">Availability</h3>
                <div className="availability-grid-modern">
                  {Object.keys(applicationData.availability).map((day) => (
                    <label key={day} className="availability-checkbox">
                      <input
                        type="checkbox"
                        checked={applicationData.availability[day]}
                        onChange={() => handleAvailabilityChange(day)}
                      />
                      <span className="checkbox-custom"></span>
                      <span className="day-label">{day.charAt(0).toUpperCase() + day.slice(1)}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-section additional-info">
                <h3 className="form-section-title">Additional Information</h3>
                <div className="form-field">
                  <label htmlFor="message">Tell Us More About Yourself</label>
                  <textarea
                    id="message"
                    name="message"
                    value={applicationData.message}
                    onChange={handleInputChange}
                    placeholder="Why do you want to work with us? What makes you a great fit for our team?"
                    rows="4"
                  ></textarea>
                </div>
              </div>

              <div className="form-submit-section">
                <button type="submit" className="submit-application-btn">
                  <span>Submit Application</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <p className="submit-note">We'll review your application and get back to you within 2-3 business days</p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
