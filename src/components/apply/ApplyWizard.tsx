'use client';

import { useState, useEffect } from 'react';
import { FUEL_TYPES } from '@/lib/constants';
import { User, Car, FileUp, CheckCircle2, ArrowRight, ArrowLeft, ShieldCheck, Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ApplyWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    nid: '',
    phone: '',
    vehicleNo: '',
    fuelType: 'octane',
    documents: null
  });
  const [verifying, setVerifying] = useState(false);
  const [verified, setVerified] = useState(false);
  const router = useRouter();

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleNidVerify = () => {
    setVerifying(true);
    // Simulating NID verification from Election Commission API
    setTimeout(() => {
      setVerifying(false);
      setVerified(true);
      setFormData(prev => ({ ...prev, name: 'Zunaid Hasan' }));
    }, 2000);
  };

  const steps = [
    { id: 1, label: 'ব্যক্তিগত তথ্য', icon: <User size={20} /> },
    { id: 2, label: 'গাড়ির তথ্য', icon: <Car size={20} /> },
    { id: 3, label: 'ডকুমেন্ট', icon: <FileUp size={20} /> },
    { id: 4, label: 'নিশ্চিতকরণ', icon: <ShieldCheck size={20} /> },
  ];

  return (
    <div className="animate-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
        {steps.map(s => (
          <div key={s.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', opacity: step >= s.id ? 1 : 0.4 }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: step >= s.id ? 'var(--primary)' : 'var(--background)',
              border: `2px solid ${step >= s.id ? 'var(--primary)' : 'var(--border)'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: step >= s.id ? 'white' : 'var(--text-muted)'
            }}>
              {step > s.id ? <CheckCircle2 size={18} /> : s.icon}
            </div>
            <span style={{ fontSize: '0.65rem', fontWeight: '700', marginTop: '0.5rem', color: step >= s.id ? 'var(--primary)' : 'var(--text-muted)' }}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <div className="card animate-in" style={{ minHeight: '400px', display: 'flex', flexDirection: 'column' }}>
        {step === 1 && (
          <div className="animate-in">
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>Step 1: ব্যক্তিগত তথ্য</h3>
            <div className="input-group">
              <label className="label">National ID (এনআইডি)</label>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                  type="text"
                  className="input"
                  placeholder="Ex: 19902616..."
                  value={formData.nid}
                  onChange={(e) => setFormData({ ...formData, nid: e.target.value })}
                  disabled={verified}
                />
                {!verified && (
                  <button className="btn btn-primary" onClick={handleNidVerify} disabled={formData.nid.length < 10 || verifying}>
                    {verifying ? <Loader2 size={18} className="animate-spin" /> : 'Verify'}
                  </button>
                )}
              </div>
              {verified && <p style={{ color: 'var(--success)', fontSize: '0.75rem', marginTop: '0.5rem', fontWeight: '600' }}>✓ NID Verified by Election Commission</p>}
            </div>
            <div className="input-group">
              <label className="label">ফুল নাম (স্বয়ংক্রিয়ভাবে সংগৃহীত)</label>
              <input type="text" className="input" value={formData.name} readOnly placeholder="Verify NID to load name" />
            </div>
            <div className="input-group">
              <label className="label">মোবাইল নম্বর (ওটিপি ভেরিফাইড)</label>
              <input type="text" className="input" placeholder="017XXXXXXXX" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="animate-in">
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>Step 2: গাড়ির তথ্য</h3>
            <div className="input-group">
              <label className="label">গাড়ির রেজিস্ট্রেশন নম্বর</label>
              <input type="text" className="input" placeholder="ঢাকা মেট্রো-গ-১২-৩৪৫৬" value={formData.vehicleNo} onChange={(e) => setFormData({ ...formData, vehicleNo: e.target.value })} />
            </div>
            <div className="input-group">
              <label className="label">জ্বালানীর ধরন (Fuel Type)</label>
              <select className="input" value={formData.fuelType} onChange={(e) => setFormData({ ...formData, fuelType: e.target.value })}>
                {FUEL_TYPES.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
              </select>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="animate-in">
            <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1.5rem' }}>Step 3: ডকুমেন্ট আপলোড</h3>
            <div style={{
              border: '2px dashed var(--border)',
              borderRadius: 'var(--radius-lg)',
              padding: '2.5rem',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'var(--transition)'
            }} onMouseOver={e => e.currentTarget.style.borderColor = 'var(--primary) '} onMouseOut={e => e.currentTarget.style.borderColor = 'var(--border)'}>
              <div style={{ background: 'var(--primary-light)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                <FileUp size={32} color="var(--primary)" />
              </div>
              <p style={{ fontWeight: '700', marginBottom: '0.5rem' }}>গাড়ির রেজিস্ট্রেশন ব্লু-বুক আপলোড করুন</p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>JPG, PNG or PDF (Max 5MB)</p>
            </div>
            <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem', background: 'var(--background)', padding: '0.75rem', borderRadius: 'var(--radius-md)' }}>
              <ShieldCheck size={20} color="var(--primary)" />
              <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>আপনার তথ্য নিরাপদ এবং এনক্রিপ্টেড। শুধুমাত্র অফিসিয়াল কার্ড ইস্যু করার জন্য এটি ব্যবহার করা হবে।</p>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="animate-in" style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ background: 'var(--primary)', width: '80px', height: '80px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', boxShadow: '0 0 0 8px var(--primary-light)' }}>
              <CheckCircle2 size={48} color="white" />
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '1rem' }}>আবেদন জমা হয়েছে!</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              আপনার আবেদনটি সফলভাবে সিস্টেমে যুক্ত করা হয়েছে। আমরা সাধারণত ৪৮ ঘণ্টার মধ্যে যাচাই সম্পন্ন করি। আপনাকে এসএমএস-এর মাধ্যমে পরবর্তী আপডেট জানানো হবে।
            </p>
            <div className="card" style={{ textAlign: 'left', background: 'var(--background)', marginBottom: '2rem' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>Application ID</p>
              <p style={{ fontSize: '1.125rem', fontWeight: '800' }}>#{Math.floor(Math.random() * 90000) + 10000}</p>
            </div>
          </div>
        )}

        <div style={{ marginTop: 'auto', display: 'flex', gap: '1rem', paddingTop: '2rem' }}>
          {step > 1 && step < 4 && (
            <button className="btn btn-secondary" style={{ flex: 1 }} onClick={prevStep}>
              <ArrowLeft size={18} /> পিছনে
            </button>
          )}
          {step < 4 ? (
            <button className="btn btn-primary" style={{ flex: 1 }} onClick={nextStep} disabled={step === 1 && !verified}>
              পরবর্তী <ArrowRight size={18} />
            </button>
          ) : (
            <button className="btn btn-primary" style={{ width: '100%' }} onClick={() => router.push('/dashboard')}>
              ড্যাশবোর্ডে ফিরে যান
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
