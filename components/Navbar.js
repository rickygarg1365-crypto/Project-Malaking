'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isOrderDropdownOpen, setIsOrderDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const toggleOrderDropdown = () => {
    setIsOrderDropdownOpen(!isOrderDropdownOpen)
  }

  const closeOrderDropdown = () => {
    setIsOrderDropdownOpen(false)
  }

  const deliveryApps = [
    {
      name: 'DoorDash',
      url: '#',
      color: '#FF3008'
    },
    {
      name: 'Uber Eats',
      url: 'https://www.ubereats.com/ca/store/mala-king-hot-pot/7Zlqbd6ITeCgvLyh0pg1Iw?srsltid=AfmBOoqOokS1KKtrZ4VccsgoS9DPDIKxrE4uz9ARwttxIAkeaxOGhECH',
      color: '#00B14F'
    },
    {
      name: 'Skip The Dishes',
      url: '#',
      color: '#E8002A'
    },
    {
      name: 'Fantuan',
      url: '#',
      color: '#FF6B35'
    },
    {
      name: 'Clover',
      url: 'https://www.clover.com/online-ordering/mala-king-hot-pot-surrey',
      color: '#52C41A'
    }
  ]

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-container">
        <div className="container">
          <div className="nav-content">
            {/* Logo */}
            <Link href="/" className="nav-logo" onClick={closeMobileMenu}>
              <div className="logo-wrapper">
                <Image 
                  src="/assets/images/logo-header.svg" 
                  alt="Mala King Hot Pot" 
                  width={48} 
                  height={48}
                  className="logo-icon"
                />
                <div className="logo-text">
                  <span className="logo-title">Mala King</span>
                  <span className="logo-subtitle">Hot Pot</span>
                </div>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="nav-menu">
              <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
                Home
              </Link>
              <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>
                About
              </Link>
              <Link href="/menu" className={`nav-link ${pathname === '/menu' ? 'active' : ''}`}>
                Menu
              </Link>
              <Link href="/locations" className={`nav-link ${pathname === '/locations' ? 'active' : ''}`}>
                Locations
              </Link>
              <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'active' : ''}`}>
                Contact
              </Link>
            </div>
            
            {/* Action Buttons */}
            <div className="nav-actions">
              <a href="tel:+16044963148" className="nav-action phone">
                <span>Call Us</span>
              </a>
              <Link href="/rewards" className="nav-action rewards">
                <span>Rewards</span>
              </Link>
              <div className="order-dropdown-container">
                <button onClick={toggleOrderDropdown} className="nav-action order">
                  <span>Order Now</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`dropdown-arrow ${isOrderDropdownOpen ? 'open' : ''}`}>
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {/* Order Dropdown */}
                {isOrderDropdownOpen && (
                  <div className="order-dropdown">
                    {deliveryApps.map((app, index) => (
                      <a
                        key={index}
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dropdown-item"
                        onClick={closeOrderDropdown}
                      >
                        <div className="app-icon" style={{ backgroundColor: app.color }}>
                          <span>{app.name.charAt(0)}</span>
                        </div>
                        <span className="app-name">{app.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span className="toggle-line"></span>
              <span className="toggle-line"></span>
              <span className="toggle-line"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu">
          <div className="mobile-header">
            <div className="mobile-logo">
              <Image 
                src="/assets/images/logo-header.svg" 
                alt="Mala King Hot Pot" 
                width={40} 
                height={40}
              />
              <span>Mala King Hot Pot</span>
            </div>
            <button className="mobile-close" onClick={closeMobileMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="mobile-content">
            <div className="mobile-nav">
              <Link href="/" className={`mobile-link ${pathname === '/' ? 'active' : ''}`} onClick={closeMobileMenu}>
                Home
              </Link>
              <Link href="/about" className={`mobile-link ${pathname === '/about' ? 'active' : ''}`} onClick={closeMobileMenu}>
                About Us
              </Link>
              <Link href="/menu" className={`mobile-link ${pathname === '/menu' ? 'active' : ''}`} onClick={closeMobileMenu}>
                Menu
              </Link>
              <Link href="/locations" className={`mobile-link ${pathname === '/locations' ? 'active' : ''}`} onClick={closeMobileMenu}>
                Locations
              </Link>
              <Link href="/contact" className={`mobile-link ${pathname === '/contact' ? 'active' : ''}`} onClick={closeMobileMenu}>
                Contact
              </Link>
            </div>
            
            <div className="mobile-actions">
              <a href="tel:+16044963148" className="mobile-action phone" onClick={closeMobileMenu}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L6.87858 7.27147C6.95075 7.70451 6.73206 8.13397 6.3394 8.3303L5.79139 8.59737C6.38882 9.56178 7.43822 10.6112 8.40263 11.2086L8.6697 10.6606C8.86603 10.268 9.29549 10.0493 9.72853 10.1214L14.1644 10.8607C14.6466 10.9411 15 11.3583 15 11.8471V14C15 14.5523 14.5523 15 14 15H13C6.37258 15 1 9.62742 1 3V2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>+1 (604) 496-3148</span>
              </a>
              <Link href="/rewards" className="mobile-action rewards" onClick={closeMobileMenu}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L12.09 8.26L20 9L12.09 9.74L10 16L7.91 9.74L0 9L7.91 8.26L10 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Join Rewards Program</span>
              </Link>
              <div className="mobile-order-dropdown-container">
                <button onClick={toggleOrderDropdown} className="mobile-action order">
                  <span>Order Now</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`dropdown-arrow ${isOrderDropdownOpen ? 'open' : ''}`}>
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {/* Mobile Order Dropdown */}
                {isOrderDropdownOpen && (
                  <div className="mobile-order-dropdown">
                    {deliveryApps.map((app, index) => (
                      <a
                        key={index}
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile-dropdown-item"
                        onClick={() => {
                          closeOrderDropdown()
                          closeMobileMenu()
                        }}
                      >
                        <div className="app-icon" style={{ backgroundColor: app.color }}>
                          <span>{app.name.charAt(0)}</span>
                        </div>
                        <span className="app-name">{app.name}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>


    </header>
  )
}
