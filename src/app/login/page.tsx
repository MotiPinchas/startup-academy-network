'use client';

import { useState, FormEvent } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const { enter } = useAuth();
  const router = useRouter();
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const ok = enter(code);
    if (ok) {
      router.push('/home');
    } else {
      setError('קוד שגוי — נסה שוב');
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Startup Academic</h1>
          <p className="text-sm text-gray-500 mt-1">Network</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 text-right">
              קוד כניסה
            </label>
            <input
              type="text"
              value={code}
              onChange={e => setCode(e.target.value)}
              required
              autoFocus
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-lg tracking-widest font-mono uppercase"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            כניסה
          </button>
        </form>

        <p className="text-center text-xs text-gray-400 mt-6">
          קיבלת את הקוד מהמנהל? הזן אותו כאן.
        </p>
      </div>
    </div>
  );
}
