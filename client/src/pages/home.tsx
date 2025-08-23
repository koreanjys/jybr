import { Link } from 'wouter';

function HomePage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #fef7f0 0%, #fdf2f8 50%, #eff6ff 100%)',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
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
          JyBr - Just Your Brain Report
        </h1>
        <p style={{ 
          fontSize: 'clamp(1rem, 4vw, 1.25rem)', 
          color: '#6b7280', 
          maxWidth: '42rem', 
          margin: '0 auto 3rem auto'
        }}>
          다양한 테스트로 당신의 마음과 뇌를 탐험해보세요 ✨
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem', 
          maxWidth: '72rem', 
          margin: '0 auto'
        }}>
          <Link href="/personality" style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '1.5rem', 
              padding: '2rem', 
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              textAlign: 'center',
              border: '2px solid transparent',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(139, 92, 246, 0.3)';
              e.currentTarget.style.borderColor = '#8b5cf6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🧠</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#8b5cf6', marginBottom: '0.75rem' }}>
                성향 테스트
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                나의 성격과 행동 패턴을 깊이 있게 분석해보세요
              </p>
            </div>
          </Link>

          <Link href="/horror" style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '1.5rem', 
              padding: '2rem', 
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              textAlign: 'center',
              border: '2px solid transparent',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(236, 72, 153, 0.3)';
              e.currentTarget.style.borderColor = '#ec4899';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👻</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#ec4899', marginBottom: '0.75rem' }}>
                공포 테스트
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                당신의 공포 내성과 스릴 선호도를 측정해보세요
              </p>
            </div>
          </Link>

          <Link href="/intelligence" style={{ textDecoration: 'none' }}>
            <div style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '1.5rem', 
              padding: '2rem', 
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              textAlign: 'center',
              border: '2px solid transparent',
              transition: 'all 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(59, 130, 246, 0.3)';
              e.currentTarget.style.borderColor = '#3b82f6';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = 'transparent';
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎯</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3b82f6', marginBottom: '0.75rem' }}>
                지능 테스트
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                논리적 사고력과 문제 해결 능력을 평가해보세요
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
