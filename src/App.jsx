import { useState, useEffect } from 'react';
// إلى
import Navbar from "./Components/layout/Navbar";
import Footer from "./Components/layout/Footer";
import Hero from "./Components/sections/Hero";
import About from "./Components/sections/About";
import Courses from "./Components/sections/Courses";
import Features from './components/sections/Features';
import Contact from './components/sections/Contact';

// ==================== TRANSLATIONS ====================
const translations = {
  fr: {
    nav: { home: 'Accueil', about: 'À propos', courses: 'Cours', pricing: 'Tarifs', contact: 'Contact' },
    hero: {
      title: 'Apprenez à conduire en toute confiance',
      subtitle: 'Auto-école Tizghrane — Formation professionnelle pour tous les permis de conduire à Tiznit',
      cta: "S'inscrire maintenant",
      stats: { students: 'Élèves formés', success: 'Taux de réussite', years: "Années d'expérience" }
    },
    about: {
      title: 'À propos de nous',
      desc: "Tizghrane Auto École est une institution de formation à la conduite basée à Tiznit. Nous proposons des formations pour toutes les catégories de véhicules : voitures, camions, bus et motos. Notre équipe d'instructeurs certifiés vous accompagne avec patience et professionnalisme jusqu'à l'obtention de votre permis.",
      features: [
        { icon: '🏆', title: 'Instructeurs certifiés', desc: 'Équipe qualifiée et expérimentée' },
        { icon: '🛡️', title: 'Taux de réussite élevé', desc: '95% de nos élèves réussissent du premier coup' },
        { icon: '⏰', title: 'Horaires flexibles', desc: 'Cours adaptés à votre emploi du temps' },
        { icon: '🚗', title: 'Tous véhicules', desc: 'Voiture, camion, bus et moto' }
      ]
    },
    courses: {
      title: 'Nos Formations',
      subtitle: 'Des formations adaptées à tous les besoins',
      items: [
        { title: 'Code de la route', desc: 'Cours théorique complet pour maîtriser le code de la route marocain', icon: '📚', features: ['Cours théoriques', 'Tests blancs', 'Support pédagogique'] },
        { title: 'Conduite pratique', desc: 'Apprentissage de la conduite en conditions réelles avec instructeur', icon: '🎯', features: ['Conduite en ville', 'Manœuvres', 'Autoroute'] },
        { title: 'Pack Complet', desc: 'La solution tout-en-un : code + conduite + examen', icon: '📦', features: ['Code + Conduite', "Frais d'examen", 'Garantie réussite'], badge: 'Populaire' }
      ]
    },

    features: {
      title: 'Pourquoi nous choisir ?',
      booking: { title: 'Réserver un cours', name: 'Nom complet', email: 'Email', phone: 'Téléphone', type: 'Type de formation', date: 'Date souhaitée', submit: 'Réserver maintenant', success: 'Réservation envoyée !' },
      testimonials: {
        title: 'Avis de nos élèves',
        items: [
          { name: 'Ahmed B.', text: "Excellente auto-école ! J'ai obtenu mon permis du premier coup grâce aux conseils de mon instructeur.", rating: 5 },
          { name: 'Fatima Z.', text: 'Très professionnel, horaires flexibles et instructeurs patients. Je recommande vivement !', rating: 5 },
          { name: 'Youssef M.', text: "Le pack complet est vraiment avantageux. Tout est inclus et l'accompagnement est top.", rating: 4 }
        ]
      },
      stats: { title: 'Nos chiffres', students: 'Élèves', success: 'Réussite', instructors: 'Instructeurs', vehicles: 'Véhicules' }
    },
    contact: {
      title: 'Contactez-nous',
      subtitle: 'Nous sommes à votre écoute',
      form: { name: 'Votre nom', email: 'Votre email', message: 'Votre message', send: 'Envoyer le message' },
      info: { address: 'Adresse', phone: 'Téléphone', email: 'Email', hours: 'Horaires' },
      address: 'N°25, 2ème étage, Immeuble Ikram, Hay El Bagh, près du Centre de Formation Professionnelle, Tiznit',
      hours: 'Lun - Sam: 8h00 - 18h00'
    },
    footer: { rights: 'Tous droits réservés.', follow: 'Suivez-nous' }
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'من نحن', courses: 'الدورات', pricing: 'الأسعار', contact: 'اتصل بنا' },
    hero: {
      title: 'تعلم القيادة بثقة تامة',
      subtitle: 'مدرسة تيزغران لتعليم السياقة — تكوين مهني لجميع رخص السياقة بتزنيت',
      cta: 'سجل الآن',
      stats: { students: 'متدرب', success: 'نسبة النجاح', years: 'سنوات الخبرة' }
    },
    about: {
      title: 'من نحن',
      desc: 'مدرسة تيزغران لتعليم السياقة هي مؤسسة تكوين في مجال القيادة مقرها بتزنيت. نقدم تكوينات لجميع فئات المركبات: السيارات، الشاحنات، الحافلات والدراجات النارية. يرافقك فريقنا من المدرسين المعتمدين بصبر واحترافية إلى غاية الحصول على رخصتك.',
      features: [
        { icon: '🏆', title: 'مدرسون معتمدون', desc: 'فريق مؤهل وذو خبرة' },
        { icon: '🛡️', title: 'نسبة نجاح عالية', desc: '95% من متدربينا ينجحون من المحاولة الأولى' },
        { icon: '⏰', title: 'أوقات مرنة', desc: 'دروس تتكيف مع جدول أعمالك' },
        { icon: '🚗', title: 'جميع المركبات', desc: 'سيارة، شاحنة، حافلة ودراجة نارية' }
      ]
    },
    courses: {
      title: 'دوراتنا',
      subtitle: 'تكوينات ملائمة لجميع الاحتياجات',
      items: [
        { title: 'مدونة السير', desc: 'درس نظري شامل لإتقان مدونة السير المغربية', icon: '📚', features: ['دروس نظرية', 'اختبارات تجريبية', 'دعم تربوي'] },
        { title: 'القيادة العملية', desc: 'تعلم القيادة في ظروف حقيقية مع مدرس', icon: '🎯', features: ['قيادة في المدينة', 'المناورات', 'الطريق السيار'] },
        { title: 'الحزمة الكاملة', desc: 'الحل الشامل: مدونة + قيادة + امتحان', icon: '📦', features: ['مدونة + قيادة', 'رسوم الامتحان', 'ضمان النجاح'], badge: 'الأكثر طلباً' }
      ]
    },
 
    features: {
      title: 'لماذا تختارنا؟',
      booking: { title: 'احجز درساً', name: 'الاسم الكامل', email: 'البريد الإلكتروني', phone: 'الهاتف', type: 'نوع التكوين', date: 'التاريخ المطلوب', submit: 'احجز الآن', success: 'تم إرسال الحجز!' },
      testimonials: {
        title: 'آراء متدربينا',
        items: [
          { name: 'أحمد ب.', text: 'مدرسة ممتازة! حصلت على رخصتي من المحاولة الأولى بفضل نصائح مدرسي.', rating: 5 },
          { name: 'فاطمة ز.', text: 'محترف جداً، أوقات مرنة ومدرسون صبورون. أنصح بشدة!', rating: 5 },
          { name: 'يوسف م.', text: 'الحزمة الكاملة مفيدة حقاً. كل شيء مشمول والمرافقة رائعة.', rating: 4 }
        ]
      },
      stats: { title: 'أرقامنا', students: 'متدرب', success: 'نجاح', instructors: 'مدرس', vehicles: 'مركبة' }
    },
    contact: {
      title: 'تواصل معنا',
      subtitle: 'نحن في خدمتكم',
      form: { name: 'اسمك', email: 'بريدك الإلكتروني', message: 'رسالتك', send: 'إرسال الرسالة' },
      info: { address: 'العنوان', phone: 'الهاتف', email: 'البريد الإلكتروني', hours: 'الساعات' },
      address: 'رقم 25، الطابق الثاني، عمارة إكرام، حي البغ، قرب مركز التكوين المهني، تزنيت',
      hours: 'الإثنين - السبت: 8:00 - 18:00'
    },
    footer: { rights: 'جميع الحقوق محفوظة.', follow: 'تابعنا' }
  }
};

