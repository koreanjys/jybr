import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function useMeta() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // HTML lang 속성 업데이트
    document.documentElement.lang = i18n.language;

    // 페이지 제목 업데이트
    document.title = t('meta.title');

    // 메타 description 업데이트
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta.description'));
    }

    // 메타 keywords 업데이트
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', t('meta.keywords'));
    }

    // Open Graph 메타태그 업데이트
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', t('meta.ogTitle'));
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', t('meta.ogDescription'));
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      const locale = i18n.language === 'ko' ? 'ko_KR' : 'en_US';
      ogLocale.setAttribute('content', locale);
    }

    // Twitter 메타태그 업데이트
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', t('meta.twitterTitle'));
    }

    const twitterDescription = document.querySelector('meta[property="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', t('meta.twitterDescription'));
    }

    // 즉시 실행되는 언어 감지 및 메타데이터 업데이트
    // 이것은 페이지 로드 직후 실행되어 크롤러가 읽을 가능성을 높입니다
    setTimeout(() => {
      // 추가 보장을 위한 재실행
      document.title = t('meta.title');
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute('content', t('meta.description'));
    }, 0);

  }, [t, i18n.language]);

  // 초기 로드 시 즉시 메타데이터 설정
  useEffect(() => {
    // 브라우저 언어 감지 후 즉시 메타데이터 업데이트
    const browserLang = navigator.language.toLowerCase();
    const isKorean = browserLang.startsWith('ko');
    
    if (isKorean && i18n.language !== 'ko') {
      i18n.changeLanguage('ko');
    } else if (!isKorean && i18n.language !== 'en') {
      i18n.changeLanguage('en');
    }
  }, [i18n]);
}
