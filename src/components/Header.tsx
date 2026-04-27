'use client';

import Image from 'next/image';

interface HeaderProps {
  onMenuOpen?: () => void;
}

export default function Header({ onMenuOpen }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between" dir="ltr">
      <div className="flex items-center gap-4">
        <Image src="/logo.png" alt="Startup Academy Network" width={32} height={32} />
        <h1 className="text-lg font-bold text-gray-900 tracking-tight">Startup Academy Network</h1>
      </div>
      <button
        onClick={onMenuOpen}
        className="text-gray-600 hover:text-gray-900 p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-xl leading-none"
        aria-label="תפריט"
      >
        ☰
      </button>
    </header>
  );
}
