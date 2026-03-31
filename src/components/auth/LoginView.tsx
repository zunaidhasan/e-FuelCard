'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Smartphone, ShieldCheck, ArrowRight } from 'lucide-react';

export default function LoginView() {
  const [nid, setNid] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleSendOtp = () => {
    if (nid.length >= 10) setStep(2);
  };

  const handleLogin = () => {
    if (otp === '1234') {
      router.push('/dashboard');
    }
  };

  return (
    <div className="card animate-in" style={{ marginTop: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '0.5rem' }}>
          {step === 1 ? 'Login' : 'Verification'}
        </h2>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
          {step === 1 ? 'আপনার এনআইডি বা মোবাইল নম্বর লিখুন' : 'আপনার মোবাইলে পাঠানো ৪ সংখ্যার কোড লিখুন'}
        </p>
      </div>

      {step === 1 ? (
        <div className="animate-in">
          <div className="input-group">
            <label className="label">National ID / Mobile Number</label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                className="input"
                placeholder="Ex: 19902616..."
                value={nid}
                onChange={(e) => setNid(e.target.value)}
                style={{ paddingLeft: '2.75rem' }}
              />
              <Smartphone size={18} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>
          </div>
          <button 
            className="btn btn-primary" 
            style={{ width: '100%' }} 
            onClick={handleSendOtp}
            disabled={nid.length < 10}
          >
            OTP পাঠান <ArrowRight size={18} />
          </button>
        </div>
      ) : (
        <div className="animate-in">
          <div className="input-group">
            <label className="label">OTP Code</label>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                className="input"
                placeholder="****"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={4}
                style={{ paddingLeft: '2.75rem', letterSpacing: '0.5rem', textAlign: 'center' }}
              />
              <ShieldCheck size={18} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>
            <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>
              Mock OTP is <b>1234</b>
            </p>
          </div>
          <button 
            className="btn btn-primary" 
            style={{ width: '100%' }} 
            onClick={handleLogin}
          >
            প্রবেশ করুন <ArrowRight size={18} />
          </button>
          <button 
            className="btn btn-secondary" 
            style={{ width: '100%', marginTop: '0.75rem' }} 
            onClick={() => setStep(1)}
          >
            নম্বর পরিবর্তন করুন
          </button>
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
          By logging in, you agree to our Terms & Conditions
        </p>
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_Seal_of_Bangladesh.svg/960px-Government_Seal_of_Bangladesh.svg.png?_=20250711194103" 
            alt="Gov Logo" 
            style={{ width: '32px', height: '32px', opacity: 0.6 }} 
          />
        </div>
      </div>
    </div>
  );
}
