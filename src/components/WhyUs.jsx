import React from 'react';
import { WHY_US } from '../data';

const WhyUs = () => (
  <section id="whyus" className="section section-alt">
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        {/* Left */}
        <div>
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">Why Businesses <span>Trust LSS</span> for Their Growth</h2>
          <p className="section-subtitle" style={{ marginBottom: 40 }}>
            We combine industry expertise, cutting-edge technology, and a client-first mindset to deliver solutions that truly make a difference.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {WHY_US.map((item, i) => (
              <div key={i} style={{
                padding: '20px', background: 'white', borderRadius: 12,
                boxShadow: '0 2px 16px rgba(11,45,158,0.06)',
                borderLeft: '4px solid #0b2d9e',
                transition: 'all 0.3s',
              }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: 28, marginBottom: 8 }}>{item.icon}</div>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: '#1e293b', marginBottom: 6 }}>{item.title}</h4>
                <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right */}
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: 420, height: 420,
            background: 'linear-gradient(135deg,#0b2d9e,#1a3fbf)',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 120, boxShadow: '0 30px 80px rgba(11,45,158,0.3)',
            animation: 'morphBlobWhy 8s ease-in-out infinite',
          }}>🏆</div>
          {/* Badges */}
          {[
            { label: '500+ Projects', color: '#f97316', top: '10%', left: '-10%' },
            { label: 'ISO Certified', color: '#059669', bottom: '10%', right: '-10%' },
          ].map(({ label, color, ...pos }) => (
            <div key={label} style={{
              position: 'absolute', ...pos,
              background: 'white', padding: '12px 20px',
              borderRadius: 12, fontWeight: 700, fontSize: 14,
              color, boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
              display: 'flex', alignItems: 'center', gap: 8,
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
      @media(max-width:768px) {
        #whyus .container > div { grid-template-columns: 1fr !important; }
        #whyus .container > div > div:last-child { display: none !important; }
      }
    `}</style>
  </section>
);

export default WhyUs;
