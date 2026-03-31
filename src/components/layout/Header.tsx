'use client';

import { Menu, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 0',
      marginBottom: '1rem'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem'
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'var(--primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '0.75rem',
          boxShadow: 'var(--shadow-md)'
        }}>
          EP
        </div>
        <div>
          <h1 style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.025em', color: 'var(--primary)' }}>
            e-FuelCard
          </h1>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: '500', textTransform: 'uppercase' }}>
            Government of Bangladesh
          </p>
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button className="btn btn-secondary" style={{ padding: '0.5rem', width: '40px', height: '40px', borderRadius: '50%' }}>
          <Bell size={20} />
        </button>
        <button className="btn btn-secondary" style={{ padding: '0.5rem', width: '40px', height: '40px', borderRadius: '50%' }}>
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
