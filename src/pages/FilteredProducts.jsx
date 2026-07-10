import React, { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import products from '../data/products.js'
import ProductGrid from '../products/ProductGrid.jsx'

const PERIOD_LABELS = {
  lateRepublic: 'Late Roman Republic',
  earlyEmpire: 'Early Empire',
  highEmpire: 'High Empire',
  lateEmpire: 'Late Empire',
  lateAntiquity: 'Late Antiquity',
  earlyByzantine: 'Early Byzantine'
}


function titleFor(type, value){
  if(type === 'period'){
    return PERIOD_LABELS[value] || value
  }
  if(type === 'emperor'){
    // convert camelCase to words
    const words = String(value || '').replace(/([A-Z])/g, ' $1').trim()
    return words.charAt(0).toUpperCase() + words.slice(1)
  }
  return value
}

export default function FilteredProducts({ search }){
  const { type, value } = useParams()

  const filtered = useMemo(() => {
    const q = (search||'').trim().toLowerCase()
    return products.filter(p => {
      if(!p || typeof p !== 'object') return false
      if(!String(p.id||'').startsWith('prod-')) return false
      if(type === 'period'){
        if(p.timePeriod !== value) return false
      }else if(type === 'emperor'){
        if((p.emperor||'') !== value) return false
      }else{
        return false
      }
      if(!q) return true
      return (p.title||'').toLowerCase().includes(q)
        || (p.description||'').toLowerCase().includes(q)
        || (p.emperor||'').toLowerCase().includes(q)
    })
  }, [type, value, search])

  const pageTitle = titleFor(type, value)

  return (
    <div>
      <h2 className="mb-3">{pageTitle}</h2>
      <ProductGrid products={filtered} />
    </div>
  )
}
