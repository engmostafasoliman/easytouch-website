import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" style={{ display: 'inline-block', marginBottom: '14px', background: 'rgba(255,255,255,0.95)', borderRadius: '8px', padding: '6px 12px' }}>
              <Image
                src="/logo.png"
                alt="Easy Touch"
                width={0}
                height={0}
                sizes="180px"
                style={{ height: '32px', width: 'auto', display: 'block' }}
              />
            </Link>
            <p>
              UAE&apos;s trusted partner for IT, ELV, Audio Visual, and Business Solutions.
              Delivering <strong style={{ color: 'rgba(255,255,255,0.9)' }}>Fast &amp; Perfect</strong> results
              across Abu Dhabi and Dubai since 2017.
            </p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/profile.php?id=61587245910875" aria-label="Facebook"  target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f" /></a>
              <a href="https://www.instagram.com/easy_touch03/"               aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a>
              <a href="https://x.com/easy_touch0"                             aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer"><i className="fab fa-x-twitter" /></a>
              <a href="https://www.linkedin.com/company/easy-touch-treading-of-education-media-and-models-sole-proprietorship/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/"><i className="fas fa-chevron-right" /> Home</Link></li>
              <li><Link href="/about"><i className="fas fa-chevron-right" /> About Us</Link></li>
              <li><Link href="/services"><i className="fas fa-chevron-right" /> Services</Link></li>
              <li><Link href="/portfolio"><i className="fas fa-chevron-right" /> Portfolio</Link></li>
              <li><Link href="/clients"><i className="fas fa-chevron-right" /> Our Clients</Link></li>
              <li><Link href="/contact"><i className="fas fa-chevron-right" /> Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4>Our Services</h4>
            <ul className="footer-links">
              <li><Link href="/services#elv"><i className="fas fa-chevron-right" /> ELV Systems</Link></li>
              <li><Link href="/services#av"><i className="fas fa-chevron-right" /> AV Solutions</Link></li>
              <li><Link href="/services#it"><i className="fas fa-chevron-right" /> IT &amp; Networking</Link></li>
              <li><Link href="/services#cyber"><i className="fas fa-chevron-right" /> Cybersecurity</Link></li>
              <li><Link href="/services#business"><i className="fas fa-chevron-right" /> Business Setup</Link></li>
              <li><Link href="/services#ev"><i className="fas fa-chevron-right" /> EV Chargers</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-row">
                <i className="fas fa-map-marker-alt" />
                <span>Abu Dhabi Industrial City – ICAD III, UAE</span>
              </div>
              <div className="footer-contact-row">
                <i className="fas fa-building" />
                <span>Electra Street, Abu Dhabi, UAE</span>
              </div>
              <div className="footer-contact-row">
                <i className="fas fa-phone" />
                <a href="tel:+97126770551">+971 2 6770551</a>
              </div>
              <div className="footer-contact-row">
                <i className="fas fa-phone-alt" />
                <a href="tel:+97126507075">+971 2 650 7075</a>
              </div>
              <div className="footer-contact-row">
                <i className="fas fa-envelope" />
                <a href="mailto:info@easytouchuae.ae">info@easytouchuae.ae</a>
              </div>
              <div className="footer-contact-row">
                <i className="fas fa-clock" />
                <span>Mon–Fri: 8:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {year} <Link href="/">Easy Touch</Link>. All rights reserved. UAE IT &amp; Interactive Solutions.</p>
          <div className="footer-bottom-links">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
