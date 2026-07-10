import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function OrderConfirmationPage(){
  const { id } = useParams()

  return (
    <div className="card p-4 p-md-5">
      <div className="d-flex align-items-start" style={{gap: 16}}>
        <div className="checkout-success-badge">✓</div>
        <div className="flex-grow-1">
          <h2 className="mb-1">Order received</h2>
          <div className="text-muted mb-3">Order <span className="fw-semibold">#{id}</span> is created and is awaiting payment.</div>

          <div className="p-3 rounded checkout-note mb-3">
            <div className="fw-semibold mb-1">Next step: connect Stripe</div>
            <div className="text-muted small">
              Once Stripe is wired in, this page can show a payment button or redirect to Stripe Checkout.
            </div>
          </div>

          <div className="d-flex flex-wrap" style={{gap: 10}}>
            <Link to="/" className="btn btn-primary">Continue shopping</Link>
            <Link to="/cart" className="btn btn-outline-secondary">Back to cart</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
