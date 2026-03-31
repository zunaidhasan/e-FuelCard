'use client';

import MobileLayout from '@/components/layout/MobileLayout';
import DigitalCard from '@/components/card/DigitalCard';

export default function CardPage() {
  return (
    <MobileLayout>
      <div style={{ paddingBottom: '2rem' }}>
        <DigitalCard />
      </div>
    </MobileLayout>
  );
}
