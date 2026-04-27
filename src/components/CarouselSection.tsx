'use client';

import { useRef, ReactNode } from 'react';

interface CarouselSectionProps {
  title: string;
  children: ReactNode;
}

export default function CarouselSection({ title, children }: CarouselSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 'left' | 'right') {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'right' ? 200 : -200, behavior: 'smooth' });
  }

  return (
    <section className="py-4">
      <h2 className="text-base font-semibold text-gray-800 px-4 mb-3 uppercase tracking-wide">
        {title}
      </h2>
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
          aria-label="גלול שמאלה"
        >
          ←
        </button>
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto px-8 pb-1 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {children}
        </div>
        <button
          onClick={() => scroll('right')}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition"
          aria-label="גלול ימינה"
        >
          →
        </button>
      </div>
    </section>
  );
}
