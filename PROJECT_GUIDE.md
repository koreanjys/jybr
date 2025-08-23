# 웹 프로젝트 개발 가이드

## 프로젝트 개요
웹 애플리케이션 개발을 위한 표준 문서입니다.

## 기술 스택
- **Frontend Framework**: React 18.3 with TypeScript 5.6
- **Build Tool**: Vite 5.4
- **Styling**: Tailwind CSS 3.4 + tailwindcss-animate
- **UI Components**: shadcn/ui (Radix UI primitives) - 최소한만 사용
- **Internationalization**: react-i18next 15.6 (한국어/영어 필수)
- **Routing**: wouter 3.3 (가벼운 라우터)
- **State Management**: React hooks (useState, useEffect)
- **Deployment**: Cloudflare Pages (정적 배포)

## 프로젝트 구조
```
project/
├── client/                     # 클라이언트 애플리케이션
│   ├── src/
│   │   ├── components/         # 재사용 가능한 UI 컴포넌트
│   │   │   ├── ui/            # 핵심 UI 컴포넌트
│   │   │   │   ├── button.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── progress.tsx
│   │   │   │   ├── toast.tsx
│   │   │   │   ├── toaster.tsx
│   │   │   │   └── tooltip.tsx
│   │   │   ├── language-switcher.tsx  # 언어 전환 컴포넌트 (필수)
│   │   │   └── (기타 컴포넌트들)
│   │   ├── hooks/             # 커스텀 React hooks
│   │   ├── lib/               # 핵심 비즈니스 로직
│   │   │   ├── i18n.ts        # 다국어 설정 (한국어/영어 필수)
│   │   │   └── utils.ts       # 유틸리티 함수
│   │   ├── locales/           # 다국어 번역 파일 (한국어/영어 필수)
│   │   │   ├── ko.json        # 한국어 번역
│   │   │   └── en.json        # 영어 번역
│   │   ├── pages/             # 페이지 컴포넌트
│   │   └── types/             # 타입 정의 (로컬)
│   │       └── index.ts       # 프로젝트 타입 정의
│   ├── public/                # 정적 파일
│   │   ├── robots.txt        # SEO 크롤러 설정
│   │   ├── sitemap.xml       # 사이트맵
│   │   └── _headers          # Cloudflare Pages 헤더 설정
│   └── index.html            # 메인 HTML (SEO 메타태그 포함)
├── project_guide.md          # 프로젝트 가이드라인 (이 파일)
└── 설정 파일들
    ├── package.json          # 의존성 관리
    ├── tailwind.config.ts    # Tailwind 설정
    ├── vite.config.ts        # Vite 설정
    └── tsconfig.json         # TypeScript 설정
```

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
git push  # Cloudflare Pages 자동 배포
```

## 의존성 관리
```bash
# 핵심 의존성 설치
npm install

# 새 UI 컴포넌트 추가 시 (필요한 경우만)
npx shadcn-ui@latest add [component-name]
```

## 코드 스타일 및 규칙

### TypeScript/React 규칙
- **Import 스타일**: 구조 분해 할당 우선 사용
  ```typescript
  // Good
  import { useState, useEffect } from 'react'
  import { Button, Card } from '@/components/ui'
  ```

- **컴포넌트 명명**: PascalCase 사용
- **파일 명명**: kebab-case 사용 (my-component.tsx)
- **타입 정의**: `@/types` 사용, interface 우선

### Tailwind CSS 규칙 (정리됨)
- **클래스 순서**: layout → spacing → typography → colors → effects
- **반응형**: mobile-first 접근 (md:, lg: 등)
- **플러그인**: tailwindcss-animate만 사용 (typography 제거됨)
- **커스텀 컴포넌트**: 6개 핵심 shadcn/ui 컴포넌트만 사용

### UI 컴포넌트 사용 규칙
**✅ 사용 가능한 컴포넌트 (6개만)**
- `Button`: 모든 버튼 요소
- `Card`: 카드 레이아웃
- `Progress`: 진행 표시
- `Toast`: 알림 메시지
- `Toaster`: Toast 컨테이너
- `Tooltip`: 툴팁

### 모바일 반응형 디자인 규칙 (중요!)
- **텍스트 크기 균형**: 제목 `text-xl md:text-2xl`, 본문 `text-sm md:text-base`
- **자연스러운 줄바꿈**: `break-words`, `hyphens-auto`, `whitespace-normal` 사용
- **가독성 우선**: 텍스트 잘림 방지, 완전한 내용 표시를 위한 줄바꿈 허용
- **패딩 최적화**: 모바일 `p-3`, 데스크톱 `md:p-6`
- **컨테이너 안전성**: `overflow-hidden` 제거하여 내용 표시 우선
- **Flex 레이아웃**: `flex-1 min-w-0`로 텍스트 영역 최적화
- **버튼 크기**: 모바일 터치 영역 고려한 적절한 크기

### 다국어 처리 (한국어/영어 필수)
- **번역 키**: nested object 구조 사용 (`t('section.key')`)
- **번역 파일**: ko.json과 en.json 구조 일치 필수
- **기본 언어**: 한국어 (ko)
- **폴백 언어**: 영어 (en)
- **언어 전환기**: 우상단 Globe 아이콘으로 한/영 전환 가능

## 필수 파일 및 구조

### 핵심 파일
- **`src/lib/utils.ts`**: 공통 유틸리티 함수
- **`src/lib/i18n.ts`**: 다국어 설정 및 초기화 (한국어/영어 필수)
- **`src/types/index.ts`**: 프로젝트 타입 정의 (로컬)
- **`src/locales/ko.json`**: 한국어 번역 (필수)
- **`src/locales/en.json`**: 영어 번역 (필수)

### 주요 컴포넌트
- **`Pages`**: 주요 페이지 컴포넌트들
- **`Components`**: 재사용 가능한 UI 컴포넌트
- **`Hooks`**: 커스텀 React hooks

### 타입 정의 예시
```typescript
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

