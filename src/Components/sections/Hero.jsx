import FadeIn from '../common/FadeIn';
import AnimatedCounter from '../common/AnimatedCounter';
import Icon from '../common/Icon';

const Hero = ({ lang, t, c, scrollToSection }) => {
  const PHONE1 = '06 61 38 20 93';
  const PHONE2 = '05 28 86 10 00';
  const WHATSAPP = '212661382093';

  const btnPrimary = {
    backgroundColor: c.orange, color: '#fff', padding: '14px 32px',
    borderRadius: '12px', fontWeight: 'bold', border: 'none', cursor: 'pointer',
    boxShadow: '0 4px 14px rgba(255,132,0,0.3)', fontSize: '16px',
    display: 'inline-flex', alignItems: 'center', gap: '8px'
  };

  const btnSecondary = {
    backgroundColor: '#fff', color: c.bleuOxford, padding: '14px 32px',
    borderRadius: '12px', fontWeight: '600', border: '2px solid #e5e7eb',
    cursor: 'pointer', fontSize: '16px', display: 'inline-flex', alignItems: 'center', gap: '8px'
  };

  return (
    <section id="home" style={{ position: 'relative', paddingTop: '80px', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: `linear-gradient(135deg, ${c.amande} 0%, #fff 50%, ${c.vistaBleu}20 100%)` }}>
      <div style={{ position: 'absolute', top: '80px', right: '-100px', width: 400, height: 400, backgroundColor: `${c.orange}15`, borderRadius: '50%', filter: 'blur(80px)' }} />
      <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: 350, height: 350, backgroundColor: `${c.vistaBleu}20`, borderRadius: '50%', filter: 'blur(80px)' }} />

      <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', padding: '48px 16px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
          
          {/* Left Side - Text Content */}
          <FadeIn direction="right">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', backgroundColor: `${c.orange}15`, color: c.orange, borderRadius: '999px', fontSize: '13px', fontWeight: 600, width: 'fit-content' }}>
                <span>⭐</span>
                {lang === 'fr' ? 'Auto-école certifiée à Tiznit' : 'مدرسة معتمدة بتزنيت'}
              </div>
              <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, color: c.bleuOxford, lineHeight: 1.15, margin: 0 }}>
                {lang === 'fr' ? (
                  <>Apprenez à conduire en <span style={{ color: c.orange }}>toute confiance</span></>
                ) : (
                  <>تعلم القيادة ب<span style={{ color: c.orange }}>ثقة تامة</span></>
                )}
              </h1>
              <p style={{ fontSize: '17px', color: c.textGray, maxWidth: 500, lineHeight: 1.6, margin: 0 }}>
                {t.hero.subtitle}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <button onClick={() => scrollToSection('features')} style={btnPrimary}>
                  {t.hero.cta} <span>→</span>
                </button>
                <button onClick={() => window.open(`https://wa.me/${WHATSAPP}`, '_blank')} style={btnSecondary}>
                  <Icon name="messageCircle" size={18} color={c.bleuOxford} /> WhatsApp
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', paddingTop: '32px', borderTop: '1px solid #ddd' }}>
                <div>
                  <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: c.orange }}>
                    <AnimatedCounter end={1200} suffix="+" />
                  </div>
                  <div style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>{t.hero.stats.students}</div>
                </div>
                <div>
                  <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: c.orange }}>
                    <AnimatedCounter end={95} suffix="%" />
                  </div>
                  <div style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>{t.hero.stats.success}</div>
                </div>
                <div>
                  <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: c.orange }}>
                    <AnimatedCounter end={8} suffix="+" />
                  </div>
                  <div style={{ fontSize: '13px', color: '#888', marginTop: '4px' }}>{t.hero.stats.years}</div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Side - Image Card (Plakat des permis) */}
          <FadeIn direction="left" delay={0.2}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', zIndex: 10, backgroundColor: '#fff', borderRadius: '24px', padding: '24px', boxShadow: '0 20px 60px rgba(0,0,0,0.12)', border: `1px solid ${c.amande}` }}>
                <div style={{ aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
                  {/* ICI : Photo dial plakat des permis */}
                  <img 
                    src="/images/2.jpg" 
                    alt="Plakat des permis - Tous permis de conduire"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                    onError={(e) => {
                      // Fallback image if the main one doesn't exist
                      e.target.src = 'https://placehold.co/600x450/FF8400/white?text=Tous+Permis+-+Voiture+Camion+Bus+Moto';
                    }}
                  />
                  
                  {/* Overlay avec texte "Tous permis" si nécessaire */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    padding: '20px 16px 12px',
                    textAlign: 'center'
                  }}>
                    <p style={{ color: '#fff', fontWeight: 700, fontSize: '16px', margin: 0 }}>
                      {lang === 'fr' ? 'Tous permis' : 'جميع الرخص'}
                    </p>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '12px', margin: '4px 0 0' }}>
                      {lang === 'fr' ? 'Voiture · Camion · Bus · Moto' : 'سيارة · شاحنة · حافلة · دراجة'}
                    </p>
                  </div>
                </div>
                
                <div style={{ marginTop: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <a href={`tel:${PHONE1.replace(/\s/g, '')}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px', backgroundColor: `${c.orange}10`, borderRadius: '10px', textDecoration: 'none', color: c.bleuOxford, fontSize: '13px', fontWeight: 600 }}>
                    <Icon name="phoneCall" size={16} color={c.orange} /> {PHONE1}
                  </a>
                  <a href={`tel:${PHONE2.replace(/\s/g, '')}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px', backgroundColor: `${c.orange}10`, borderRadius: '10px', textDecoration: 'none', color: c.bleuOxford, fontSize: '13px', fontWeight: 600 }}>
                    <Icon name="phone" size={16} color={c.orange} /> {PHONE2}
                  </a>
                </div>
              </div>
              
              <div style={{ position: 'absolute', top: -12, right: -12, backgroundColor: '#fff', borderRadius: '12px', padding: '10px 14px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', border: `1px solid ${c.amande}`, zIndex: 20, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: 20 }}>✅</span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: c.bleuOxford }}>{lang === 'fr' ? 'Certifié' : 'معتمد'}</span>
              </div>
              <div style={{ position: 'absolute', bottom: -12, left: -12, backgroundColor: '#fff', borderRadius: '12px', padding: '10px 14px', boxShadow: '0 4px 16px rgba(0,0,0,0.1)', border: `1px solid ${c.vistaBleu}`, zIndex: 20, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: 20 }}>👥</span>
                <span style={{ fontSize: '13px', fontWeight: 700, color: c.bleuOxford }}>1200+ {lang === 'fr' ? 'élèves' : 'متدرب'}</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;