# JYBR 프로젝트 가이드

## 프로젝트 개요
심리 테스트 플랫폼 - 성향/공포/지능 테스트를 컴포넌트로 직접 개발하여 제공하는 내부 테스트 시스템

## 기술 스택
- **React 18.3** + **TypeScript 5.6** + **Vite 5.4**
- **인라인 CSS** (Tailwind 제거됨)
- **shadcn/ui** (필요한 컴포넌트만 선별적 추가)
- **react-i18next** (한/영 다국어)
- **Cloudflare Pages** 배포

## 프로젝트 구조
```
jybr/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/             # shadcn/ui 컴포넌트들
│   │   │   ├── tests/          # 테스트 컴포넌트들
│   │   │   │   ├── personality/ # 성향 테스트
│   │   │   │   ├── horror/      # 공포 테스트
│   │   │   │   └── intelligence/ # 지능 테스트
│   │   │   └── common/         # 공통 컴포넌트
│   │   ├── data/              # 테스트 데이터 (질문, 로직, 결과)
│   │   │   ├── personality/    # 성향 테스트 데이터
│   │   │   ├── horror/         # 공포 테스트 데이터
│   │   │   └── intelligence/   # 지능 테스트 데이터
│   │   ├── lib/               # i18n, utils
│   │   ├── locales/           # ko.json, en.json (테스트별 번역)
│   │   ├── pages/home.tsx     # 메인 허브 페이지
│   │   └── App.tsx
│   ├── public/                # SEO 파일들
│   └── package.json
├── docs/                      # 테스트 개발 참고 자료
│   ├── personality/           # 성향 테스트 참고 자료
│   ├── horror/                # 공포 테스트 참고 자료
│   └── intelligence/          # 지능 테스트 참고 자료
├── CLAUDE.md
└── .gitignore
```

## 테스트 추가 전략

### 🎯 효율적인 테스트 추가 방법

#### 1. **표준화된 테스트 구조**
```typescript
// src/data/[테스트명]/index.ts
export interface TestConfig {
  id: string;
  category: 'personality' | 'horror' | 'intelligence';
  questions: Question[];
  scoring: ScoringRule[];
  results: ResultType[];
}
```

#### 2. **3단계 추가 프로세스**
1. **데이터 준비**: `src/data/[테스트명]/` 생성
2. **번역 추가**: `locales/ko.json`, `locales/en.json` 업데이트  
3. **컴포넌트 연결**: `components/tests/[테스트명]/` 생성

#### 3. **재사용 가능한 컴포넌트 활용**
- `<TestContainer>` - 공통 레이아웃
- `<QuestionCard>` - 질문 표시
- `<ProgressBar>` - 진행률
- `<ResultCard>` - 결과 표시

#### 4. **자동화 도구 (향후 개발)**
- 테스트 템플릿 생성기
- 번역 파일 자동 업데이트
- 라우팅 자동 연결

### 📋 테스트 추가 체크리스트
- [ ] 데이터 파일 생성 (`src/data/[테스트명]/`)
- [ ] 한글 번역 추가 (`locales/ko.json`)
- [ ] 영문 번역 추가 (`locales/en.json`)
- [ ] 컴포넌트 생성 (`components/tests/[테스트명]/`)
- [ ] 홈페이지에 링크 추가
- [ ] 모바일 반응형 테스트
- [ ] 번들 사이즈 확인

## 개발 규칙

### ✅ 해야 할 것
- 모바일 우선 개발
- 한/영 다국어 필수 지원
- 새 텍스트 추가 시 ko.json, en.json 동시 업데이트
- **새 테스트 추가 시 질문/답변/결과 모두 한영 번역 필수**
- bundle size 최적화 유지
- 테스트 결과 로컬스토리지 저장
- 컴포넌트 기반 모듈화 개발
- **테스트 데이터와 로직 분리** (src/data/ 활용)
- **표준화된 테스트 구조 준수** (TestConfig 인터페이스)
- **공통 컴포넌트 우선 활용** (중복 개발 방지)

### ⚠️ 주의사항
- 새 의존성 추가 전 검토 필수
- UI 컴포넌트는 테스트 개발에 필요한 것만 선별적 추가
- 모바일 반응형 테스트 필수
- 번들 사이즈 모니터링 (60KB 목표 유지)
- **테스트 개발 시 번역 작업량 고려** (질문+답변+결과)

### 🚨 금지사항
- 서버 관련 코드 추가
- 불필요한 라이브러리 추가
- 하드코딩된 값 사용

## 주요 명령어
```bash
npm run dev          # 개발 서버
npm run build        # 프로덕션 빌드
git push            # 자동 배포
```

## 현재 상태
- **버전**: 2.0.0
- **구조**: 컴포넌트 기반 내부 테스트 시스템
- **다국어**: 한/영 자동 감지 지원 ✅
- **성능**: 60KB gzipped
- **배포**: jybr.me (Cloudflare Pages)

---
**마지막 업데이트**: 2025.08.25
