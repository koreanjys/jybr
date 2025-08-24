import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import koTranslation from '@/locales/ko.json';
import enTranslation from '@/locales/en.json';

const resources = {
  ko: {
    translation: koTranslation,
  },
  en: {
    translation: enTranslation,
  },
};

// 브라우저 언어 감지 설정
const detectionOptions = {
  order: ['localStorage', 'navigator', 'htmlTag'],
  lookupLocalStorage: 'i18nextLng',
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'],
  convertDetectedLanguage: (lng: string) => {
    // 한국어 관련 로케일은 모두 'ko'로 변환
    if (lng.startsWith('ko')) return 'ko';
    // 그 외는 모두 영어로 폴백
    return 'en';
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection: detectionOptions,
    fallbackLng: 'en', // 한국어가 아니면 영어로 폴백
    
    interpolation: {
      escapeValue: false,
    },
    
    react: {
      useSuspense: false,
    },
  });

export default i18n;
