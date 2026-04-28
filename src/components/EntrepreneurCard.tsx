'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LinkedInIcon from '@/components/LinkedInIcon';
import { Entrepreneur } from '@/data/entrepreneurs';

export default function EntrepreneurCard({ entrepreneur }: { entrepreneur: Entrepreneur }) {
  const router = useRouter();

  const firstName = entrepreneur.name.split(' ')[0];

  function notifyAndOpen(url: string) {
    fetch('/api/notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: entrepreneur.name }),
    }).catch(() => {});
    window.open(url, '_blank');
  }

  const whatsappUrl = entrepreneur.whatsapp
    ? `https://wa.me/${entrepreneur.whatsapp}?text=${encodeURIComponent(`היי ${firstName}, ראיתי אותך בקהילה שלנו, סטארטאפ אקדמי נטוורק, ואשמח לקבוע שיחה קצרה.`)}`
    : null;

  return (
    <div
      onClick={() => router.push(`/profile/entrepreneur/${entrepreneur.id}`)}
      className="snap-start shrink-0 w-48 bg-white rounded-2xl border border-gray-100 shadow-sm p-3 flex flex-col items-center gap-2 hover:shadow-md transition-shadow cursor-pointer"
    >
      <Image
        src={entrepreneur.avatar}
        alt={entrepreneur.name}
        width={64}
        height={64}
        className="rounded-full object-cover ring-2 ring-blue-100"
      />
      <div className="text-center">
        <div className="flex items-center justify-center gap-1">
          <a
            href={entrepreneur.linkedin ?? `https://linkedin.com/search/results/people/?keywords=${encodeURIComponent(entrepreneur.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A66C2] hover:text-[#004182] transition-colors"
            aria-label="LinkedIn"
            onClick={e => e.stopPropagation()}
          >
            <LinkedInIcon size={13} />
          </a>
          <p className="text-sm font-semibold text-gray-800 leading-tight">{entrepreneur.name}</p>
        </div>
        <p className="text-xs text-blue-600 font-medium">{entrepreneur.startup}</p>
        <p className="text-xs text-gray-400 mt-0.5">{entrepreneur.field}</p>
      </div>

      {/* canHelp bubbles — blue */}
      <div className="w-full">
        <p className="text-[10px] text-gray-400 text-center mb-1">יכול לעזור ב</p>
        <div className="flex flex-wrap justify-center gap-1">
          {entrepreneur.canHelp.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* needsHelp bubbles — orange */}
      <div className="w-full">
        <p className="text-[10px] text-gray-400 text-center mb-1">צריך עזרה ב</p>
        <div className="flex flex-wrap justify-center gap-1">
          {entrepreneur.needsHelp.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] bg-orange-50 text-orange-500 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Connect button pinned to bottom */}
      <div className="mt-auto w-full pt-1">
        {whatsappUrl ? (
          <button
            className="block w-full text-center text-xs bg-green-500 hover:bg-green-600 text-white py-1.5 rounded-lg transition-colors font-medium"
            onClick={e => { e.stopPropagation(); notifyAndOpen(whatsappUrl); }}
          >
            קבע איתי
          </button>
        ) : (
          <button
            className="w-full text-xs bg-green-500 hover:bg-green-600 text-white py-1.5 rounded-lg transition-colors font-medium"
            onClick={e => e.stopPropagation()}
          >
            קבע איתי
          </button>
        )}
      </div>
    </div>
  );
}
