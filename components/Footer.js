'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer-exact">
      {/* Main Footer Content */}
      <div className="footer-main-exact">
        <div className="container">
          <div className="footer-grid-exact">
            
            {/* Brand Section */}
            <div className="footer-brand-exact">
              <div className="footer-logo-exact">
                <Image 
                  src="/assets/images/logo-footer.svg" 
                  alt="Mala King Hot Pot" 
                  width={120} 
                  height={120}
                  className="footer-logo-img"
                />
              </div>
              
              <h2 className="footer-brand-title-exact">MALA KING HOTPOT</h2>
              
              <p className="footer-description-exact">
                Experience the ultimate self-serve hot pot adventure with over 100 fresh ingredients and 10+ signature broths. Your pot, your way!
              </p>
              
              {/* Social Media Icons */}
              <div className="footer-social-exact">
                <a href="https://www.instagram.com/malakinghotpot.surrey?igsh=MXQ3MWk0eWgzbzZyNA==" className="social-icon-exact" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <Image src="/assets/images/instagram-footer.svg" alt="Instagram" width={24} height={24} />
                </a>
                <a href="https://www.facebook.com/share/1kCvQTY5qa/" className="social-icon-exact" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <Image src="/assets/images/facebook-footer.svg" alt="Facebook" width={24} height={24} />
                </a>
                <a href="https://www.tiktok.com/@malakinghotpot?_t=ZS-8zKWtkqEbuT&_r=1" className="social-icon-exact" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                  <Image src="/assets/images/tiktok-footer.svg" alt="TikTok" width={24} height={24} />
                </a>
                <a href="#" className="social-icon-exact" aria-label="Xiaohongshu">
                  <Image src="/assets/images/xiaohongshu-footer.svg" alt="Xiaohongshu" width={24} height={24} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-column-exact">
              <h3 className="footer-section-title-exact">QUICK LINKS</h3>
              <div className="footer-underline-exact"></div>
              <nav className="footer-nav-exact">
                <Link href="/about" className="footer-link-exact">About Us</Link>
                <Link href="/menu" className="footer-link-exact">Our Menu</Link>
                <Link href="/locations" className="footer-link-exact">Locations</Link>
                <Link href="/careers" className="footer-link-exact">Careers</Link>
                <Link href="/contact" className="footer-link-exact">Contact</Link>
                <Link href="/rewards" className="footer-link-exact">Rewards</Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="footer-column-exact">
              <h3 className="footer-section-title-exact">CONTACT INFO</h3>
              <div className="footer-underline-exact"></div>
              <div className="footer-contact-exact">
                <div className="contact-item-exact">
                  <div className="contact-icon-exact">
                    📞
                  </div>
                  <div className="contact-info-exact">
                    <span className="contact-label-exact">PHONE</span>
                    <a href="tel:+16044963148" className="contact-value-exact">+1 (604) 496-3148</a>
                  </div>
                </div>
                
                <div className="contact-item-exact">
                  <div className="contact-icon-exact">
                    ✉️
                  </div>
                  <div className="contact-info-exact">
                    <span className="contact-label-exact">EMAIL</span>
                    <a href="mailto:info@malaking.ca" className="contact-value-exact">info@malaking.ca</a>
                  </div>
                </div>
                
                <div className="contact-item-exact">
                  <div className="contact-icon-exact">
                    📍
                  </div>
                  <div className="contact-info-exact">
                    <span className="contact-label-exact">ADDRESS</span>
                    <div className="contact-value-exact">
                      10302 City pkwy #9<br />
                      Surrey BC, V3T 4C2
                    </div>
                  </div>
                </div>
                
                <div className="contact-item-exact">
                  <div className="contact-icon-exact">
                    🕐
                  </div>
                  <div className="contact-info-exact">
                    <span className="contact-label-exact">HOURS</span>
                    <div className="contact-value-exact">
                      Monday - Sunday<br />
                      10:30 AM - 1:30 AM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer-column-exact">
              <h3 className="footer-section-title-exact">STAY UPDATED</h3>
              <div className="footer-underline-exact"></div>
              <p className="newsletter-description-exact">
                Get the latest updates and exclusive offers!
              </p>
              <form className="newsletter-form-exact">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="newsletter-input-exact"
                  required
                />
                <button type="submit" className="newsletter-btn-exact">
                  SUBSCRIBE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom-exact">
        <div className="container">
          <div className="footer-bottom-content-exact">
            <p className="copyright-exact">© 2024 Mala King Hotpot. All rights reserved.</p>
            <div className="footer-legal-exact">
              <Link href="/privacy" className="legal-link-exact">Privacy Policy</Link>
              <Link href="/terms" className="legal-link-exact">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}