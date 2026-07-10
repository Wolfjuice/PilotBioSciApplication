import React, { useContext } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import products from '../data/products.js'
import { CartContext } from '../context/cart.jsx'
import { slugifyTitle } from '../utils/slugify.js'

export default function ProductDetailPage(){
  const { slug } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useContext(CartContext)
  // Support both the new slug URLs and older id-based URLs for compatibility.
  const item = products.find(p => p.id === slug || slugifyTitle(p.title) === slug)
  if(!item) return (<div><h3>Not found</h3><button className='btn btn-sm btn-secondary' onClick={()=>navigate(-1)}>Back</button></div>)
  return (
    <div className="product-detail">
      <div className="mb-2"><Link to="/">← Back to shop</Link></div>
      <div className="row">
        <div className="col-md-5">
          {item.image ? <img src={item.image} alt={item.title} className="img-fluid rounded" style={{height:360, objectFit:'cover'}} /> : <div className="placeholder large">{item.title[0]}</div>}
        </div>
        <div className="col-md-7">
          <h1>{item.title}</h1>
          <div className="text-muted">Related to: {item.emperor}</div>
          <p className="mt-3">{item.description}</p>
          <h3>${item.price.toFixed(2)}</h3>
          <div style={{display:'flex', gap:10}}>
            { item.type === 'service' ? (
              <button className="btn btn-primary" onClick={() => navigate('/inquiry', { state: { productId: item.id } })}>Inquire</button>
            ) : (
              <>
                <button className="btn btn-primary" onClick={()=>addToCart(item)}>Add to cart</button>
                <button className="btn btn-outline-secondary" onClick={()=>navigate('/cart')}>Go to cart</button>
              </>
            ) }
          </div>
        </div>
      </div>
    </div>
  )
}

