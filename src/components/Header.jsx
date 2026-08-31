import React, { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/cart.jsx'
import { AuthContext } from '../context/AuthContext.jsx'
import products from '../data/products.js'
import { slugifyTitle } from '../utils/slugify.js'

export default function Header({ search, setSearch }){
  const { count } = useContext(CartContext)
  const { user, logout } = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef(null)

  const results = useMemo(() => {
    const q = (search || '').trim().toLowerCase()
    if(!q) return []
    const matched = products.filter(p => {
      const hay = `${p.title || ''} ${(p.description || '')} ${(p.emperor || '')}`.toLowerCase()
      return hay.includes(q)
    })
    return matched.slice(0, 12)
  }, [search])

  useEffect(() => {
    // close on route change
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    function handleClickOutside(e){
      if(wrapperRef.current && !wrapperRef.current.contains(e.target)){
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  function goToItem(item){
    if(!item?.title && !item?.id) return
    setOpen(false)
    setSearch('')
    const slug = item?.title ? slugifyTitle(item.title) : item.id
    navigate(`/product/${slug}`)
  }

  function formatPrice(value){
    if(typeof value !== 'number') return ''
    try{
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
    }catch{
      return `$${value.toFixed(2)}`
    }
  }

  return (
    <header className="site-header shadow-sm">
      
      <div className="container-fluid py-2 topbar-fluid">
        <div className="topbar-grid">
          <div className="topbar-left d-flex align-items-center">
            <Link to="/" className="brand me-3">Pilot BioSciences</Link>
            <div className="brand-subtitle">Curios &amp; Curations from Ancient Rome</div>
          </div>

          <div className="topbar-center">
            {/* Keep the top bar dimensions consistent; dropdown can be wider than the input without
                widening the header layout */}
            <div ref={wrapperRef} className="topbar-search">
              <input
                className="form-control form-control-lg"
                value={search}
                onChange={e => {
                  setSearch(e.target.value)
                  setOpen(true)
                }}
                onFocus={() => setOpen(true)}
                placeholder="Search products or services…"
                aria-label="Search products or services"
              />

              {/* Do not show the global dropdown on /all (that page already shows filtered results) */}
              {location.pathname !== '/all' && open && (search || '').trim() !== '' && (
                <div
                  className="card"
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 6px)',
                    left: 0,
                    right: 0,
                    width: '100%',
                    zIndex: 9999,
                    maxHeight: 640,
                    overflowY: 'auto'
                  }}
                >
                  <div className="list-group list-group-flush">
                    {results.length === 0 ? (
                      <div className="list-group-item small text-muted">No matches.</div>
                    ) : (
                      results.map(item => (
                        <div
                          key={item.id}
                          className="list-group-item d-flex align-items-center search-result-item"
                          style={{ gap: 10, cursor: 'pointer' }}
                          onMouseDown={(e) => {
                            // Prevent input blur from closing before click runs
                            e.preventDefault()
                          }}
                          onClick={() => goToItem(item)}
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{ width: 84, height: 60, objectFit: 'cover', borderRadius: 6, flex: '0 0 auto' }}
                            onError={(e) => {
                              // lightweight fallback to avoid infinite error loops
                              if(!e.currentTarget.dataset.fallback){
                                e.currentTarget.dataset.fallback = '1'
                                e.currentTarget.src = '/product-images/placeholder.svg'
                              }
                            }}
                          />
                          <div style={{ flex: '1 1 auto' }}>
                            <div className="fw-semibold" style={{ fontSize: 13, lineHeight: 1.2 }}>{item.title}</div>
                            <div className="small text-muted">{formatPrice(item.price)}</div>
                          </div>
                          <button
                            className="btn btn-sm btn-outline-primary"
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              goToItem(item)
                            }}
                          >
                            {item.type === 'service' ? 'View Service' : 'View Product'}
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="topbar-right header-actions d-flex align-items-center">
            {user ? (
              <>
                <span>Welcome, {user?.firstName} {user?.lastName}</span>
                <button className="btn btn-outline-danger header-btn" onClick={logout}>Log out</button>
                <Link to="/profile" className="btn btn-outline-secondary header-btn">
                  My Profile
                </Link>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-primary header-btn">Log in</Link>
                <Link to="/register" className="btn btn-outline-secondary header-btn">Register</Link>
              </>
            )}

            <Link to="/cart" className="btn btn-outline-secondary header-btn">
              <span className="me-2" aria-hidden="true">🛒</span>
              Cart <span className="badge bg-secondary ms-2">{count}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>

  )
}
