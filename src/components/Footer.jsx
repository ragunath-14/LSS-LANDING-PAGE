import React from 'react';

const Footer = () => {
  const cols = [
    {
      title: 'PLC Services',
      links: ['PLC Programming','PLC Panel Design','PLC Installation','PLC Troubleshooting','PLC Migration','HMI Integration','SCADA Integration'],
    },
    {
      title: 'Digital Marketing',
      links: ['SEO Services','Social Media Marketing','Performance Marketing','Content Marketing','Email Marketing','Lead Generation','Local SEO'],
    },
    {
      title: 'CCTV & IT',
      links: ['CCTV Installation','IP Camera Setup','DVR/NVR Config','Remote Monitoring','Software Development','Web Applications','Cloud Solutions'],
    },
  ];

  return (
    <footer style={{ background: '#ffffff', color: '#061c3f', paddingTop: 0 }}>
      {/* Top CTA Strip — mint green accent */}
      <div style={{
        background: 'linear-gradient(135deg, #2ec4a5, #1da88b)',
        padding: '28px 20px',
      }}>
        <div className="container footer-cta" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontSize: 'clamp(16px,2vw,20px)', fontWeight: 800, color: 'white' }}>Ready to Transform Your Business?</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>Get expert consultation — Free, Fast, and No Obligations.</div>
          </div>
          <a href="#contact" style={{
            background: 'white', color: '#1da88b', padding: '12px 28px',
            borderRadius: 10, fontWeight: 700, fontSize: 15, textDecoration: 'none',
            whiteSpace: 'nowrap', boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            transition: 'all 0.3s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'; }}
          >Get Started Today →</a>
        </div>
      </div>

      {/* Main Footer — kovai.co style: light background */}
      <div style={{ background: '#f8f9fa', borderTop: '1px solid #e5e7eb' }}>
        <div className="container" style={{ paddingTop: 56, paddingBottom: 40 }}>
          <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, marginBottom: 50 }}>
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 10,
                  background: 'linear-gradient(135deg,#2ec4a5,#4dd8ba)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
                }}>⚙️</div>
                <div>
                  <div style={{ fontSize: 20, fontWeight: 900, color: '#061c3f' }}>LSS <span style={{ color: '#2ec4a5' }}>PLC</span></div>
                  <div style={{ fontSize: 10, color: '#9ca3af', letterSpacing: '0.1em' }}>SERVICES</div>
                </div>
              </div>
              <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.8, marginBottom: 24 }}>
                Your trusted partner for industrial automation, digital marketing, security systems, and IT services across India.
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                {['💬','🔗','📘','📸'].map((icon, i) => (
                  <a key={i} href="#" style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: '#ffffff',
                    border: '1px solid #e5e7eb',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 15, textDecoration: 'none', transition: 'all 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#2ec4a5'; e.currentTarget.style.borderColor = '#2ec4a5'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.borderColor = '#e5e7eb'; }}
                  >{icon}</a>
                ))}
              </div>
            </div>

            {cols.map(col => (
              <div key={col.title}>
                <h4 style={{ fontSize: 14, fontWeight: 700, color: '#061c3f', marginBottom: 20, paddingBottom: 10, borderBottom: '2px solid #2ec4a5', display: 'inline-block' }}>
                  {col.title}
                </h4>
                <ul style={{ listStyle: 'none' }}>
                  {col.links.map(l => (
                    <li key={l} style={{ marginBottom: 10 }}>
                      <a href="#contact" style={{ color: '#6b7280', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: 6 }}
                        onMouseEnter={e => e.currentTarget.style.color = '#2ec4a5'}
                        onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
                      >
                        <span style={{ color: '#2ec4a5', fontSize: 8 }}>●</span> {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div style={{
            borderTop: '1px solid #e5e7eb',
            paddingTop: 32, paddingBottom: 60, paddingLeft: 20, paddingRight: 20,
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', flexWrap: 'wrap', gap: 20,
          }}>
            <p style={{ fontSize: 13, color: '#9ca3af' }}>
              © {new Date().getFullYear()} LSS PLC Services. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: 24 }}>
              {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(l => (
                <a key={l} href="#" style={{ fontSize: 12, color: '#9ca3af', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#2ec4a5'}
                  onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
                >{l}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media(max-width:540px){
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-cta { flex-direction: column; text-align: center; }
          .footer-cta a { width: 100%; text-align: center; display: block; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
