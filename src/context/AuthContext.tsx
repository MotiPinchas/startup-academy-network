'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const ACCESS_CODE = 'SAN2026';
const STORAGE_KEY = 'san_access';

interface AuthContextType {
  isAuthenticated: boolean;
  enter: (code: string) => boolean;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setIsAuthenticated(stored === 'true');
    setIsLoading(false);
  }, []);

  function enter(code: string): boolean {
    if (code.trim().toUpperCase() === ACCESS_CODE) {
      setIsAuthenticated(true);
      localStorage.setItem(STORAGE_KEY, 'true');
      return true;
    }
    return false;
  }

  function logout() {
    setIsAuthenticated(false);
    localStorage.removeItem(STORAGE_KEY);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, enter, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
