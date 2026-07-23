import React, { useContext } from 'react';
import { CartContext } from '../context/cart.jsx';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const { items, removeFromCart, updateQty, total, clear } = useContext(CartContext);

  return (
    <div>
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <div className="empty">
          <p>Your cart is empty.</p>
          <Link to="/" className="btn btn-primary">Continue shopping</Link>
        </div>
      ) : (
        <>
          <ul className="list-unstyled">
            {items.map(item => (
              <li key={item.cartId} className="d-flex align-items-center border rounded p-2 mb-2">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{width:80, height:80, objectFit:'cover', marginRight:12}}
                  onError={(e) => {
                    if(!e.currentTarget.dataset.fallback){
                      e.currentTarget.dataset.fallback = '1';
                      e.currentTarget.src = '/product-images/placeholder.svg';
                    }
                  }}
                />
                <div className="flex-grow-1">
                  <div><strong>{item.title}</strong></div>
                  <div className="text-muted">
                    {item.variant ? `${item.variant.size} — SKU: ${item.variant.sku}` : 'Default'}
                  </div>
                  <div className="text-muted">
                    ${(item.variant?.price ?? item.price ?? 0).toFixed(2)} each
                  </div>
                </div>
                <div className="d-flex align-items-center" style={{gap:8}}>
                  <input
                    type="number"
                    value={item.qty}
                    min="1"
                    onChange={(e) => updateQty(item.cartId, parseInt(e.target.value || 1))}
                    className="form-control form-control-sm"
                    style={{width:80}}
                  />
                  <button className="btn btn-link text-danger" onClick={() => removeFromCart(item.cartId)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <div>Total: <strong>${total.toFixed(2)}</strong></div>
            <div>
              <Link className="btn btn-primary me-2" to="/checkout">Checkout</Link>
              <button className="btn btn-outline-secondary" onClick={clear}>Clear</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}