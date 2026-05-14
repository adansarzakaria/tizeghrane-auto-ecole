import { useState, useEffect } from 'react';
import Icon from '../common/Icon';

// Import de l'image logo (met ton image dans src/assets/logo.png ou public/logo.png)
import logoImage from '/src/assets/logo.png'; // ← ADAPTE LE CHEMIN SELON TON DOSSIER

// Si l'image est dans le dossier public, utilise:
// const logoImage = '/logo.png';

const Navbar = ({ lang, setLang, t, c, activeSection, scrollToSection, darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const isRTL = lang === 'ar';

  const languages = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ar', label: 'العربية', flag: '🇲🇦' },
  ];

  // Liste des sections à afficher (sans pricing)
  const navItems = [
    { key: 'home', label: t.nav.home },
    { key: 'about', label: t.nav.about },
    { key: 'courses', label: t.nav.courses },
    { key: 'contact', label: t.nav.contact }
  ];

  // Couleurs dynamiques selon le mode
  const getNavbarStyle = () => ({
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
    backgroundColor: darkMode ? 'rgba(8,8,40,0.95)' : 'rgba(255,255,255,0.95)',
    backdropFilter: 'blur(10px)',
    boxShadow: darkMode ? '0 1px 3px rgba(0,0,0,0.3)' : '0 1px 3px rgba(0,0,0,0.1)',
    borderBottom: darkMode ? '1px solid rgba(255,255,255,0.1)' : `1px solid ${c.amande}`
  });

  const getButtonStyle = (section) => ({
    padding: '8px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 500,
    background: 'none', border: 'none', cursor: 'pointer',
    color: activeSection === (section === 'home' ? 'home' : section) 
      ? c.orange 
      : (darkMode ? '#ccc' : '#555'),
    backgroundColor: activeSection === (section === 'home' ? 'home' : section) 
      ? 'rgba(255,132,0,0.08)' 
      : 'transparent'
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <nav style={getNavbarStyle()}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        
        {/* Logo avec Image */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => scrollToSection('home')}>
          {/* Image Logo */}
          <img 
            src={logoImage}
            alt="Logo Tizghrane Auto École"
            style={{
              height: '70px',
              width: 'auto',
              maxWidth: '180px',
              objectFit: 'contain',
              borderRadius: '8px'
            }}
          />
          {/* Optionnel: Si tu veux garder le texte à côté du logo, décommente la ligne ci-dessous */}
          {/* <div>
            <span style={{ fontSize: '18px', fontWeight: '800', color: darkMode ? '#fff' : c.bleuOxford, display: 'block', lineHeight: 1.1 }}>TIZGHRANE</span>
            <span style={{ fontSize: '11px', color: darkMode ? '#aaa' : '#888', fontWeight: 500 }}>Auto École</span>
          </div> */}
        </div>

        {/* Desktop Menu - Sans Pricing */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} className="desktop-menu">
          {navItems.map((item) => (
            <button 
              key={item.key} 
              onClick={() => scrollToSection(item.key === 'home' ? 'home' : item.key)} 
              style={getButtonStyle(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Right Side: Language + Dark Mode + Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          
          {/* Dark/Light Mode Toggle Button */}
          <button
            onClick={toggleDarkMode}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: '38px', height: '38px', borderRadius: '8px',
              background: darkMode ? 'rgba(255,255,255,0.1)' : '#f0f0f0',
              border: 'none', cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            {darkMode ? (
              <span style={{ fontSize: '20px' }}>☀️</span>
            ) : (
              <span style={{ fontSize: '20px' }}>🌙</span>
            )}
          </button>

          {/* Language Switcher */}
          <div style={{ position: 'relative' }}>
            <button onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px', borderRadius: '8px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', color: darkMode ? '#ccc' : '#555' }}>
              <span style={{ fontSize: '18px' }}>{languages.find(l => l.code === lang)?.flag}</span>
              <span>{languages.find(l => l.code === lang)?.label}</span>
              <Icon name="chevronDown" size={14} color={darkMode ? '#ccc' : '#555'} />
            </button>
            {langDropdownOpen && (
              <div style={{ 
                position: 'absolute', right: 0, top: '100%', marginTop: '8px', width: 160, 
                backgroundColor: darkMode ? '#1a1a2e' : '#fff', 
                borderRadius: '12px', 
                boxShadow: darkMode ? '0 10px 40px rgba(0,0,0,0.3)' : '0 10px 40px rgba(0,0,0,0.15)', 
                border: darkMode ? '1px solid #333' : '1px solid #eee', 
                overflow: 'hidden', zIndex: 100 
              }}>
                {languages.map((l) => (
                  <button key={l.code} onClick={() => { setLang(l.code); setLangDropdownOpen(false); }}
                    style={{ 
                      width: '100%', display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', 
                      border: 'none', 
                      background: lang === l.code ? (darkMode ? 'rgba(255,132,0,0.2)' : 'rgba(255,132,0,0.08)') : (darkMode ? '#1a1a2e' : '#fff'), 
                      color: lang === l.code ? c.orange : (darkMode ? '#ccc' : '#333'), 
                      fontSize: '14px', cursor: 'pointer', textAlign: 'left' 
                    }}>
                    <span style={{ fontSize: '18px' }}>{l.flag}</span>{l.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ display: 'none' }} className="mobile-toggle">
            {mobileMenuOpen ? <Icon name="close" size={22} color={darkMode ? '#fff' : '#333'} /> : <Icon name="menu" size={22} color={darkMode ? '#fff' : '#333'} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Sans Pricing */}
      {mobileMenuOpen && (
        <div style={{ backgroundColor: darkMode ? '#1a1a2e' : '#fff', borderTop: darkMode ? '1px solid #333' : '1px solid #eee', padding: '12px 16px' }}>
          {navItems.map((item) => (
            <button 
              key={item.key} 
              onClick={() => scrollToSection(item.key === 'home' ? 'home' : item.key)}
              style={{ display: 'block', width: '100%', textAlign: 'left', padding: '12px 16px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', color: darkMode ? '#ccc' : '#555' }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;