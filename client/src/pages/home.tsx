import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import LanguageSwitcher from '@/components/language-switcher';

function HomePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const testCategories = [
    {
      title: t('home.categories.personality.title'),
      emoji: "💭",
      color: "#8b5cf6",
      description: t('home.categories.personality.description'),
      tests: [
        { 
          name: t('home.categories.personality.tests.personality_et'), 
          url: "https://personality-et.jybr.me",
          aboutPath: "/about/personality-et"
        },
      ]
    },
    {
      title: t('home.categories.horror.title'),
      emoji: "👻", 
      color: "#ec4899",
      description: t('home.categories.horror.description'),
      tests: [
        { 
          name: t('home.categories.horror.tests.psychopath'), 
          url: "https://psychopath.jybr.me",
          aboutPath: "/about/psychopath"
        },
      ]
    },
    {
      title: t('home.categories.intelligence.title'),
      emoji: "🎯",
      color: "#3b82f6", 
      description: t('home.categories.intelligence.description'),
      tests: [
        { 
          name: t('home.categories.intelligence.tests.iq'), 
          url: "#",
          aboutPath: "/about/iq"
        },
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
          fontSize: 'clamp(2rem, 6vw, 4rem)', 
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
          fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', 
          color: '#6b7280', 
          maxWidth: '42rem', 
          margin: '0 auto 3rem auto'
        }}>
          {t('home.subtitle')}
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem', 
          maxWidth: '85rem', 
          margin: '0 auto'
        }}>
          {testCategories.map((category, index) => (
            <div key={index} style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderRadius: '1.5rem', 
              padding: 'clamp(1.5rem, 4vw, 2.5rem)', 
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              textAlign: 'left',
              border: '2px solid transparent',
              transition: 'all 0.3s ease',
              minHeight: '280px'
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
                <div style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1rem' }}>{category.emoji}</div>
                <h3 style={{ 
                  fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', 
                  fontWeight: 'bold', 
                  color: category.color, 
                  marginBottom: '0.75rem' 
                }}>
                  {category.title}
                </h3>
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
                      <div style={{
                        display: 'flex',
                        gap: '0.75rem',
                        alignItems: 'stretch'
                      }}>
                        <a 
                          href={test.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            flex: '1',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1rem 1.25rem',
                            backgroundColor: category.color,
                            borderRadius: '0.75rem',
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '1rem',
                            fontWeight: '600',
                            transition: 'all 0.3s ease',
                            textAlign: 'center',
                            boxShadow: `0 4px 15px ${category.color}30`
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = `0 8px 25px ${category.color}40`;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = `0 4px 15px ${category.color}30`;
                          }}
                        >
                          {test.name}
                        </a>
                        <button
                          onClick={() => {
                            navigate(test.aboutPath);
                          }}
                          style={{
                            padding: '1rem',
                            backgroundColor: 'transparent',
                            border: `2px solid ${category.color}`,
                            borderRadius: '0.75rem',
                            color: category.color,
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            whiteSpace: 'nowrap'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = category.color;
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.transform = 'translateY(-3px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = category.color;
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          About
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 푸터 */}
        <div style={{
          marginTop: '4rem',
          textAlign: 'center'
        }}>
          <div style={{
            color: '#9ca3af',
            fontSize: '0.875rem',
            lineHeight: '1.6'
          }}>
            <p style={{ marginBottom: '0.5rem' }}>
              {t('home.footer.copyright')}
            </p>
            <p>
              {t('home.footer.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
