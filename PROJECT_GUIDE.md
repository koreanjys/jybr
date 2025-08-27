# JYBR 분산형 테스트 플랫폼 개발 가이드

## 시스템 개요
JYBR은 메인 허브(jybr.me)를 중심으로 각 테스트를 독립적인 서브도메인으로 개발하는 분산형 심리 테스트 플랫폼입니다.

## 아키텍처 구조
```
JYBR 플랫폼 구조:

메인 허브 (jybr.me)
├── 테스트 목록 관리
├── 네비게이션
└── 다국어 지원

서브도메인 테스트들:
├── personality-et.jybr.me (성격+호르몬 테스트)
├── psychopath.jybr.me (사이코패스 테스트)
├── iq.jybr.me (지능 테스트)
└── [새로운 테스트].jybr.me

연결 구조:
메인 허브 ↔ 각 서브도메인 테스트
- 허브에서 테스트 선택
- 테스트 완료 후 허브로 복귀
- 결과 공유 시 허브 링크 포함
```

## 표준 기술 스택
- **Frontend**: React 18.3+ + TypeScript 5.6+ + Vite 5.4+
- **Styling**: 인라인 CSS (일관된 디자인 시스템)
- **UI Components**: shadcn/ui (필요한 컴포넌트만 선별)
- **Internationalization**: react-i18next (한/영 필수)
- **Deployment**: Cloudflare Pages (서브도메인별 자동 배포)
- **Performance**: 60KB gzipped 목표

## 서브도메인 테스트 프로젝트 구조
```
[테스트명].jybr.me/
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn/ui 컴포넌트
│   │   ├── test/            # 테스트 전용 컴포넌트
│   │   │   ├── Question.tsx # 질문 컴포넌트
│   │   │   ├── Progress.tsx # 진행률 표시
│   │   │   └── Result.tsx   # 결과 표시
│   │   └── common/          # 공통 컴포넌트
│   │       ├── Header.tsx   # 허브 복귀 링크 포함
│   │       └── Footer.tsx   # 브랜딩 및 링크
│   ├── data/               # 테스트 데이터
│   │   ├── questions.ts    # 질문 데이터
│   │   ├── scoring.ts      # 점수 계산 로직
│   │   └── results.ts      # 결과 유형 정의
│   ├── lib/
│   │   ├── i18n.ts         # 다국어 설정
│   │   ├── utils.ts        # 유틸리티 함수
│   │   └── calculator.ts   # 결과 계산 엔진
│   ├── locales/
│   │   ├── ko.json         # 한국어 번역
│   │   └── en.json         # 영어 번역
│   ├── types/
│   │   └── test.ts         # 테스트 관련 타입
│   └── App.tsx             # 메인 애플리케이션
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   └── _headers            # Cloudflare Pages 설정
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 새로운 테스트 개발 프로세스

### 1단계: 테스트 기획
1. **테스트 명세서 작성**
   - 테스트 목적 및 대상
   - 질문 구성 (권장: 20-40문항)
   - 점수 체계 및 결과 유형
   - 한영 번역 요구사항

2. **서브도메인 설정**
   - 도메인명 결정: `[테스트명].jybr.me`
   - Cloudflare Pages 프로젝트 생성
   - DNS 설정 및 SSL 인증서

### 2단계: 프로젝트 초기화
```bash
# 1. React 프로젝트 생성
npm create vite@latest [테스트명]-jybr -- --template react-ts
cd [테스트명]-jybr

# 2. 필수 패키지 설치
npm install react-i18next i18next-browser-languagedetector

# 3. UI 컴포넌트 (선택적)
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card progress
```

### 3단계: 핵심 컴포넌트 개발
1. **Question 컴포넌트**: 질문 표시 및 자동 진행
2. **Progress 컴포넌트**: 시각적 진행률
3. **Result 컴포넌트**: 결과 표시 및 공유
4. **Header/Footer**: 허브 네비게이션

### 4단계: 데이터 구조 정의
```typescript
// types/test.ts
export interface Question {
  id: number;
  text: { ko: string; en: string };
  options: { 
    ko: string[]; 
    en: string[]; 
  };
  scoring: Record<string, number>;
}

