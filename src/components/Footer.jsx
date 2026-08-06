import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="home-footer">
      <div className="container home-footer__grid">
        <div className="home-footer__block">
          <div className="home-footer__h">Don&apos;t miss out!</div>
          <div className="home-footer__p">Stay notified of events, products and news.</div>
          <button className="home-btn home-btn--outline" onClick={() => navigate('/register')}>Sign Up</button>
          <div className="home-social" aria-label="Social links">
            <span aria-hidden="true">f</span>
            <span aria-hidden="true">in</span>
            <span aria-hidden="true">◎</span>
            <span aria-hidden="true">▶</span>
          </div>
        </div>
        <div className="home-footer__block">
          <div className="home-footer__h">Need Assistance?</div>
          <ul>
            <li><Link to="/inquiry">Contact Roman Emporium</Link></li>
            <li><Link to="/inquiry">Customer and Technical Support</Link></li>
            <li><Link to="/inquiry">Support</Link></li>
          </ul>
          <div className="home-footer__h" style={{ marginTop: 18 }}>Local Contact</div>
          <div className="home-footer__p">(608) 274-4330</div>
        </div>
        <div className="home-footer__block">
          <div className="home-footer__h">Products &amp; Resources</div>
          <ul>
            <li><Link to="/all">Products</Link></li>
            <li><Link to="/all">Applications</Link></li>
            <li><Link to="/services">Custom Capabilities</Link></li>
            <li><Link to="/inquiry">Resources</Link></li>
          </ul>
        </div>
        <div className="home-footer__block">
          <div className="home-footer__h">About Roman Emporium</div>
          <ul>
            <li><Link to="/inquiry">Company Info</Link></li>
            <li><Link to="/inquiry">ISO Certification</Link></li>
            <li><Link to="/inquiry">Corporate Responsibility</Link></li>
            <li><Link to="/inquiry">Press Releases</Link></li>
            <li><Link to="/inquiry">Careers</Link></li>
          </ul>
        </div>
      </div>

      <div className="container home-footer__bottom">
        <div>© {new Date().getFullYear()} Roman Emporium. All Rights Reserved.</div>
        <div className="home-footer__lang">English — United States</div>
      </div>
      <div className="container home-footer__legal">
        <Link to="/inquiry">Legal and Trademarks</Link>
        <span className="home-divider">|</span>
        <Link to="/inquiry">Privacy Policy</Link>
        <span className="home-divider">|</span>
        <Link to="/inquiry">Terms and Conditions</Link>
        <span className="home-divider">|</span>
        <Link to="/inquiry">Trademarks</Link>
        <span className="home-divider">|</span>
        <Link to="/inquiry">Your Privacy Choices</Link>
      </div>
    </footer>
  )
}