function HomePage() {
  const testCategories = [
    {
      title: "성향 테스트",
      emoji: "🧠",
      color: "#8b5cf6",
      description: "나의 성격과 행동 패턴을 깊이 있게 분석해보세요",
      tests: [
        { name: "MBTI 성격유형 검사", url: "https://www.16personalities.com/ko" },
        { name: "에니어그램 검사", url: "https://www.eclecticenergies.com/korean/enneagram/test" },
        { name: "빅파이브 성격검사", url: "https://www.truity.com/test/big-five-personality-test" },
        { name: "DISC 성향검사", url: "https://www.123test.com/ko/disc-personality-test/" },
        { name: "홀랜드 진로적성검사", url: "https://www.career.go.kr/cnet/front/base/job/jobMain.do" }
      ]
    },
    {
      title: "공포 테스트",
      emoji: "👻", 
      color: "#ec4899",
      description: "당신의 공포 내성과 스릴 선호도를 측정해보세요",
      tests: [
        { name: "공포 영화 취향 테스트", url: "https://www.buzzfeed.com/kr/hannahmarder/horror-movie-personality-test" },
        { name: "무서운 이야기 테스트", url: "https://uquiz.com/quiz/horror-tolerance" },
        { name: "스릴 추구 성향 검사", url: "https://www.psytoolkit.org/survey-library/sensation-seeking-zuckerman.html" },
        { name: "공포 내성 측정", url: "https://www.allthetests.com/quiz33/quiz/1234567890/How-brave-are-you" },
        { name: "어둠 공포증 테스트", url: "https://www.fearof.net/fear-of-darkness-test/" }
      ]
    },
    {
      title: "지능 테스트",
      emoji: "🎯",
      color: "#3b82f6", 
      description: "논리적 사고력과 문제 해결 능력을 평가해보세요",
      tests: [
        { name: "IQ 테스트", url: "https://www.iqtest.com/ko/" },
        { name: "논리적 사고력 검사", url: "https://www.123test.com/ko/logical-reasoning-test/" },
        { name: "수학적 추론 능력", url: "https://www.mathpapa.com/algebra-calculator/" },
        { name: "공간지각능력 테스트", url: "https://www.123test.com/spatial-reasoning-test/" },
        { name: "언어능력 검사", url: "https://www.vocabulary.com/test/" }
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
