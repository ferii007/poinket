import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './locales';

const languageFromStorage = JSON.parse(localStorage.getItem('language'));
const lang = languageFromStorage?.lang_code|| 'en';

i18n
    .use(initReactI18next)
    .init({
        resources: resources,
        lng: lang,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;