import React, { useState } from 'react';
import { TESTIMONIALS } from '../data';

const Testimonials = () => {
  const [idx, setIdx] = useState(0);

  return (
    <section className="section" style={{ background: 'linear-gradient(135deg,#071e6e,#0b2d9e)', overflow: 'hidden', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-header center">
          <span className="section-tag" style={{ background: 'rgba(249,115,22,0.2)', color: '#fdba74' }}>Testimonials</span>
          <h2 className="section-title" style={{ color: 'white' }}>What Our <span>Clients Say</span></h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.65)' }}>
            Don't just take our word for it — hear from the businesses we've helped succeed.
          </p>
        </div>

        {/* Main card */}
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{
            background: 'white', borderRadius: 20, padding: '44px 48px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
            position: 'relative',
          }}>
            <div style={{ fontSize: 80, color: '#0b2d9e', opacity: 0.1, position: 'absolute', top: 20, left: 36, lineHeight: 1, fontFamily: 'serif' }}>"</div>

            <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
              {[...Array(TESTIMONIALS[idx].rating)].map((_, i) => (
                <span key={i} style={{ color: '#f59e0b', fontSize: 20 }}>★</span>
              ))}
            </div>

            <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, marginBottom: 30, fontStyle: 'italic' }}>
              "{TESTIMONIALS[idx].text}"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{
                width: 52, height: 52, borderRadius: '50%',
                background: TESTIMONIALS[idx].color,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', fontSize: 22, fontWeight: 800,
              }}>{TESTIMONIALS[idx].avatar}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, color: '#1e293b' }}>{TESTIMONIALS[idx].name}</div>
                <div style={{ fontSize: 13, color: '#94a3b8' }}>{TESTIMONIALS[idx].role}</div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 32 }}>
            {TESTIMONIALS.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} style={{
                width: i === idx ? 32 : 10, height: 10,
                borderRadius: 5, border: 'none', cursor: 'pointer',
                background: i === idx ? '#f97316' : 'rgba(255,255,255,0.3)',
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
                  background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
                  color: 'white', fontSize: 18, cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#f97316'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >{arrow}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
