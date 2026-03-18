'use client';

import { useState } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

const contactInfo = [
  { icon: 'fas fa-map-marker-alt', label: 'Main Office',     value: 'Abu Dhabi Industrial City – ICAD III, UAE' },
  { icon: 'fas fa-building',       label: 'Abu Dhabi Branch', value: 'Electra Street, Abu Dhabi, UAE' },
  { icon: 'fas fa-phone',          label: 'Phone',            value: '+971 2 6770551',    href: 'tel:+97126770551' },
  { icon: 'fas fa-phone-alt',      label: 'Phone 2',          value: '+971 2 650 7075',   href: 'tel:+97126507075' },
  { icon: 'fas fa-envelope',       label: 'Email',            value: 'info@easytouchuae.ae', href: 'mailto:info@easytouchuae.ae' },
  { icon: 'fas fa-clock',          label: 'Working Hours',    value: 'Mon–Fri: 8:00 AM – 6:00 PM' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim())    e.name    = 'Required';
    if (!form.email.trim())   e.email   = 'Required';
    if (!form.message.trim()) e.message = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      setSent(true);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section" style={{ background: 'var(--light)' }}>
      <div className="container">
        <div className="contact-grid">
          {/* Info */}
          <div>
            <SectionTitle tag="Get In Touch" tagIcon="fas fa-headset" title="Drop Us a Line" align="left" />
            <p style={{ marginBottom: '24px', marginTop: '-24px' }}>
              Have a project in mind? We&apos;d love to hear about it. Fill out the form or reach us directly.
            </p>
            <div className="contact-info-items">
              {contactInfo.map(item => (
                <div key={item.label} className="contact-info-item">
                  <div className="cii-icon"><i className={item.icon} /></div>
                  <div className="cii-text">
                    <h5>{item.label}</h5>
                    {item.href ? (
                      <p><a href={item.href}>{item.value}</a></p>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <p className="sub">We&apos;ll get back to you within 24 hours.</p>

            {sent && (
              <div className="form-success" style={{ display: 'block' }}>
                <i className="fas fa-check-circle" /> Thank you! Your message has been sent. We&apos;ll be in touch within 24 hours.
              </div>
            )}

            {!sent && (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name" type="text" placeholder="Ahmed Al Kaabi"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      style={errors.name ? { borderColor: '#ef4444' } : {}}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email" type="email" placeholder="ahmed@company.ae"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      style={errors.email ? { borderColor: '#ef4444' } : {}}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp</label>
                    <input
                      id="phone" type="tel" placeholder="+971 50 000 0000"
                      value={form.phone}
                      onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service Interested In</label>
                    <select id="service" value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}>
                      <option value="">Select a service...</option>
                      <option>ELV Systems</option>
                      <option>Audio Visual (AV)</option>
                      <option>IT & Networking</option>
                      <option>Cybersecurity</option>
                      <option>Software Development</option>
                      <option>Business Setup</option>
                      <option>Visa Services</option>
                      <option>EV Chargers</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message" placeholder="Tell us about your project..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={errors.message ? { borderColor: '#ef4444' } : {}}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '14px' }} disabled={sending}>
                  {sending ? <><i className="fas fa-spinner fa-spin" /> Sending...</> : <><i className="fas fa-paper-plane" /> Send Message</>}
                </button>
                <p style={{ fontSize: '0.75rem', color: 'var(--gray-light)', textAlign: 'center', marginTop: '12px' }}>
                  <i className="fas fa-lock" /> Your information is secure and will never be shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