export interface TestResult {
  type: string;
  scores: Record<string, number>;
  description: { ko: string; en: string };
}
```

## 동적 메타데이터 시스템

### 다국어 메타태그 자동 업데이트
브라우저/OS 언어 설정에 따라 메타데이터가 자동으로 번역되어 SNS 공유 시 적절한 언어로 표시됩니다.

```typescript
// lib/use-meta.tsx
export function useMeta() {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    // 언어 변경 시 자동 업데이트되는 메타태그들
    document.title = t('meta.title');
    document.querySelector('meta[name="description"]')?.setAttribute('content', t('meta.description'));
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t('meta.ogTitle'));
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', t('meta.ogDescription'));
    document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', t('meta.twitterTitle'));
    document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', t('meta.twitterDescription'));
  }, [t, i18n.language]);
}
```

### 메타데이터 번역 구조
```json
// locales/ko.json, locales/en.json
{
  "meta": {
    "title": "언어별 페이지 제목",
    "description": "언어별 페이지 설명",
    "keywords": "언어별 키워드",
    "ogTitle": "SNS 공유용 제목",
    "ogDescription": "SNS 공유용 설명",
    "twitterTitle": "트위터 공유용 제목", 
    "twitterDescription": "트위터 공유용 설명"
  }
}
```

### 적용 방법
1. **App.tsx에서 Hook 사용**
```typescript
import { useMeta } from './lib/use-meta';

function App() {
  useMeta(); // 언어 변경 시 메타데이터 자동 업데이트
  return <Router>...</Router>;
}
```

2. **번역 파일에 meta 섹션 추가**
3. **index.html에 기본 메타태그 설정**

## 개발 가이드라인

### 성능 최적화
- **번들 크기**: 60KB gzipped 목표
- **lazy loading**: 결과 페이지는 필요시 로드
- **이미지 최적화**: WebP 포맷, 적절한 사이징
- **폰트**: 시스템 폰트 우선, 웹폰트 최소화

### UX/UI 표준
- **자동 진행**: 답변 선택 시 자동으로 다음 질문
- **진행률 표시**: 시각적 프로그레스바
- **반응형 디자인**: 모바일 우선 설계
- **다국어**: 한국어/영어 자동 감지
- **모바일 최적화**: CSS clamp() 함수로 반응형 폰트 시스템

### 모바일 최적화 가이드라인

#### CSS clamp() 함수 활용
```css
/* 반응형 폰트 크기 패턴 */
fontSize: 'clamp(최소크기, 선호크기, 최대크기)'

/* 표준 크기 가이드 */
- 메인 제목: clamp(2rem, 6vw, 4rem)
- 서브 제목: clamp(1.5rem, 5vw, 2.5rem) 
- 섹션 제목: clamp(1.2rem, 4vw, 1.5rem)
- 본문 텍스트: clamp(0.9rem, 3vw, 1.1rem)
- 작은 텍스트: clamp(0.85rem, 2.5vw, 0.95rem)
```

#### 반응형 패딩 및 간격
```css
/* 컨테이너 및 요소 간격 */
- 컨테이너 패딩: clamp(1rem, 4vw, 2rem)
- 카드 패딩: clamp(0.8rem, 3vw, 1rem)  
- 버튼 패딩: clamp(1rem, 4vw, 1.25rem)
```

#### 모바일 우선 원칙
1. **최소 크기**: 모바일 가독성 확보
2. **최대 크기**: 데스크톱 적절한 크기 제한
3. **유연한 스케일링**: viewport 기반 비례 조정
4. **일관성**: 모든 텍스트 요소 통일된 체계

### 코딩 표준
```typescript
// 반응형 인라인 CSS 예시 (모바일 최적화)
const questionStyle = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: 'clamp(1rem, 4vw, 2rem)', // 반응형 패딩
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center'
  },
  question: {
    fontSize: 'clamp(1rem, 4vw, 1.2rem)', // 반응형 폰트
    fontWeight: '600',
    marginBottom: '24px',
    lineHeight: '1.6'
  },
  button: {
    padding: 'clamp(0.8rem, 3vw, 1rem)', // 반응형 버튼 패딩
    fontSize: 'clamp(0.9rem, 3vw, 1rem)'
  }
};

