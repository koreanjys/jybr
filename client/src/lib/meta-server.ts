// 언어별 메타데이터 정의
interface MetaData {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  twitterTitle: string;
  twitterDescription: string;
  locale: string;
}

const metaData: Record<string, MetaData> = {
  ko: {
    title: "JYBR - Just Your Brain Report | 성향/공포/지능 테스트",
    description: "당신의 뇌와 마음을 해석하는 특별한 테스트들. 성향 테스트, 공포 테스트, 지능 테스트를 통해 자신을 더 깊이 이해해보세요.",
    keywords: "성향테스트, 공포테스트, 지능테스트, 심리테스트, 뇌분석, JYBR, personality test, horror test, intelligence test, psychology test, brain analysis",
    ogTitle: "JYBR - Just Your Brain Report",
    ogDescription: "당신의 뇌와 마음을 해석하는 특별한 테스트들",
    twitterTitle: "JYBR - Just Your Brain Report",
    twitterDescription: "당신의 뇌와 마음을 해석하는 특별한 테스트들",
    locale: "ko_KR"
  },
  en: {
    title: "JYBR - Just Your Brain Report | Personality/Horror/Intelligence Tests",
    description: "Discover your mind and brain through specialized tests. Explore your deeper self with personality, horror, and intelligence tests.",
    keywords: "personality test, horror test, intelligence test, psychology test, brain analysis, JYBR, 성향테스트, 공포테스트, 지능테스트, 심리테스트, 뇌분석",
    ogTitle: "JYBR - Just Your Brain Report",
    ogDescription: "Discover your mind and brain through specialized tests",
    twitterTitle: "JYBR - Just Your Brain Report",
    twitterDescription: "Discover your mind and brain through specialized tests",
    locale: "en_US"
  }
};

// 언어 감지 함수
function detectLanguage(acceptLanguage?: string): 'ko' | 'en' {
  if (!acceptLanguage) return 'ko';
  
  // Accept-Language 헤더 파싱
  const languages = acceptLanguage
    .split(',')
    .map((lang: string) => lang.split(';')[0].trim().toLowerCase());
  
  // 한국어 우선 감지
  if (languages.some((lang: string) => lang.startsWith('ko'))) {
    return 'ko';
  }
  
  // 영어 감지
  if (languages.some((lang: string) => lang.startsWith('en'))) {
    return 'en';
  }
  
  // 기본값: 한국어
  return 'ko';
}

// HTML 템플릿 생성 함수
function generateHTML(language: 'ko' | 'en' = 'ko'): string {
  const meta = metaData[language];
  
  return `<!doctype html>
<html lang="${language}" id="html-root">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- SEO 메타태그 (서버에서 언어별 생성) -->
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <meta name="keywords" content="${meta.keywords}" />
    <meta name="author" content="JYBR Team" />
    <meta name="robots" content="index, follow" />
    
    <!-- Google AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3464871693186950"
         crossorigin="anonymous"></script>
    
    <!-- Open Graph / Facebook (언어별 생성) -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://jybr.me/" />
    <meta property="og:title" content="${meta.ogTitle}" />
    <meta property="og:description" content="${meta.ogDescription}" />
    <meta property="og:image" content="https://jybr.me/og-image.png" />
    <meta property="og:site_name" content="JYBR" />
    <meta property="og:locale" content="${meta.locale}" />
    <meta property="og:locale:alternate" content="${language === 'ko' ? 'en_US' : 'ko_KR'}" />
    
    <!-- Twitter (언어별 생성) -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://jybr.me/" />
    <meta property="twitter:title" content="${meta.twitterTitle}" />
    <meta property="twitter:description" content="${meta.twitterDescription}" />
    <meta property="twitter:image" content="https://jybr.me/og-image.png" />
    
    <!-- 다국어 지원 -->
    <link rel="alternate" hreflang="ko" href="https://jybr.me/" />
    <link rel="alternate" hreflang="en" href="https://jybr.me/" />
    <link rel="alternate" hreflang="x-default" href="https://jybr.me/" />
    
    <!-- 추가 메타태그 -->
    <link rel="canonical" href="https://jybr.me/" />
    <meta name="theme-color" content="#667eea" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
}

export { detectLanguage, generateHTML, metaData };
