import React, { useState, useEffect, useRef } from 'react';
import { STATS } from '../data';

const useCounter = (target, started) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 25);
    return () => clearInterval(timer);
  }, [started, target]);
  return count;
};

const StatItem = ({ stat, started }) => {
  const count = useCounter(stat.value, started);
  return (
    <div style={{ textAlign: 'center', flex: 1, padding: '30px 20px', borderRight: '1px solid rgba(255,255,255,0.1)' }}>
      <div style={{ fontSize: 48, fontWeight: 900, color: '#f97316', lineHeight: 1 }}>
        {count}{stat.suffix}
      </div>
      <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', marginTop: 8, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
        {stat.label}
      </div>
    </div>
  );
};

const Stats = () => {
  const [started, setStarted] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{ background: 'linear-gradient(135deg,#071e6e,#0b2d9e)', padding: '0' }}>
      <div className="container">
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {STATS.map((s, i) => (
            <StatItem key={i} stat={s} started={started} />
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:600px) {
          section[style*='071e6e'] .container > div > div { flex: 0 0 50%; border-bottom: 1px solid rgba(255,255,255,0.1); }
        }
      `}</style>
    </section>
  );
};

export default Stats;
