import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';
import CtaBanner from '@/components/home/CtaBanner';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Easy Touch — our story, mission, values, and the expert team delivering IT and interactive solutions across the UAE since 2017.',
};

const values = [
  { icon: 'fas fa-bullseye', title: 'Mission', text: 'To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation across the UAE and beyond.' },
  { icon: 'fas fa-eye',      title: 'Vision',  text: 'To be the leading technology and business solutions provider in the GCC, recognized for excellence, reliability, and transformative impact.' },
  { icon: 'fas fa-star',     title: 'Values',  text: 'Integrity, innovation, and excellence guide every project. We build long-term partnerships grounded in transparency and measurable results.' },
  { icon: 'fas fa-handshake', title: 'Commitment', text: 'We are committed to delivering on time, within budget, and beyond expectations — every single time, for every single client.' },
];

const milestones = [
  { year: '2017', title: 'Founded', desc: 'Easy Touch established in Abu Dhabi Industrial City (ICAD III) with a focus on ELV and AV solutions.' },
  { year: '2019', title: 'Expansion', desc: 'Opened Abu Dhabi Branch on Electra Street. Expanded into IT Networking and Cybersecurity services.' },
  { year: '2021', title: 'Software Division', desc: 'Launched dedicated Software Development and Business Setup divisions to serve UAE entrepreneurs.' },
  { year: '2023', title: 'EV & Visa Services', desc: 'Added EV Charger installation and Visa Services to our portfolio, rounding out our end-to-end offering.' },
  { year: '2024', title: '200+ Projects', desc: 'Surpassed 200 completed projects milestone, serving 150+ satisfied clients across the UAE.' },
];

const team = [
  { name: 'Mohammed Al Hammadi', role: 'Chief Executive Officer', icon: 'fas fa-user-tie' },
  { name: 'Ahmed Al Kaabi',      role: 'Head of ELV & AV',        icon: 'fas fa-user-cog' },
  { name: 'Sara Al Mazrouei',    role: 'IT & Cybersecurity Lead',  icon: 'fas fa-user-shield' },
  { name: 'Khalid Al Mansoori',  role: 'Software Development Lead', icon: 'fas fa-user-astronaut' },
  { name: 'Fatima Al Nuaimi',    role: 'Business Setup Advisor',   icon: 'fas fa-user-graduate' },
  { name: 'Omar Al Shamsi',      role: 'Project Manager',          icon: 'fas fa-user-check' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        tag="About Us"
        tagIcon="fas fa-info-circle"
        title="Who We Are"
        subtitle="Easy Touch is the UAE's trusted partner for technology and business solutions — delivering excellence since 2017."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About Us' }]}
      />

      {/* Story */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div className="about-story-grid">
            <div>
              <SectionTitle
                tag="Our Story"
                tagIcon="fas fa-book-open"
                title="Built on Trust, Driven by Innovation"
                align="left"
              />
              <p style={{ marginBottom: '16px' }}>
                Easy Touch was founded in Abu Dhabi with a clear vision: to be the partner of choice for enterprises, SMEs, and technology challengers seeking reliable, innovative solutions across the UAE.
              </p>
              <p style={{ marginBottom: '16px' }}>
                From our headquarters in Abu Dhabi Industrial City (ICAD III) and our city branch on Electra Street, we have grown from a specialist ELV and AV integrator into a full-service technology and business solutions company — delivering everything from complex network infrastructure to government visa processing.
              </p>
              <p>
                Today, Easy Touch serves 150+ clients across government, education, healthcare, retail, and hospitality sectors — with over 200 successfully completed projects and a team of 25+ certified professionals.
              </p>
            </div>
            <div className="about-stats-panel">
              <div className="about-stat">
                <span className="about-stat-num">150<span style={{ color: 'var(--secondary)' }}>+</span></span>
                <span className="about-stat-label">Clients Served</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-num">200<span style={{ color: 'var(--secondary)' }}>+</span></span>
                <span className="about-stat-label">Projects Completed</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-num">25<span style={{ color: 'var(--secondary)' }}>+</span></span>
                <span className="about-stat-label">Team Members</span>
              </div>
              <div className="about-stat">
                <span className="about-stat-num">7<span style={{ color: 'var(--secondary)' }}>+</span></span>
                <span className="about-stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <SectionTitle
            tag="Our Foundation"
            tagIcon="fas fa-gem"
            title="Mission, Vision & Values"
            subtitle="The principles that guide everything we do."
          />
          <div className="values-grid">
            {values.map(v => (
              <div key={v.title} className="value-card reveal">
                <div className="value-icon"><i className={v.icon} /></div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: 'var(--white)' }}>
        <div className="container">
          <SectionTitle
            tag="Our Journey"
            tagIcon="fas fa-road"
            title="Milestones That Define Us"
            subtitle="A decade of growth, innovation, and client success."
          />
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className={`timeline-item reveal ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-content">
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <SectionTitle
            tag="Our Team"
            tagIcon="fas fa-users"
            title="The Experts Behind Easy Touch"
            subtitle="25+ certified professionals committed to your success."
          />
          <div className="team-grid">
            {team.map(member => (
              <div key={member.name} className="team-card reveal">
                <div className="team-avatar">
                  <i className={member.icon} />
                </div>
                <h4>{member.name}</h4>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ready to Work With Us?"
        subtitle="Let's discuss your next project and show you what Easy Touch can do."
        primaryLabel="Get a Free Quote"
        primaryHref="/contact"
        secondaryLabel="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
