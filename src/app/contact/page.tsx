import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from './ContactForm'
import { MapPin, Mail, Phone, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Hɛn Mpoano — Get in touch with our team in Takoradi, Ghana.',
}

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="hero-tagline">Get in Touch</span>
          <h1>Contact Us</h1>
          <p>We&apos;d love to hear from you — whether you have a question about our work, want to collaborate, or are interested in joining our team.</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="contact-info-card">
                <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: 'var(--spacing-lg)' }}>Our Office</h3>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><MapPin size={18} /></div>
                  <div>
                    <h4>Address</h4>
                    <p>38 J. Cross Cole Street<br />Windy Ridge Extension, Takoradi<br />Western Region, Ghana</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Mail size={18} /></div>
                  <div>
                    <h4>Postal Address</h4>
                    <p>P. O. Box AX 296, Takoradi</p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Phone size={18} /></div>
                  <div>
                    <h4>Phone</h4>
                    <p><a href="tel:+233244718165">+233 24 471 8165</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Mail size={18} /></div>
                  <div>
                    <h4>Email</h4>
                    <p><a href="mailto:info@henmpoano.org">info@henmpoano.org</a></p>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-icon"><Clock size={18} /></div>
                  <div>
                    <h4>Office Hours</h4>
                    <p>Monday – Friday<br />8:00 AM – 5:00 PM</p>
                  </div>
                </div>
              </div>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', marginTop: 'var(--spacing-lg)' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.1830971211098!2d-1.7653727999999995!3d4.909006299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfe779eda5a24f2f%3A0x9b0040892e65265e!2sH%C9%9Bn%20Mpoano!5e0!3m2!1sen!2sgh!4v1781222294233!5m2!1sen!2sgh"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hɛn Mpoano Office Location"
                />
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
