import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { LOCALS } from "./constants.js";
import {uk} from "./langues/uk.js";
import {en} from "./langues/en.js";
import {fr} from "./langues/fr.js";


const resources = {
  [LOCALS.EN]: {
    translation: en
  },
  [LOCALS.UK]: {
    translation: uk
  },
  [LOCALS.FR]: {
    translation: fr
  }
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector) 
  .init({
    resources,
    fallbackLng: LOCALS.UK, 

    interpolation: {
      escapeValue: false 
    }
  });

  export default i18n;