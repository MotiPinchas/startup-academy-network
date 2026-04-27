'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { entrepreneurs } from '@/data/entrepreneurs';
import LinkedInIcon from '@/components/LinkedInIcon';

function TagBubble({ label, color }: { label: string; color: string }) {
  return (
    <span className={`text-xs px-3 py-1 rounded-full font-medium ${color}`}>
      {label}
    </span>
  );
}

export default function EntrepreneurProfilePage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const entrepreneur = entrepreneurs.find(e => e.id === id);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) router.replace('/login');
  }, [isAuthenticated, isLoading, router]);

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!entrepreneur) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4" dir="rtl">
        <p className="text-gray-500">יזם לא נמצא</p>
        <Link href="/home" className="text-blue-600 hover:underline">חזרה לדף הבית</Link>
      </div>
    );
  }

  const whatsappUrl = entrepreneur.whatsapp
    ? `https://wa.me/${entrepreneur.whatsapp}?text=${encodeURIComponent(`היי ${entrepreneur.name}, ראיתי אותך ב-Startup Academic Network ורוצה להתחבר! 🚀`)}`
    : null;

  return (
    <div className="min-h-screen bg-gray-50 pb-8" dir="rtl">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3">
        <button onClick={() => router.back()} className="text-gray-500 hover:text-gray-700 text-xl">
          →
        </button>
        <h1 className="text-base font-semibold text-gray-800">פרופיל יזם</h1>
      </div>

      {/* Hero */}
      <div className="bg-white px-6 py-8 flex flex-col items-center gap-3 border-b border-gray-100">
        <Image
          src={entrepreneur.avatar}
          alt={entrepreneur.name}
          width={100}
          height={100}
          className="rounded-full object-cover ring-4 ring-blue-100"
        />
        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-xl font-bold text-gray-900">{entrepreneur.name}</h2>
            {entrepreneur.linkedin && (
              <a
                href={entrepreneur.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:text-[#004182] transition-colors"
              >
                <LinkedInIcon size={18} />
              </a>
            )}
          </div>
          <p className="text-blue-600 font-semibold mt-0.5">{entrepreneur.startup}</p>
          <p className="text-sm text-gray-500 mt-0.5">{entrepreneur.field}</p>
        </div>
        {entrepreneur.bio && (
          <p className="text-sm text-gray-600 text-center leading-relaxed">{entrepreneur.bio}</p>
        )}
      </div>

      {/* Can Help With */}
      <div className="bg-white mt-3 mx-4 rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">יכול לעזור ב</h3>
        <div className="flex flex-wrap gap-2">
          {entrepreneur.canHelp.map(tag => (
            <TagBubble key={tag} label={tag} color="bg-blue-50 text-blue-700" />
          ))}
        </div>
      </div>

      {/* Needs Help With */}
      <div className="bg-white mt-3 mx-4 rounded-2xl p-5 border border-gray-100 shadow-sm">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">מחפש עזרה ב</h3>
        <div className="flex flex-wrap gap-2">
          {entrepreneur.needsHelp.map(tag => (
            <TagBubble key={tag} label={tag} color="bg-orange-50 text-orange-600" />
          ))}
        </div>
      </div>

      {/* WhatsApp Button */}
      {whatsappUrl && (
        <div className="px-4 mt-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-2xl transition-colors text-base"
          >
            <span>💬</span>
            שלח הודעה ב-WhatsApp
          </a>
        </div>
      )}

      <div className="px-4 mt-3">
        <Link href="/home" className="w-full block text-center text-gray-400 hover:text-gray-600 py-2 text-sm">
          חזרה לדף הבית
        </Link>
      </div>
    </div>
  );
}
