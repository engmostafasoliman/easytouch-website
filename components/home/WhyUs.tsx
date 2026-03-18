import Link from 'next/link';
import SectionTitle from '@/components/ui/SectionTitle';

const values = [
  { icon: 'fas fa-crown',      title: 'VIP Client Approach',      desc: 'Dedicated account management for every client' },
  { icon: 'fas fa-chart-line', title: 'Quality Track Strategy',   desc: 'Proven processes ensuring consistent delivery' },
  { icon: 'fas fa-eye',        title: 'Full Transparency',         desc: 'Clear communication and honest pricing always' },
  { icon: 'fas fa-handshake',  title: 'Integrity First',           desc: 'We deliver exactly what we promise, every time' },
];

export default function WhyUs() {
  return (
    <section className="why-us section">
      <div className="container">
        <div className="why-us-grid">
          {/* Left content */}
          <div className="why-text reveal left">
            <SectionTitle
              tag="Why Choose Us"
              tagIcon="fas fa-star"
              title="Your Trusted Technology Partner in UAE"
              align="left"
            />
            <p className="lead">
              With over 7 years of hands-on experience across Abu Dhabi and Dubai, Easy Touch
              delivers technology solutions that are built to last — on time, within budget,
              and beyond expectations.
            </p>

            <div className="why-values-grid">
              {values.map(v => (
                <div key={v.title} className="value-card">
                  <div className="value-icon"><i className={v.icon} /></div>
                  <div>
                    <h4>{v.title}</h4>
                    <p>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link href="/about" className="btn btn-primary">
                <i className="fas fa-arrow-right" /> Learn About Us
              </Link>
              <Link href="/contact" className="btn btn-outline-blue">
                <i className="fas fa-headset" /> Quick Support
              </Link>
            </div>
          </div>

          {/* Right visual */}
          <div className="reveal right" style={{ position: 'relative' }}>
            <div className="exp-card">
              <div className="exp-num">7<em>+</em></div>
              <p className="exp-label">Years of Excellence in UAE Technology Solutions</p>
              <div className="exp-mini-grid">
                <div className="exp-mini"><h4>200+</h4><p>Projects</p></div>
                <div className="exp-mini"><h4>150+</h4><p>Clients</p></div>
                <div className="exp-mini"><h4>24/7</h4><p>Support</p></div>
              </div>
            </div>

            {/* Float badges */}
            <div className="exp-badges">
              {[
                { icon: 'fas fa-check-circle', text: 'ISO Quality Certified' },
                { icon: 'fas fa-shield-alt',   text: 'Security Focused' },
              ].map(b => (
                <div key={b.text} className="exp-badge">
                  <i className={b.icon} />
                  {b.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
