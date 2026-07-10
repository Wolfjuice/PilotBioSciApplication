// src/components/ProductPopup.jsx
import React, { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'
import '../components/ProductPopup.css'
import { useNavigate } from 'react-router-dom'

export default function ProductPopup({ product, onMouseEnter, onMouseLeave }){
  const navigate = useNavigate()

  const { addToCart } = useContext(CartContext)
  if(!product) return null
  return (
    <div className="product-popup card p-3 shadow-sm"
         onMouseEnter={onMouseEnter}
         onMouseLeave={onMouseLeave}
    >
      <img
        src={product.image}
        alt={product.title}
        className="img-fluid mb-2"
        style={{height:140, width:'100%', objectFit:'cover', borderRadius:6}}
        onError={(e) => {
          if(!e.currentTarget.dataset.fallback){
            e.currentTarget.dataset.fallback = '1'
            e.currentTarget.src = '/product-images/placeholder.svg'
          }
        }}
      />
      <h6 className="mb-1">{product.title}</h6>
      <small className="text-muted">{product.emperor}</small>
      <p className="mt-2 small text-muted">{product.description}</p>
      <div className="d-flex justify-content-between align-items-center">
        <strong>${product.price.toFixed(2)}</strong>
        { product.type === 'service' ? (
          <button className="btn btn-sm btn-primary" onClick={() => navigate('/inquiry', { state: { productId: product.id } })}>Inquire</button>
        ) : (
          <button className="btn btn-sm btn-primary" onClick={() => addToCart(product)}>Add</button>
        ) }
      </div>
    </div>
  )
}
