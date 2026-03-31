'use client';

import MobileLayout from '@/components/layout/MobileLayout';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import FuelStationMap from '@/components/dashboard/FuelStationMap';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DashboardPage() {
  const router = useRouter();

  return (
    <MobileLayout>
      <div style={{ marginBottom: '2rem' }}>
        <DashboardOverview />
      </div>
      
      <div style={{ marginBottom: '4rem' }}>
        <FuelStationMap />
      </div>

      {/* Floating Action Button */}
      <button 
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'var(--primary)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: 'var(--shadow-xl)',
          border: 'none',
          cursor: 'pointer',
          zIndex: 100
        }}
        onClick={() => router.push('/apply')}
      >
        <Plus size={28} />
      </button>
    </MobileLayout>
  );
}
