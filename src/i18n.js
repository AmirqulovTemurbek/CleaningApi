import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import ruTranslation from './languages/ru/ru.json';
import enTranslation from './languages/en/en.json';



i18n
.use(Backend)
.use(LanguageDetector)
.use(initReactI18next)
.init({
    fallbackLng: 'en',
    debug: true,

    resources:{
        en:{translation: enTranslation},
        ru:{translation: ruTranslation}
    }
  });

export default i18n;