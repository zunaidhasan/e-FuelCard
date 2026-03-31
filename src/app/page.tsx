'use client';

import { useState } from 'react';
import MobileLayout from '@/components/layout/MobileLayout';
import LoginView from '@/components/auth/LoginView';

export default function Home() {
  return (
    <MobileLayout>
      <div className="animate-in" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '1rem' }}>
          স্বাগতম e-FuelCard-এ
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', maxWidth: '280px', margin: '0 auto 2rem' }}>
          ডিজিটালভাবে আপনার ফুয়েল বরাদ্দ নিশ্চিত করুন এবং ভোগান্তিহীন তেল গ্রহণ করুন।
        </p>
      </div>
      <LoginView />
    </MobileLayout>
  );
}