// clamp() 사용 시 주의사항
// - 최소값: 모바일에서 읽기 편한 크기
// - 중간값: viewport width 기반 (보통 3-6vw)
// - 최대값: 데스크톱에서 적절한 크기
```

### 허브 연동
- **헤더에 홈 링크**: jybr.me로 복귀
- **푸터에 브랜딩**: "Powered by JYBR"
- **메타데이터**: 소셜 공유 최적화
- **결과 공유**: URL 기반 결과 공유

## 배포 및 운영

### Cloudflare Pages 설정
```javascript
// _headers 파일
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Cache-Control: public, max-age=31536000
```

### SEO 최적화
- **메타 태그**: 각 테스트별 맞춤 설정
- **Open Graph**: 소셜 미디어 공유 최적화
- **Sitemap**: 자동 생성 및 제출
- **robots.txt**: 크롤링 정책

### 품질 관리
- **TypeScript**: 엄격 모드 활성화
- **테스트**: 핵심 로직 단위 테스트
- **접근성**: WCAG 2.1 AA 준수
- **성능 모니터링**: Core Web Vitals 추적

## 메인 허브 연동

### 테스트 목록 업데이트
새 테스트 추가 시 메인 허브(jybr.me)의 테스트 목록에 추가:
```typescript
// jybr.me/src/data/tests.ts
export const tests = [
  {
    id: 'personality-et',
    name: { ko: '성격+호르몬 성향 테스트', en: 'Personality+Hormone Test' },
    url: 'https://personality-et.jybr.me',
    description: { ko: '...', en: '...' }
  },
  // 새 테스트 추가
];
```

### 분석 및 추적
- **사용자 플로우**: 허브→테스트→결과→허브
- **성과 지표**: 완료율, 공유율, 재방문률
- **A/B 테스트**: 질문 순서, UI 개선

이 가이드를 따라 JYBR 플랫폼의 새로운 심리 테스트들을 체계적으로 개발하고 운영할 수 있습니다.

## 배포 전 품질 검증 체크리스트

### 🔍 기능 검증
- [ ] **컴파일 에러 검사**: `npm run build` 성공 확인
- [ ] **TypeScript 오류 검사**: 모든 파일에서 타입 에러 없음
- [ ] **번들 크기 확인**: gzipped 60KB 목표 (최대 100KB 허용)
- [ ] **개발 서버 정상 작동**: `npm run dev` 실행 후 브라우저 테스트

### 📱 다국어 및 메타데이터 검증
- [ ] **번역 키 완전성**: 모든 `t('key')` 사용에 대응하는 번역 존재
- [ ] **메타데이터 번역**: meta.* 키들이 ko.json, en.json에 모두 존재
- [ ] **언어 전환 테스트**: 언어 변경 시 메타태그 자동 업데이트 확인
- [ ] **SNS 공유 미리보기**: 한/영 각각 적절한 제목/설명 표시

### 🌐 링크 및 연결성 검증
- [ ] **서브도메인 URL 유효성**: 모든 링크가 올바른 도메인 주소 사용
- [ ] **About 페이지 연결**: 메인 허브 ↔ About 페이지 ↔ 실제 테스트 사이트 플로우
- [ ] **네비게이션 정상 작동**: 뒤로가기, 홈 버튼 등 모든 링크 테스트
- [ ] **외부 링크**: 새 탭에서 열리는지, target="_blank" 적용 확인

### 📊 SEO 및 성능 검증
- [ ] **sitemap.xml 업데이트**: 새 페이지/도메인 추가 시 사이트맵 반영
- [ ] **robots.txt 확인**: 크롤링 정책 적절한지 검토
- [ ] **Open Graph 태그**: Facebook, Twitter 등 SNS 공유 최적화
- [ ] **모바일 반응형**: 다양한 화면 크기에서 레이아웃 테스트

### 🎨 UI/UX 검증
- [ ] **모바일 폰트 크기**: CSS clamp() 적용으로 적절한 크기 조정
- [ ] **버튼 및 링크 크기**: 터치하기 쉬운 크기 (최소 44px)
- [ ] **컬러 대비**: 접근성 기준 준수 (WCAG 2.1 AA)
- [ ] **로딩 상태**: 사용자 피드백 적절히 제공

### 🔄 Git 및 배포 검증
- [ ] **변경사항 정리**: commit 메시지가 명확하고 구체적
- [ ] **브랜치 상태**: main 브랜치가 최신 상태인지 확인
- [ ] **환경변수**: 배포 환경에 필요한 설정 누락 없음
- [ ] **빌드 설정**: vite.config.ts, package.json 적절한 설정

### 📋 배포 후 확인사항
- [ ] **실제 도메인 접속**: 배포된 사이트 정상 작동 확인
- [ ] **HTTPS 인증서**: SSL 인증서 정상 적용
- [ ] **CDN 캐싱**: Cloudflare Pages 캐시 적절히 작동
- [ ] **성능 지표**: Lighthouse 점수 확인 (Performance, SEO, Accessibility)

### ⚠️ 긴급 롤백 준비
- [ ] **이전 버전 백업**: 문제 발생 시 즉시 롤백 가능한 상태
- [ ] **모니터링 설정**: 에러 로그 및 성능 지표 모니터링
- [ ] **사용자 피드백 채널**: 문제 신고 받을 수 있는 방법 준비

- Dynamic import 고려
- 이미지 최적화

### SEO 최적화
```html
<!-- public/index.html 예시 -->
<meta name="description" content="프로젝트 설명">
<meta property="og:title" content="프로젝트 제목">
<meta property="og:description" content="프로젝트 설명">
<meta property="og:image" content="/og-image.jpg">
```

### 필수 SEO 파일들
- `robots.txt` - 크롤러 접근 설정
- `sitemap.xml` - 페이지 구조
- `_headers` - 보안 헤더 (Cloudflare Pages 등)

## 타입 정의 예시
```typescript
// src/types/index.ts
export interface CommonProps {
  id: string;
  title: string;
  description?: string;
}

