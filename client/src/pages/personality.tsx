import { Link } from 'wouter';

function PersonalityTestPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: 'white'
    }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center' }}>
        <Link href="/" style={{ 
          color: 'rgba(255,255,255,0.8)', 
          textDecoration: 'none',
          fontSize: '1rem',
          display: 'inline-block',
          marginBottom: '2rem'
        }}>
          ← 홈으로 돌아가기
        </Link>
        
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          성향 테스트 🧠
        </h1>
        
        <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9 }}>
          당신의 성격과 행동 패턴을 깊이 있게 분석합니다
        </p>
        
        <div style={{ 
          backgroundColor: 'rgba(255,255,255,0.1)', 
          borderRadius: '1rem', 
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            곧 다양한 성향 테스트들이 추가될 예정입니다.<br/>
            MBTI, 애니어그램, 빅파이브 등 검증된 심리 테스트들을 만나보세요.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PersonalityTestPage;
