import React, { useState, useEffect, useRef } from 'react'
import products from '../data/products.js'
import { Link, useLocation } from 'react-router-dom'
import { slugifyTitle } from '../utils/slugify.js'


function FeaturedProducts(){
  const items = products.slice(0, products.length);
  const displayCount = 6;
  const itemHeight = 40;
  // duplicate list for seamless scrolling
  const loopItems = items.concat(items);
  const [offset, setOffset] = React.useState(0);
  const rafRef = React.useRef(null);
  const pausedRef = React.useRef(false);

  React.useEffect(()=>{
    let last = performance.now();
    const speed = 30; // pixels per second
    function step(now){
      if(!pausedRef.current){
        const dt = (now - last) / 1000;
        last = now;
        setOffset(o => {
          const halfHeight = itemHeight * loopItems.length / 2;
          let next = o + speed * dt;
          if(next >= halfHeight) next = next - halfHeight;
          return next;
        });
      } else {
        last = now;
      }
      rafRef.current = requestAnimationFrame(step);
    }
    rafRef.current = requestAnimationFrame(step);
    return ()=> cancelAnimationFrame(rafRef.current);
  }, [loopItems.length]);

  const pause = ()=> { pausedRef.current = true; }
  const resume = ()=> { pausedRef.current = false; }

  if(!items || items.length === 0) return null;

  return (
    <div onMouseEnter={pause} onMouseLeave={resume}>
      <h5>Featured Products</h5>
      <div style={{height: displayCount * itemHeight, overflow:'hidden'}}>
        <div style={{transform:`translateY(-${offset}px)`, transition:'transform 0s'}}>
          {loopItems.map((p, i) => (
            <div key={p.id + '-' + i} style={{height: itemHeight, display:'flex', alignItems:'center', paddingLeft:6}}>
              <Link to={`/product/${slugifyTitle(p.title)}`}>{p.title}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Inquiry(){
  const location = useLocation()
  const [form, setForm] = useState({name:'', email:'', phone:'', company:'', country:'', product: (location && location.state && location.state.productId) ? location.state.productId : '', message:''})
  const [status, setStatus] = useState(null)

  // If the user is already on /inquiry and clicks another "Inquire" button,
  // react-router will update location.state but this component won't remount.
  // Keep the "Product of interest" field in sync with the latest navigation state.
  useEffect(() => {
    const pid = (location && location.state && location.state.productId) ? location.state.productId : ''
    if (!pid) return
    setForm(prev => ({ ...prev, product: pid }))
  }, [location])
  const handleChange = (e)=> setForm({...form, [e.target.name]: e.target.value})
  const handleSubmit = async (e) => {
    e.preventDefault()
    const selected = products.find(p => p.id === form.product)
    const payload = {
      ...form,
      productId: form.product,
      productTitle: selected ? selected.title : ''
    }
    try {
      const res = await fetch('http://localhost:4000/api/inquiry', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(payload)
      })
      if(res.ok){ setStatus('Sent'); setForm({name:'', email:'', phone:'', company:'', country:'', product:'', message:''}) }
      else {
        const txt = await res.text()
        setStatus('Error: '+txt)
      }
    } catch(err){
      setStatus('Network error: '+err.message)
    }
  }

  return (
    <div>
      <h2 className="mb-3">Inquiry</h2>
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="form-label">Name</label>
              <input name="name" value={form.name} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Company</label>
              <input name="company" value={form.company} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Email</label>
              <input name="email" value={form.email} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Country</label>
              <input name="country" value={form.country} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Product of interest</label>
              <select name="product" value={form.product} onChange={handleChange} className="form-select">
                <option value="">-- choose --</option>
                {products.filter(p => p.type === 'service').map(p=> <option key={p.id} value={p.id}>{p.title}</option>)}
              </select>
            </div>
            <div className="mb-2">
              <label className="form-label">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} className="form-control" rows={5} />
            </div>
            <div className="mb-2">
              <button className="btn btn-primary" type="submit">Send Inquiry</button>
            </div>
            {status && <div className="alert alert-info">{status}</div>}
          </form>
        </div>

        <div className="col-md-4">
          <FeaturedProducts />
          <div className="mt-4">
            <h5>Contact Us</h5>
            <div><strong>Tel:</strong></div>
            <div>1-111-111-1111 (USA)</div>
            <div>44-444-444-4444 (Europe)</div>
            <div className="mt-2"><strong>Email:</strong></div>
            <div>info@roman-emporium.com</div>
            <div className="mt-2"><strong>ADDRESS:</strong></div>
            <div>574 Logan Ln, Leitchfield, KY 42754</div>
          </div>
        </div>
      </div>
    </div>
  )
}
