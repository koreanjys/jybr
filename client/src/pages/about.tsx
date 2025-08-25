import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/language-switcher';

function AboutPage() {
  const { t } = useTranslation();

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #fef7f0 0%, #fdf2f8 50%, #eff6ff 100%)',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <LanguageSwitcher />
      
      <div style={{ maxWidth: '50rem', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ 
            fontSize: 'clamp(2rem, 6vw, 3rem)', 
            fontWeight: 'bold',
            background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #3b82f6)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
            marginBottom: '1rem'
          }}>
            {t('about.title')}
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: '#6b7280' 
          }}>
            {t('about.subtitle')}
          </p>
        </header>

        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '1.5rem',
          padding: '3rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: '#374151',
              marginBottom: '1.5rem'
            }}>
              {t('about.mission.title')}
            </h2>
            <p style={{
              color: '#6b7280',
              lineHeight: '1.8',
              fontSize: '1.1rem',
              marginBottom: '1rem'
            }}>
              {t('about.mission.description1')}
            </p>
            <p style={{
              color: '#6b7280',
              lineHeight: '1.8',
              fontSize: '1.1rem'
            }}>
              {t('about.mission.description2')}
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: '#374151',
              marginBottom: '1.5rem'
            }}>
              {t('about.approach.title')}
            </h2>
            <div style={{ display: 'grid', gap: '1.5rem' }}>
              {['scientific', 'privacy', 'accessibility', 'accuracy'].map((key) => (
                <div key={key} style={{
                  padding: '1.5rem',
                  backgroundColor: 'rgba(139, 92, 246, 0.05)',
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid #8b5cf6'
                }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#8b5cf6',
                    marginBottom: '0.75rem'
                  }}>
                    {t(`about.approach.${key}.title`)}
                  </h3>
                  <p style={{
                    color: '#6b7280',
                    lineHeight: '1.6'
                  }}>
                    {t(`about.approach.${key}.description`)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 style={{
              fontSize: '1.8rem',
              fontWeight: 'bold',
              color: '#374151',
              marginBottom: '1.5rem'
            }}>
              {t('about.vision.title')}
            </h2>
            <p style={{
              color: '#6b7280',
              lineHeight: '1.8',
              fontSize: '1.1rem',
              marginBottom: '1rem'
            }}>
              {t('about.vision.description1')}
            </p>
            <p style={{
              color: '#6b7280',
              lineHeight: '1.8',
              fontSize: '1.1rem'
            }}>
              {t('about.vision.description2')}
            </p>
          </section>
        </div>

        <div style={{ textAlign: 'center' }}>
          <a 
            href="/"
            style={{
              display: 'inline-block',
              padding: '1rem 2rem',
              backgroundColor: '#8b5cf6',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '0.75rem',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#7c3aed';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#8b5cf6';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {t('about.backToHome')}
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
