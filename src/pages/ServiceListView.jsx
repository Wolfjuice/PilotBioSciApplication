import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products.js'
import { slugifyTitle } from '../utils/slugify.js'

export default function ServiceListView(){
  const [q, setQ] = useState('')
  const filtered = useMemo(() => {
    const term = (q||'').trim().toLowerCase()
    return products.filter(p => {
      if(p.type !== 'service') return false
      if(!term) return true
      return (p.title||'').toLowerCase().includes(term) || (p.description||'').toLowerCase().includes(term) || (p.emperor||'').toLowerCase().includes(term)
    })
  }, [q])

  return (
    <div>
      <div className="d-flex align-items-center mb-3">
        <h2 className="mb-0">Service List View</h2>
        <div className="ms-auto">
          <input className="form-control" style={{width:280}} placeholder="Search services..." value={q} onChange={e=>setQ(e.target.value)} />
        </div>
      </div>

      <div className="list-group">
        {filtered.map(p=>(
          <div key={p.id} className="list-group-item d-flex align-items-center">
            <div style={{ width: 96 }}>
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  style={{ width: 96, height: 64, objectFit: 'cover', borderRadius: 6 }}
                  onError={(e) => {
                    if(!e.currentTarget.dataset.fallback){
                      e.currentTarget.dataset.fallback = '1'
                      e.currentTarget.src = '/product-images/placeholder.svg'
                    }
                  }}
                />
              ) : (
                <div style={{ height: 64, width: 96 }} />
              )}
            </div>
            <div className="flex-grow-1 px-3">
              <div className="fw-bold">{p.title}</div>
              <div className="text-muted">${p.price && p.price.toFixed ? p.price.toFixed(2) : p.price}</div>
            </div>
            <div>
              <Link to={`/product/${slugifyTitle(p.title)}`} className="btn btn-success">View Service</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
