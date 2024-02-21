import i18n from "i18next";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const language = localStorage.getItem("i18nextLng") || "en";
i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: false,
    lng: language,
    fallbackLng: language,
    ns: ["translation"],
    defaultNS: "translation",
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: '/dictionary/{{lng}}/{{ns}}.json'
    }
  });

export default i18n;