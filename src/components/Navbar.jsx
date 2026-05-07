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
        color: scrolled ? '#1e293b' : '#fff',
        padding: '6px 12px', borderRadius: 6,
        display: 'flex', alignItems: 'center', gap: 4,
        transition: 'color 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
        onMouseLeave={e => { if (!open) e.currentTarget.style.color = scrolled ? '#1e293b' : '#fff'; }}
      >
        {label}
        <span style={{ fontSize: 10, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'none' }}>▼</span>
      </button>

      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0,
          background: 'white', borderRadius: 12, minWidth: 220,
          boxShadow: '0 12px 40px rgba(11,45,158,0.15)',
          border: '1px solid #e2e8f0', zIndex: 1000,
          padding: '8px 0', marginTop: 4,
          animation: 'dropdownFade 0.18s ease',
        }}>
          {items.map(item => (
            <a key={item.label} href={item.href} onClick={() => setOpen(false)} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '10px 18px', fontSize: 13.5, fontWeight: 500,
              color: '#1e293b', textDecoration: 'none',
              transition: 'all 0.15s',
              borderLeft: '3px solid transparent',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#f8faff';
                e.currentTarget.style.color = '#0b2d9e';
                e.currentTarget.style.borderLeftColor = '#f97316';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#1e293b';
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

  const simpleLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#whyus' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
        background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(7,30,110,0.85)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>

          {/* Logo */}
          <a href="#home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src="/logo.png"
              alt="LSS - The Technology that Unites"
              style={{
                height: 52,
                maxWidth: 180,
                objectFit: 'contain',
                filter: scrolled ? 'none' : 'brightness(0) invert(1)',
                transition: 'filter 0.3s ease',
              }}
            />
          </a>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 2 }} className="desktop-nav">
            {simpleLinks.slice(0, 1).map(l => (
              <a key={l.href} href={l.href} style={{
                fontSize: 14, fontWeight: 500,
                color: scrolled ? '#1e293b' : '#fff',
                textDecoration: 'none', padding: '6px 12px', borderRadius: 6, transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                onMouseLeave={e => e.currentTarget.style.color = scrolled ? '#1e293b' : '#fff'}
              >{l.label}</a>
            ))}
            <a href="#whyus" style={{
              fontSize: 14, fontWeight: 500, color: scrolled ? '#1e293b' : '#fff',
              textDecoration: 'none', padding: '6px 12px', borderRadius: 6, transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
              onMouseLeave={e => e.currentTarget.style.color = scrolled ? '#1e293b' : '#fff'}
            >About</a>

            <Dropdown label="Services" items={SERVICES_DROPDOWN} scrolled={scrolled} />
            <Dropdown label="Courses" items={COURSES_DROPDOWN} scrolled={scrolled} />

            <a href="#contact" style={{
              fontSize: 14, fontWeight: 500, color: scrolled ? '#1e293b' : '#fff',
              textDecoration: 'none', padding: '6px 12px', borderRadius: 6, transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
              onMouseLeave={e => e.currentTarget.style.color = scrolled ? '#1e293b' : '#fff'}
            >Contact</a>

            <a href="#contact" className="btn btn-primary" style={{ marginLeft: 10, padding: '10px 22px', fontSize: 14 }}>
              Get Free Quote
            </a>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontSize: 26, color: scrolled ? '#0b2d9e' : '#fff',
          }} className="mobile-toggle">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ background: 'white', padding: '16px 20px', borderTop: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[{ label: 'Home', href: '#home' }, { label: 'About', href: '#whyus' }, { label: 'Contact', href: '#contact' }].map(l => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                style={{ padding: '10px 12px', fontSize: 15, fontWeight: 500, color: '#1e293b', textDecoration: 'none', borderRadius: 6 }}>
                {l.label}
              </a>
            ))}

            {/* Mobile Services */}
            <div>
              <button onClick={() => setMobileSection(mobileSection === 'services' ? null : 'services')}
                style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '10px 12px', fontSize: 15, fontWeight: 500, color: '#1e293b', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', fontFamily: 'inherit' }}>
                Services <span>{mobileSection === 'services' ? '▲' : '▼'}</span>
              </button>
              {mobileSection === 'services' && (
                <div style={{ paddingLeft: 16, borderLeft: '3px solid #f97316', marginLeft: 12 }}>
                  {SERVICES_DROPDOWN.map(item => (
                    <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                      style={{ display: 'block', padding: '8px 12px', fontSize: 14, color: '#475569', textDecoration: 'none' }}>
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Courses */}
            <div>
              <button onClick={() => setMobileSection(mobileSection === 'courses' ? null : 'courses')}
                style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '10px 12px', fontSize: 15, fontWeight: 500, color: '#1e293b', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', fontFamily: 'inherit' }}>
                Courses <span>{mobileSection === 'courses' ? '▲' : '▼'}</span>
              </button>
              {mobileSection === 'courses' && (
                <div style={{ paddingLeft: 16, borderLeft: '3px solid #f97316', marginLeft: 12 }}>
                  {COURSES_DROPDOWN.map(item => (
                    <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}
                      style={{ display: 'block', padding: '8px 12px', fontSize: 14, color: '#475569', textDecoration: 'none' }}>
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#contact" className="btn btn-primary" style={{ marginTop: 8, justifyContent: 'center' }} onClick={() => setMenuOpen(false)}>
              Get Free Quote
            </a>
          </div>
        )}
      </nav>

      <style>{`
        @keyframes dropdownFade { from { opacity:0; transform:translateY(-8px); } to { opacity:1; transform:translateY(0); } }
        @media (max-width: 900px) { .desktop-nav { display: none !important; } }
        @media (min-width: 901px) { .mobile-toggle { display: none !important; } }
      `}</style>
    </>
  );
};

export default Navbar;
