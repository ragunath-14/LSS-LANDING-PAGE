import React, { useState } from 'react';
import { SERVICES } from '../data';

const Services = () => {
  const [active, setActive] = useState('plc');
  const current = SERVICES.find(s => s.id === active);

  return (
    <section className="section" style={{ background: '#f8f9fa' }}>
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">Our <span>Core Services</span></h2>
          <p className="section-subtitle">
            From industrial automation to digital growth — we offer end-to-end solutions tailored to your needs.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="services-tabs" style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '8px 12px', 
          flexWrap: 'wrap', 
          marginBottom: 48,
          padding: '0 10px'
        }}>
          {SERVICES.map(s => (
            <button key={s.id} id={s.id} onClick={() => setActive(s.id)} style={{
              padding: '10px 20px', borderRadius: 50, border: 'none', cursor: 'pointer',
              fontFamily: 'inherit', fontSize: '13px', fontWeight: 600,
              background: active === s.id ? 'linear-gradient(135deg, #2ec4a5, #1da88b)' : '#ffffff',
              color: active === s.id ? '#ffffff' : '#6b7280',
              boxShadow: active === s.id ? '0 6px 20px rgba(46,196,165,0.30)' : '0 1px 4px rgba(0,0,0,0.06)',
              transition: 'all 0.3s ease',
              transform: active === s.id ? 'translateY(-2px)' : 'none',
            }}>
              {s.label}
            </button>
          ))}
        </div>

        {/* Section Description */}
        <div style={{
          textAlign: 'center', marginBottom: 36,
          padding: '18px 28px',
          background: '#ffffff',
          borderRadius: 14, border: '1px solid #e5e7eb',
        }}>
          <p style={{ fontSize: 'clamp(14px,1.2vw,15px)', color: '#6b7280', fontWeight: 500 }}>{current.description}</p>
        </div>

        {/* Cards Grid */}
        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 16,
        }}>
          {current.items.map((item, i) => (
            <div key={i}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.08)';
                e.currentTarget.style.borderColor = '#2ec4a5';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';
                e.currentTarget.style.borderColor = '#e5e7eb';
              }}
              style={{
                background: '#ffffff', borderRadius: 12, padding: '20px 18px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                border: '1px solid #e5e7eb',
                transition: 'all 0.3s ease',
                display: 'flex', alignItems: 'flex-start', gap: 14,
              }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                background: 'rgba(46,196,165,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20,
              }}>{item.icon}</div>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: '#061c3f', lineHeight: 1.4, marginBottom: 4 }}>
                  {item.name}
                </h4>
                <div style={{
                  width: 28, height: 3, borderRadius: 2,
                  background: 'linear-gradient(90deg, #2ec4a5, #4dd8ba)', marginTop: 6,
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="#contact" className="btn btn-primary" style={{ fontSize: 16, padding: '14px 36px' }}>
            Get a Free Consultation →
          </a>
        </div>
      </div>

      <style>{`
        @media(max-width:600px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Services;
