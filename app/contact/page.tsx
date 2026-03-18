import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';
import ContactSection from '@/components/home/ContactSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Easy Touch for ELV, AV, IT, Cybersecurity, Software Development, Business Setup, Visa Services, and EV Charger solutions in the UAE.',
};

const offices = [
  {
    icon: 'fas fa-industry',
    label: 'Main Office (HQ)',
    address: 'Abu Dhabi Industrial City – ICAD III, UAE',
    phone: '+971 2 6770551',
    hours: 'Mon–Fri: 8:00 AM – 6:00 PM',
    color: '#0047CC',
  },
  {
    icon: 'fas fa-building',
    label: 'Abu Dhabi Branch',
    address: 'Electra Street, Abu Dhabi, UAE',
    phone: '+971 2 650 7075',
    hours: 'Mon–Fri: 8:00 AM – 6:00 PM',
    color: '#0055EE',
  },
];

const faqs = [
  {
    q: 'How quickly can Easy Touch respond to a service request?',
    a: 'We aim to respond to all inquiries within 24 hours. For urgent support, call us directly at +971 2 6770551.',
  },
  {
    q: 'Do you provide services outside Abu Dhabi?',
    a: 'Yes. While our offices are in Abu Dhabi, we serve clients across the UAE including Dubai, Sharjah, Al Ain, and the Northern Emirates.',
  },
  {
    q: 'Can you handle both supply and installation?',
    a: 'Absolutely. Easy Touch provides a full turnkey service — from equipment supply and project management to professional installation and ongoing maintenance.',
  },
  {
    q: 'Do you offer maintenance contracts?',
    a: 'Yes, we offer Annual Maintenance Contracts (AMC) for all systems we install, ensuring your infrastructure remains reliable year-round.',
  },
  {
    q: 'How do I get a project quotation?',
    a: 'Fill in the contact form on this page or call us. We\'ll arrange a site visit or consultation to assess your needs and provide a detailed proposal.',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        tag="Contact Us"
        tagIcon="fas fa-headset"
        title="Let's Start a Conversation"
        subtitle="Have a project in mind? Need advice? We're here to help — reach out and our team will get back to you within 24 hours."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      {/* Office Cards */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <SectionTitle
            tag="Find Us"
            tagIcon="fas fa-map-marker-alt"
            title="Our Offices"
            subtitle="Two convenient locations to serve you across Abu Dhabi."
          />
          <div className="offices-grid">
            {offices.map(o => (
              <div key={o.label} className="office-card reveal">
                <div className="office-icon" style={{ color: o.color, background: `${o.color}15` }}>
                  <i className={o.icon} />
                </div>
                <h3>{o.label}</h3>
                <p><i className="fas fa-map-marker-alt" style={{ color: o.color }} /> {o.address}</p>
                <p><i className="fas fa-phone" style={{ color: o.color }} /> <a href={`tel:${o.phone.replace(/\s/g, '')}`}>{o.phone}</a></p>
                <p><i className="fas fa-clock" style={{ color: o.color }} /> {o.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactSection />

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <SectionTitle
            tag="FAQs"
            tagIcon="fas fa-question-circle"
            title="Frequently Asked Questions"
            subtitle="Quick answers to the questions we hear most often."
          />
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item reveal">
                <div className="faq-q"><i className="fas fa-question-circle" /> {faq.q}</div>
                <div className="faq-a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
