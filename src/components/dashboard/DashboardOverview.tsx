'use client';

import { useState } from 'react';
import { MOCK_USER, APPLICATION_STATUS } from '@/lib/constants';
import { CheckCircle2, Clock, ShieldCheck, CreditCard, ChevronRight, Activity, MapPin, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DashboardOverview() {
  const [status, setStatus] = useState(MOCK_USER.status);
  const router = useRouter();

  const steps = [
    { id: APPLICATION_STATUS.SUBMITTED, label: 'জমা হয়েছে', icon: <Clock size={16} /> },
    { id: APPLICATION_STATUS.VERIFYING, label: 'যাচাই করা হচ্ছে', icon: <ShieldCheck size={16} /> },
    { id: APPLICATION_STATUS.APPROVED, label: 'অনুমোদিত', icon: <CheckCircle2 size={16} /> },
    { id: APPLICATION_STATUS.ISSUED, label: 'ইস্যু করা হয়েছে', icon: <CreditCard size={16} /> },
  ];

  return (
    <div className="animate-in">
      {/* Welcome Card */}
      <div className="card glass" style={{ marginBottom: '1.5rem', background: 'linear-gradient(135deg, var(--primary), var(--primary-hover))', color: 'white' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            background: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem'
          }}>
            👋
          </div>
          <div>
            <h2 style={{ fontSize: '1.125rem', fontWeight: '700' }}>শুভ দিন, {MOCK_USER.name}</h2>
            <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>FuelCard বরাদ্দ ড্যাশবোর্ড</p>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.8, marginBottom: '0.25rem' }}>Current Balance</p>
            <p style={{ fontSize: '1.5rem', fontWeight: '800' }}>{MOCK_USER.balance} Ltrs</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.8, marginBottom: '0.25rem' }}>Monthly Limit</p>
            <p style={{ fontSize: '1.5rem', fontWeight: '800' }}>{MOCK_USER.maxLimit} Ltrs</p>
          </div>
        </div>
      </div>

      {/* Tracking Progress */}
      <div className="card" style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Activity size={18} color="var(--primary)" /> আবেদনের বর্তমান অবস্থা
        </h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '0',
            right: '0',
            height: '2px',
            background: '#e2e8f0',
            zIndex: 0
          }} />
          {steps.map((step, idx) => {
            const isActive = steps.findIndex(s => s.id === status) >= idx;
            return (
              <div key={step.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1, gap: '0.5rem', flex: 1 }}>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: isActive ? 'var(--primary)' : 'white',
                  border: `2px solid ${isActive ? 'var(--primary)' : 'var(--border)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isActive ? 'white' : 'var(--text-muted)',
                  fontSize: '0.75rem'
                }}>
                  {isActive ? <CheckCircle2 size={14} /> : idx + 1}
                </div>
                <span style={{ fontSize: '0.65rem', fontWeight: '600', color: isActive ? 'var(--primary)' : 'var(--text-muted)', textAlign: 'center' }}>
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
        <div className="card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', cursor: 'pointer' }} onClick={() => router.push('/card')}>
          <div style={{ background: 'var(--primary-light)', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifySelf: 'center', padding: '6px' }}>
            <CreditCard size={20} color="var(--primary)" />
          </div>
          <h4 style={{ fontSize: '0.875rem', fontWeight: '700' }}>আমার ফুয়েল কার্ড</h4>
          <p style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>QR কোড দেখতে এখানে ক্লিক করুন</p>
        </div>
        <div className="card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', cursor: 'pointer' }}>
          <div style={{ background: '#fef3c7', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifySelf: 'center', padding: '6px' }}>
            <MapPin size={20} color="#d97706" />
          </div>
          <h4 style={{ fontSize: '0.875rem', fontWeight: '700' }}>ফুয়েল স্টেশন</h4>
          <p style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>নিকটবর্তী স্টেশন খুঁজে বের করুন</p>
        </div>
      </div>

      {/* Analytics Mockup */}
      <div className="card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ fontSize: '1rem', fontWeight: '700' }}>সাম্প্রতিক লেনদেন</h3>
          <button className="btn btn-secondary" style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}>সব দেখুন <ChevronRight size={14} /></button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {[1, 2].map((i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingBottom: '0.75rem', borderBottom: i === 1 ? '1px solid var(--border)' : 'none' }}>
              <div style={{ background: 'var(--background)', padding: '8px', borderRadius: '8px' }}>
                <Zap size={20} color="var(--primary)" />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '0.875rem', fontWeight: '600' }}>Trust Filling Station</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>March {25 + i}, 2026 • 10:30 AM</p>
              </div>
              <p style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--error)' }}>- 10.0L</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
