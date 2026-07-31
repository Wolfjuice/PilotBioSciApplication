// src/components/EmperorTabsDropdown.jsx
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductsMegaDropdown from './ProductsMegaDropdown.jsx'

export default function EmperorTabsDropdown(){
  const navigate = useNavigate()
  const [openProducts, setOpenProducts] = useState(false)
  const hideTimer = useRef(null)

  function clearHide(){
    if(hideTimer.current){
      window.clearTimeout(hideTimer.current)
      hideTimer.current = null
    }
  }
  function scheduleHide(delay=180){
    clearHide()
    hideTimer.current = window.setTimeout(() => setOpenProducts(false), delay)
  }

  useEffect(() => () => clearHide(), [])

  const tabs = [
    { key:'products', label:'Products', kind:'products' },
    { key:'allProducts', label:'All Products', onClick: () => navigate('/all') },
    { key:'listView', label:'List View', onClick: () => navigate('/products') },
    { key:'serviceListView', label:'Service List View', onClick: () => navigate('/services') },
    { key:'inquiry', label:'Inquiry', onClick: () => navigate('/inquiry') }
  ]

  return (
    <nav className="emperor-tabs navbar-expand bg-dark text-white" style={{position:'relative'}}>
      <div className="container-fluid d-flex align-items-center" style={{paddingLeft:'1rem', paddingRight:'1rem'}}>
        <ul className="nav w-100 justify-content-center flex-wrap" style={{gap:'0.25rem'}}>
          {tabs.map(t => (
            <li key={t.key}
                className="nav-item position-relative"
                onMouseEnter={() => {
                  if(t.kind === 'products'){ clearHide(); setOpenProducts(true) }
                }}
                onMouseLeave={() => {
                  if(t.kind === 'products'){ scheduleHide(180) }
                }}
            >
              <button
                className="btn btn-link nav-link text-white"
                aria-haspopup={t.kind === 'products'}
                aria-expanded={t.kind === 'products' ? openProducts : undefined}
                onClick={(e)=>{ e.preventDefault(); if(t.onClick) t.onClick(); }}
              >
                {t.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mega dropdown is rendered at the nav level so it can span full width */}
      <ProductsMegaDropdown
        open={openProducts}
        onEnter={() => { clearHide(); setOpenProducts(true) }}
        onLeave={() => scheduleHide(180)}
        onNavigate={() => setOpenProducts(false)}
      />
    </nav>
  )
}
