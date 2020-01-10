import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


import translationFR from './assets/locales/fr/translation.json';
import translationEN from './assets/locales/en/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector) 
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",
    fallbackLng: "fr",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;