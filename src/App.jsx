import React, { useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { CartProvider } from './context/cart.jsx'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import AllProducts from './pages/AllProducts.jsx'
import FilteredProducts from './pages/FilteredProducts.jsx'
import CartPage from './pages/CartPage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import EmperorTabsDropdown from './components/EmperorTabsDropdown.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Footer from './components/Footer.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import ListView from './pages/ListView.jsx'
import ServiceListView from './pages/ServiceListView.jsx'
import Inquiry from './pages/Inquiry.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import ResetPassword from './pages/ResetPassword.jsx'
import CheckoutPage from './pages/CheckoutPage.jsx'
import OrderConfirmationPage from './pages/OrderConfirmationPage.jsx'
import { slugifyTitle } from './utils/slugify.js'

export default function App(){
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  function handleSelectItem(item){
    if(item && item.title){
      navigate(`/product/${slugifyTitle(item.title)}`)
    }else if(item && item.id){
      // fallback
      navigate(`/product/${item.id}`)
    }
  }

  return (
    <CartProvider>
      <Header search={search} setSearch={setSearch} />
      <EmperorTabsDropdown />
      <main className="py-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<div className="container py-4"><AllProducts search={search} /></div>} />

          <Route path="/catalog/:type/:value" element={<div className="container py-4"><FilteredProducts search={search} /></div>} />

          <Route path="/products" element={<div className="container py-4"><ListView /></div>} />
          <Route path="/services" element={<div className="container py-4"><ServiceListView /></div>} />
          <Route path="/inquiry" element={<div className="container py-4"><Inquiry /></div>} />
          <Route path="/cart" element={<div className="container py-4"><ProtectedRoute><CartPage /></ProtectedRoute></div>} />
          <Route path="/checkout" element={<div className="container py-4"><ProtectedRoute><CheckoutPage /></ProtectedRoute></div>} />
          <Route path="/order-confirmation/:id" element={<div className="container py-4"><ProtectedRoute><OrderConfirmationPage /></ProtectedRoute></div>} />
          <Route path="/login" element={<div className="container py-4"><Login /></div>} />
          <Route path="/forgot-password" element={<div className="container py-4"><ForgotPassword /></div>} />
          <Route path="/reset-password" element={<div className="container py-4"><ResetPassword /></div>} />
          <Route path="/register" element={<div className="container py-4"><Register /></div>} />
          <Route path="/product/:slug" element={<div className="container py-4"><ProductDetailPage /></div>} />
        </Routes>
      </main>
      {location.pathname !== '/' && (
        // <footer className="site-footer text-center py-3">© Roman Emporium — Curated curiosa</footer>
        <Footer />
      )}
    </CartProvider>
  )
}
