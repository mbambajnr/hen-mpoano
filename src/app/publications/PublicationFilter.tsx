'use client'

import { useState } from 'react'

interface Pub {
  title: string
  category: string
  date: string
  description: string
  href: string
}

const categories = ['All Documents', 'Climate Change Publications', 'Fisheries Resources Publications', 'Gender Publications', 'Sustainable Livelihood Publication']

export default function PublicationFilter({ pubs }: { pubs: Pub[] }) {
  const [active, setActive] = useState('All Documents')
  const filtered = active === 'All Documents' ? pubs : pubs.filter(p => p.category === active)

  return (
    <>
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn${cat === active ? ' active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="card-grid">
        {filtered.map((pub, i) => (
          <a key={i} href={pub.href} target="_blank" rel="noopener noreferrer" className="card">
            <img src="/images/ghana-fishing-nets.jpg" alt={pub.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
            <div className="card-body">
              <span className="card-meta">{pub.category}{pub.date ? ` · ${pub.date}` : ''}</span>
              <h3>{pub.title}</h3>
              <p>{pub.description}</p>
              <span className="card-link">View Document →</span>
            </div>
          </a>
        ))}
      </div>
    </>
  )
}
