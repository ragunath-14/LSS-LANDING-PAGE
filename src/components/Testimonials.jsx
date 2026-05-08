import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';

const Testimonials = () => {
  const [idx, setIdx] = useState(0);

  return (
    <section className="section" style={{
      background: '#f8f9fa',
      overflow: 'hidden', position: 'relative',
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header center">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">What Our <span>Clients Say</span></h2>
          <p className="section-subtitle">
            Don't just take our word for it — hear from the businesses we've helped succeed.
          </p>
        </div>

        {/* Main card */}
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div className="testimonial-card" style={{
            background: '#ffffff', borderRadius: 20, padding: '44px 48px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
            border: '1px solid #e5e7eb',
            position: 'relative',
          }}>
            <div style={{ fontSize: 80, color: '#2ec4a5', opacity: 0.10, position: 'absolute', top: 20, left: 36, lineHeight: 1, fontFamily: 'serif' }}>"</div>

            <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
              {[...Array(TESTIMONIALS[idx].rating)].map((_, i) => (
                <span key={i} style={{ color: '#f59e0b', fontSize: 20 }}>★</span>
              ))}
            </div>

            <p style={{ fontSize: 'clamp(15px,1.3vw,17px)', color: '#4b5563', lineHeight: 1.8, marginBottom: 30, fontStyle: 'italic' }}>
              "{TESTIMONIALS[idx].text}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: 52, height: 52, borderRadius: '50%',
                background: 'linear-gradient(135deg, #2ec4a5, #1da88b)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: 22, fontWeight: 800,
              }}>{TESTIMONIALS[idx].avatar}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, color: '#061c3f' }}>{TESTIMONIALS[idx].name}</div>
                <div style={{ fontSize: 13, color: '#9ca3af' }}>{TESTIMONIALS[idx].role}</div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 32 }}>
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} style={{
                width: i === idx ? 32 : 10, height: 10,
                borderRadius: 5, border: 'none', cursor: 'pointer',
                background: i === idx ? '#2ec4a5' : '#d1d5db',
                transition: 'all 0.3s',
              }} />
            ))}
          </div>

          {/* Arrows */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 20 }}>
            {['←', '→'].map((arrow, i) => (
              <button key={arrow} onClick={() => setIdx(p => (p + (i === 0 ? -1 : 1) + TESTIMONIALS.length) % TESTIMONIALS.length)}
                style={{
                  width: 44, height: 44, borderRadius: '50%',
                  background: '#ffffff', border: '1px solid #e5e7eb',
                  color: '#061c3f', fontSize: 18, cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#2ec4a5'; e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = '#2ec4a5'; }}
                onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#061c3f'; e.currentTarget.style.borderColor = '#e5e7eb'; }}
              >{arrow}</button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:600px) {
          .testimonial-card { padding: 28px 22px !important; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
