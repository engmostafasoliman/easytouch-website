import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';

const projects = [
  {
    icon: 'fas fa-industry',
    title: 'ICAD III – Abu Dhabi Industrial City',
    category: 'ELV & Security Systems',
    gradient: 'linear-gradient(135deg, #003399, #0047CC)',
  },
  {
    icon: 'fas fa-school',
    title: 'Khalifa Bin Zayed Al Awal School',
    category: 'AV & IT Infrastructure',
    gradient: 'linear-gradient(135deg, #0a0f1e, #0047CC)',
  },
  {
    icon: 'fas fa-bolt',
    title: 'EWEC – Emirates Water & Electricity',
    category: 'ELV & Structured Cabling',
    gradient: 'linear-gradient(135deg, #003399, #00C6FF)',
  },
  {
    icon: 'fas fa-shopping-cart',
    title: 'UAE eCommerce Platform',
    category: 'Custom Web & Mobile App',
    gradient: 'linear-gradient(135deg, #0047CC, #00C6FF)',
  },
  {
    icon: 'fas fa-hospital',
    title: 'Hospital Network Modernization',
    category: 'IT Infrastructure & WiFi 6',
    gradient: 'linear-gradient(135deg, #0a0f1e, #003399)',
  },
  {
    icon: 'fas fa-building',
    title: 'Corporate Boardroom — Dubai',
    category: 'AV Solutions & Control Systems',
    gradient: 'linear-gradient(135deg, #003399, #0070f3)',
  },
];

export default function PortfolioPreview() {
  return (
    <section className="portfolio-preview section bg-light">
      <div className="container">
        <div className="reveal">
          <SectionTitle
            tag="Our Work"
            tagIcon="fas fa-folder-open"
            title="Featured Projects"
            subtitle="A glimpse into the projects that showcase our expertise across UAE's leading organizations."
          />
        </div>

        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <div key={i} className={`port-card reveal reveal-d${(i % 3) + 1}`}>
              <div className="port-bg" style={{ background: p.gradient }}>
                <i className={p.icon} />
              </div>
              <div className="port-info">
                <h4>{p.title}</h4>
                <p>{p.category}</p>
              </div>
              <div className="port-overlay">
                <h4>{p.title}</h4>
                <p>{p.category}</p>
                <Link href="/portfolio" className="port-link">
                  <i className="fas fa-external-link-alt" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/portfolio" className="btn btn-outline-blue btn-lg">
            <i className="fas fa-th-large" /> View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}
