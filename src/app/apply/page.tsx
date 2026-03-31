'use client';

import MobileLayout from '@/components/layout/MobileLayout';
import ApplyWizard from '@/components/apply/ApplyWizard';

export default function ApplyPage() {
  return (
    <MobileLayout>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>নতুন আবেদন</h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>e-FuelCard-এর জন্য নিচের ধাপগুলো সম্পন্ন করুন।</p>
      </div>
      <ApplyWizard />
    </MobileLayout>
  );
}
