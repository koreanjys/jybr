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

    // Canonical URL의 hreflang 업데이트
    const alternateLinks = document.querySelectorAll('link[rel="alternate"]');
    alternateLinks.forEach((link) => {
      const hreflang = link.getAttribute('hreflang');
      if (hreflang === i18n.language) {
        link.setAttribute('href', window.location.origin + '/');
      }
    });

  }, [t, i18n.language]);
}
