import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ko' ? 'en' : 'ko';
    i18n.changeLanguage(newLang);
    
    // HTML lang 속성 업데이트
    document.documentElement.lang = newLang;
  };

  return (
    <button
      onClick={toggleLanguage}
      style={{
        position: 'fixed',
        top: '1.5rem',
        right: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.75rem 1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        border: '2px solid rgba(139, 92, 246, 0.2)',
        borderRadius: '2rem',
        fontSize: '0.875rem',
        fontWeight: '500',
        color: '#8b5cf6',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 1000
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.1)';
        e.currentTarget.style.borderColor = '#8b5cf6';
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 8px 15px rgba(139, 92, 246, 0.2)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.2)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
      }}
    >
      <span style={{ fontSize: '1.125rem' }}>🌐</span>
      <span>{i18n.language === 'ko' ? t('home.language.english') : t('home.language.korean')}</span>
    </button>
  );
}

export default LanguageSwitcher;
