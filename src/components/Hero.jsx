import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [typed, setTyped] = useState('');
  const words = ['Industrial Automation', 'Digital Marketing', 'CCTV Security', 'IT Solutions'];
  const [wi, setWi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wi];
    let timeout;
    if (!deleting && typed === current) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && typed === '') {
      setDeleting(false);
      setWi(p => (p + 1) % words.length);
    } else {
      const speed = deleting ? 60 : 100;
      timeout = setTimeout(() => {
        setTyped(deleting ? current.slice(0, typed.length - 1) : current.slice(0, typed.length + 1));
      }, speed);
    }
    return () => clearTimeout(timeout);
  }, [typed, deleting, wi]);

  return (
    <section id="home" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #071e6e 0%, #0b2d9e 50%, #1a3fbf 100%)',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: 72,
    }}>
      {/* BG Pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.06,
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* Glowing orbs */}
      <div style={{ position:'absolute', top:'10%', right:'5%', width:400, height:400, borderRadius:'50%', background:'rgba(249,115,22,0.15)', filter:'blur(80px)' }}/>
      <div style={{ position:'absolute', bottom:'5%', left:'5%', width:300, height:300, borderRadius:'50%', background:'rgba(255,255,255,0.05)', filter:'blur(60px)' }}/>

      <div className="container" style={{ position:'relative', zIndex:2 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
          {/* Left */}
          <div>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'rgba(249,115,22,0.15)', border:'1px solid rgba(249,115,22,0.3)',
              padding:'8px 18px', borderRadius:50, marginBottom:24,
            }}>
              <span style={{fontSize:13, color:'#fdba74', fontWeight:600, letterSpacing:'0.05em'}}>
                🚀 YOUR TRUSTED TECHNOLOGY PARTNER
              </span>
            </div>

            <h1 style={{ fontSize:'clamp(32px,4vw,56px)', fontWeight:900, color:'white', lineHeight:1.15, marginBottom:20 }}>
              Expert Solutions in<br />
              <span style={{ color:'#f97316' }}>{typed}</span>
              <span style={{ color:'#f97316', animation:'blink 1s step-end infinite' }}>|</span>
            </h1>

            <p style={{ fontSize:18, color:'rgba(255,255,255,0.75)', lineHeight:1.8, marginBottom:36, maxWidth:520 }}>
              LSS delivers cutting-edge PLC automation, digital marketing, CCTV security, and IT services — empowering businesses to grow faster and operate smarter.
            </p>

            <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
              <a href="#plc" className="btn btn-primary" style={{ fontSize:16, padding:'14px 32px' }}>
                Explore Services →
              </a>
              <a href="#contact" className="btn btn-secondary" style={{ fontSize:16, padding:'14px 32px', background:'transparent', border:'2px solid rgba(255,255,255,0.5)', color:'white' }}>
                Get Free Consultation
              </a>
            </div>
          </div>

          {/* Right – Visual */}
          <div style={{ display:'flex', justifyContent:'center', alignItems:'center', position:'relative' }}>
            <div className="animate-float" style={{
              width:420, height:420, borderRadius:'50%',
              background:'rgba(255,255,255,0.04)',
              border:'2px solid rgba(255,255,255,0.08)',
              display:'flex', alignItems:'center', justifyContent:'center',
              position:'relative',
            }}>
              <div style={{
                width:300, height:300, borderRadius:'50%',
                background:'rgba(255,255,255,0.06)',
                border:'2px solid rgba(249,115,22,0.3)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:120,
              }}>⚙️</div>

              {/* Orbiting service icons */}
              {[
                { icon:'📡', angle:0 }, { icon:'💻', angle:72 },
                { icon:'📹', angle:144 }, { icon:'📈', angle:216 }, { icon:'🔧', angle:288 }
              ].map(({ icon, angle }) => {
                const rad = (angle * Math.PI) / 180;
                const x = 210 * Math.cos(rad);
                const y = 210 * Math.sin(rad);
                return (
                  <div key={angle} style={{
                    position:'absolute',
                    left:`calc(50% + ${x}px - 24px)`,
                    top:`calc(50% + ${y}px - 24px)`,
                    width:48, height:48, borderRadius:'50%',
                    background:'white', display:'flex',
                    alignItems:'center', justifyContent:'center',
                    fontSize:22, boxShadow:'0 4px 16px rgba(0,0,0,0.2)',
                  }}>{icon}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @media(max-width:768px) {
          #home > .container > div { grid-template-columns: 1fr !important; }
          #home > .container > div > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
