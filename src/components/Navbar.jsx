import React, { useState, useEffect, useRef } from 'react';

const SERVICES_DROPDOWN = [
  { label: '⚙️ PLC Services', href: '#plc' },
  { label: '📈 Digital Marketing', href: '#digital' },
  { label: '📹 CCTV Services', href: '#cctv' },
  { label: '💻 IT Services', href: '#it' },
];

const COURSES_DROPDOWN = [
  { label: '⚙️ PLC Programming', href: '#contact' },
  { label: '🖥️ HMI & SCADA', href: '#contact' },
  { label: '🔧 Industrial Automation', href: '#contact' },
  { label: '🌐 Digital Marketing', href: '#contact' },
  { label: '💻 Full Stack Development', href: '#contact' },
  { label: '📱 Mobile App Development', href: '#contact' },
];

const Dropdown = ({ label, items, scrolled }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button onClick={() => setOpen(!open)} style={{
        background: 'none', border: 'none', cursor: 'pointer',
        fontSize: 14, fontWeight: 500, fontFamily: 'inherit',
        color: scrolled ? '#061c3f' : '#061c3f',
        padding: '6px 12px', borderRadius: 6,
        display: 'flex', alignItems: 'center', gap: 4,
        transition: 'color 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.color = '#2ec4a5'}
        onMouseLeave={e => { if (!open) e.currentTarget.style.color = '#061c3f'; }}
      >
        {label}
        <span style={{ fontSize: 10, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }}>▼</span>
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0,
          background: 'white', borderRadius: 12, minWidth: 220,
          boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
          border: '1px solid #e5e7eb', zIndex: 1000,
          padding: '8px 0', marginTop: 4,
          animation: 'dropdownFade 0.18s ease',
        }}>
          {items.map(item => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 18px', fontSize: 13.5, fontWeight: 500,
              color: '#0f172a', textDecoration: 'none',
              transition: 'all 0.15s',
              borderLeft: '3px solid transparent',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#f8f9fa';
                e.currentTarget.style.color = '#1da88b';
                e.currentTarget.style.borderLeftColor = '#2ec4a5';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#0f172a';
                e.currentTarget.style.borderLeftColor = 'transparent';
              }}
            >{item.label}</a>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* Kovai-style: always white navbar */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, 
        height: menuOpen ? '100vh' : 'auto',
        zIndex: 10000,
        background: menuOpen ? '#ffffff' : 'rgba(255,255,255,0.98)',
        backdropFilter: menuOpen ? 'none' : 'blur(12px)',
        boxShadow: (scrolled || menuOpen) ? '0 1px 12px rgba(0,0,0,0.06)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        overflowY: menuOpen ? 'auto' : 'visible',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          {/* Logo */}
          <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src="/logo.png"
              alt="LSS - The Technology that Unites"
              style={{
                height: 48,
                maxWidth: 160,
                objectFit: 'contain',
                transition: 'opacity 0.3s ease',
              }}
            />
          </a>

          {/* Desktop Nav — always dark text on white bg like kovai */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="desktop-nav">
            <a href="#home" style={{
              fontSize: 14, fontWeight: 500, color: '#061c3f',
              textDecoration: 'none', padding: '6px 12px', borderRadius: 6, transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#2ec4a5'}
              onMouseLeave={e => e.currentTarget.style.color = '#061c3f'}
            >Home</a>

            <a href="#whyus" style={{
              fontSize: 14, fontWeight: 500, color: '#061c3f',
              textDecoration: 'none', padding: '6px 12px', borderRadius: 6, transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#2ec4a5'}
              onMouseLeave={e => e.currentTarget.style.color = '#061c3f'}
            >About</a>

            <Dropdown label="Services" items={SERVICES_DROPDOWN} scrolled={scrolled} />
            <Dropdown label="Courses" items={COURSES_DROPDOWN} scrolled={scrolled} />

            <a href="#contact" style={{
              fontSize: 14, fontWeight: 500, color: '#061c3f',
              textDecoration: 'none', padding: '6px 12px', borderRadius: 6, transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#2ec4a5'}
              onMouseLeave={e => e.currentTarget.style.color = '#061c3f'}
            >Contact</a>

            <a href="#contact" className="btn btn-primary" style={{ marginLeft: 10, padding: '10px 22px', fontSize: 14 }}>
              Get Free Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 26, color: '#061c3f',
            zIndex: 1001,
          }} className="mobile-toggle">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu — Content */}
        {menuOpen && (
          <div className="animate-fade-in" style={{
            padding: '20px 24px 60px',
            display: 'flex', flexDirection: 'column', gap: 12,
          }}>


            {[{ label: 'Home', href: '#home' }, { label: 'About', href: '#whyus' }, { label: 'Contact', href: '#contact' }].map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                style={{
                  padding: '14px 16px', fontSize: 16, fontWeight: 500,
                  color: '#061c3f', textDecoration: 'none', borderRadius: 10,
                  transition: 'background 0.2s',
                  borderBottom: '1px solid #f3f4f6',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#f8f9fa'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                {l.label}
              </a>
            ))}

            {/* Mobile Services */}
            <div>
              <button onClick={() => setMobileSection(mobileSection === 'services' ? null : 'services')}
                style={{
                  width: '100%', textAlign: 'left',
                  background: mobileSection === 'services' ? '#f8f9fa' : 'transparent',
                  border: 'none', padding: '14px 16px', fontSize: 16,
                  fontWeight: 500, color: '#061c3f', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between',
                  fontFamily: 'inherit', borderRadius: 10,
                  borderBottom: '1px solid #f3f4f6',
                }}>
                Services <span style={{ color: '#2ec4a5', fontSize: 12 }}>{mobileSection === 'services' ? '▲' : '▼'}</span>
              </button>
              {mobileSection === 'services' && (
                <div style={{ paddingLeft: 16, borderLeft: '3px solid #2ec4a5', marginLeft: 16, marginBottom: 8, marginTop: 4 }}>
                  {SERVICES_DROPDOWN.map(item => (
                    <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                      style={{ display: 'block', padding: '12px 14px', fontSize: 15, color: '#4b5563', textDecoration: 'none', borderRadius: 8 }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Courses */}
            <div>
              <button onClick={() => setMobileSection(mobileSection === 'courses' ? null : 'courses')}
                style={{
                  width: '100%', textAlign: 'left',
                  background: mobileSection === 'courses' ? '#f8f9fa' : 'transparent',
                  border: 'none', padding: '14px 16px', fontSize: 16,
                  fontWeight: 500, color: '#061c3f', cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between',
                  fontFamily: 'inherit', borderRadius: 10,
                  borderBottom: '1px solid #f3f4f6',
                }}>
                Courses <span style={{ color: '#2ec4a5', fontSize: 12 }}>{mobileSection === 'courses' ? '▲' : '▼'}</span>
              </button>
              {mobileSection === 'courses' && (
                <div style={{ paddingLeft: 16, borderLeft: '3px solid #2ec4a5', marginLeft: 16, marginBottom: 8, marginTop: 4 }}>
                  {COURSES_DROPDOWN.map(item => (
                    <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                      style={{ display: 'block', padding: '12px 14px', fontSize: 15, color: '#4b5563', textDecoration: 'none', borderRadius: 8 }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#contact" className="btn btn-primary" style={{ marginTop: 16, justifyContent: 'center', fontSize: 16 }} onClick={() => setMenuOpen(false)}>
              Get Free Quote
            </a>
          </div>
        )}
      </nav>

      <style>{`
        @keyframes dropdownFade { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }
        @keyframes slideDown { from { opacity:0; transform:translateY(-10px); } to { opacity:1; transform:translateY(0); } }
        @media (max-width: 900px) { .desktop-nav { display: none !important; } }
        @media (min-width: 901px) { .mobile-toggle { display: none !important; } }
      `}</style>
    </>
  );
};

export default Navbar;
