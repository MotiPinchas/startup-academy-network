'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import Header from '@/components/Header';
import TabNav, { type Tab } from '@/components/TabNav';
import Drawer from '@/components/Drawer';
import CarouselSection from '@/components/CarouselSection';
import EntrepreneurCard from '@/components/EntrepreneurCard';
import MentorCard from '@/components/MentorCard';
import LectureCard from '@/components/LectureCard';
import { entrepreneurs } from '@/data/entrepreneurs';
import { mentors } from '@/data/mentors';
import { lectures } from '@/data/lectures';

export default function HomePage() {
  const { isAuthenticated, isLoading } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('entrepreneurs');
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace('/login');
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      <div className="w-[70%] mx-auto bg-gray-50 min-h-screen">
      <Header onMenuOpen={() => setDrawerOpen(true)} />

      <main className="pb-8">
        <CarouselSection title="יזמים">
          {entrepreneurs.map(e => (
            <EntrepreneurCard key={e.id} entrepreneur={e} />
          ))}
        </CarouselSection>

        <div className="mx-4 border-t border-gray-100" />

        <CarouselSection title="מנטורים">
          {mentors.map(m => (
            <MentorCard key={m.id} mentor={m} />
          ))}
        </CarouselSection>

        <div className="mx-4 border-t border-gray-100" />

        <CarouselSection title="תכנים">
          {lectures.map(l => (
            <LectureCard key={l.id} lecture={l} />
          ))}
        </CarouselSection>
      </main>

      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onNavigate={(tab) => setActiveTab(tab)}
      />
      </div>
    </div>
  );
}
