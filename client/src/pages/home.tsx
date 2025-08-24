import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/language-switcher';

function HomePage() {
  const { t } = useTranslation();

  const testCategories = [
    {
      title: t('home.categories.personality.title'),
      emoji: "💭",
      color: "#8b5cf6",
      description: t('home.categories.personality.description'),
      tests: [
        { name: t('home.categories.personality.tests.personality_et'), url: "https://personality-et.jybr.me" },
      ]
    },
    {
      title: t('home.categories.horror.title'),
      emoji: "👻", 
      color: "#ec4899",
      description: t('home.categories.horror.description'),
      tests: [
        { name: t('home.categories.horror.tests.psychopath'), url: "#" },
      ]
    },
    {
      title: t('home.categories.intelligence.title'),
      emoji: "🎯",
      color: "#3b82f6", 
      description: t('home.categories.intelligence.description'),
      tests: [
        { name: t('home.categories.intelligence.tests.iq'), url: "#" },
      ]
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #fef7f0 0%, #fdf2f8 50%, #eff6ff 100%)',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <LanguageSwitcher />
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
          marginBottom: '1rem',
          lineHeight: '1.1'
        }}>
          {t('home.title')}
        </h1>
        <p style={{ 
          fontSize: 'clamp(1rem, 4vw, 1.25rem)', 
          color: '#6b7280', 
          maxWidth: '42rem', 
          margin: '0 auto 3rem auto'
        }}>
          {t('home.subtitle')}
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem', 
          maxWidth: '80rem', 
          margin: '0 auto'
        }}>
          {testCategories.map((category, index) => (
            <div key={index} style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '1.5rem', 
              padding: '2rem', 
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              textAlign: 'left',
              border: '2px solid transparent',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = `0 20px 40px ${category.color}30`;
              e.currentTarget.style.borderColor = category.color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{category.emoji}</div>
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  color: category.color, 
                  marginBottom: '0.75rem' 
                }}>
                  {category.title}
                </h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '0.9rem' }}>
                  {category.description}
                </p>
              </div>
              
              <div style={{ marginTop: '1.5rem' }}>
                <ul style={{ 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  {category.tests.map((test, testIndex) => (
                    <li key={testIndex}>
                      <a 
                        href={test.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'block',
                          padding: '0.75rem 1rem',
                          backgroundColor: `${category.color}10`,
                          borderRadius: '0.75rem',
                          color: category.color,
                          textDecoration: 'none',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          transition: 'all 0.2s ease',
                          border: `1px solid ${category.color}20`
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = `${category.color}20`;
                          e.currentTarget.style.transform = 'translateX(4px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = `${category.color}10`;
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        → {test.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
