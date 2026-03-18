'use client';

import { useState, useEffect, useRef } from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

const testimonials = [
  {
    initials: 'AK', name: 'Ahmed Al Kaabi', role: 'Operations Manager, ICAD Abu Dhabi',
    text: '"Easy Touch delivered our entire ELV and security system on time and within budget. Their team was professional, fast, and the quality of work is outstanding. Highly recommended!"',
    stars: 5,
  },
  {
    initials: 'FM', name: 'Fatima Al Mansouri', role: 'Principal, Khalifa Bin Zayed School',
    text: '"The AV installation at our school was flawless. Easy Touch\'s team understood our requirements perfectly and provided creative solutions we hadn\'t even thought of. Truly Fast & Perfect!"',
    stars: 5,
  },
  {
    initials: 'SR', name: 'Sanjay Reddy', role: 'IT Director, Dubai Enterprise Group',
    text: '"We needed a complete network overhaul. Easy Touch handled structured cabling to WiFi deployment — and the communication was crystal clear throughout the entire project."',
    stars: 5,
  },
  {
    initials: 'LE', name: 'Layla El-Sayed', role: 'CEO, StartUp Hub Dubai',
    text: '"From our business setup to Golden Visa, Easy Touch made the entire process smooth and stress-free. They treated us as true VIP clients every step of the way."',
    stars: 5,
  },
  {
    initials: 'MH', name: 'Mohammed Al Hassan', role: 'CTO, AlFardan Financial Services',
    text: '"Their cybersecurity audit and implementation gave us confidence our data is protected. Professional, knowledgeable, and always available when we need support."',
    stars: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [perView, setPerView] = useState(3);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  const maxSlide = Math.max(0, testimonials.length - perView);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth <= 768) setPerView(1);
      else if (window.innerWidth <= 1024) setPerView(2);
      else setPerView(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.parentElement!.offsetWidth / perView;
    trackRef.current.style.transform = `translateX(-${current * cardWidth}px)`;
  }, [current, perView]);

  const startAuto = () => {
    timerRef.current = setInterval(() => {
      setCurrent(c => (c >= maxSlide ? 0 : c + 1));
    }, 4500);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(timerRef.current);
  }, [maxSlide]);

  const go = (idx: number) => {
    clearInterval(timerRef.current);
    setCurrent(Math.max(0, Math.min(idx, maxSlide)));
    startAuto();
  };

  return (
    <section className="testimonials-section section bg-white">
      <div className="container">
        <div className="reveal">
          <SectionTitle
            tag="Testimonials"
            tagIcon="fas fa-quote-right"
            title="What Our Clients Say"
            subtitle="Don't take our word for it — hear from the businesses we've helped grow."
          />
        </div>

        <div className="testi-track-wrap">
          <div className="testi-track" ref={trackRef}>
            {testimonials.map(t => (
              <div key={t.name} className="testi-card">
                <div className="testi-stars">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <i key={i} className="fas fa-star" />
                  ))}
                </div>
                <p className="testi-text">{t.text}</p>
                <div className="testi-author">
                  <div className="testi-avatar">{t.initials}</div>
                  <div>
                    <h5>{t.name}</h5>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="testi-nav">
          <button className="testi-btn" onClick={() => go(current - 1)} aria-label="Previous">
            <i className="fas fa-chevron-left" />
          </button>
          <div className="testi-dots">
            {Array.from({ length: maxSlide + 1 }).map((_, i) => (
              <span key={i} className={`testi-dot ${i === current ? 'active' : ''}`} onClick={() => go(i)} />
            ))}
          </div>
          <button className="testi-btn" onClick={() => go(current + 1)} aria-label="Next">
            <i className="fas fa-chevron-right" />
          </button>
        </div>
      </div>
    </section>
  );
}
