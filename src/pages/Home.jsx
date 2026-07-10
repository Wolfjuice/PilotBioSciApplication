import React, { useMemo, useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import products from '../data/products.js'
import './home.css'
import homepage_1_png from '../assets/homepage/1.png'
import homepage_6_png from '../assets/homepage/6.png'

function IconClipboard(){
  return (
    <svg width="84" height="84" viewBox="0 0 84 84" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M28 18h28v54H28z" />
        <path d="M34 14h16a4 4 0 0 1 4 4v4H30v-4a4 4 0 0 1 4-4z" />
        <path d="M34 32h16M34 40h16M34 48h12" />
      </g>
      <path d="M18 50c8 2 16 2 24 0" stroke="#fdb813" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function IconDoc(){
  return (
    <svg width="84" height="84" viewBox="0 0 84 84" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M28 16h22l10 10v42H28z" />
        <path d="M50 16v12h12" />
        <path d="M34 38h20M34 46h20M34 54h16" />
      </g>
      <path d="M20 54l10-6 6 10" stroke="#fdb813" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function IconCalc(){
  return (
    <svg width="84" height="84" viewBox="0 0 84 84" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 18h24a6 6 0 0 1 6 6v36a6 6 0 0 1-6 6H30a6 6 0 0 1-6-6V24a6 6 0 0 1 6-6z" />
        <path d="M30 28h24" />
        <path d="M32 36h6M44 36h6M32 46h6M44 46h6M32 56h6M44 56h6" />
      </g>
      <path d="M58 22l6-4" stroke="#fdb813" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function IconSafety(){
  return (
    <svg width="84" height="84" viewBox="0 0 84 84" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M42 18c8 0 18 4 18 4v18c0 14-10 22-18 26-8-4-18-12-18-26V22s10-4 18-4z" />
        <path d="M42 30v14" />
        <path d="M42 50h.01" />
      </g>
      <path d="M18 46c10 2 20 2 30 0" stroke="#fdb813" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  )
}

function useImageChoices(){
  // Reuse existing product imagery as placeholders to keep the page visually rich
  return useMemo(() => {
    const imgs = products.map(p => p.image).filter(Boolean)
    const pick = (i) => imgs[i % imgs.length] || '/product-images/placeholder.svg'
    return {
      hero: homepage_1_png,
      circle1: pick(0),
      circle2: pick(3),
      circle3: pick(6),
      circle4: pick(9),
      circle5: pick(12),
      circle6: pick(15),
      whatsNew1: pick(2),
      whatsNew2: pick(5),
      whatsNew3: pick(8),
      feature1: pick(1),
      feature2: pick(7),
      blog1: pick(4),
      blog2: pick(10),
      blog3: pick(14),
      purpleCircle: homepage_6_png
    }
  }, [])
}

export default function Home(){
  const navigate = useNavigate()
  const images = useImageChoices()
  const slides = useMemo(() => {
    // Automatically include any image you add to src/assets/CarouselPics
    // Supported extensions: jpg, jpeg, png, webp, avif, gif, svg
    const modules = import.meta.glob('../assets/CarouselPics/*.{jpg,jpeg,png,webp,avif,gif,svg}', { eager: true })
    return Object.values(modules)
      .map((m) => m.default)
      .sort((a, b) => a.localeCompare(b))
  }, [])
const [slideIndex, setSlideIndex] = useState(0)
  useEffect(() => {
    const id = window.setInterval(() => {
      setSlideIndex(i => (slides.length ? (i + 1) % slides.length : 0))
    }, 5000)
    return () => window.clearInterval(id)
  }, [slides.length])
  const [blogIndex, setBlogIndex] = useState(0)
  const blogCards = useMemo(() => ([
    {
      img: images.blog1,
      title: 'Your Media Choice Might Be Designing Your T-Cell Fate',
      excerpt: 'Why Metabolism Matters in T-Cell Expansion',
      meta: 'romanscience.example · Jan 15'
    },
    {
      img: images.blog2,
      title: 'Brewing Immunity: The Vaccine Beer Experiment',
      excerpt: 'What if a vaccine didn\'t come in a vial or a syringe…',
      meta: 'romanscience.example · Jan 13'
    },
    {
      img: images.blog3,
      title: 'From Forever Chemicals to Ancient Proteins: Five Science Stories…',
      excerpt: 'As science advances, its most meaningful moments often come…',
      meta: 'romanscience.example · Jan 08'
    }
  ]), [images.blog1, images.blog2, images.blog3])

  function clampBlog(n){
    const max = Math.max(0, blogCards.length - 1)
    return Math.max(0, Math.min(max, n))
  }

  return (
    <div className="home-home">
      {/* HERO */}
      <section className="home-hero" style={{ backgroundImage: `url(${slides[slideIndex]})` }}>
        <div className="home-hero__overlay" />
        <div className="home-hero__content">
          <div className="home-hero__card">
            <h1>Transforming Science Together</h1>
            <p>Turn your questions into discoveries with groundbreaking tools and side-by-side collaboration.</p>
            <button className="home-btn home-btn--gold" onClick={() => navigate('/all')}>Learn About Rome</button>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="home-strip">
        <div className="container home-strip__inner">
          <div className="home-strip__col">
            <h3>Login and Quick Order</h3>
            <p>Quickly place orders, view past orders and access account-specific pricing.</p>
            <div className="home-links">
              <Link to="/register">Create Account/Log In</Link>
              <span className="home-divider">|</span>
              <Link to="/all">Quick Order</Link>
            </div>
          </div>
          <div className="home-strip__col">
            <h3>Fascination with Rome</h3>
            <p>Discover a career that will give you everything you need to make a difference.</p>
            <div className="home-links">
              <Link to="/inquiry">Join Our Team</Link>
            </div>
          </div>
          <div className="home-strip__col">
            <h3>Support</h3>
            <p>Our Technical Services Scientists can provide guidance throughout your project.</p>
            <div className="home-links">
              <Link to="/inquiry">Contact Technical Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="home-section">
        <div className="container">
          <div className="home-centerhead">
            <h2>Applications</h2>
            <p>We believe in science-driven solutions and personalized service for real-world settings.</p>
          </div>

          <div className="home-appgrid">
            {[
              { img: images.circle1, title: 'Small Molecule Drug Discovery', desc: 'Assays and technologies to accelerate drug discovery' },
              { img: images.circle2, title: 'Cell and Gene Therapy', desc: 'Comprehensive solutions for each stage of your workflow' },
              { img: images.circle3, title: 'Clinical Diagnostics', desc: 'Solutions manufactured under stringent QC standards' },
              { img: images.circle4, title: 'Human Identification', desc: 'Kits and instruments to support forensic DNA analysis' },
              { img: images.circle5, title: 'Targeted Protein Degradation', desc: 'Novel approaches to tackling undruggable targets' },
              { img: images.circle6, title: 'Metabolic Diseases', desc: 'Assays for research in diabetes, liver diseases, obesity and more' }
            ].map((c) => (
              <button
                key={c.title}
                className="home-appcard"
                onClick={() => navigate('/all')}
                type="button"
              >
                <div className="home-appcard__img">
                  <img src={c.img} alt="" />
                </div>
                <div>
                  <div className="home-appcard__title">{c.title}</div>
                  <div className="home-appcard__desc">{c.desc}</div>
                </div>
              </button>
            ))}
          </div>

          <div className="text-center mt-4">
            <button className="home-btn home-btn--gold" onClick={() => navigate('/all')}>View All Applications</button>
          </div>
        </div>
      </section>

      {/* WHAT'S NEW */}
      <section className="home-whatsnew">
        <div className="container">
          <div className="home-centerhead home-centerhead--light">
            <h2>What&apos;s New</h2>
            <p>New products, technologies and newsroom stories</p>
          </div>

          <div className="home-newgrid">
            {[
              { kicker: 'Product', img: images.whatsNew1, title: 'Visualize NanoLuc® Luciferase assays with Glomax® Galaxy' },
              { kicker: 'Article', img: images.whatsNew2, title: 'Committed to sustainability, community, and responsibility to employees and the planet' },
              { kicker: 'Customer Spotlight', img: images.whatsNew3, title: '3D cell assays: Samantha Llewellyn, Swansea University' }
            ].map(card => (
              <div key={card.kicker} className="home-newcard" onClick={() => navigate('/all')} role="button" tabIndex={0}>
                <div className="home-newcard__kicker">{card.kicker}</div>
                <div className="home-newcard__img">
                  <img src={card.img} alt="" />
                </div>
                <div className="home-newcard__title">{card.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HELPFUL RESOURCES */}
      <section className="home-section">
        <div className="container">
          <div className="home-centerhead">
            <h2>Helpful Resources</h2>
            <p>Frequently requested customer and technical support materials</p>
          </div>

          <div className="home-iconrow">
            <Link to="/inquiry" className="home-iconlink">
              <span className="home-iconlink__icon"><IconClipboard /></span>
              <span>Protocols</span>
            </Link>
            <Link to="/inquiry" className="home-iconlink">
              <span className="home-iconlink__icon"><IconDoc /></span>
              <span>Certificates of Analysis</span>
            </Link>
            <Link to="/services" className="home-iconlink">
              <span className="home-iconlink__icon"><IconCalc /></span>
              <span>Tools &amp; Calculators</span>
            </Link>
            <Link to="/inquiry" className="home-iconlink">
              <span className="home-iconlink__icon"><IconSafety /></span>
              <span>Safety Data Sheets</span>
            </Link>
          </div>

          <div className="text-center mt-3">
            <button className="home-btn home-btn--gold" onClick={() => navigate('/inquiry')}>View All Resources</button>
          </div>

          <div className="home-featuregrid">
            <div className="home-featurecard" onClick={() => navigate('/all')} role="button" tabIndex={0}>
              <img className="home-featurecard__img" src={images.feature1} alt="" />
              <div className="home-featurecard__body">
                <div className="home-featurecard__title">NanoBRET® TE K192 Kinase Selectivity System</div>
                <div className="home-featurecard__text">Enable compound profiling in live-cells against a panel of 192 human kinases, delivering quantitative data in a single experiment.</div>
              </div>
            </div>
            <div className="home-featurecard" onClick={() => navigate('/all')} role="button" tabIndex={0}>
              <img className="home-featurecard__img" src={images.feature2} alt="" />
              <div className="home-featurecard__body">
                <div className="home-featurecard__title">Simple, Sensitive Probe-Based qPCR and RT-qPCR</div>
                <div className="home-featurecard__text">Ready-to-use master mixes designed for sensitive detection and quantification of a broad range of DNA or RNA targets.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RECENT BLOG POSTS */}
      <section className="home-section">
        <div className="container">
          <div className="home-centerhead">
            <h2>Recent Blog Posts</h2>
          </div>

          <div className="home-carousel">
            <button
              className="home-carousel__nav"
              aria-label="Previous"
              onClick={() => setBlogIndex(v => clampBlog(v - 1))}
              disabled={blogIndex === 0}
            >
              ‹
            </button>

            <div className="home-carousel__track" style={{ transform: `translateX(-${blogIndex * 360}px)` }}>
              {blogCards.map(c => (
                <div key={c.title} className="home-blogcard" onClick={() => navigate('/inquiry')} role="button" tabIndex={0}>
                  <img src={c.img} alt="" className="home-blogcard__img" />
                  <div className="home-blogcard__body">
                    <div className="home-blogcard__title">{c.title}</div>
                    <div className="home-blogcard__excerpt">{c.excerpt}</div>
                    <div className="home-blogcard__meta">{c.meta}</div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="home-carousel__nav"
              aria-label="Next"
              onClick={() => setBlogIndex(v => clampBlog(v + 1))}
              disabled={blogIndex === blogCards.length - 1}
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* PURPLE CALLOUT */}
      <section className="home-purple">
        <div className="container home-purple__inner">
          <div className="home-purple__circle" aria-hidden="true" />
          <div className="home-purple__content">
            <div className="home-purple__title">Learn the story and science behind our kit packaging design.</div>
            <button className="home-btn home-btn--gold" onClick={() => navigate('/inquiry')}>Read Blog Post</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
    </div>
  )
}
