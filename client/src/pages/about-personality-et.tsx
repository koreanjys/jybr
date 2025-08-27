import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LanguageSwitcher from '@/components/language-switcher';

function AboutPersonalityETPage() {
  const { t } = useTranslation();

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #fef7f0 0%, #fdf2f8 50%, #eff6ff 100%)',
      padding: 'clamp(1rem, 4vw, 2rem)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <LanguageSwitcher />
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* 뒤로가기 버튼 */}
        <Link 
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0.75rem 1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderRadius: '0.75rem',
            color: '#8b5cf6',
            textDecoration: 'none',
            fontSize: 'clamp(0.9rem, 3vw, 1rem)',
            fontWeight: '600',
            boxShadow: '0 4px 15px rgba(139, 92, 246, 0.2)',
            transition: 'all 0.3s ease',
            marginBottom: '2rem'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.2)';
          }}
        >
          ← {t('about.common.backToHome')}
        </Link>

        {/* 메인 컨텐츠 */}
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          borderRadius: '1.5rem',
          padding: 'clamp(2rem, 5vw, 3rem)',
          boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          border: '2px solid #8b5cf6'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1rem' }}>💭</div>
            <h1 style={{
              fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
              fontWeight: 'bold',
              color: '#8b5cf6',
              marginBottom: '1rem'
            }}>
              {t('about.personalityET.title')}
            </h1>
          </div>

          <div style={{ lineHeight: '1.8', color: '#374151', fontSize: 'clamp(0.9rem, 3vw, 1.1rem)' }}>
            <h2 style={{ color: '#8b5cf6', fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', marginBottom: '1rem' }}>
              {t('about.common.testOverview')}
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              {t('about.personalityET.overview')}
            </p>

            <h2 style={{ color: '#8b5cf6', fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', marginBottom: '1rem' }}>
              {t('about.common.testFeatures')}
            </h2>
            <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              {(t('about.personalityET.features', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{feature}</li>
              ))}
            </ul>

            <h2 style={{ color: '#8b5cf6', fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', marginBottom: '1rem' }}>
              {t('about.common.testMethod')}
            </h2>
            <ol style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
              {(t('about.personalityET.methods', { returnObjects: true }) as string[]).map((method: string, index: number) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{method}</li>
              ))}
            </ol>

            <div style={{
              backgroundColor: '#f3f4f6',
              padding: '1.5rem',
              borderRadius: '1rem',
              marginTop: '2rem'
            }}>
              <p style={{ 
                color: '#6b7280', 
                fontSize: '0.95rem',
                textAlign: 'center',
                margin: 0
              }}>
                {t('about.common.testDuration')}: {t('about.personalityET.duration')} {t('about.common.minutes')} | {t('about.common.questionCount')}: {t('about.personalityET.questionCount')} {t('about.common.questions')}
              </p>
            </div>
          </div>

          {/* 테스트 시작 버튼 */}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a
              href="https://personality-et.jybr.me"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '1.25rem 2.5rem',
                backgroundColor: '#8b5cf6',
                borderRadius: '1rem',
                color: 'white',
                textDecoration: 'none',
                fontSize: 'clamp(1rem, 4vw, 1.2rem)',
                fontWeight: '700',
                transition: 'all 0.3s ease',
                boxShadow: '0 8px 25px rgba(139, 92, 246, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 12px 35px rgba(139, 92, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(139, 92, 246, 0.3)';
              }}
            >
              {t('about.common.startTest')} →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPersonalityETPage;
