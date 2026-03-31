'use client';

import { ReactNode } from 'react';
import Header from './Header';

export default function MobileLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container animate-in">
      <Header />
      <main style={{ flex: 1, paddingBottom: '2rem' }}>
        {children}
      </main>
    </div>
  );
}
