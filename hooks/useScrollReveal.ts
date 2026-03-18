'use client';

import { useEffect, useRef } from 'react';

interface Options {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollReveal(options: Options = {}) {
  const { threshold = 0.12, rootMargin = '0px 0px -40px 0px' } = options;

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [threshold, rootMargin]);
}
