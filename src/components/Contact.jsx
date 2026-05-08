import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async e => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSent(true);
        setTimeout(() => setSent(false), 5000);
        setForm({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error connecting to the server. Is the backend running?');
    }
  };

  const inputStyle = {
    width: '100%', padding: '13px 16px',
    border: '1px solid #e5e7eb', borderRadius: 10,
    fontSize: 14, fontFamily: 'inherit',
    outline: 'none', transition: 'border 0.2s, box-shadow 0.2s',
    background: '#f8f9fa', color: '#0f172a',
  };

  return (
    <section id="contact" className="section" style={{ background: '#ffffff' }}>
      <div className="container">
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 60, alignItems: 'start' }}>
          {/* Left Info */}
          <div>
            <span className="section-tag">Contact Us</span>
            <h2 className="section-title">Let's Start Your <span>Project Today</span></h2>
            <p style={{ color: '#6b7280', fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>
              Ready to take your business to the next level? Reach out to us for a free consultation. Our experts will respond within 24 hours.
            </p>

            {[
              { icon: '📞', label: 'Call Us', value: '+91 96004 69303', sub: 'Mon–Sat, 9AM–7PM' },
              { icon: '📧', label: 'Email Us', value: 'lsstechicalservice@gmail.com', sub: 'We reply within 24 hours' },
              { icon: '📍', label: 'Visit Us', value: 'Coimbatore, Tamil Nadu', sub: 'India – 641001' },
            ].map(c => (
              <div key={c.label} style={{ display: 'flex', gap: 16, marginBottom: 26, alignItems: 'flex-start' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                  background: 'rgba(46,196,165,0.08)',
                  border: '1px solid rgba(46,196,165,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22,
                }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: 12, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>{c.label}</div>
                  <div style={{ fontWeight: 700, color: '#061c3f', fontSize: 14 }}>{c.value}</div>
                  <div style={{ fontSize: 12, color: '#9ca3af' }}>{c.sub}</div>
                </div>
              </div>
            ))}

            {/* CTA Banner */}
            <div style={{
              background: 'linear-gradient(135deg,#2ec4a5,#1da88b)',
              borderRadius: 16, padding: '24px 28px', marginTop: 16,
            }}>
              <div style={{ fontSize: 17, fontWeight: 800, color: 'white', marginBottom: 8 }}>
                🚀 Free Site Audit Available!
              </div>
              <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                Get a free digital audit for your website or automation system. Limited slots available this month.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div style={{
            background: '#ffffff', borderRadius: 20, padding: '40px 36px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            border: '1px solid #e5e7eb',
          }}>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: '#061c3f', marginBottom: 28 }}>
              Send Us a Message
            </h3>

            {sent && (
              <div style={{
                background: '#f0fdf4', border: '1px solid #86efac',
                borderRadius: 10, padding: '14px 18px', marginBottom: 24,
                color: '#166534', fontWeight: 600, fontSize: 14,
              }}>
                ✅ Message sent! We'll get back to you shortly.
              </div>
            )}

            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#4b5563', display: 'block', marginBottom: 6 }}>Full Name *</label>
                  <input name="name" value={form.name} onChange={handle} required placeholder="John Doe"
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = '#2ec4a5'; e.target.style.boxShadow = '0 0 0 3px rgba(46,196,165,0.10)'; }}
                    onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 600, color: '#4b5563', display: 'block', marginBottom: 6 }}>Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handle} placeholder="+91 96004 69303"
                    style={inputStyle}
                    onFocus={e => { e.target.style.borderColor = '#2ec4a5'; e.target.style.boxShadow = '0 0 0 3px rgba(46,196,165,0.10)'; }}
                    onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#4b5563', display: 'block', marginBottom: 6 }}>Email Address *</label>
                <input name="email" type="email" value={form.email} onChange={handle} required placeholder="john@company.com"
                  style={inputStyle}
                  onFocus={e => { e.target.style.borderColor = '#2ec4a5'; e.target.style.boxShadow = '0 0 0 3px rgba(46,196,165,0.10)'; }}
                  onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#4b5563', display: 'block', marginBottom: 6 }}>Service Required *</label>
                <select name="service" value={form.service} onChange={handle} required
                  style={{ ...inputStyle, cursor: 'pointer' }}
                  onFocus={e => { e.target.style.borderColor = '#2ec4a5'; e.target.style.boxShadow = '0 0 0 3px rgba(46,196,165,0.10)'; }}
                  onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
                >
                  <option value="">-- Select a Service --</option>
                  <option>PLC Services</option>
                  <option>Digital Marketing</option>
                  <option>CCTV Services</option>
                  <option value="IT Consulting">IT Consulting</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: 13, fontWeight: 600, color: '#4b5563', display: 'block', marginBottom: 6 }}>Your Message</label>
                <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="Tell us about your project..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={e => { e.target.style.borderColor = '#2ec4a5'; e.target.style.boxShadow = '0 0 0 3px rgba(46,196,165,0.10)'; }}
                  onBlur={e => { e.target.style.borderColor = '#e5e7eb'; e.target.style.boxShadow = 'none'; }}
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
        @media(max-width:900px){
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        @media(max-width:600px){
          .contact-grid { gap: 32px !important; }
          .contact-grid > div:last-child { padding: 24px 18px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
