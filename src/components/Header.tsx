'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [navOpen, setNavOpen] = useState(false)
  const [mediaOpen, setMediaOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  const mediaRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/' ? 'active' : ''
    return pathname.startsWith(path) ? 'active' : ''
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (mediaRef.current && !mediaRef.current.contains(e.target as Node)) {
        setMediaOpen(false)
      }
      if (resourcesRef.current && !resourcesRef.current.contains(e.target as Node)) {
        setResourcesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          <div>
            <div className="logo-text">Hɛn Mpoano</div>
            <div className="logo-sub">Our Coast, Our Future</div>
          </div>
        </Link>

        <button className="nav-toggle" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle navigation">
          <span></span><span></span><span></span>
        </button>

        <nav className={`main-nav${navOpen ? ' open' : ''}`} id="mainNav">
          <Link href="/" className={isActive('/')} onClick={() => setNavOpen(false)}>Home</Link>
          <Link href="/about" className={isActive('/about')} onClick={() => setNavOpen(false)}>About</Link>

          {/* Media dropdown */}
          <div className="nav-dropdown" ref={mediaRef}
            onMouseEnter={() => setMediaOpen(true)}
            onMouseLeave={() => setMediaOpen(false)}>
            <a onClick={(e) => { e.preventDefault(); setMediaOpen(!mediaOpen) }}
               className={pathname.startsWith('/story-maps') || pathname.startsWith('/videos') ? 'active' : ''}>
              Media ▾
            </a>
            {mediaOpen && (
              <div className="nav-dropdown-menu" style={{ display: 'block' }}>
                <Link href="/story-maps" onClick={() => setNavOpen(false)}>Story Maps</Link>
                <Link href="/videos" onClick={() => setNavOpen(false)}>Videos</Link>
              </div>
            )}
          </div>

          <Link href="/expertise" className={isActive('/expertise')} onClick={() => setNavOpen(false)}>Expertise</Link>
          <Link href="/projects" className={isActive('/projects')} onClick={() => setNavOpen(false)}>Projects</Link>

          {/* Resources dropdown */}
          <div className="nav-dropdown" ref={resourcesRef}
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}>
            <a onClick={(e) => { e.preventDefault(); setResourcesOpen(!resourcesOpen) }}
               className={isActive('/resources') || isActive('/publications') ? 'active' : ''}>
              Resources ▾
            </a>
            {resourcesOpen && (
              <div className="nav-dropdown-menu" style={{ display: 'block' }}>
                <Link href="/resources" onClick={() => setNavOpen(false)}>Guides &amp; Explainers</Link>
                <Link href="/publications" onClick={() => setNavOpen(false)}>Publications</Link>
                <Link href="/faq" onClick={() => setNavOpen(false)}>FAQ</Link>
              </div>
            )}
          </div>

          <Link href="/news" className={isActive('/news')} onClick={() => setNavOpen(false)}>News</Link>
          <Link href="/team" className={isActive('/team')} onClick={() => setNavOpen(false)}>Team</Link>
          <Link href="/contact" className={isActive('/contact')} onClick={() => setNavOpen(false)}>Contact</Link>
          <Link href="/volunteer" className={`nav-cta${isActive('/volunteer') ? ' active' : ''}`} onClick={() => setNavOpen(false)}>Volunteer</Link>
        </nav>
      </div>
    </header>
  )
}