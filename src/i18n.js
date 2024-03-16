import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
  en: {
    translation: {
      "save_reload": "and save to reload.",
      "learn_react": "learn react"
    }
  },
  uk: {
    translation: {
      "save_reload": "і зберегти та оновити.",
      "learn_react": "Вивчай react"
    }
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector) 
  .init({
    resources,
    fallbackLng: "uk", 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;