function App() {
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
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            e.currentTarget.style.borderColor = '#c084fc';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
            e.currentTarget.style.borderColor = 'transparent';
          }}>
            <div style={{ 
              fontSize: '4rem', 
              marginBottom: '1rem',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
            }}>🧠</div>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem', 
              color: '#374151'
            }}>성향 테스트</h2>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
              당신의 성격과 성향을 깊이 있게 알아보세요
            </p>
          </div>
          
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
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            e.currentTarget.style.borderColor = '#c084fc';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
            e.currentTarget.style.borderColor = 'transparent';
          }}>
            <div style={{ 
              fontSize: '4rem', 
              marginBottom: '1rem',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
            }}>👻</div>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem', 
              color: '#374151'
            }}>공포 테스트</h2>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
              무서운 이야기와 스릴 넘치는 공포 체험
            </p>
          </div>
          
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
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
            e.currentTarget.style.borderColor = '#c084fc';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
            e.currentTarget.style.borderColor = 'transparent';
          }}>
            <div style={{ 
              fontSize: '4rem', 
              marginBottom: '1rem',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))'
            }}>🎯</div>
            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 'bold', 
              marginBottom: '1rem', 
              color: '#374151'
            }}>지능 테스트</h2>
            <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
              논리력과 지능을 정확하게 측정해보세요
            </p>
          </div>
        </div>
        
        <div style={{ marginTop: '4rem', color: '#9ca3af', fontSize: '0.875rem' }}>
          <p>🌈 JyBr.me - Just Your Brain Report 🌈</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
            당신만의 특별한 뇌과학 여행을 시작하세요
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
