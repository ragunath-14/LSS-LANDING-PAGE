import React, { useState } from 'react';
import { SERVICES } from '../data';

const Services = () => {
  const [active, setActive] = useState('plc');
  const current = SERVICES.find(s => s.id === active);

  return (
    <section className="section" style={{ background: '#f8faff' }}>
      <div className="container">
        <div className="section-header center">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">Our <span>Core Services</span></h2>
          <p className="section-subtitle">
            From industrial automation to digital growth — we offer end-to-end solutions tailored to your needs.
          </p>
        </div>

        {/* Tab Buttons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 50 }}>
          {SERVICES.map(s => (
            <button key={s.id} id={s.id} onClick={() => setActive(s.id)} style={{
              padding: '12px 28px', borderRadius: 50, border: 'none', cursor: 'pointer',
              fontFamily: 'inherit', fontSize: 14, fontWeight: 600,
              background: active === s.id ? s.color : 'white',
              color: active === s.id ? 'white' : '#64748b',
              boxShadow: active === s.id ? `0 6px 20px ${s.color}40` : '0 2px 10px rgba(0,0,0,0.06)',
              transition: 'all 0.3s ease',
              transform: active === s.id ? 'translateY(-2px)' : 'none',
            }}>
              {s.label}
            </button>
          ))}
        </div>

        {/* Section Description */}
        <div style={{
          textAlign: 'center', marginBottom: 40,
          padding: '20px 30px',
          background: `linear-gradient(135deg, ${current.color}10, ${current.color}05)`,
          borderRadius: 16, border: `1px solid ${current.color}20`,
        }}>
          <p style={{ fontSize: 16, color: '#475569', fontWeight: 500 }}>{current.description}</p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: 20,
        }}>
          {current.items.map((item, i) => (
            <div key={i}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = `0 12px 32px ${current.color}25`;
                e.currentTarget.style.borderColor = current.color;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 16px rgba(0,0,0,0.06)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
              style={{
                background: 'white', borderRadius: 14, padding: '24px 20px',
                boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
                border: '2px solid transparent',
                transition: 'all 0.3s ease',
                display: 'flex', alignItems: 'flex-start', gap: 14,
              }}>
              <div style={{
                width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                background: `${current.color}12`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 22,
              }}>{item.icon}</div>
              <div>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: '#1e293b', lineHeight: 1.4, marginBottom: 4 }}>
                  {item.name}
                </h4>
                <div style={{
                  width: 28, height: 3, borderRadius: 2,
                  background: current.color, marginTop: 6,
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: 50 }}>
          <a href="#contact" className="btn btn-primary" style={{ fontSize: 16, padding: '14px 36px' }}>
            Get a Free Consultation →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
