import FadeIn from '../common/FadeIn';
import Icon from '../common/Icon';

const Courses = ({ lang, t, c }) => {
  const cardStyle = {
    backgroundColor: '#fff', borderRadius: '24px', padding: '32px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease'
  };

  return (
    <section id="courses" style={{ padding: '80px 16px', background: `linear-gradient(to bottom, ${c.lightGray}, #fff)` }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ display: 'inline-block', padding: '6px 16px', backgroundColor: `${c.vistaBleu}15`, color: c.vistaBleu, borderRadius: '999px', fontSize: '13px', fontWeight: 600, marginBottom: '16px' }}>
              {lang === 'fr' ? 'Nos programmes' : 'برامجنا'}
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '800', color: c.bleuOxford, textAlign: 'center', marginBottom: '16px' }}>
              {t.courses.title}
            </h2>
            <p style={{ color: '#888', maxWidth: 600, margin: '0 auto', fontSize: '16px' }}>{t.courses.subtitle}</p>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {t.courses.items.map((course, idx) => (
            <FadeIn key={idx} delay={idx * 0.15}>
              <div style={{ ...cardStyle, position: 'relative' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'; }}>
                {course.badge && (
                  <div style={{ position: 'absolute', top: -10, right: 20, padding: '4px 14px', backgroundColor: c.orange, color: '#fff', fontSize: '11px', fontWeight: 700, borderRadius: '999px', boxShadow: '0 4px 12px rgba(255,132,0,0.3)' }}>
                    {course.badge}
                  </div>
                )}
                <div style={{ width: 56, height: 56, background: `linear-gradient(135deg, ${c.amande} 0%, ${c.vistaBleu}30 100%)`, borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', fontSize: '24px' }}>
                  {course.icon}
                </div>
                <h3 style={{ fontSize: '19px', fontWeight: 700, color: c.bleuOxford, margin: '0 0 8px' }}>{course.title}</h3>
                <p style={{ color: '#888', margin: '0 0 20px', fontSize: '14px', lineHeight: 1.6 }}>{course.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {course.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#666' }}>
                      <Icon name="checkCircle" size={16} color="#22c55e" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;