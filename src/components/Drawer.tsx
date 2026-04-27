'use client';

import { useAuth } from '@/context/AuthContext';
import { type Tab } from './TabNav';

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (tab: Tab) => void;
  feedbackLink?: string;
  whatsappGroupUrl?: string;
}

export default function Drawer({ open, onClose, onNavigate, feedbackLink = '#', whatsappGroupUrl }: DrawerProps) {
  const { logout } = useAuth();

  const navigate = (tab: Tab) => {
    onNavigate(tab);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer panel — slides from right */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-xl transform transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        dir="rtl"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-base font-semibold text-gray-800">תפריט</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">
            ✕
          </button>
        </div>

        <nav className="flex flex-col py-2">
          <a
            href={feedbackLink}
            className="px-5 py-3.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Feedback
          </a>
          <a
            href={whatsappGroupUrl || 'https://chat.whatsapp.com/'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            קבוצות ווטסאפ
          </a>
          <a
            href="https://us06web.zoom.us/j/4883949143"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 text-sm text-blue-600 hover:bg-blue-50 transition-colors flex items-center gap-2"
          >
            <span>🎥</span>
            Zoom
          </a>
          <hr className="my-2 border-gray-100" />
          <button
            onClick={() => navigate('entrepreneurs')}
            className="px-5 py-3.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-right"
          >
            יזמים
          </button>
          <button
            onClick={() => navigate('mentors')}
            className="px-5 py-3.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-right"
          >
            מנטורים
          </button>
          <button
            onClick={() => navigate('content')}
            className="px-5 py-3.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-right"
          >
            תכנים
          </button>
          <hr className="my-2 border-gray-100" />
          <button
            onClick={() => { logout(); onClose(); }}
            className="px-5 py-3.5 text-sm text-red-500 hover:bg-red-50 transition-colors text-right"
          >
            יציאה
          </button>
        </nav>
      </div>
    </>
  );
}
