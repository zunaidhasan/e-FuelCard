'use client';

import { useEffect, useState } from 'react';
import { MOCK_STATIONS } from '@/lib/constants';
import { MapPin, Navigation, Info, ExternalLink } from 'lucide-react';

export default function FuelStationMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="card" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--background)' }}>
        <p style={{ color: 'var(--text-muted)' }}>ম্যাপ লোড করা হচ্ছে...</p>
      </div>
    );
  }

  // To avoid SSR issues with Leaflet, we would normally use dynamic import
  // But for this prototype UI, I'll create a simulated functional map view 
  // that looks like a real map to ensure it runs perfectly in the browser environment.
  
  return (
    <div className="animate-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '1rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Navigation size={18} color="var(--primary)" /> নিকটস্থ ফুয়েল স্টেশন
        </h3>
        <p style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: '600' }}>৩টি স্টেশন পাওয়া গেছে</p>
      </div>

      <div style={{ position: 'relative', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border)' }}>
        {/* Mock Map Background */}
        <div style={{ 
          height: '350px', 
          background: '#e5e7eb url("https://api.mapbox.com/styles/v1/mapbox/light-v10/static/90.3934,23.7511,13,0/600x600?access_token=none") center/cover',
          position: 'relative'
        }}>
          {MOCK_STATIONS.map((station, i) => (
            <div key={station.id} style={{ 
              position: 'absolute', 
              top: `${40 + (i * 15)}%`, 
              left: `${30 + (i * 20)}%`, 
              cursor: 'pointer',
              zIndex: 10
            }}>
              <div style={{ background: 'var(--primary)', padding: '6px', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,106,78,0.4)', border: '2px solid white' }}>
                <MapPin size={16} color="white" />
              </div>
              <div style={{ 
                position: 'absolute', 
                top: '100%', 
                left: '50%', 
                transform: 'translateX(-50%)', 
                background: 'white', 
                padding: '4px 8px', 
                borderRadius: '4px', 
                whiteSpace: 'nowrap', 
                fontSize: '0.65rem', 
                fontWeight: '700',
                marginTop: '4px',
                boxShadow: 'var(--shadow-sm)'
              }}>
                {station.name}
              </div>
            </div>
          ))}
          
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            left: '1rem',
            right: '1rem',
            background: 'white',
            padding: '1rem',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div>
              <p style={{ fontSize: '0.875rem', fontWeight: '800' }}>Trust Filling Station</p>
              <p style={{ fontSize: '0.65rem', color: 'var(--text-secondary)' }}>Karwan Bazar • ০.৫ কিমি দূরে</p>
            </div>
            <button className="btn btn-primary" style={{ padding: '0.5rem 0.75rem', fontSize: '0.75rem' }}>
              নেভিগেট করুন <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {MOCK_STATIONS.map(station => (
          <div key={station.id} className="card" style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ background: 'var(--primary-light)', padding: '10px', borderRadius: '10px' }}>
                <MapPin size={20} color="var(--primary)" />
              </div>
              <div>
                <h4 style={{ fontSize: '0.875rem', fontWeight: '700' }}>{station.name}</h4>
                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{station.address}</p>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '0.875rem', fontWeight: '700', color: 'var(--primary)' }}>OPEN</p>
              <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>0.5 km</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
