'use client';

export type Tab = 'entrepreneurs' | 'mentors' | 'content' | 'whatsapp';

interface TabNavProps {
  active: Tab;
  onChange: (tab: Tab) => void;
  whatsappGroupUrl?: string;
}

const TABS: { id: Tab; label: string }[] = [
  { id: 'entrepreneurs', label: 'יזמים' },
  { id: 'mentors', label: 'מנטורים' },
  { id: 'content', label: 'תכנים' },
  { id: 'whatsapp', label: 'קבוצות ווטסאפ' },
];

export default function TabNav({ active, onChange, whatsappGroupUrl }: TabNavProps) {
  const handleClick = (tab: Tab) => {
    if (tab === 'whatsapp') {
      const url = whatsappGroupUrl || 'https://chat.whatsapp.com/';
      window.open(url, '_blank', 'noopener,noreferrer');
      return;
    }
    onChange(tab);
  };

  return (
    <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar bg-white border-b border-gray-100">
      {TABS.map(tab => (
        <button
          key={tab.id}
          onClick={() => handleClick(tab.id)}
          className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            active === tab.id && tab.id !== 'whatsapp'
              ? 'bg-blue-600 text-white'
              : 'border border-gray-300 text-gray-600 hover:border-blue-400 hover:text-blue-600'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
