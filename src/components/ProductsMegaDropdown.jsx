import React from 'react'
import { Link } from 'react-router-dom'

const PERIODS = [
  {
    key: 'lateRepublic',
    label: 'Late Roman Republic',
    emperors: [
      { key: 'caesar', label: 'Julius Caesar' },
      { key: 'pompey', label: 'Pompey' },
      { key: 'cicero', label: 'Cicero' },
      { key: 'crassus', label: 'Crassus' }
    ]
  },
  {
    key: 'earlyEmpire',
    label: 'Early Empire',
    emperors: [
      { key: 'augustus', label: 'Augustus' },
      { key: 'tiberius', label: 'Tiberius' },
      { key: 'nero', label: 'Nero' }
    ]
  },
  {
    key: 'highEmpire',
    label: 'High Empire',
    emperors: [
      { key: 'trajan', label: 'Trajan' },
      { key: 'hadrian', label: 'Hadrian' },
      { key: 'marcus', label: 'Marcus' }
    ]
  },
  {
    key: 'lateEmpire',
    label: 'Late Empire',
    emperors: [
      { key: 'septimiusSeverus', label: 'Septimius Severus' },
      { key: 'aurelian', label: 'Aurelian' },
      { key: 'diocletian', label: 'Diocletian' },
      { key: 'constantine', label: 'Constantine' }
    ]
  },
  {
    key: 'lateAntiquity',
    label: 'Late Antiquity',
    emperors: [
      { key: 'theodosius', label: 'Theodosius I' },
      { key: 'honorius', label: 'Honorius' },
      { key: 'stilicho', label: 'Stilicho' },
      { key: 'aetius', label: 'Aetius' }
    ]
  },
  {
    key: 'earlyByzantine',
    label: 'Early Byzantine',
    emperors: [
      { key: 'justinian', label: 'Justinian I' },
      { key: 'belisarius', label: 'Belisarius' },
      { key: 'heraclius', label: 'Heraclius' },
      { key: 'irene', label: 'Irene' }
    ]
  }
]

export default function ProductsMegaDropdown({ open, onEnter, onLeave, onNavigate }){
  if(!open) return null
  return (
    <div className="products-mega" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div className="products-mega-inner">
        {PERIODS.map(period => (
          <div key={period.key} className="products-mega-col">
            <Link className="products-mega-heading" to={`/catalog/period/${period.key}`} onClick={onNavigate}>
              {period.label}
            </Link>
            <div className="products-mega-rule" />
            <ul className="products-mega-list">
              {period.emperors.map(emp => (
                <li key={emp.key}>
                  <Link className="products-mega-link" to={`/catalog/emperor/${emp.key}`} onClick={onNavigate}>
                    {emp.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="products-mega-col products-mega-promo">
          <div className="products-mega-promo-card">
            <div className="products-mega-promo-title">Special Offers and Discounts</div>
            <div className="products-mega-promo-sub">
              <Link to="/all" onClick={onNavigate}>View All Products ›</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
