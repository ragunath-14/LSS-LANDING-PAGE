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
    <footer style={{ background: '#071e6e', color: 'white', paddingTop: 70 }}>
      {/* Top CTA Strip */}
      <div style={{ background: '#f97316', padding: '24px 20px', textAlign: 'center', marginTop: -1 }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: 'white' }}>Ready to Transform Your Business?</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)' }}>Get expert consultation — Free, Fast, and No Obligations.</div>
          </div>
          <a href="#contact" style={{
            background: 'white', color: '#f97316', padding: '12px 28px',
            borderRadius: 8, fontWeight: 700, fontSize: 15, textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}>Get Started Today →</a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container" style={{ paddingTop: 60, paddingBottom: 40 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, marginBottom: 50 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: 'linear-gradient(135deg,#f97316,#f59e0b)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22,
              }}>⚙️</div>
              <div>
                <div style={{ fontSize: 22, fontWeight: 900, color: 'white' }}>LSS <span style={{ color: '#f97316' }}>PLC</span></div>
                <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>SERVICES</div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.8, marginBottom: 24 }}>
              Your trusted partner for industrial automation, digital marketing, security systems, and IT services across India.
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              {['💬','🔗','📘','📸'].map((icon, i) => (
                <a key={i} href="#" style={{
                  width: 38, height: 38, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, textDecoration: 'none', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => e.currentTarget.style.background = '#f97316'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                >{icon}</a>
              ))}
            </div>
          </div>

          {cols.map(col => (
            <div key={col.title}>
              <h4 style={{ fontSize: 15, fontWeight: 700, color: 'white', marginBottom: 20, paddingBottom: 12, borderBottom: '2px solid #f97316', display: 'inline-block' }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none' }}>
                {col.links.map(l => (
                  <li key={l} style={{ marginBottom: 10 }}>
                    <a href="#contact" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: 13, transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: 6 }}
                      onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                      onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                    >
                      <span style={{ color: '#f97316', fontSize: 10 }}>▶</span> {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 24, display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
            © {new Date().getFullYear()} LSS PLC Services. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service', 'Sitemap'].map(l => (
              <a key={l} href="#" style={{ fontSize: 12, color: 'rgba(255,255,255,0.45)', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:900px){
          footer .container > div:first-child { grid-template-columns: 1fr 1fr !important; }
        }
        @media(max-width:540px){
          footer .container > div:first-child { grid-template-columns: 1fr !important; }
          footer > div:first-child .container { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
