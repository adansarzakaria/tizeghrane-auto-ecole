import Icon from '../common/Icon';

const Footer = ({ lang, t, c, scrollToSection }) => {
  const PHONE1 = '06 61 38 20 93';
  const EMAIL = 'tizghrane.auto.ecole21@gmail.com';
  const FACEBOOK = 'Tizghrane Auto-école';
  const ADDRESS_AR = 'رقم 25 الطابق الثاني تجزئة اكرام حي البغ، قرب مركز التكوين المهني، تيزنيت';
  const ADDRESS_FR = 'N°25, 2ème étage, Immeuble Ikram, Hay El Bagh, près du Centre de Formation Professionnelle, Tiznit';
  const WHATSAPP = '212661382093';

  return (
    <footer style={{ backgroundColor: c.bleuOxford, color: '#fff', padding: '48px 16px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginBottom: '32px' }}>
          <div style={{ gridColumn: 'span 2' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: 40, height: 40, backgroundColor: c.orange, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="car" size={20} color="#fff" />
              </div>
              <div>
                <span style={{ fontSize: '17px', fontWeight: 800, color: '#fff', display: 'block' }}>TIZGHRANE</span>
                <span style={{ fontSize: '11px', color: '#888' }}>Auto École</span>
              </div>
            </div>
            <p style={{ color: '#aaa', fontSize: '14px', lineHeight: 1.6, maxWidth: 320, margin: 0 }}>
              {lang === 'fr' ? 'Votre partenaire de confiance pour apprendre à conduire à Tiznit. Toutes catégories de véhicules.' : 'شريكك الموثوق لتعلم القيادة بتزنيت. جميع فئات المركبات.'}
            </p>
          </div>

          <div>
            <h4 style={{ fontWeight: 700, color: '#fff', marginBottom: '16px', fontSize: '15px' }}>{lang === 'fr' ? 'Liens rapides' : 'روابط سريعة'}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {Object.entries(t.nav).map(([key, label]) => (
                <li key={key}>
                  <button onClick={() => scrollToSection(key === 'home' ? 'home' : key)} style={{ background: 'none', border: 'none', color: '#aaa', fontSize: '14px', cursor: 'pointer', padding: 0, transition: 'color 0.3s' }}
                    onMouseEnter={e => e.currentTarget.style.color = c.orange}
                    onMouseLeave={e => e.currentTarget.style.color = '#aaa'}>
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontWeight: 700, color: '#fff', marginBottom: '16px', fontSize: '15px' }}>{lang === 'fr' ? 'Contact' : 'اتصال'}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#aaa', fontSize: '14px' }}>
                <Icon name="phone" size={14} color={c.orange} /> {PHONE1}
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#aaa', fontSize: '14px' }}>
                <Icon name="mail" size={14} color={c.orange} /> {EMAIL}
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#aaa', fontSize: '14px' }}>
                <Icon name="mapPin" size={14} color={c.orange} />
                <span>{lang === 'ar' ? ADDRESS_AR : ADDRESS_FR}</span>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid #333', paddingTop: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <p style={{ color: '#666', fontSize: '13px', margin: 0 }}>© 2025 Tizghrane Auto École. {t.footer.rights}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ color: '#666', fontSize: '13px' }}>{t.footer.follow}</span>
            <a href={`https://www.facebook.com/search/top?q=${encodeURIComponent(FACEBOOK)}`} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1877f2'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#333'}>
              <Icon name="facebook" size={16} color="#fff" />
            </a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" style={{ width: 36, height: 36, backgroundColor: '#333', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#22c55e'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#333'}>
              <Icon name="messageCircle" size={16} color="#fff" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;