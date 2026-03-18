import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';
import CtaBanner from '@/components/home/CtaBanner';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Easy Touch offers ELV Systems, Audio Visual, IT Networking, Cybersecurity, Software Development, Business Setup, Visa Services, and EV Charger installation across the UAE.',
};

const services = [
  {
    icon: 'fas fa-shield-alt',
    title: 'ELV Systems',
    subtitle: 'Extra Low Voltage Solutions',
    color: '#0047CC',
    features: [
      'CCTV & IP Surveillance',
      'Access Control Systems',
      'Fire Alarm & Detection',
      'Public Address (PA) Systems',
      'Structured Cabling',
      'Building Management Systems (BMS)',
      'Intercom & Video Door Phones',
      'Perimeter Security',
    ],
    desc: 'We design, supply, install, and maintain comprehensive ELV systems for commercial, industrial, and government facilities across the UAE.',
  },
  {
    icon: 'fas fa-tv',
    title: 'Audio Visual (AV)',
    subtitle: 'Professional AV Integration',
    color: '#0055EE',
    features: [
      'Conference Room AV Systems',
      'Digital Signage Solutions',
      'Video Walls & LED Displays',
      'Sound System Design',
      'Projectors & Screens',
      'Video Conferencing (VC)',
      'Control Room Integration',
      'Huddle Room Solutions',
    ],
    desc: 'From boardrooms to auditoriums, we deliver world-class AV experiences that enhance communication and collaboration.',
  },
  {
    icon: 'fas fa-network-wired',
    title: 'IT & Networking',
    subtitle: 'Enterprise Network Infrastructure',
    color: '#0066FF',
    features: [
      'LAN/WAN Design & Deployment',
      'Wi-Fi & Wireless Networks',
      'Server Room Setup',
      'Cloud Migration & Integration',
      'Network Monitoring',
      'Data Center Solutions',
      'VoIP Telephony',
      'SD-WAN Implementation',
    ],
    desc: 'Robust, scalable network infrastructure designed to keep your business connected, secure, and performing at its best.',
  },
  {
    icon: 'fas fa-lock',
    title: 'Cybersecurity',
    subtitle: 'Protect. Detect. Respond.',
    color: '#003399',
    features: [
      'Firewall & UTM Solutions',
      'Penetration Testing',
      'SOC as a Service',
      'Endpoint Protection',
      'Security Audits & Compliance',
      'Email Security (Anti-Spam/Phishing)',
      'VPN & Remote Access',
      'Incident Response',
    ],
    desc: 'Comprehensive cybersecurity services to protect your data, infrastructure, and reputation from evolving threats.',
  },
  {
    icon: 'fas fa-code',
    title: 'Software Development',
    subtitle: 'Custom Digital Solutions',
    color: '#0047CC',
    features: [
      'Web Application Development',
      'Mobile Apps (iOS & Android)',
      'ERP & CRM Systems',
      'eCommerce Platforms',
      'API Development & Integration',
      'UI/UX Design',
      'Database Design',
      'Ongoing Maintenance & Support',
    ],
    desc: 'Tailored software solutions that automate processes, enhance customer experiences, and drive digital transformation.',
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Business Setup',
    subtitle: 'UAE Company Formation',
    color: '#0055EE',
    features: [
      'Mainland Company Formation',
      'Free Zone Registration',
      'Trade License Renewal',
      'PRO Services',
      'Corporate Bank Account Opening',
      'Office Space Solutions',
      'Legal Documentation',
      'Business Consultancy',
    ],
    desc: 'End-to-end business setup services to help you establish and grow your company in the UAE quickly and compliantly.',
  },
  {
    icon: 'fas fa-passport',
    title: 'Visa Services',
    subtitle: 'UAE Immigration & Residency',
    color: '#0066FF',
    features: [
      'Employment Visa Processing',
      'Investor & Partner Visas',
      'Dependent/Family Visas',
      'Visa Renewals & Cancellations',
      'Emirates ID Registration',
      'Medical Fitness Tests',
      'Document Attestation',
      'Golden Visa Assistance',
    ],
    desc: 'Streamlined UAE visa and immigration services for individuals, families, and businesses — handled by experienced PRO professionals.',
  },
  {
    icon: 'fas fa-charging-station',
    title: 'EV Chargers',
    subtitle: 'Electric Vehicle Infrastructure',
    color: '#003399',
    features: [
      'Residential EV Charger Installation',
      'Commercial Charging Stations',
      'Fleet Charging Solutions',
      'Smart Charging Management',
      'AC & DC Fast Chargers',
      'DEWA-Approved Installation',
      'Network Connectivity',
      'Maintenance & Support',
    ],
    desc: 'Future-proof your property with certified EV charging infrastructure — from single home chargers to full commercial EV parks.',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        tag="Our Services"
        tagIcon="fas fa-cogs"
        title="Complete Technology & Business Solutions"
        subtitle="Eight specialised service lines — one trusted partner for all your needs in the UAE."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <SectionTitle
            tag="What We Offer"
            tagIcon="fas fa-th"
            title="Services Tailored to Your Business"
            subtitle="From infrastructure to immigration — we cover every aspect of your business technology and setup needs."
          />
          <div className="services-detailed-grid">
            {services.map((svc, i) => (
              <div key={svc.title} className="service-detailed-card reveal" style={{ '--card-color': svc.color } as React.CSSProperties}>
                <div className="sdc-header">
                  <div className="sdc-icon" style={{ background: `${svc.color}18`, color: svc.color }}>
                    <i className={svc.icon} />
                  </div>
                  <div>
                    <h3>{svc.title}</h3>
                    <p className="sdc-subtitle">{svc.subtitle}</p>
                  </div>
                </div>
                <p className="sdc-desc">{svc.desc}</p>
                <ul className="sdc-features">
                  {svc.features.map(f => (
                    <li key={f}><i className="fas fa-check" /> {f}</li>
                  ))}
                </ul>
                <a href="/contact" className="sdc-cta">
                  Get a Quote <i className="fas fa-arrow-right" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not Sure Which Service You Need?"
        subtitle="Our consultants will assess your requirements and recommend the right solution — at no obligation."
        primaryLabel="Book a Free Consultation"
        primaryHref="/contact"
        secondaryLabel="View Portfolio"
        secondaryHref="/portfolio"
      />
    </>
  );
}
