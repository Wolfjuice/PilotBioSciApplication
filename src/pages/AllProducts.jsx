import React, { useMemo } from 'react'
import products from '../data/products.js'
import ProductGrid from '../products/ProductGrid.jsx'

export default function AllProducts({ search }){
  const filtered = useMemo(() => {
    const q = (search||'').trim().toLowerCase()
    return products.filter(p => !q || p.title.toLowerCase().includes(q) || (p.description||'').toLowerCase().includes(q) || (p.emperor||'').toLowerCase().includes(q))
  }, [search])

  return (
    <div>
      <h2 className="mb-3">All Products</h2>
      <ProductGrid products={filtered} />
    </div>
  )
}
