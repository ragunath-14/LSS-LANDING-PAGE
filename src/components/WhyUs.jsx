import React from 'react';
import { WHY_US } from '../data';

const WhyUs = () => (
  <section id="whyus" className="section" style={{ background: '#ffffff' }}>
    <div className="container">
      <div className="whyus-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 70, alignItems: 'center' }}>
        {/* Left */}
        <div>
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Why Businesses <span>Trust LSS</span> for Their Growth</h2>
          <p className="section-subtitle" style={{ marginBottom: 36 }}>
            We combine industry expertise, cutting-edge technology, and a client-first mindset to deliver solutions that truly make a difference.
          </p>
          <div className="whyus-cards" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {WHY_US.map((item, i) => (
              <div key={i} style={{
                padding: '20px', background: '#f8f9fa', borderRadius: 14,
                borderTop: '1px solid #e5e7eb',
                borderRight: '1px solid #e5e7eb',
                borderBottom: '1px solid #e5e7eb',
                borderLeft: '4px solid #2ec4a5',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.06)'; e.currentTarget.style.background = '#ffffff'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.background = '#f8f9fa'; }}
              >
                <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: '#061c3f', marginBottom: 6 }}>{item.title}</h4>
                <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right */}
        <div className="whyus-visual" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: 'clamp(280px,26vw,400px)', height: 'clamp(280px,26vw,400px)',
            background: 'linear-gradient(135deg,#2ec4a5,#1da88b)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 'clamp(60px,7vw,110px)', boxShadow: '0 30px 60px rgba(46,196,165,0.20)',
            animation: 'morphBlobWhy 8s ease-in-out infinite',
          }}>🏆</div>
          {/* Badges */}
          {[
            { label: '500+ Projects', color: '#1da88b', top: '10%', left: '-10%' },
            { label: 'ISO Certified', color: '#059669', bottom: '10%', right: '-10%' },
          ].map(({ label, color, ...pos }) => (
            <div key={label} className="whyus-badge" style={{
              position: 'absolute', ...pos,
              background: 'white', padding: '12px 20px',
              borderRadius: 12, fontWeight: 700, fontSize: 14,
              color, boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              display: 'flex', alignItems: 'center', gap: 8,
              border: '1px solid #e5e7eb',
            }}>
              <span style={{ fontSize: 20 }}>✅</span> {label}
            </div>
          ))}
        </div>
      </div>
    </div>
    <style>{`
      @keyframes morphBlobWhy {
        0%,100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
      }
      @media(max-width:900px) {
        .whyus-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        .whyus-visual { order: -1; }
        .whyus-badge { display: none !important; }
      }
      @media(max-width:600px) {
        .whyus-cards { grid-template-columns: 1fr !important; }
        .whyus-visual { display: none !important; }
      }
    `}</style>
  </section>
);

export default WhyUs;
