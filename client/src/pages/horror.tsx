import { Link } from 'wouter';

function HorrorTestPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
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
          공포 테스트 👻
        </h1>
        
        <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9 }}>
          당신의 공포 내성과 스릴 선호도를 측정합니다
        </p>
        
        <div style={{ 
          backgroundColor: 'rgba(255,255,255,0.1)', 
          borderRadius: '1rem', 
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            곧 다양한 공포 테스트들이 추가될 예정입니다.<br/>
            호러 영화 선호도, 공포 상황 반응, 스릴 추구 성향 등을 분석해보세요.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HorrorTestPage;
