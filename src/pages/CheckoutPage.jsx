import React, { useContext, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/cart.jsx'
import api from '../api.js'

function money(n){
  const v = Number(n || 0)
  return v.toFixed(2)
}

export default function CheckoutPage(){
  const { items, total, clear } = useContext(CartContext)
  const navigate = useNavigate()

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const [shipping, setShipping] = useState({
    fullName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: 'US',
  })

  const [delivery, setDelivery] = useState('standard')

  const shippingCost = useMemo(() => {
    // simple placeholder rates
    if (delivery === 'express') return 14.99
    return 6.99
  }, [delivery])

  const tax = useMemo(() => {
    // placeholder tax calc (you'll want Stripe Tax or a tax provider later)
    const rate = 0.0
    return total * rate
  }, [total])

  const grandTotal = useMemo(() => total + shippingCost + tax, [total, shippingCost, tax])

  async function placeOrder(e){
    e.preventDefault()
    setError('')

    if (!items.length) {
      setError('Your cart is empty.')
      return
    }
    if (!shipping.fullName || !shipping.email || !shipping.address1 || !shipping.city || !shipping.state || !shipping.zip) {
      setError('Please complete the required shipping fields.')
      return
    }

    setSubmitting(true)
    try {
      const payload = {
        items: items.map(i => ({ id: i.id, title: i.title, price: i.price, qty: i.qty })),
        shipping,
        delivery,
        currency: 'USD',
      }
      const data = await api.post('/api/orders', payload)
      clear()
      navigate(`/order-confirmation/${data.orderId}`)
    } catch (err) {
      setError(err?.message || 'Failed to place order.')
    } finally {
      setSubmitting(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="checkout-hero">
        <div className="checkout-hero-inner">
          <h2 className="mb-2">Checkout</h2>
          <p className="text-muted mb-3">Your cart is empty.</p>
          <Link to="/" className="btn btn-primary">Continue shopping</Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="checkout-hero mb-4">
        <div className="checkout-hero-inner">
          <div className="d-flex align-items-center justify-content-between flex-wrap" style={{gap: 12}}>
            <div>
              <h2 className="mb-1">Checkout</h2>
              <div className="text-muted">Secure checkout — payment coming soon (Stripe)</div>
            </div>
            <Link to="/cart" className="btn btn-outline-secondary">Back to cart</Link>
          </div>
        </div>
      </div>

      <form onSubmit={placeOrder}>
        <div className="row g-4">
          <div className="col-12 col-lg-7">
            <div className="card p-3 p-md-4 mb-4">
              <h5 className="mb-3">Shipping information</h5>

              {error ? (
                <div className="alert alert-danger" role="alert">{error}</div>
              ) : null}

              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label">Full name *</label>
                  <input className="form-control" value={shipping.fullName} onChange={(e)=>setShipping(s=>({...s, fullName:e.target.value}))} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Email *</label>
                  <input type="email" className="form-control" value={shipping.email} onChange={(e)=>setShipping(s=>({...s, email:e.target.value}))} />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Phone</label>
                  <input className="form-control" value={shipping.phone} onChange={(e)=>setShipping(s=>({...s, phone:e.target.value}))} />
                </div>

                <div className="col-12">
                  <label className="form-label">Address line 1 *</label>
                  <input className="form-control" value={shipping.address1} onChange={(e)=>setShipping(s=>({...s, address1:e.target.value}))} />
                </div>
                <div className="col-12">
                  <label className="form-label">Address line 2</label>
                  <input className="form-control" value={shipping.address2} onChange={(e)=>setShipping(s=>({...s, address2:e.target.value}))} />
                </div>

                <div className="col-12 col-md-5">
                  <label className="form-label">City *</label>
                  <input className="form-control" value={shipping.city} onChange={(e)=>setShipping(s=>({...s, city:e.target.value}))} />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">State *</label>
                  <input className="form-control" value={shipping.state} onChange={(e)=>setShipping(s=>({...s, state:e.target.value}))} />
                </div>
                <div className="col-6 col-md-4">
                  <label className="form-label">ZIP *</label>
                  <input className="form-control" value={shipping.zip} onChange={(e)=>setShipping(s=>({...s, zip:e.target.value}))} />
                </div>
              </div>
            </div>

            <div className="card p-3 p-md-4">
              <h5 className="mb-3">Delivery</h5>
              <div className="checkout-choice">
                <label className="checkout-choice-row">
                  <input type="radio" name="delivery" checked={delivery === 'standard'} onChange={()=>setDelivery('standard')} />
                  <div className="flex-grow-1">
                    <div className="fw-semibold">Standard</div>
                    <div className="text-muted small">3–7 business days</div>
                  </div>
                  <div className="fw-semibold">$6.99</div>
                </label>
                <label className="checkout-choice-row">
                  <input type="radio" name="delivery" checked={delivery === 'express'} onChange={()=>setDelivery('express')} />
                  <div className="flex-grow-1">
                    <div className="fw-semibold">Express</div>
                    <div className="text-muted small">1–2 business days</div>
                  </div>
                  <div className="fw-semibold">$14.99</div>
                </label>
              </div>

              <div className="mt-3 p-3 rounded checkout-note">
                <div className="fw-semibold mb-1">Payment (Stripe coming soon)</div>
                <div className="text-muted small">
                  This checkout is ready for Stripe integration (cards, Apple Pay, Google Pay, and more). For now, placing an order will create an order record with status <span className="badge text-bg-secondary">pending_payment</span>.
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className="card p-3 p-md-4 checkout-sticky">
              <h5 className="mb-3">Order summary</h5>

              <ul className="list-unstyled mb-3">
                {items.map(it => (
                  <li key={it.id} className="d-flex align-items-center border rounded p-2 mb-2" style={{background:'#fff'}}>
                    <img
                      src={it.image}
                      alt={it.title}
                      style={{width:64, height:64, objectFit:'cover', borderRadius:8, marginRight:12}}
                      onError={(e) => {
                        if(!e.currentTarget.dataset.fallback){
                          e.currentTarget.dataset.fallback = '1'
                          e.currentTarget.src = '/product-images/placeholder.svg'
                        }
                      }}
                    />
                    <div className="flex-grow-1">
                      <div className="fw-semibold">{it.title}</div>
                      <div className="text-muted small">Qty {it.qty}</div>
                    </div>
                    <div className="fw-semibold">${money(it.price * it.qty)}</div>
                  </li>
                ))}
              </ul>

              <div className="border-top pt-3">
                <div className="d-flex justify-content-between mb-2">
                  <div className="text-muted">Subtotal</div>
                  <div>${money(total)}</div>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <div className="text-muted">Shipping</div>
                  <div>${money(shippingCost)}</div>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <div className="text-muted">Tax</div>
                  <div>${money(tax)}</div>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="fs-5 fw-bold">Total</div>
                  <div className="fs-5 fw-bold">${money(grandTotal)}</div>
                </div>
              </div>

              <button className="btn btn-primary w-100 mt-3" disabled={submitting}>
                {submitting ? 'Placing order…' : 'Place order'}
              </button>
              <div className="text-muted small mt-2">
                By placing your order, you agree to our standard terms.
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
