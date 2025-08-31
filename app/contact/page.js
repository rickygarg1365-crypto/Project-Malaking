'use client'

import { useState } from 'react'
import Image from 'next/image'


export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can add API call here to send the form data
  }

  return (
    <>
      {/* Modern Contact Hero */}
      <section className="contact-hero-modern">
        <div className="hero-bg-contact">
          <Image 
            src="/assets/images/Seating Area.jpg" 
            alt="Contact Hero Background"
            fill
            priority={true}
            quality={85}
            sizes="100vw"
            className="hero-image"
          />
          <div className="hero-overlay-contact"></div>
        </div>
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-hero-title">
              Get in <span className="title-red">Touch</span>
            </h1>
            <p className="contact-hero-description">
              We'd love to hear from you! Whether you have questions, want to make a reservation, 
              or just want to say hello, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-main-section">
        <div className="container">
          
          {/* Section Header */}
          <div className="contact-section-header">
            <div className="section-badge">Send us a Message</div>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-description">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          <div className="contact-main-grid">
            
            {/* Contact Form */}
            <div className="modern-contact-form">
              
              <form onSubmit={handleSubmit} className="contact-form-modern">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (604) 000-0000"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Choose a subject</option>
                      <option value="reservation">🍽️ Reservation</option>
                      <option value="feedback">💬 Feedback</option>
                      <option value="general">❓ General Inquiry</option>
                      <option value="catering">🎉 Catering</option>
                      <option value="other">📝 Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-field full-width">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us how we can help you..."
                    rows="5"
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn-modern">
                  <span>Send Message</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>
            
            {/* Contact Info & Quick Actions */}
            <div className="contact-info-modern">
              
              {/* Quick Contact */}
              <div className="quick-contact-card">
                <h3>Quick Contact</h3>
                <div className="quick-actions">
                  <a href="tel:+16044963148" className="quick-action call-action">
                    <div className="action-icon">📞</div>
                    <div className="action-content">
                      <span className="action-label">Call Now</span>
                      <span className="action-value">+1 (604) 496-3148</span>
                    </div>
                  </a>
                  <a href="mailto:info@malakinghotpot.ca" className="quick-action email-action">
                    <div className="action-icon">✉️</div>
                    <div className="action-content">
                      <span className="action-label">Email Us</span>
                      <span className="action-value">info@malakinghotpot.ca</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Restaurant Info */}
              <div className="restaurant-info-card">
                <h3>Restaurant Information</h3>
                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div className="info-details">
                      <span className="info-label">Address</span>
                      <span className="info-text">
                        10302 City Pkwy #9<br/>
                        Surrey, BC V3T 4C2
                      </span>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">🕐</div>
                    <div className="info-details">
                      <span className="info-label">Hours</span>
                      <span className="info-text">
                        Monday - Sunday<br/>
                        10:30 AM - 1:30 AM
                      </span>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </section>

      {/* Follow Us Section - Image Layout */}
      <section className="follow-us-section-modern">
        <div className="container">
          <div className="follow-us-header">
            <div className="section-badge">Follow Us</div>
            <h2 className="section-title">Stay Connected</h2>
            <p className="section-description">
              Stay connected with us on social media for the latest updates, special offers, and behind-the-scenes content!
            </p>
          </div>
          
          <div className="social-cards-grid">
            
            {/* Instagram Card */}
            <a href="https://www.instagram.com/malakinghotpot.surrey?igsh=MXQ3MWk0eWgzbzZyNA==" target="_blank" rel="noopener noreferrer" className="social-card-modern instagram-card">
              <div className="social-icon-large">
                <Image src="/assets/images/instagram-social.svg" alt="Instagram" width={60} height={60} />
              </div>
              <h3 className="social-platform-name">Instagram</h3>
              <p className="social-platform-description">
                Follow us for mouthwatering food photos, daily specials, and behind-the-scenes content.
              </p>
              <p className="social-handle-red">@malakinghotpot.surrey</p>
            </a>

            {/* Facebook Card */}
            <a href="https://www.facebook.com/share/1kCvQTY5qa/" target="_blank" rel="noopener noreferrer" className="social-card-modern facebook-card">
              <div className="social-icon-large">
                <Image src="/assets/images/facebook-social.svg" alt="Facebook" width={60} height={60} />
              </div>
              <h3 className="social-platform-name">Facebook</h3>
              <p className="social-platform-description">
                Like our page for updates, events, and community news.
              </p>
              <p className="social-handle-red">Mala King Hot Pot</p>
            </a>

            {/* TikTok Card */}
            <a href="https://www.tiktok.com/@malakinghotpot?_t=ZS-8zKWtkqEbuT&_r=1" target="_blank" rel="noopener noreferrer" className="social-card-modern tiktok-card">
              <div className="social-icon-large tiktok-icon-dark">
                <Image src="/assets/images/tiktok-footer.svg" alt="TikTok" width={60} height={60} />
              </div>
              <h3 className="social-platform-name">TikTok</h3>
              <p className="social-platform-description">
                Watch our cooking videos, staff highlights, and fun content.
              </p>
              <p className="social-handle-red">@malakinghotpot</p>
            </a>

            {/* XiaoHongShu Card */}
            <div className="social-card-modern xiaohongshu-card">
              <div className="social-icon-large">
                <Image src="/assets/images/xiaohongshu-social.svg" alt="XiaoHongShu" width={60} height={60} />
              </div>
              <h3 className="social-platform-name">XiaoHongShu</h3>
              <p className="social-platform-description">
                Discover our recipes, tips, and authentic hot pot culture.
              </p>
              <p className="social-handle-red">@malakinghotpot</p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section - Redesigned */}
      <section className="faq-section-modern">
        <div className="container">
          <div className="faq-header">
            <div className="section-badge">FAQ</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Find answers to common questions about our restaurant, menu, and services
            </p>
          </div>
          
          <div className="faq-grid-modern">
            <div className="faq-card">
              <div className="faq-icon">🍽️</div>
              <h3>Do you take reservations?</h3>
              <p>
                Yes! We accept reservations for groups of 6 or more. For smaller groups, we operate 
                on a first-come, first-served basis. Call us or use our contact form to reserve.
              </p>
            </div>
            
            <div className="faq-card">
              <div className="faq-icon">⚖️</div>
              <h3>How does "Weigh to Pay" work?</h3>
              <p>
                Select your fresh ingredients, choose your broth, and we weigh your bowl. 
                You only pay for what you choose - perfect for any appetite size.
              </p>
            </div>
            
            <div className="faq-card">
              <div className="faq-icon">🥬</div>
              <h3>Do you offer vegetarian options?</h3>
              <p>
                Absolutely! We have fresh vegetables, mushrooms, and vegetarian broths. 
                Our menu accommodates all dietary preferences.
              </p>
            </div>
            
            <div className="faq-card">
              <div className="faq-icon">🅿️</div>
              <h3>Is parking available?</h3>
              <p>
                Yes, there's plenty of free parking at Central City Shopping Centre 
                where we're conveniently located.
              </p>
            </div>
            
            <div className="faq-card">
              <div className="faq-icon">🎉</div>
              <h3>Do you offer catering?</h3>
              <p>
                Yes, we offer catering for events and parties. Contact us for information 
                about our catering packages and pricing.
              </p>
            </div>
            
            <div className="faq-card">
              <div className="faq-icon">♿</div>
              <h3>Are you wheelchair accessible?</h3>
              <p>
                Yes, our restaurant is fully wheelchair accessible with ramps 
                and accessible seating areas throughout.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
