import Link from 'next/link'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-icon">HM</div>
              <div>
                <div className="logo-text">Hɛn Mpoano</div>
                <div className="logo-sub">Our Coast, Our Future</div>
              </div>
            </div>
            <p>A Ghanaian NGO providing technical, policy and extension support for inclusive and integrated management of Ghana&apos;s coastal and marine ecosystems.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/team">Our Team</Link></li>
              <li><Link href="/volunteer">Volunteer</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/publications">Publications</Link></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Programs</h4>
            <ul>
              <li><Link href="/expertise">Sustainable Livelihoods</Link></li>
              <li><Link href="/expertise">Coastal Landscapes</Link></li>
              <li><Link href="/expertise">Gender &amp; Inclusion</Link></li>
              <li><Link href="/expertise">Fisheries Governance</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li><span className="footer-contact-icon"><MapPin size={16} /></span><span>38 J. Cross Cole Street, Windy Ridge Extension, Takoradi</span></li>
              <li><span className="footer-contact-icon"><Mail size={16} /></span><span>P. O. Box AX 296, Takoradi</span></li>
              <li><span className="footer-contact-icon"><Phone size={16} /></span><span>+233 24 471 8165</span></li>
              <li><span className="footer-contact-icon"><Mail size={16} /></span><span>info@henmpoano.org</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Hɛn Mpoano. All rights reserved.</p>
          <div className="footer-social">
            <a href="https://www.facebook.com/HenMpoano/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">𝕗</a>
            <a href="https://twitter.com/henmpoano" target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏</a>
            <a href="https://instagram.com/henmpoano" target="_blank" rel="noopener noreferrer" aria-label="Instagram">𝕚𝕟</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
