'use client';

import { MOCK_USER } from '@/lib/constants';
import { QRCodeSVG } from 'qrcode.react';
import { Download, Share2, Wallet, ShieldCheck, CreditCard, Calendar, Activity } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function DigitalCard() {
  const router = useRouter();

  return (
    <div className="animate-in">
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', cursor: 'pointer' }} onClick={() => router.push('/dashboard')}>
        <div style={{ background: 'var(--primary)', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifySelf: 'center', color: 'white', padding: '6px' }}>
          <ShieldCheck size={20} />
        </div>
        <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--primary)' }}>ডিজিটাল ফুয়েল কার্ড</h2>
      </div>

      <div className="card" style={{ background: 'var(--primary)', color: 'white', padding: '0', overflow: 'hidden', position: 'relative', minHeight: '440px' }}>
        {/* Card Header Background */}
        <div style={{ 
          position: 'absolute', 
          top: '-20%', 
          right: '-10%', 
          width: '200px', 
          height: '200px', 
          background: 'rgba(255, 255, 255, 0.1)', 
          borderRadius: '50%', 
          filter: 'blur(40px)' 
        }} />
        
        <div style={{ padding: '1.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <div>
              <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.8, letterSpacing: '0.05em' }}>Issued by</p>
              <h3 style={{ fontSize: '1rem', fontWeight: '700' }}>Government of Bangladesh</h3>
            </div>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_Seal_of_Bangladesh.svg/1024px-Government_Seal_of_Bangladesh.svg.png" 
              alt="Gov Seal" 
              style={{ width: '40px', height: '40px' }} 
            />
          </div>

          <div style={{ 
            background: 'white', 
            borderRadius: 'var(--radius-lg)', 
            padding: '1.5rem', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            gap: '1.5rem', 
            color: 'var(--text-primary)',
            boxShadow: 'var(--shadow-lg)',
            margin: '0.5rem 0'
          }}>
            <QRCodeSVG 
              value={`FUELCARD:${MOCK_USER.cardNo}:${MOCK_USER.nid}`} 
              size={180} 
              level="H"
              includeMargin={true}
            />
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '1.125rem', fontWeight: '800', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{MOCK_USER.cardNo}</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600' }}>ACTIVE • SCAN AT STATION</p>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.8, marginBottom: '0.25rem' }}>Card Holder</p>
              <p style={{ fontSize: '0.875rem', fontWeight: '700' }}>{MOCK_USER.name}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.8, marginBottom: '0.25rem' }}>Expiry Date</p>
              <p style={{ fontSize: '0.875rem', fontWeight: '700' }}>{MOCK_USER.expiryDate}</p>
            </div>
            <div>
              <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.8, marginBottom: '0.25rem' }}>Vehicle No</p>
              <p style={{ fontSize: '0.875rem', fontWeight: '700' }}>{MOCK_USER.vehicleNo}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', opacity: 0.8, marginBottom: '0.25rem' }}>Quota Limit</p>
              <p style={{ fontSize: '0.875rem', fontWeight: '700' }}>{MOCK_USER.balance}L / {MOCK_USER.maxLimit}L</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1.5rem' }}>
        <button className="btn btn-secondary" style={{ flex: 1, gap: '0.5rem' }}>
          <Download size={18} /> Download
        </button>
        <button className="btn btn-secondary" style={{ flex: 1, gap: '0.5rem' }}>
          <Share2 size={18} /> Share
        </button>
      </div>
      
      <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem', gap: '0.5rem', background: '#2563eb' }}>
        <Wallet size={18} /> Add to Apple/Google Wallet
      </button>

      <div className="card" style={{ marginTop: '1.5rem', background: 'var(--primary-light)', border: '1px solid var(--primary)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <div style={{ color: 'var(--primary)' }}>
          <Activity size={24} />
        </div>
        <div>
          <p style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--primary)' }}>সুরক্ষা টিপস</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>আপনার কিউআর কোডটি কখনো কারো সাথে শেয়ার করবেন না। এটি শুধুমাত্র অথরাইজড পাম্পে স্ক্যান করুন।</p>
        </div>
      </div>
    </div>
  );
}
