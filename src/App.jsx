import React, { useState, lazy, Suspense } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { CartProvider } from './context/cart.jsx'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
const AllProducts = lazy(() => import('./pages/AllProducts.jsx'))
const FilteredProducts = lazy(() => import('./pages/FilteredProducts.jsx'))
const CartPage = lazy(() => import('./pages/CartPage.jsx'))
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage.jsx'))
const EmperorTabsDropdown = lazy(() => import('./components/EmperorTabsDropdown.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
const Register = lazy(() => import('./pages/Register.jsx'))
const ListView = lazy(() => import('./pages/ListView.jsx'))
const ServiceListView = lazy(() => import('./pages/ServiceListView.jsx'))
const Inquiry = lazy(() => import('./pages/Inquiry.jsx'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword.jsx'))
const ResetPassword = lazy(() => import('./pages/ResetPassword.jsx'))
const CheckoutPage = lazy(() => import('./pages/CheckoutPage.jsx'))
const OrderConfirmationPage = lazy(() => import('./pages/OrderConfirmationPage.jsx'))
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { slugifyTitle } from './utils/slugify.js'


function LoadingFallback() {
  return (
    <div className="container py-4 text-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
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
        <Suspense fallback={<LoadingFallback />}>
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
        </Suspense>
      </main>
      {location.pathname !== '/' && (
        // <footer className="site-footer text-center py-3">© Roman Emporium — Curated curiosa</footer>
        <Footer />
      )}
    </CartProvider>
  )
}