// ==================== STYLES OBJECT ====================
const styles = {
  colors: {
    orange: '#FF8400',
    vistaBleu: '#8FA0D8',
    amande: '#F0DEC4',
    bleuOxford: '#080828',
    white: '#FFFFFF',
    lightGray: '#F5F5F7',
    textGray: '#666666',
    darkBg: '#0a0a1a',
    darkCard: '#111122',
    darkText: '#e0e0e0'
  }
};

export default function App() {
  const [lang, setLang] = useState('fr');
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const t = translations[lang];
  const baseColors = styles.colors;

  // Couleurs dynamiques pour dark/light mode
  const c = {
    ...baseColors,
    background: darkMode ? baseColors.darkBg : baseColors.lightGray,
    cardBg: darkMode ? baseColors.darkCard : '#fff',
    textPrimary: darkMode ? '#fff' : baseColors.bleuOxford,
    textSecondary: darkMode ? '#aaa' : baseColors.textGray,
    border: darkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) { 
      el.scrollIntoView({ behavior: 'smooth' }); 
      setActiveSection(id); 
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'courses', 'pricing', 'features', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) { 
            setActiveSection(section); 
            break; 
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Appliquer dark mode au body
  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? '#0a0a1a' : '#F5F5F7';
    document.body.style.transition = 'background-color 0.3s ease';
  }, [darkMode]);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: c.background, 
      fontFamily: "'Inter', sans-serif",
      transition: 'background-color 0.3s ease, color 0.3s ease',
      color: c.textSecondary
    }} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        t={t} 
        c={c} 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Hero lang={lang} t={t} c={c} scrollToSection={scrollToSection} darkMode={darkMode} />
      <About lang={lang} t={t} c={c} darkMode={darkMode} />
      <Courses lang={lang} t={t} c={c} darkMode={darkMode} />
      <Features lang={lang} t={t} c={c} darkMode={darkMode} />
      <Contact lang={lang} t={t} c={c} darkMode={darkMode} />
      <Footer lang={lang} t={t} c={c} scrollToSection={scrollToSection} darkMode={darkMode} />
    </div>
  );
}