### SEO 관련 파일
- **`client/index.html`**: 메타태그, Open Graph 설정
- **`client/public/sitemap.xml`**: 사이트맵
- **`client/public/robots.txt`**: 크롤러 접근 설정

## Git 관리

### 브랜치 명명
- `main`: 프로덕션 브랜치
- `feature/description`: 새 기능 개발
- `fix/description`: 버그 수정
- `improve/description`: 기존 기능 개선

### 커밋 메시지 형식
```
Type: Brief description

Examples:
- Add: New personality test questions
- Fix: Mobile responsive issues
- Update: Result calculation logic
- Improve: User experience flow
```

## 개발 규칙

### ✅ 권장사항
- 컴포넌트 분리 시 재사용성 고려
- 모바일 우선 개발 (mobile-first)
- 타입 안정성 확보
- 성능 최적화 고려
- 새 기능 추가 전 기존 코드 패턴 따르기
- **의존성 추가 시 bundle size 고려**
- **불필요한 shadcn/ui 컴포넌트 추가 금지**

### ⚠️ 주의사항
- 핵심 로직 변경 시 기존 호환성 고려
- 새로운 의존성 추가 전 검토
- 모바일 반응형 테스트 필수
- SEO 최적화 고려
- **UI 변경 시 모바일 반응형 테스트 필수** (텍스트 오버플로우 체크)
- **새 의존성 추가 전 반드시 검토** (현재 최적화된 상태)
- **다국어 수정 시 한국어/영어 버전 모두 동기화 필수**
- **긴 텍스트 콘텐츠 작성 시 모바일 줄바꿈 고려**

### 🚨 금지사항
- 핵심 계산 로직 무분별한 수정
- 불필요한 외부 라이브러리 추가
- 하드코딩된 값 사용
- 접근성 무시
- **현재 6개 UI 컴포넌트 삭제 금지**
- **새 컴포넌트 추가 시 반드시 필요성 검토**
- **package.json 의존성 함부로 추가 금지**
- **서버 관련 코드 추가 금지** (정적 배포만 사용)

## 배포 및 운영

### 배포 프로세스
- `main` 브랜치에 push 시 Cloudflare Pages 자동 배포
- 중요한 변경사항은 반드시 테스트 후 배포

### SEO 최적화
- 메타 태그 설정
- sitemap.xml 업데이트
- robots.txt 설정
- Open Graph 태그 포함

## 꼭 해야할것
- 프로젝트 변경사항이 완료되고 git add 전에 claude.md도 업데이트 해주고 git add 하기
- **한글/영문에 영향을 주는 수정사항이면 번역이 잘 작동하는지 확인하기 (필수)**
- 새로운 텍스트 추가 시 ko.json과 en.json에 모두 번역 추가

## 프로젝트 목표
사용자 친화적인 웹 애플리케이션을 개발하여, 좋은 사용자 경험과 성능 최적화를 목표로 합니다.

---

**메인 도메인**: jybr.me
**jybr**: Just Your Brain Report → 오직 당신의 뇌, 마음을 해석하는 리포트
**마지막 업데이트**: 2025.08.23
**버전**: 1.0.0
