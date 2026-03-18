import Link from 'next/link';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar-left">
          <a href="tel:+97126770551" className="topbar-item">
            <i className="fas fa-phone" /> +971 2 6770551
          </a>
          <a href="tel:+97126507075" className="topbar-item">
            <i className="fas fa-phone-alt" /> +971 2 650 7075
          </a>
          <a href="mailto:info@easytouchuae.ae" className="topbar-item">
            <i className="fas fa-envelope" /> info@easytouchuae.ae
          </a>
          <span className="topbar-item">
            <i className="fas fa-clock" /> Mon–Fri &nbsp;8:00 AM – 6:00 PM
          </span>
        </div>
        <div className="topbar-right">
          <div className="topbar-socials">
            <a href="https://www.facebook.com/profile.php?id=61587245910875" aria-label="Facebook"  rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook-f" /></a>
            <a href="https://www.instagram.com/easy_touch03/"               aria-label="Instagram" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram" /></a>
            <a href="https://x.com/easy_touch0"                             aria-label="X (Twitter)" rel="noopener noreferrer" target="_blank"><i className="fab fa-x-twitter" /></a>
            <a href="https://www.linkedin.com/company/easy-touch-treading-of-education-media-and-models-sole-proprietorship/" aria-label="LinkedIn" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