export interface ComponentState {
  loading: boolean;
  error: string | null;
  data: any;
}
```

## 배포 및 운영

### 자동 배포 설정
- Git push 시 자동 배포 (Cloudflare Pages, Vercel, Netlify)
- 환경별 빌드 설정
- 배포 전 테스트 자동화

### 모니터링
- 번들 사이즈 추적
- 성능 지표 모니터링 (Core Web Vitals)
- 사용자 피드백 수집

## Git 관리

### 브랜치 전략
- `main`: 프로덕션 브랜치
- `feature/description`: 새 기능 개발
- `fix/description`: 버그 수정
- `improve/description`: 기존 기능 개선

### 커밋 메시지 형식
```
Type: Brief description

Examples:
- Add: New feature implementation
- Fix: Mobile responsive issues
- Update: Content or configuration
- Improve: User experience enhancement
```

## 프로젝트 템플릿

### 새 프로젝트 시작하기
1. **기술 스택 선택** (React + TypeScript + Vite)
2. **프로젝트 구조 설정** (표준 구조 적용)
3. **기본 컴포넌트 준비** (UI 라이브러리 설치)
4. **배포 환경 설정** (Cloudflare Pages 등)
5. **SEO 기본 설정** (메타태그, sitemap)

### 확장 가능한 구조 설계
- 모듈별 독립적 개발 가능
- 새로운 기능 쉽게 추가
- 팀원 간 협업 용이
- 유지보수성 향상

### 베스트 프랙티스
- **컴포넌트 분리** 시 재사용성 고려
- **모바일 우선** 개발 (mobile-first)
- **타입 안정성** 확보
- **성능 최적화** 고려
- **접근성** 표준 준수

## 체크리스트

### 개발 완료 전 확인사항
- [ ] 모바일 반응형 테스트 (CSS clamp() 적용 확인)
- [ ] 다국어 번역 완료 (해당하는 경우)
- [ ] 번들 사이즈 확인
- [ ] SEO 메타태그 설정
- [ ] 접근성 테스트
- [ ] 성능 최적화 확인
- [ ] 다양한 화면 크기에서 폰트 크기 테스트

### 배포 전 확인사항
- [ ] 프로덕션 빌드 테스트
- [ ] 환경변수 설정
- [ ] 도메인 설정
- [ ] 보안 헤더 설정
- [ ] 모니터링 도구 설정

---

**이 가이드는 정적 웹사이트 개발의 모범 사례를 정리한 것입니다.**  
**프로젝트 특성에 맞게 조정하여 사용하세요.**

**마지막 업데이트**: 2025.08.28 (동적 메타데이터 시스템 및 배포 전 검증 체크리스트 추가)  
**버전**: 2.2.0 (다국어 메타데이터 시스템)
