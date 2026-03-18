import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';
import CtaBanner from '@/components/home/CtaBanner';

export const metadata: Metadata = {
  title: 'Our Clients',
  description:
    'Easy Touch proudly serves government entities, industrial companies, educational institutions, healthcare providers, and hospitality clients across the UAE.',
};

const sectors = [
  { icon: 'fas fa-landmark',       label: 'Government',    count: '30+' },
  { icon: 'fas fa-industry',       label: 'Industrial',    count: '40+' },
  { icon: 'fas fa-graduation-cap', label: 'Education',     count: '25+' },
  { icon: 'fas fa-hospital',       label: 'Healthcare',    count: '20+' },
  { icon: 'fas fa-hotel',          label: 'Hospitality',   count: '15+' },
  { icon: 'fas fa-shopping-bag',   label: 'Retail',        count: '20+' },
];

const clients = [
  { name: 'Abu Dhabi Industrial City (ICAD III)', sector: 'Industrial',  icon: 'fas fa-industry' },
  { name: 'Khalifa Bin Zayed Al Awal School',     sector: 'Education',   icon: 'fas fa-school' },
  { name: 'EWEC',                                  sector: 'Government',  icon: 'fas fa-bolt' },
  { name: 'Emirates Steel',                        sector: 'Industrial',  icon: 'fas fa-hard-hat' },
  { name: 'Abu Dhabi Police',                      sector: 'Government',  icon: 'fas fa-shield-alt' },
  { name: 'NMC Healthcare',                        sector: 'Healthcare',  icon: 'fas fa-hospital' },
  { name: 'Rotana Hotels',                         sector: 'Hospitality', icon: 'fas fa-hotel' },
  { name: 'ADNOC Distribution',                   sector: 'Industrial',  icon: 'fas fa-gas-pump' },
  { name: 'Abu Dhabi University',                  sector: 'Education',   icon: 'fas fa-university' },
  { name: 'Al Ain Zoo',                            sector: 'Government',  icon: 'fas fa-paw' },
  { name: 'Etihad Airways',                        sector: 'Industrial',  icon: 'fas fa-plane' },
  { name: 'Bloom Education',                       sector: 'Education',   icon: 'fas fa-book' },
];

const testimonials = [
  {
    name: 'Mohammed Al Rashidi',
    role: 'IT Manager, Abu Dhabi Industrial City',
    text: 'Easy Touch delivered a full ELV overhaul for our facility ahead of schedule. Their team is professional, responsive, and the quality of work is outstanding.',
    rating: 5,
  },
  {
    name: 'Dr. Aisha Al Mansoori',
    role: 'Principal, Khalifa Bin Zayed Al Awal School',
    text: 'The AV systems Easy Touch installed transformed our classrooms. Students and teachers love the new interactive displays and sound systems.',
    rating: 5,
  },
  {
    name: 'Khaled Al Hamdan',
    role: 'Operations Director, EWEC',
    text: 'We trusted Easy Touch with our data center network upgrade — a critical project. They delivered with zero downtime and excellent documentation.',
    rating: 5,
  },
];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        tag="Our Clients"
        tagIcon="fas fa-handshake"
        title="Trusted by Leaders Across the UAE"
        subtitle="From government and industrial giants to schools and hotels — Easy Touch is the partner of choice for 150+ organisations."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Our Clients' }]}
      />

      {/* Sectors */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <SectionTitle
            tag="Industries Served"
            tagIcon="fas fa-th"
            title="Serving Every Sector"
            subtitle="Our expertise spans the full breadth of the UAE's economy."
          />
          <div className="sectors-grid">
            {sectors.map(s => (
              <div key={s.label} className="sector-card reveal">
                <div className="sector-icon"><i className={s.icon} /></div>
                <div className="sector-count">{s.count}</div>
                <div className="sector-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <SectionTitle
            tag="Who We Work With"
            tagIcon="fas fa-building"
            title="Our Valued Clients"
            subtitle="A selection of the organisations who trust Easy Touch."
          />
          <div className="clients-logo-grid">
            {clients.map(c => (
              <div key={c.name} className="client-logo-card reveal">
                <div className="client-logo-icon"><i className={c.icon} /></div>
                <div className="client-logo-name">{c.name}</div>
                <div className="client-logo-sector">{c.sector}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <SectionTitle
            tag="What They Say"
            tagIcon="fas fa-quote-left"
            title="Client Testimonials"
            subtitle="Real feedback from the clients who matter most."
          />
          <div className="testimonials-static-grid">
            {testimonials.map(t => (
              <div key={t.name} className="tsc reveal">
                <div className="tsc-stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <i key={i} className="fas fa-star" style={{ color: '#fbbf24' }} />
                  ))}
                </div>
                <p className="tsc-text">&ldquo;{t.text}&rdquo;</p>
                <div className="tsc-author">
                  <div className="tsc-avatar"><i className="fas fa-user-circle" /></div>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Join Our Growing Client Family"
        subtitle="150+ organisations across the UAE already trust Easy Touch. Let's talk about your requirements."
        primaryLabel="Contact Us Today"
        primaryHref="/contact"
        secondaryLabel="View Our Portfolio"
        secondaryHref="/portfolio"
      />
    </>
  );
}
