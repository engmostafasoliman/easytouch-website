'use client';

import { useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  useScrollReveal();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const openWhatsApp = () => {
    window.open(
      'https://wa.me/97126770551?text=Hello%20Easy%20Touch%2C%20I%20need%20assistance.',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <>
      {/* WhatsApp */}
      <div className="wa-float">
        <div className="wa-tooltip">Need Help? Chat with us!</div>
        <button className="wa-btn" aria-label="Chat on WhatsApp" onClick={openWhatsApp}>
          <i className="fab fa-whatsapp" />
        </button>
      </div>

      {/* Back to top */}
      <button
        className={`back-top ${visible ? 'visible' : ''}`}
        aria-label="Back to top"
        onClick={scrollTop}
      >
        <i className="fas fa-chevron-up" />
      </button>
    </>
  );
}
