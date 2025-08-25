# 정적 웹사이트 개발 가이드

## 프로젝트 개요
정적 웹사이트 개발을 위한 범용 가이드입니다. React 기반 모던 웹 개발의 모범 사례를 정리했습니다.

## 권장 기술 스택
- **Frontend Framework**: React 18.3+ with TypeScript 5.6+
- **Build Tool**: Vite 5.4+
- **Styling**: 인라인 CSS 또는 Tailwind CSS (번들 사이즈 고려)
- **UI Components**: shadcn/ui (필요한 컴포넌트만 선별적 추가)
- **Internationalization**: react-i18next (다국어 지원 시)
- **Routing**: React Router 또는 wouter (SPA 필요 시)
- **State Management**: React hooks 우선, 복잡한 경우 상태관리 라이브러리
- **Deployment**: Cloudflare Pages, Vercel, Netlify

## 표준 프로젝트 구조
```
project-name/
├── client/                     # 클라이언트 애플리케이션
│   ├── src/
│   │   ├── components/         # 재사용 가능한 UI 컴포넌트
│   │   │   ├── ui/            # UI 라이브러리 컴포넌트
│   │   │   ├── features/      # 기능별 컴포넌트
│   │   │   └── common/        # 공통 컴포넌트
│   │   ├── data/              # 정적 데이터 (JSON, TypeScript)
│   │   ├── hooks/             # 커스텀 React hooks
│   │   ├── lib/               # 유틸리티, 설정 파일
│   │   ├── locales/           # 다국어 번역 파일 (선택)
│   │   │   ├── ko.json        # 한국어 번역
│   │   │   └── en.json        # 영어 번역
│   │   ├── pages/             # 페이지 컴포넌트
│   │   └── types/             # 타입 정의
│   ├── public/                # 정적 파일
│   │   ├── robots.txt        # SEO 크롤러 설정
│   │   ├── sitemap.xml       # 사이트맵
│   │   └── _headers          # 배포 플랫폼별 헤더 설정
│   └── index.html            # 메인 HTML (SEO 메타태그 포함)
├── docs/                      # 개발 참고 자료
├── PROJECT_GUIDE.md           # 이 가이드 파일
└── 설정 파일들
    ├── package.json          # 의존성 관리
    ├── tailwind.config.ts    # Tailwind 설정 (사용 시)
    ├── vite.config.ts        # Vite 설정
    └── tsconfig.json         # TypeScript 설정
```

## 효율적인 기능 추가 전략

### 🎯 모듈 기반 개발 방법

#### 1. **표준화된 모듈 구조**
```typescript
// src/data/[모듈명]/index.ts
export interface ModuleConfig {
  id: string;
  category: string;
  data: any[];
  logic: Function[];
  metadata: ModuleMetadata;
}
```

#### 2. **3단계 추가 프로세스**
1. **데이터 준비**: `src/data/[모듈명]/` 생성
2. **번역 추가**: `locales/ko.json`, `locales/en.json` 업데이트 (다국어 시)
3. **컴포넌트 연결**: `components/features/[모듈명]/` 생성

#### 3. **재사용 컴포넌트 우선 활용**
- `<Container>` - 공통 레이아웃
- `<Card>` - 콘텐츠 카드
- `<Button>` - 액션 버튼
- `<Modal>` - 팝업 창

#### 4. **자동화 고려사항**
- 컴포넌트 템플릿 생성
- 번역 파일 자동 업데이트
- 라우팅 자동 설정

### 📋 새 기능 추가 체크리스트
- [ ] 데이터 파일 생성 (`src/data/[기능명]/`)
- [ ] 번역 파일 업데이트 (다국어 프로젝트)
- [ ] 컴포넌트 생성 (`components/features/[기능명]/`)
- [ ] 메인 페이지에 연결
- [ ] 모바일 반응형 테스트
- [ ] 번들 사이즈 확인
- [ ] SEO 메타태그 업데이트

