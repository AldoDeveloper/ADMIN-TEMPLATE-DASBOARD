import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import TranslationEn from './locales/en.json';
// import TranslationId from './locales/id.json';

// const resources = {
//     en: { translation : TranslationEn },
//     id: { translation : TranslationId }
// }

const translations : any= import.meta.glob('./locales/*.json', { eager: true });

const resources =  Object.keys(translations).reduce((acc: any, path: any) => {
    const lang = path.match(/\/(\w+)\.json$/)[1];
    acc[lang] = { translation: translations[path].default };
    return acc;
  }, {})

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en', // Bahasa default
        fallbackLng: 'en', // Bahasa fallback
        interpolation: {
          escapeValue: false // React sudah mengamankan dari XSS
        }
    });

export default i18n