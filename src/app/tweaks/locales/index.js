import { useTranslation } from 'react-i18next';
import language from './locales';

const useTranslationHook = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const currentLanguage = i18n.language;
    const translations = language(currentLanguage);

    console.log('currentLanguage', currentLanguage)

    return { changeLanguage, translations };
};

export default useTranslationHook;