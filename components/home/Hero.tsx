import Link from 'next/link';

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero banner">
      {/* Background video */}
      <video
        className="hero-bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/easy-touch.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-inner">

          {/* Content */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="pulse" />
              UAE&apos;s Trusted Technology Partner
            </div>

            <h1>
              Precision.<br />
              <span className="gradient-text">Performance.</span><br />
              UAE.
            </h1>

            <p className="lead">
              Easy Touch is the partner of choice for enterprises, SMEs, and
              government entities seeking reliable ELV, AV, IT, Cybersecurity,
              and Business solutions across the UAE.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary btn-lg">
                <i className="fas fa-calendar-check" /> Free Consultation
              </Link>
              <Link href="/services" className="btn btn-outline btn-lg">
                <i className="fas fa-th" /> Our Services
              </Link>
            </div>

            <div className="hero-stats">
              <div className="hero-stat">
                <div className="num">7<em>+</em></div>
                <div className="label">Years in UAE</div>
              </div>
              <div className="hero-stat">
                <div className="num">200<em>+</em></div>
                <div className="label">Projects Delivered</div>
              </div>
              <div className="hero-stat">
                <div className="num">150<em>+</em></div>
                <div className="label">Active Clients</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
