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
    <div className="stat-item" style={{
      textAlign: 'center', flex: 1, padding: '36px 20px',
    }}>
      <div style={{ fontSize: 'clamp(32px,4vw,48px)', fontWeight: 900, color: '#2ec4a5', lineHeight: 1 }}>
        {count}{stat.suffix}
      </div>
      <div style={{ fontSize: 'clamp(11px,1.1vw,14px)', color: '#6b7280', marginTop: 10, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
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
    <section ref={ref} style={{
      background: '#ffffff',
      borderTop: '1px solid #e5e7eb',
      borderBottom: '1px solid #e5e7eb',
      padding: 0,
    }}>
      <div className="container">
        <div className="stats-flex" style={{ display: 'flex', flexWrap: 'wrap' }}>
          {STATS.map((s, i) => (
            <StatItem key={i} stat={s} started={started} />
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:600px) {
          .stats-flex > .stat-item {
            flex: 0 0 50% !important;
            border-bottom: 1px solid #e5e7eb;
            padding: 24px 16px !important;
          }
        }
        @media(max-width:380px) {
          .stats-flex > .stat-item { flex: 0 0 100% !important; }
        }
      `}</style>
    </section>
  );
};

export default Stats;
