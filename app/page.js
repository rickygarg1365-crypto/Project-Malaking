'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'


export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Hero content data
  const heroSlides = [
    {
      id: 1,
      title: "Grand Opening Week!",
      subtitle: "August 29th - September 5th",
      description: "🎉 We're officially opening our doors! Join us for our grand opening week celebration with amazing offers: 20% off on all dishes and 50% off on all drinks. Be among the first to experience Surrey's newest hot pot destination!",
      image: "/assets/images/Grand Opening.jpg",
      cta: "Find Location",
      ctaLink: "/locations"
    },
    {
      id: 2,
      title: "Authentic Hot Pot Experience",
      subtitle: "Fresh & Flavorful",
      description: "Discover Surrey's premier hot pot destination with our signature Ma La Tang broth and premium ingredients.",
      image: "/assets/images/Counter.jpg",
      cta: "Explore Menu",
      ctaLink: "/menu"
    },
    {
      id: 3,
      title: "Weigh to Pay, Your Way",
      subtitle: "Customizable & Affordable",
      description: "Choose from our fresh selection of meats, seafood, and vegetables. Pay only for what you love.",
      image: "/assets/images/Sauce Bar.jpg",
      cta: "How It Works",
      ctaLink: "#how-it-works"
    }
  ]

  // Auto-advance carousel with animation
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        setIsAnimating(false)
      }, 300)
    }, 6000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  // Manual slide change with animation
  const changeSlide = (index) => {
    if (index !== currentSlide && !isAnimating) {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentSlide(index)
        setIsAnimating(false)
      }, 300)
    }
  }

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate')
        }
      })
    }, observerOptions)

    // Observe all elements with animate-on-scroll class
    const animateElements = document.querySelectorAll('.animate-on-scroll')
    animateElements.forEach((el) => observer.observe(el))

    return () => {
      animateElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <main className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-carousel">
          {heroSlides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="hero-background">
                <Image 
                  src={slide.image} 
                  alt={slide.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={true}
                  quality={85}
                  sizes="100vw"
                  className="hero-image"
                />
                <div className="hero-overlay"></div>
              </div>
              <div className={`hero-content ${isAnimating ? 'hero-content-animating' : 'hero-content-visible'}`}>
                <div className="hero-badge reveal-animation">{slide.subtitle}</div>
                <h1 className="hero-title reveal-animation reveal-delay-1">{slide.title}</h1>
                <p className="hero-description reveal-animation reveal-delay-2">{slide.description}</p>
                <Link href={slide.ctaLink} className="hero-cta reveal-animation reveal-delay-3">
                  {slide.cta}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
          
          {/* Carousel Navigation */}
          <div className="hero-nav">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => changeSlide(index)}
              />
            ))}
          </div>
          
          {/* Carousel Arrows */}
          <button 
            className="hero-arrow hero-prev"
            onClick={() => changeSlide((currentSlide - 1 + heroSlides.length) % heroSlides.length)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className="hero-arrow hero-next"
            onClick={() => changeSlide((currentSlide + 1) % heroSlides.length)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-brand">
              <div className="brand-display">
                <h2 className="brand-name">Mala King</h2>
                <h3 className="brand-subtitle">Hot Pot</h3>
              </div>
            </div>
            <div className="about-content">
              <div className="section-badge">About Us</div>
              <h3 className="section-subtitle">Weigh to Pay, Made Your Way</h3>
              <p className="section-description">
                Discover Surrey's newest and most exciting hot pot destination! At Mala King Hot Pot, we bring you an authentic experience with our signature Ma La Tang broth and premium ingredients.
              </p>
              <p className="section-description">
                Choose from our fresh selection of meats, seafood, vegetables, and noodles. With our weight-based pricing, you only pay for what you love. Every bowl is cooked to order, served hot, and made just the way you like it.
              </p>
              <div className="about-actions">
                <Link href="/locations" className="btn btn-primary">
                  Find a Location
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link href="/about" className="btn btn-secondary">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="steps-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <div className="section-badge">How It Works</div>
            <h2 className="section-title">4 Simple Steps</h2>
            <p className="section-subtitle">Create your perfect hot pot experience in just a few easy steps</p>
          </div>
          <div className="steps-timeline">
            <div className="timeline-progress">
              <div className="progress-bar"></div>
            </div>
            <div className="timeline-steps">
              <div className="timeline-step animate-on-scroll">
                <div className="step-circle">
                  <span className="step-number">01</span>
                </div>
                <div className="step-content">
                  <h3 className="step-title">Get Your Bowl</h3>
                  <p className="step-description">Start your journey with our premium bowls, ready to be filled with your favorite ingredients.</p>
                </div>
              </div>
              
              <div className="timeline-step animate-on-scroll">
                <div className="step-circle">
                  <span className="step-number">02</span>
                </div>
                <div className="step-content">
                  <h3 className="step-title">Pick Ingredients</h3>
                  <p className="step-description">Choose from our fresh selection of meats, seafood, vegetables, and noodles.</p>
                </div>
              </div>
              
              <div className="timeline-step animate-on-scroll">
                <div className="step-circle">
                  <span className="step-number">03</span>
                </div>
                <div className="step-content">
                  <h3 className="step-title">Select Broth</h3>
                  <p className="step-description">Pick from our 10+ flavorful broths, from mild to spicy, to create your perfect base.</p>
                </div>
              </div>
              
              <div className="timeline-step animate-on-scroll">
                <div className="step-circle">
                  <span className="step-number">04</span>
                </div>
                <div className="step-content">
                  <h3 className="step-title">Weigh & Pay</h3>
                  <p className="step-description">Only pay for what you love! Our weight-based pricing ensures you get exactly what you want.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Broths Section */}
      <section className="broths-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Popular Choices</div>
            <h2 className="section-title">Signature Broths</h2>
            <p className="section-subtitle">Discover our most loved broths, crafted with authentic flavors</p>
          </div>
          <div className="broths-container">
            <div className="broths-scroll">
              <div className="broth-item">
                <div className="broth-image">
                  <Image 
                    src="/assets/images/dish1-photo.png" 
                    alt="Signature Ma La Tang Broth" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="broth-number">1</div>
                </div>
                <div className="broth-content">
                  <h3 className="broth-title">Signature Ma La Tang Broth</h3>
                  <h4 className="broth-subtitle">招牌麻辣烫汤底</h4>
                  <p className="broth-description">
                    A bold and fiery Szechuan-style broth infused with fragrant chili oil, numbing peppercorns, and over a dozen spices.
                  </p>
                  <div className="broth-tags">
                    <span className="tag spicy">Spicy</span>
                    <span className="tag popular">Popular</span>
                  </div>
                </div>
              </div>
              
              <div className="broth-item">
                <div className="broth-image">
                  <Image 
                    src="/assets/images/dish2-photo.png" 
                    alt="Golden Chicken Broth" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="broth-number">2</div>
                </div>
                <div className="broth-content">
                  <h3 className="broth-title">Golden Chicken Broth</h3>
                  <h4 className="broth-subtitle">金汤鸡汤底</h4>
                  <p className="broth-description">
                    A rich, slow-simmered chicken broth with golden clarity, offering deep savory flavor and natural sweetness.
                  </p>
                  <div className="broth-tags">
                    <span className="tag mild">Mild</span>
                    <span className="tag healthy">Healthy</span>
                  </div>
                </div>
              </div>
              
              <div className="broth-item">
                <div className="broth-image">
                  <Image 
                    src="/assets/images/dish3-photo.png" 
                    alt="Tom Yum Broth" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="broth-number">3</div>
                </div>
                <div className="broth-content">
                  <h3 className="broth-title">Tom Yum Broth</h3>
                  <h4 className="broth-subtitle">冬阴功汤底</h4>
                  <p className="broth-description">
                    A tangy Thai favorite bursting with lemongrass, lime leaves, chili, and a touch of coconut.
                  </p>
                  <div className="broth-tags">
                    <span className="tag spicy">Spicy</span>
                    <span className="tag tangy">Tangy</span>
                  </div>
                </div>
              </div>
              
              <div className="broth-item">
                <div className="broth-image">
                  <Image 
                    src="/assets/images/dish4-photo.png" 
                    alt="Singapore Laksa Broth" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="broth-number">4</div>
                </div>
                <div className="broth-content">
                  <h3 className="broth-title">Singapore Laksa Broth</h3>
                  <h4 className="broth-subtitle">新加坡叻沙汤底</h4>
                  <p className="broth-description">
                    Creamy, aromatic, and slightly spicy - made with coconut milk, curry paste, and Southeast Asian herbs.
                  </p>
                  <div className="broth-tags">
                    <span className="tag creamy">Creamy</span>
                    <span className="tag aromatic">Aromatic</span>
                  </div>
                </div>
              </div>

              <div className="broth-item">
                <div className="broth-image">
                  <Image 
                    src="/assets/images/dish1-photo.png" 
                    alt="Japanese Black Garlic Broth" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="broth-number">5</div>
                </div>
                <div className="broth-content">
                  <h3 className="broth-title">Japanese Black Garlic Broth</h3>
                  <h4 className="broth-subtitle">日式黑蒜汤底</h4>
                  <p className="broth-description">
                    Rich and complex Japanese broth featuring aged black garlic with deep umami flavors and subtle sweetness.
                  </p>
                  <div className="broth-tags">
                    <span className="tag mild">Mild</span>
                    <span className="tag aromatic">Aromatic</span>
                  </div>
                </div>
              </div>

              <div className="broth-item">
                <div className="broth-image">
                  <Image 
                    src="/assets/images/dish2-photo.png" 
                    alt="Japanese Miso Broth" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="broth-number">6</div>
                </div>
                <div className="broth-content">
                  <h3 className="broth-title">Japanese Miso Broth</h3>
                  <h4 className="broth-subtitle">日式味噌汤底</h4>
                  <p className="broth-description">
                    Traditional Japanese miso broth with fermented soybean paste, creating a rich, umami-packed base.
                  </p>
                  <div className="broth-tags">
                    <span className="tag mild">Mild</span>
                    <span className="tag healthy">Healthy</span>
                  </div>
                </div>
              </div>

              <div className="broth-item">
                <div className="broth-image">
                  <Image 
                    src="/assets/images/dish3-photo.png" 
                    alt="Thai Curry Broth" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="broth-number">7</div>
                </div>
                <div className="broth-content">
                  <h3 className="broth-title">Thai Curry Broth</h3>
                  <h4 className="broth-subtitle">泰式咖喱汤底</h4>
                  <p className="broth-description">
                    Aromatic Thai curry broth with coconut milk, lemongrass, galangal, and traditional curry spices.
                  </p>
                  <div className="broth-tags">
                    <span className="tag spicy">Spicy</span>
                    <span className="tag creamy">Creamy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="broths-cta">
            <Link href="/menu" className="btn btn-primary btn-large">
              View Full Menu
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>



    </main>
  )
}
