import { useState } from 'react';
import FadeIn from '../common/FadeIn';
import AnimatedCounter from '../common/AnimatedCounter';
import Icon from '../common/Icon';

const Features = ({ lang, t, c }) => {
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const PHONE1 = '06 61 38 20 93';
  const WHATSAPP = '212661382093'; // Numéro WhatsApp
  const ADDRESS_AR = 'رقم 25 الطابق الثاني تجزئة اكرام حي البغ، قرب مركز التكوين المهني، تيزنيت';
  const ADDRESS_FR = 'N°25, 2ème étage, Immeuble Ikram, Hay El Bagh, près du Centre de Formation Professionnelle, Tiznit';

  const cardStyle = {
    backgroundColor: '#fff', borderRadius: '24px', padding: '32px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease'
  };

  const btnPrimary = {
    backgroundColor: c.orange, color: '#fff', padding: '14px 32px',
    borderRadius: '12px', fontWeight: 'bold', border: 'none', cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(255,132,0,0.3)', fontSize: '16px',
    display: 'inline-flex', alignItems: 'center', gap: '8px'
  };

  const inputStyle = {
    width: '100%', padding: '12px 16px', borderRadius: '12px',
    border: '1px solid #e5e7eb', fontSize: '15px', outline: 'none',
    boxSizing: 'border-box'
  };

  // Fonction pour envoyer le message WhatsApp
  const sendToWhatsApp = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const type = formData.get('type');
    const date = formData.get('date');
    
    const message = `📅 *NOUVELLE RÉSERVATION* %0A%0A👤 *Nom complet:* ${name}%0A📧 *Email:* ${email}%0A📞 *Téléphone:* ${phone}%0A🚗 *Formation:* ${type}%0A📅 *Date souhaitée:* ${date}%0A%0A---%0AEnvoyé depuis Tizghrane Auto-École`;
    
    window.open(`https://wa.me/${WHATSAPP}?text=${message}`, '_blank');
    setBookingSubmitted(true);
  };

  return (
    <section id="features" style={{ padding: '80px 16px', background: `linear-gradient(to bottom, ${c.amande}40, ${c.vistaBleu}15)` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: `${c.vistaBleu}15`, color: c.vistaBleu, borderRadius: '999px', fontSize: '13px', fontWeight: 600, marginBottom: '16px' }}>
              {lang === 'fr' ? 'Services' : 'خدمات'}
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '800', color: c.bleuOxford, textAlign: 'center', marginBottom: '16px' }}>
              {t.features.title}
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '64px' }}>
          
          {/* Booking Form - Envoi WhatsApp */}
          <FadeIn direction="right">
            <div style={{ ...cardStyle, border: `1px solid ${c.amande}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <div style={{ width: 44, height: 44, backgroundColor: `${c.orange}12`, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="calendar" size={22} color={c.orange} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: c.bleuOxford, margin: 0 }}>{t.features.booking.title}</h3>
              </div>

              {bookingSubmitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ width: 60, height: 60, backgroundColor: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <Icon name="checkCircle" size={28} color="#22c55e" />
                  </div>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, color: c.bleuOxford, margin: '0 0 8px' }}>{t.features.booking.success}</h4>
                  <p style={{ color: '#888', fontSize: '14px', margin: 0 }}>
                    {lang === 'fr' ? 'Votre réservation a été envoyée sur WhatsApp. Nous vous contacterons bientôt.' : 'تم إرسال حجزك عبر واتساب. سنتصل بك قريباً.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={sendToWhatsApp} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <input type="text" name="name" placeholder={t.features.booking.name} required style={inputStyle} />
                  <input type="email" name="email" placeholder={t.features.booking.email} required style={inputStyle} />
                  <input type="tel" name="phone" placeholder={t.features.booking.phone} required style={inputStyle} />
                  <select name="type" required style={inputStyle}>
                    <option value="">{t.features.booking.type}</option>
                    <option value="Code de la route">{lang === 'fr' ? 'Code de la route' : 'مدونة السير'}</option>
                    <option value="Conduite">{lang === 'fr' ? 'Conduite' : 'قيادة'}</option>
                    <option value="Pack Complet">{lang === 'fr' ? 'Pack Complet' : 'الحزمة الكاملة'}</option>
                  </select>
                  <input type="date" name="date" required style={inputStyle} />
                  <button type="submit" style={{ ...btnPrimary, width: '100%', justifyContent: 'center' }}>
                    <Icon name="messageCircle" size={18} color="#fff" /> {t.features.booking.submit}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Map + Contact Buttons (same as before) */}
          <FadeIn direction="left" delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ ...cardStyle, border: `1px solid ${c.amande}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ width: 36, height: 36, backgroundColor: `${c.orange}12`, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="mapPinned" size={18} color={c.orange} />
                  </div>
                  <h3 style={{ fontWeight: 700, color: c.bleuOxford, margin: 0, fontSize: '15px' }}>{lang === 'fr' ? 'Notre localisation' : 'موقعنا'}</h3>
                </div>
                <div style={{ aspectRatio: '16/9', backgroundColor: '#eee', borderRadius: '12px', overflow: 'hidden', position: 'relative' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.8!2d-9.73!3d29.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb1f4c0b0e0e0e0%3A0x0!2sTiznit!5e0!3m2!1sfr!2sma!4v1"
                    width="100%" height="100%" style={{ border: 0, position: 'absolute', inset: 0 }}
                    allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Location"
                  />
                </div>
                <p style={{ marginTop: '12px', fontSize: '13px', color: '#888', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                  <Icon name="mapPin" size={16} color={c.orange} />
                  {lang === 'ar' ? ADDRESS_AR : ADDRESS_FR}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <a href={`tel:${PHONE1.replace(/\s/g, '')}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px', backgroundColor: '#fff', borderRadius: '14px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', textDecoration: 'none', border: '1px solid #eee', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = c.orange; e.currentTarget.style.boxShadow = '0 4px 16px rgba(255,132,0,0.15)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#eee'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'; }}>
                  <div style={{ width: 40, height: 40, backgroundColor: '#dcfce7', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="phoneCall" size={18} color="#22c55e" />
                  </div>
                  <div>
                    <p style={{ fontSize: '11px', color: '#888', margin: '0 0 2px' }}>{lang === 'fr' ? 'Appeler' : 'اتصال'}</p>
                    <p style={{ fontSize: '13px', fontWeight: 700, color: c.bleuOxford, margin: 0 }}>{PHONE1}</p>
                  </div>
                </a>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '14px', backgroundColor: '#fff', borderRadius: '14px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', textDecoration: 'none', border: '1px solid #eee', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#22c55e'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(34,197,94,0.15)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#eee'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'; }}>
                  <div style={{ width: 40, height: 40, backgroundColor: '#dcfce7', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="messageCircle" size={18} color="#22c55e" />
                  </div>
                  <div>
                    <p style={{ fontSize: '11px', color: '#888', margin: '0 0 2px' }}>WhatsApp</p>
                    <p style={{ fontSize: '13px', fontWeight: 700, color: c.bleuOxford, margin: 0 }}>{PHONE1}</p>
                  </div>
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Stats Section (same as before) */}
        <FadeIn>
          <div style={{ background: `linear-gradient(135deg, ${c.orange} 0%, ${c.vistaBleu} 100%)`, borderRadius: '24px', padding: '48px 32px', boxShadow: '0 20px 50px rgba(255,132,0,0.2)', marginBottom: '64px' }}>
            <h3 style={{ textAlign: 'center', color: '#fff', fontSize: '18px', fontWeight: 700, marginBottom: '32px' }}>{t.features.stats.title}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '32px' }}>
              {[
                { value: 1200, suffix: '+', label: t.features.stats.students },
                { value: 95, suffix: '%', label: t.features.stats.success },
                { value: 6, suffix: '', label: t.features.stats.instructors },
                { value: 8, suffix: '', label: t.features.stats.vehicles },
              ].map((stat, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Testimonials (same as before) */}
        <FadeIn>
          <h3 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 700, color: c.bleuOxford, marginBottom: '32px' }}>{t.features.testimonials.title}</h3>
        </FadeIn>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
          {t.features.testimonials.items.map((testi, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div style={{ ...cardStyle }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'; }}>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ fontSize: '14px', color: i < testi.rating ? '#fbbf24' : '#e5e7eb' }}>★</span>
                  ))}
                </div>
                <p style={{ color: '#666', margin: '0 0 16px', fontSize: '14px', lineHeight: 1.6, fontStyle: 'italic' }}>&ldquo;{testi.text}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: 36, height: 36, background: `linear-gradient(135deg, ${c.orange} 0%, ${c.vistaBleu} 100%)`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '13px' }}>
                    {testi.name.charAt(0)}
                  </div>
                  <span style={{ fontWeight: 600, color: c.bleuOxford, fontSize: '13px' }}>{testi.name}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;