'use client';

import { useState } from 'react';
import PageHero from '@/components/ui/PageHero';
import SectionTitle from '@/components/ui/SectionTitle';
import CtaBanner from '@/components/home/CtaBanner';

const categories = ['All', 'ELV & Security', 'Audio Visual', 'IT & Networking', 'Software', 'Business Setup'];

const projects = [
  {
    title: 'ICAD III Industrial Complex',
    category: 'ELV & Security',
    tags: ['CCTV', 'Access Control', 'Fire Alarm'],
    location: 'Abu Dhabi Industrial City',
    year: '2023',
    desc: 'Full ELV system integration for a major industrial complex including 200+ CCTV cameras, access control, and fire detection.',
    icon: 'fas fa-industry',
    color: '#0047CC',
  },
  {
    title: 'Khalifa Bin Zayed Al Awal School',
    category: 'Audio Visual',
    tags: ['AV Integration', 'Digital Signage', 'PA System'],
    location: 'Abu Dhabi, UAE',
    year: '2022',
    desc: 'Complete AV ecosystem for a modern school including smart classrooms, auditorium AV, and campus-wide PA system.',
    icon: 'fas fa-school',
    color: '#0055EE',
  },
  {
    title: 'EWEC Data Centre Network',
    category: 'IT & Networking',
    tags: ['Structured Cabling', 'Data Center', 'Networking'],
    location: 'Abu Dhabi, UAE',
    year: '2023',
    desc: 'Enterprise network infrastructure upgrade for Emirates Water and Electricity Company — structured cabling and data center refresh.',
    icon: 'fas fa-bolt',
    color: '#003399',
  },
  {
    title: 'Gulf eCommerce Platform',
    category: 'Software',
    tags: ['Web App', 'eCommerce', 'API'],
    location: 'UAE — Remote',
    year: '2024',
    desc: 'Full-stack eCommerce platform with inventory management, payment gateway integration, and mobile-optimized storefront.',
    icon: 'fas fa-shopping-cart',
    color: '#0066FF',
  },
  {
    title: 'Premium Healthcare Clinic',
    category: 'ELV & Security',
    tags: ['CCTV', 'Nurse Call', 'Access Control'],
    location: 'Abu Dhabi, UAE',
    year: '2022',
    desc: 'Comprehensive security and nurse call system for a multi-floor private healthcare facility in central Abu Dhabi.',
    icon: 'fas fa-hospital',
    color: '#0047CC',
  },
  {
    title: 'Corporate Boardroom AV Upgrade',
    category: 'Audio Visual',
    tags: ['Video Conferencing', 'Control System', 'LED Wall'],
    location: 'Abu Dhabi, UAE',
    year: '2024',
    desc: 'State-of-the-art boardroom with 216" LED video wall, Crestron control, and unified Zoom/Teams video conferencing.',
    icon: 'fas fa-building',
    color: '#0055EE',
  },
  {
    title: 'Retail Chain Network Rollout',
    category: 'IT & Networking',
    tags: ['Wi-Fi', 'POS Networking', 'SD-WAN'],
    location: 'Abu Dhabi & Dubai',
    year: '2023',
    desc: 'Multi-site Wi-Fi and SD-WAN deployment for a 12-branch UAE retail chain ensuring consistent connectivity and POS reliability.',
    icon: 'fas fa-store',
    color: '#003399',
  },
  {
    title: 'UAE SME Business Setup Package',
    category: 'Business Setup',
    tags: ['Trade License', 'Visa', 'PRO Services'],
    location: 'UAE Mainland',
    year: '2024',
    desc: 'End-to-end company formation, trade license, and visa processing for a European tech company entering the UAE market.',
    icon: 'fas fa-briefcase',
    color: '#0066FF',
  },
  {
    title: 'Hotel Security & AV System',
    category: 'ELV & Security',
    tags: ['CCTV', 'IPTV', 'PA System'],
    location: 'Abu Dhabi, UAE',
    year: '2023',
    desc: 'Integrated security (300+ cameras), IPTV in-room system, and background music across a 4-star Abu Dhabi hotel property.',
    icon: 'fas fa-hotel',
    color: '#0047CC',
  },
  {
    title: 'ERP & HR Software Platform',
    category: 'Software',
    tags: ['ERP', 'HR System', 'Web App'],
    location: 'Abu Dhabi, UAE',
    year: '2024',
    desc: 'Custom ERP with HR, payroll, inventory, and finance modules tailored for a mid-size UAE manufacturing company.',
    icon: 'fas fa-chart-bar',
    color: '#0066FF',
  },
  {
    title: 'Government Office AV Fit-Out',
    category: 'Audio Visual',
    tags: ['Conference Rooms', 'Video Wall', 'Control'],
    location: 'Abu Dhabi, UAE',
    year: '2022',
    desc: '12 conference rooms with full AV integration, a 6-screen video wall for the main lobby, and centralized control.',
    icon: 'fas fa-landmark',
    color: '#0055EE',
  },
  {
    title: 'Campus Wi-Fi Deployment',
    category: 'IT & Networking',
    tags: ['Enterprise Wi-Fi', 'Network', 'Security'],
    location: 'UAE University Campus',
    year: '2023',
    desc: 'High-density campus Wi-Fi covering 50+ buildings with seamless roaming and network-level security policy enforcement.',
    icon: 'fas fa-wifi',
    color: '#003399',
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <PageHero
        tag="Portfolio"
        tagIcon="fas fa-folder-open"
        title="Our Work Speaks for Itself"
        subtitle="200+ completed projects across the UAE — from industrial complexes to smart schools and corporate headquarters."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Portfolio' }]}
      />

      <section className="section" style={{ background: 'var(--light)' }}>
        <div className="container">
          <SectionTitle
            tag="Project Gallery"
            tagIcon="fas fa-th-large"
            title="Featured Projects"
            subtitle="Filter by service category to explore our work."
          />

          {/* Filter Pills */}
          <div className="portfolio-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="portfolio-full-grid">
            {filtered.map(project => (
              <div key={project.title} className="portfolio-card">
                <div className="portfolio-card-thumb" style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}44)` }}>
                  <i className={project.icon} style={{ color: project.color }} />
                </div>
                <div className="portfolio-card-body">
                  <div className="portfolio-card-meta">
                    <span className="portfolio-tag">{project.category}</span>
                    <span className="portfolio-year">{project.year}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="portfolio-location"><i className="fas fa-map-marker-alt" /> {project.location}</p>
                  <p className="portfolio-desc">{project.desc}</p>
                  <div className="portfolio-tags">
                    {project.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a Project in Mind?"
        subtitle="Join 150+ satisfied clients who trust Easy Touch to deliver on time and within budget."
        primaryLabel="Start Your Project"
        primaryHref="/contact"
        secondaryLabel="Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
