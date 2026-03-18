'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/',          label: 'Home' },
  { href: '/about',     label: 'About Us' },
  { href: '/services',  label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/clients',   label: 'Our Clients' },
  { href: '/contact',   label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Close menu on route change
    setMenuOpen(false);
    document.body.style.overflow = '';
  }, [pathname]);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link href="/" className="logo">
            <Image
              src="/logo.png"
              alt="Easy Touch"
              width={0}
              height={0}
              sizes="200px"
              style={{ height: '40px', width: 'auto' }}
              priority
            />
          </Link>

          <nav className="nav-links" aria-label="Main navigation">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn btn-primary btn-sm nav-cta">
              <i className="fas fa-paper-plane" /> Get a Quote
            </Link>
          </nav>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <nav className={`mobile-drawer ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>
          <i className="fas fa-paper-plane" /> Get a Free Quote
        </Link>
      </nav>
    </>
  );
}
