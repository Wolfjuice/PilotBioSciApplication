import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products.js'
import { slugifyTitle } from '../utils/slugify.js'

export default function ListView(){
  const [q, setQ] = useState('')
  const filtered = useMemo(() => {
    const term = (q||'').trim().toLowerCase()
    return products.filter(p => {
      if(!term) return true
      return (p.title||'').toLowerCase().includes(term) || (p.description||'').toLowerCase().includes(term) || (p.emperor||'').toLowerCase().includes(term)
    })
  }, [q])

  return (
    <div>
      <h2 className="mb-3">Products — List View</h2>
      <div className="mb-3">
        <input className="form-control" placeholder="Search products..." value={q} onChange={e=>setQ(e.target.value)} />
      </div>
      <div className="list-group">
        {filtered.map(p => (
          <div key={p.id} className="list-group-item d-flex align-items-center">
            <div style={{ width: 100 }}>
              <img
                src={p.image}
                alt={p.title}
                style={{ width: '80px', height: '60px', objectFit: 'cover' }}
                onError={(e) => {
                  if(!e.currentTarget.dataset.fallback){
                    e.currentTarget.dataset.fallback = '1'
                    e.currentTarget.src = '/product-images/placeholder.svg'
                  }
                }}
              />
            </div>
            <div className="flex-grow-1 px-3">
              <div className="fw-bold">{p.title}</div>
              <div className="text-muted">${p.price && p.price.toFixed ? p.price.toFixed(2) : p.price}</div>
            </div>
            <div>
              <Link to={`/product/${slugifyTitle(p.title)}`} className="btn btn-success">View Product</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
