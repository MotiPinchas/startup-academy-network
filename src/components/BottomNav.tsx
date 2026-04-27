'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const tabs = [
  { href: '/home', label: 'בית', icon: '🏠' },
  { href: '/home/community', label: 'קהילה', icon: '👥' },
  { href: '/home/content', label: 'תכנים', icon: '📚' },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
      <div className="flex justify-around items-center py-2 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const isActive = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex flex-col items-center gap-0.5 px-4 py-1 rounded-xl transition-colors ${
                isActive ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span className="text-xs font-medium">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
