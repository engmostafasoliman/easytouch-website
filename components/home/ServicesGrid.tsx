import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';

const services = [
  {
    icon: 'fas fa-shield-alt',
    title: 'ELV Systems',
    desc: 'Explosion-proof & Extra Low Voltage — CCTV, access control, PA systems, and gate barriers.',
    tags: ['CCTV', 'Access Control', 'PA System', 'Gate Barriers'],
    href: '/services#elv',
  },
  {
    icon: 'fas fa-tv',
    title: 'Audio Visual (AV)',
    desc: 'State-of-the-art AV for boardrooms, auditoriums, and interactive multipurpose halls.',
    tags: ['Video Walls', 'Boardrooms', 'Digital Signage'],
    href: '/services#av',
  },
  {
    icon: 'fas fa-network-wired',
    title: 'IT & Networking',
    desc: 'Robust IT infrastructure — structured cabling, enterprise WiFi, and unified communications.',
    tags: ['Cabling', 'WiFi', 'VoIP', 'SD-WAN'],
    href: '/services#it',
  },
  {
    icon: 'fas fa-lock',
    title: 'Cybersecurity',
    desc: 'Enterprise-grade security — firewall design, penetration testing, SIEM, and SOC services.',
    tags: ['Firewall', 'Pen Test', 'SIEM'],
    href: '/services#cyber',
  },
  {
    icon: 'fas fa-code',
    title: 'Software Development',
    desc: 'Custom software, mobile apps, web platforms, and UI/UX design tailored to your needs.',
    tags: ['iOS/Android', 'Web Apps', 'UI/UX'],
    href: '/services#software',
  },
  {
    icon: 'fas fa-briefcase',
    title: 'Business Setup',
    desc: 'Full-service UAE company formation — mainland, freezone, PRO services, and bank setup.',
    tags: ['Mainland', 'Freezone', 'PRO'],
    href: '/services#business',
  },
  {
    icon: 'fas fa-passport',
    title: 'Visa Services',
    desc: 'Employment, investor, and Golden Visa processing through Amer & Tas-Heel centers.',
    tags: ['Golden Visa', 'Amer', 'Tas-Heel'],
    href: '/services#business',
  },
  {
    icon: 'fas fa-charging-station',
    title: 'EV Charger Solutions',
    desc: 'Smart EV charging infrastructure for commercial, residential, and industrial facilities.',
    tags: ['AC Chargers', 'DC Fast Charge', 'Management'],
    href: '/services#ev',
  },
];

export default function ServicesGrid() {
  return (
    <section className="services-section section">
      <div className="container">
        <div className="reveal">
          <SectionTitle
            tag="Our Services"
            tagIcon="fas fa-cogs"
            title="Comprehensive Technology Solutions"
            subtitle="From ELV systems and AV installations to IT infrastructure and business services — we cover every technology need your business has."
          />
        </div>

        <div className="services-grid">
          {services.map((svc, i) => (
            <Link
              key={svc.title}
              href={svc.href}
              className={`service-card reveal reveal-d${(i % 4) + 1}`}
              style={{ display: 'block' }}
            >
              <div className="svc-icon"><i className={svc.icon} /></div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
              <div className="svc-tags">
                {svc.tags.map(t => <span key={t} className="svc-tag">{t}</span>)}
              </div>
              <div className="svc-arrow"><i className="fas fa-arrow-right" /></div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/services" className="btn btn-primary btn-lg">
            <i className="fas fa-arrow-right" /> View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
