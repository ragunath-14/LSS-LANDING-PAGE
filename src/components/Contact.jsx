import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const inputStyle = {
    width: '100%', padding: '14px 16px',
    border: '2px solid #e2e8f0', borderRadius: 10,
    fontSize: 14, fontFamily: 'inherit',
    outline: 'none', transition: 'border 0.2s',
    background: '#f8faff',
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 70, alignItems: 'start' }}>
          {/* Left Info */}
          <div>
            <span className="section-tag">Contact Us</span>
            <h2 className="section-title">Let's Start Your <span>Project Today</span></h2>
            <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>
              Ready to take your business to the next level? Reach out to us for a free consultation. Our experts will respond within 24 hours.
            </p>

            {[
              { icon: '📞', label: 'Call Us', value: '+91 96004 69303', sub: 'Mon–Sat, 9AM–7PM' },
              { icon: '📧', label: 'Email Us', value: 'lsstechicalservice@gmail.com', sub: 'We reply within 24 hours' },
              { icon: '📍', label: 'Visit Us', value: 'Coimbatore, Tamil Nadu', sub: 'India – 641001' },
            ].map(c => (
              <div key={c.label} style={{ display: 'flex', gap: 18, marginBottom: 28, alignItems: 'flex-start' }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 14, flexShrink: 0,
                  background: 'linear-gradient(135deg,#0b2d9e,#1a3fbf)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22,
                }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: 12, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>{c.label}</div>
                  <div style={{ fontWeight: 700, color: '#1e293b', fontSize: 15 }}>{c.value}</div>
                  <div style={{ fontSize: 12, color: '#94a3b8' }}>{c.sub}</div>
                </div>
              </div>
            ))}

            {/* CTA Banner */}
            <div style={{
              background: 'linear-gradient(135deg,#f97316,#f59e0b)',
              borderRadius: 16, padding: '24px 28px', marginTop: 16,
            }}>
              <div style={{ fontSize: 18, fontWeight: 800, color: 'white', marginBottom: 8 }}>
                🚀 Free Site Audit Available!
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                Get a free digital audit for your website or automation system. Limited slots available this month.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div style={{
            background: 'white', borderRadius: 20, padding: '44px 40px',
            boxShadow: '0 8px 40px rgba(11,45,158,0.10)',
          }}>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: '#1e293b', marginBottom: 28 }}>
              Send Us a Message
            </h3>

            {sent && (
              <div style={{
                background: '#ecfdf5', border: '1px solid #6ee7b7',
                borderRadius: 10, padding: '14px 18px', marginBottom: 24,
                color: '#065f46', fontWeight: 600, fontSize: 14,
              }}>
                ✅ Message sent! We'll get back to you shortly.
              </div>
            )}

            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#475569', display: 'block', marginBottom: 6 }}>Full Name *</label>
                  <input name="name" value={form.name} onChange={handle} required placeholder="John Doe"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0b2d9e'}
                    onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#475569', display: 'block', marginBottom: 6 }}>Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handle} placeholder="+91 96004 69303"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = '#0b2d9e'}
                    onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#475569', display: 'block', marginBottom: 6 }}>Email Address *</label>
                <input name="email" type="email" value={form.email} onChange={handle} required placeholder="john@company.com"
                  style={inputStyle}
                  onFocus={e => e.target.style.borderColor = '#0b2d9e'}
                  onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#475569', display: 'block', marginBottom: 6 }}>Service Required *</label>
                <select name="service" value={form.service} onChange={handle} required
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={e => e.target.style.borderColor = '#0b2d9e'}
                  onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                >
                  <option value="">-- Select a Service --</option>
                  <option>PLC Programming & Development</option>
                  <option>PLC Panel Design & Integration</option>
                  <option>PLC Installation & Commissioning</option>
                  <option>Digital Marketing (SEO/SMM)</option>
                  <option>Performance Marketing</option>
                  <option>CCTV Installation & Design</option>
                  <option>IP Camera / Wireless CCTV</option>
                  <option>Custom Software Development</option>
                  <option>Web / Mobile App Development</option>
                  <option>IT Consulting</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#475569', display: 'block', marginBottom: 6 }}>Your Message</label>
                <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="Tell us about your project..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = '#0b2d9e'}
                  onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ fontSize: 16, padding: '15px', justifyContent: 'center', marginTop: 4 }}>
                Send Message 🚀
              </button>
            </form>
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          #contact .container > div { grid-template-columns: 1fr !important; }
          #contact .container form > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
