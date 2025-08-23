import { Link } from 'wouter';

function IntelligenceTestPage() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
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
          지능 테스트 🎯
        </h1>
        
        <p style={{ fontSize: '1.25rem', marginBottom: '3rem', opacity: 0.9 }}>
          논리적 사고력과 문제 해결 능력을 평가합니다
        </p>
        
        <div style={{ 
          backgroundColor: 'rgba(255,255,255,0.1)', 
          borderRadius: '1rem', 
          padding: '2rem',
          marginBottom: '2rem'
        }}>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            곧 다양한 지능 테스트들이 추가될 예정입니다.<br/>
            논리 추론, 수치 계산, 공간 지각, 언어 능력 등을 종합적으로 측정해보세요.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IntelligenceTestPage;
