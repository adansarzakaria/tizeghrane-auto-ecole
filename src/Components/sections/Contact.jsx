import { useState } from 'react';
import FadeIn from '../common/FadeIn';
import Icon from '../common/Icon';

const Contact = ({ lang, t, c }) => {
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const PHONE1 = '06 61 38 20 93';
  const PHONE2 = '05 28 86 10 00';
  const EMAIL = 'tizghrane.auto.ecole21@gmail.com';
  const FACEBOOK = 'Tizghrane Auto-école';
  const WHATSAPP = '212661382093';
  const ADDRESS_AR = 'رقم 25 الطابق الثاني تجزئة اكرام حي البغ، قرب مركز التكوين المهني، تيزنيت';
  const ADDRESS_FR = 'N°25, 2ème étage, Immeuble Ikram, Hay El Bagh, près du Centre de Formation Professionnelle, Tiznit';

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
    const message = formData.get('message');
    
    const whatsappMsg = `📧 *NOUVEAU MESSAGE DEPUIS LE SITE* %0A%0A👤 *Nom:* ${name}%0A📧 *Email:* ${email}%0A💬 *Message:* %0A${message}%0A%0A---%0AEnvoyé depuis Tizghrane Auto-École`;
    
    window.open(`https://wa.me/${WHATSAPP}?text=${whatsappMsg}`, '_blank');
    setContactSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '80px 16px', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: `${c.orange}12`, color: c.orange, borderRadius: '999px', fontSize: '13px', fontWeight: 600, marginBottom: '16px' }}>
              {lang === 'fr' ? 'Restons en contact' : 'لنبقى على تواصل'}
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '800', color: c.bleuOxford, textAlign: 'center', marginBottom: '16px' }}>
              {t.contact.title}
            </h2>
            <p style={{ color: '#888', maxWidth: 600, margin: '0 auto', fontSize: '16px' }}>{t.contact.subtitle}</p>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
          
          {/* Contact Form - Envoi WhatsApp */}
          <FadeIn direction="right">
            <div style={{ backgroundColor: c.lightGray, borderRadius: '24px', padding: '32px', border: '1px solid #eee' }}>
              {contactSubmitted ? (
                <div style={{ textAlign: 'center', padding: '48px 0' }}>
                  <div style={{ width: 72, height: 72, backgroundColor: '#dcfce7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <Icon name="checkCircle" size={32} color="#22c55e" />
                  </div>
                  <h4 style={{ fontSize: '22px', fontWeight: 700, color: c.bleuOxford, margin: '0 0 8px' }}>{lang === 'fr' ? 'Message envoyé !' : 'تم إرسال الرسالة!'}</h4>
                  <p style={{ color: '#888', fontSize: '15px', margin: 0 }}>
                    {lang === 'fr' ? 'Votre message a été envoyé sur WhatsApp. Nous vous répondrons rapidement.' : 'تم إرسال رسالتك عبر واتساب. سنجب عليك قريباً.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={sendToWhatsApp} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: c.bleuOxford, marginBottom: '6px' }}>{t.contact.form.name}</label>
                    <input type="text" name="name" required style={{ ...inputStyle, backgroundColor: '#fff' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: c.bleuOxford, marginBottom: '6px' }}>{t.contact.form.email}</label>
                    <input type="email" name="email" required style={{ ...inputStyle, backgroundColor: '#fff' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: c.bleuOxford, marginBottom: '6px' }}>{t.contact.form.message}</label>
                    <textarea name="message" rows={4} required style={{ ...inputStyle, backgroundColor: '#fff', resize: 'none' }} />
                  </div>
                  <button type="submit" style={{ ...btnPrimary, width: '100%', justifyContent: 'center' }}>
                    <Icon name="messageCircle" size={18} color="#fff" /> {t.contact.form.send}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Contact Info (same as before) */}
          <FadeIn direction="left" delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: `linear-gradient(135deg, ${c.amande}60 0%, ${c.vistaBleu}20 100%)`, borderRadius: '24px', padding: '32px', border: `1px solid ${c.amande}` }}>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: c.bleuOxford, marginBottom: '24px' }}>{lang === 'fr' ? 'Informations' : 'معلومات'}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: 42, height: 42, backgroundColor: '#fff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', flexShrink: 0 }}>
                      <Icon name="mapPin" size={20} color={c.orange} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: c.bleuOxford, fontSize: '13px', margin: '0 0 4px' }}>{t.contact.info.address}</p>
                      <p style={{ color: '#888', fontSize: '13px', margin: 0 }}>{lang === 'ar' ? ADDRESS_AR : ADDRESS_FR}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: 42, height: 42, backgroundColor: '#fff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', flexShrink: 0 }}>
                      <Icon name="phone" size={20} color={c.orange} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: c.bleuOxford, fontSize: '13px', margin: '0 0 4px' }}>{t.contact.info.phone}</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <a href={`tel:${PHONE1.replace(/\s/g, '')}`} style={{ color: '#888', fontSize: '13px', textDecoration: 'none' }}>{PHONE1}</a>
                        <a href={`tel:${PHONE2.replace(/\s/g, '')}`} style={{ color: '#888', fontSize: '13px', textDecoration: 'none' }}>{PHONE2}</a>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: 42, height: 42, backgroundColor: '#fff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', flexShrink: 0 }}>
                      <Icon name="mail" size={20} color={c.orange} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: c.bleuOxford, fontSize: '13px', margin: '0 0 4px' }}>{t.contact.info.email}</p>
                      <a href={`mailto:${EMAIL}`} style={{ color: '#888', fontSize: '13px', textDecoration: 'none' }}>{EMAIL}</a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: 42, height: 42, backgroundColor: '#fff', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)', flexShrink: 0 }}>
                      <Icon name="clock" size={20} color={c.orange} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: c.bleuOxford, fontSize: '13px', margin: '0 0 4px' }}>{t.contact.info.hours}</p>
                      <p style={{ color: '#888', fontSize: '13px', margin: 0 }}>{t.contact.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', backgroundColor: '#22c55e', color: '#fff', borderRadius: '14px', fontWeight: 600, textDecoration: 'none', fontSize: '14px', transition: 'all 0.3s', boxShadow: '0 4px 14px rgba(34,197,94,0.3)' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                  <Icon name="messageCircle" size={18} color="#fff" /> WhatsApp
                </a>
                <a href={`https://www.facebook.com/search/top?q=${encodeURIComponent(FACEBOOK)}`} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px', backgroundColor: '#1877f2', color: '#fff', borderRadius: '14px', fontWeight: 600, textDecoration: 'none', fontSize: '14px', transition: 'all 0.3s', boxShadow: '0 4px 14px rgba(24,119,242,0.3)' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                  <Icon name="facebook" size={18} color="#fff" /> Facebook
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;