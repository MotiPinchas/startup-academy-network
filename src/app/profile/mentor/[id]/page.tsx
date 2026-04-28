'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { mentors } from '@/data/mentors';
import LinkedInIcon from '@/components/LinkedInIcon';

export default function MentorProfilePage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const mentor = mentors.find(m => m.id === id);

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

  if (!mentor) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4" dir="rtl">
        <p className="text-gray-500">מנטור לא נמצא</p>
        <Link href="/home" className="text-blue-600 hover:underline">חזרה לדף הבית</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3">
        <button onClick={() => router.back()} className="text-gray-500 hover:text-gray-700 text-xl leading-none">
          →
        </button>
        <h1 className="text-base font-semibold text-gray-800">פרופיל מנטור</h1>
      </div>

      {/* Hero */}
      <div className="bg-white px-6 py-8 flex flex-col items-center gap-3 border-b border-gray-100">
        <div className="relative">
          <Image
            src={mentor.avatar}
            alt={mentor.name}
            width={100}
            height={100}
            className="rounded-full object-cover ring-4 ring-blue-100"
          />
          <span className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white ${mentor.available ? 'bg-green-400' : 'bg-gray-300'}`} />
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-xl font-bold text-gray-900">{mentor.name}</h2>
            {mentor.linkedin && (
              <a
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A66C2] hover:text-[#004182] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon size={18} />
              </a>
            )}
          </div>
          <p className="text-blue-600 font-medium mt-0.5">{mentor.expertise}</p>
          <p className="text-sm text-gray-500 mt-0.5">{mentor.title}</p>
          <span className={`inline-block mt-2 text-xs px-3 py-1 rounded-full font-medium ${mentor.available ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
            {mentor.available ? 'זמין לפגישה' : 'לא זמין כעת'}
          </span>
        </div>
      </div>

      {/* Bio */}
      {mentor.bio && (
        <div className="bg-white mt-3 mx-4 rounded-2xl p-5 border border-gray-100 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">אודות</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{mentor.bio}</p>
        </div>
      )}

      {/* Actions */}
      <div className="px-4 mt-4 flex flex-col gap-3">
        {mentor.whatsapp && (
          <a
            href={`https://wa.me/${mentor.whatsapp}?text=${encodeURIComponent(`היי ${mentor.name}, ראיתי אותך ב-Startup Academic Network ורוצה להתחבר! 🚀`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-2xl transition-colors"
          >
            <span>💬</span>
            לקביעת פגישה ב-WhatsApp
          </a>
        )}
        {mentor.linkedin && (
          <a
            href={mentor.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 border-2 border-[#0A66C2] text-[#0A66C2] font-semibold py-3.5 rounded-2xl hover:bg-blue-50 transition-colors"
          >
            <LinkedInIcon size={18} />
            צפה בפרופיל LinkedIn
          </a>
        )}
        <Link
          href="/home"
          className="w-full text-center text-gray-500 hover:text-gray-700 py-2 text-sm"
        >
          חזרה לדף הבית
        </Link>
      </div>
      </div>
    </div>
  );
}
