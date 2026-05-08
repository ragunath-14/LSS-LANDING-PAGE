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
      background: '#ffffff',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      paddingTop: 72,
    }}>
      {/* Subtle background pattern */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.03,
        backgroundImage: 'radial-gradient(circle, #2ec4a5 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

      {/* Soft glow orb */}
      <div style={{ position:'absolute', top:'15%', right:'10%', width:500, height:500, borderRadius:'50%', background:'rgba(46,196,165,0.06)', filter:'blur(100px)' }}/>
      <div style={{ position:'absolute', bottom:'10%', left:'10%', width:400, height:400, borderRadius:'50%', background:'rgba(46,196,165,0.04)', filter:'blur(80px)' }}/>

      <div className="container" style={{ position:'relative', zIndex:2 }}>
        <div className="hero-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:60, alignItems:'center' }}>
          {/* Left */}
          <div>
            <div style={{
              display:'inline-flex', alignItems:'center', gap:8,
              background:'rgba(46,196,165,0.08)', border:'1px solid rgba(46,196,165,0.15)',
              padding:'8px 18px', borderRadius:50, marginBottom:24,
            }}>
              <span style={{fontSize:13, color:'#1da88b', fontWeight:600, letterSpacing:'0.04em'}}>
                🚀 YOUR TRUSTED TECHNOLOGY PARTNER
              </span>
            </div>

            <h1 style={{ 
              fontSize: 'clamp(28px, 6vw, 54px)', 
              fontWeight: 900, 
              color: '#061c3f', 
              lineHeight: 1.15, 
              marginBottom: 20,
              wordBreak: 'break-word'
            }}>
              Expert Solutions in<br />
              <span style={{ color: '#2ec4a5' }}>{typed}</span>
              <span style={{ color: '#2ec4a5', animation: 'blink 1s step-end infinite' }}>|</span>
            </h1>

            <p style={{ fontSize:'clamp(14px,1.4vw,17px)', color:'#6b7280', lineHeight:1.8, marginBottom:36, maxWidth:520 }}>
              LSS delivers cutting-edge PLC automation, digital marketing, CCTV security, and IT services — empowering businesses to grow faster and operate smarter.
            </p>

            <div style={{ display:'flex', gap:14, flexWrap:'wrap' }}>
              <a href="#plc" className="btn btn-primary" style={{
                fontSize:'clamp(14px,1.2vw,16px)', padding:'14px 32px',
              }}>
                Explore Services →
              </a>
              <a href="#contact" className="btn btn-outline" style={{
                fontSize:'clamp(14px,1.2vw,16px)', padding:'14px 32px',
              }}>
                Get Free Consultation
              </a>
            </div>
          </div>

          {/* Right – Visual */}
          <div className="hero-visual" style={{ display:'flex', justifyContent:'center', alignItems:'center', position:'relative' }}>
            <div className="animate-float" style={{
              width:'clamp(280px,26vw,400px)', height:'clamp(280px,26vw,400px)', borderRadius:'50%',
              background:'rgba(46,196,165,0.04)',
              border:'2px solid rgba(46,196,165,0.12)',
              display:'flex', alignItems:'center', justifyContent:'center',
              position:'relative',
            }}>
              <div style={{
                width:'clamp(200px,18vw,280px)', height:'clamp(200px,18vw,280px)', borderRadius:'50%',
                background:'rgba(46,196,165,0.06)',
                border:'2px solid rgba(46,196,165,0.15)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'clamp(60px,7vw,110px)',
              }}>⚙️</div>

              {/* Orbiting service icons */}
              {[
                { icon:'📡', angle:0 }, { icon:'💻', angle:72 },
                { icon:'📹', angle:144 }, { icon:'📈', angle:216 }, { icon:'🔧', angle:288 }
              ].map(({ icon, angle }) => {
                const rad = (angle * Math.PI) / 180;
                const r = 200;
                const x = r * Math.cos(rad);
                const y = r * Math.sin(rad);
                return (
                  <div key={angle} className="orbit-icon" style={{
                    position:'absolute',
                    left:`calc(50% + ${x}px - 22px)`,
                    top:`calc(50% + ${y}px - 22px)`,
                    width:44, height:44, borderRadius:'50%',
                    background:'#ffffff', display:'flex',
                    alignItems:'center', justifyContent:'center',
                    fontSize:20, boxShadow:'0 4px 16px rgba(0,0,0,0.08)',
                    border: '1px solid #e5e7eb',
                  }}>{icon}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @media(max-width:900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-grid > div:first-child { display: flex; flex-direction: column; align-items: center; }
          .hero-grid > div:first-child p { max-width: 100% !important; }
          .hero-visual { margin-top: 20px; }
        }
        @media(max-width:600px) {
          .hero-visual { display: none !important; }
          #home { min-height: auto !important; padding-top: 100px !important; padding-bottom: 60px !important; }
        }
        @media(max-width:500px) {
          .hero-grid > div:first-child > div:last-child { flex-direction: column; width: 100%; }
          .hero-grid > div:first-child > div:last-child a { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
