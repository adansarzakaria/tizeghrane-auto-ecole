import FadeIn from '../common/FadeIn';
import Icon from '../common/Icon';

const About = ({ lang, t, c }) => {
  return (
    <section id="about" style={{ padding: '80px 16px', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: `${c.orange}12`, color: c.orange, borderRadius: '999px', fontSize: '13px', fontWeight: 600, marginBottom: '16px' }}>
              {lang === 'fr' ? 'Qui sommes-nous ?' : 'من نحن؟'}
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '800', color: c.bleuOxford, textAlign: 'center', marginBottom: '16px' }}>
              {t.about.title}
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
          <FadeIn direction="right">
            <div style={{ position: 'relative' }}>
              <div style={{ aspectRatio: '4/3', background: `linear-gradient(135deg, ${c.amande} 0%, ${c.vistaBleu}25 100%)`, borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', padding: '32px', height: '100%', alignContent: 'center' }}>
                  {['🚗 Voiture', '🚛 Camion', '🚌 Bus', '🏍️ Moto'].map((item, idx) => (
                    <div key={idx} style={{ backgroundColor: '#fff', borderRadius: '16px', padding: '20px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', transition: 'transform 0.3s', cursor: 'default' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                      <div style={{ fontSize: '32px', marginBottom: '8px' }}>{item.split(' ')[0]}</div>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: c.bleuOxford }}>{item.split(' ')[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <p style={{ fontSize: '17px', color: c.textGray, lineHeight: 1.7, margin: 0 }}>{t.about.desc}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                {t.about.features.map((feat, idx) => (
                  <div key={idx} style={{ padding: '20px', backgroundColor: c.lightGray, borderRadius: '16px', transition: 'all 0.3s', cursor: 'default' }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = `${c.orange}10`; e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.08)'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = c.lightGray; e.currentTarget.style.boxShadow = 'none'; }}>
                    <div style={{ fontSize: '28px', marginBottom: '8px' }}>{feat.icon}</div>
                    <h3 style={{ fontWeight: 700, color: c.bleuOxford, margin: '0 0 4px', fontSize: '15px' }}>{feat.title}</h3>
                    <p style={{ fontSize: '13px', color: '#888', margin: 0 }}>{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;