import React from 'react'
import ProductCard from './ProductCard.jsx'

export default function ProductGrid({products}){
  if(!products || products.length === 0) return <div className="empty">No products</div>
  return (
    <div className="row g-3">
      {products.map(p => (
        <div key={p.id} className="col-sm-6 col-md-4 col-lg-3">
          <ProductCard product={p} />
        </div>
      ))}
    </div>
  )
}
