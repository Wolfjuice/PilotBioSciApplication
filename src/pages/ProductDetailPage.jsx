

import React, { useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import products from '../data/products.js';
import { CartContext } from '../context/cart.jsx';
import { slugifyTitle } from '../utils/slugify.js';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const product = products.find(p => p.id === slug || slugifyTitle(p.title) === slug);
  if (!product) return <div>Not found</div>;

  // ----- SERVICE PRODUCTS -----
  if (product.type === 'service') {
    return (
      <div className="product-detail">
        <div className="mb-2"><Link to="/">← Back to shop</Link></div>
        <div className="row">
          <div className="col-md-5">
            <img src={product.image} alt={product.title} className="img-fluid rounded" style={{height:360, objectFit:'cover'}} />
          </div>
          <div className="col-md-7">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h3>${product.price.toFixed(2)}</h3>
            <div style={{display:'flex', gap:10}}>
              <button className="btn btn-primary" onClick={() => navigate('/inquiry', { state: { productId: product.id } })}>
                Inquire
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ----- REGULAR PRODUCTS (with or without variants) -----
  const hasVariants = product.variants && product.variants.length > 0;
  const [selectedVariant, setSelectedVariant] = useState(
    hasVariants ? product.variants[0] : null
  );
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val) || val < 1) val = 1;
    setQuantity(val);
  };

  const increment = () => setQuantity(q => q + 1);
  const decrement = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  const handleAddToCart = () => {
    if (hasVariants && !selectedVariant) return;
    if (selectedVariant?.isQuote) {
      navigate('/inquiry', { state: { productId: product.id, variant: selectedVariant } });
      return;
    }
    addToCart(product, selectedVariant, quantity);
  };

  const displayPrice = selectedVariant?.price ?? product.price;

  return (
    <div className="product-detail">
      <div className="mb-2"><Link to="/">← Back to shop</Link></div>
      <div className="row">
        <div className="col-md-5">
          <img src={product.image} alt={product.title} className="img-fluid rounded" style={{height:360, objectFit:'cover'}} />
        </div>
        <div className="col-md-7">
          <h1>{product.title}</h1>
          <p>{product.description}</p>

          {hasVariants && (
            <div className="mb-3">
              <label className="fw-bold">Size</label>
              <div className="d-flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.sku}
                    className={`btn btn-outline-primary ${selectedVariant?.sku === variant.sku ? 'active' : ''}`}
                    onClick={() => setSelectedVariant(variant)}
                  >
                    {variant.size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <h3>
            {displayPrice ? `$${displayPrice.toFixed(2)}` : 'Contact for pricing'}
          </h3>

          {(!hasVariants || (selectedVariant && !selectedVariant.isQuote)) && (
            <div className="mb-3 d-flex align-items-center gap-3">
              <label className="fw-bold">Quantity</label>
              <div className="d-flex align-items-center">
                <button className="btn btn-outline-secondary" onClick={decrement}>−</button>
                <input
                  type="number"
                  className="form-control text-center"
                  style={{ width: '60px' }}
                  value={quantity}
                  onChange={handleQuantityChange}
                  min="1"
                />
                <button className="btn btn-outline-secondary" onClick={increment}>+</button>
              </div>
            </div>
          )}

          <div className="d-flex gap-2">
            {selectedVariant?.isQuote ? (
              <button className="btn btn-primary" onClick={handleAddToCart}>
                Request Quote
              </button>
            ) : (
              <button className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
            )}
            <button className="btn btn-outline-secondary" onClick={() => navigate('/cart')}>
              Go to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}