## 주요 명령어
```bash
# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 미리보기
npm run preview

# 타입 체킹
npm run type-check

# 린팅 (설정 시)
npm run lint

# Git 커밋 및 배포
git add .
git commit -m "description"
git push  # 자동 배포 (Cloudflare Pages, Vercel 등)
```

## 의존성 관리
```bash
# 핵심 의존성 설치
npm install

# 새 UI 컴포넌트 추가 시 (필요한 경우만)
npx shadcn-ui@latest add [component-name]

# 다국어 지원 추가
npm install react-i18next i18next i18next-browser-languagedetector
```

## 개발 규칙 및 모범 사례

### ✅ 필수 사항
- **모바일 우선 개발** (responsive design)
- **TypeScript 타입 안정성** 확보
- **컴포넌트 기반 모듈화**
- **데이터와 UI 로직 분리**
- **번들 사이즈 최적화** 유지
- **표준화된 구조 준수**
- **재사용 컴포넌트 우선 활용**
- **접근성(A11y) 고려**

### TypeScript/React 규칙
- **Import 스타일**: 구조 분해 할당 우선 사용
  ```typescript
  // Good
  import { useState, useEffect } from 'react'
  import { Button, Card } from '@/components/ui'
  ```

- **컴포넌트 명명**: PascalCase 사용
- **파일 명명**: kebab-case 사용 (my-component.tsx)
- **타입 정의**: interface 우선 사용

### 스타일링 규칙
- **Tailwind CSS 사용 시**: mobile-first 접근
- **인라인 CSS 사용 시**: CSS-in-JS 패턴 적용
- **UI 컴포넌트**: 필요한 것만 선별적 추가
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 고려

### 모바일 반응형 디자인 (중요!)
- **텍스트 크기**: 제목 `text-xl md:text-2xl`, 본문 `text-sm md:text-base`
- **터치 타겟**: 최소 44px 크기 확보
- **가독성 우선**: 텍스트 잘림 방지
- **패딩 최적화**: 모바일과 데스크톱 다르게 적용
- **버튼 크기**: 모바일 터치 영역 고려

### 다국어 지원 (선택사항)
- **설정**: react-i18next 사용
- **번역 키**: nested object 구조 (`t('section.key')`)
- **번역 파일**: 구조 일치 필수
- **언어 감지**: 브라우저 언어 자동 감지
- **새 기능 추가 시**: 모든 언어 번역 필수

```json
// locales/ko.json 예시
{
  "common": {
    "button": {
      "start": "시작하기",
      "cancel": "취소"
    }
  },
  "features": {
    "featureName": {
      "title": "기능 제목"
    }
  }
}
```

### ⚠️ 주의사항
- 새 의존성 추가 전 검토 필수
- UI 컴포넌트는 필요한 것만 선별적 추가
- 모바일 반응형 테스트 필수
- 번들 사이즈 모니터링 (100KB 미만 권장)
- **다국어 프로젝트 시 번역 작업량 고려**
- SEO 최적화 고려

### 🚨 금지사항
- 서버 관련 코드 추가 (정적 배포만 사용)
- 불필요한 라이브러리 추가
- 하드코딩된 값 사용
- 접근성 무시
- **package.json 의존성 무분별한 추가**

## 성능 최적화

### 번들 사이즈 관리
- 필요한 라이브러리만 설치
- Tree shaking 활용
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
- [ ] 모바일 반응형 테스트
- [ ] 다국어 번역 완료 (해당하는 경우)
- [ ] 번들 사이즈 확인
- [ ] SEO 메타태그 설정
- [ ] 접근성 테스트
- [ ] 성능 최적화 확인

### 배포 전 확인사항
- [ ] 프로덕션 빌드 테스트
- [ ] 환경변수 설정
- [ ] 도메인 설정
- [ ] 보안 헤더 설정
- [ ] 모니터링 도구 설정

---

**이 가이드는 정적 웹사이트 개발의 모범 사례를 정리한 것입니다.**  
**프로젝트 특성에 맞게 조정하여 사용하세요.**

**마지막 업데이트**: 2025.08.25  
**버전**: 2.0.0 (범용 가이드)
