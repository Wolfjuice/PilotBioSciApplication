import React, { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { slugifyTitle } from '../utils/slugify.js'

export default function ProductCard({product}){
  const navigate = useNavigate()

  const { addToCart } = useContext(CartContext)
  return (
    <div className="card h-100">
      {product.image ? (
        <img
          src={product.image}
          className="card-img-top"
          alt={product.title}
          style={{height:160, objectFit:'cover'}}
          onError={(e) => {
            if(!e.currentTarget.dataset.fallback){
              e.currentTarget.dataset.fallback = '1'
              e.currentTarget.src = '/product-images/placeholder.svg'
            }
          }}
        />
      ) : (
        <div style={{height:160}} />
      )}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title"><Link to={`/product/${slugifyTitle(product.title)}`} className="stretched-link text-decoration-none">{product.title}</Link></h5>
        <p className="card-text text-muted small">{product.description}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <div className="fw-bold">${product.price.toFixed(2)}</div>
          { product.type === 'service' ? (
              <button className="btn btn-sm btn-outline-primary" onClick={() => navigate('/inquiry', { state: { productId: product.id } })}>Inquire</button>
            ) : (
              <button className="btn btn-sm btn-outline-primary" onClick={()=>addToCart(product)}>Add</button>
            ) }
        </div>
      </div>
    </div>
  )
}
