import baseLocal from 'react-native-i18n';
import en from './en';

baseLocal.fallbacks = true;

baseLocal.translations = {
  en,
};

export default baseLocal;

// baseLocalization.tsx

// import * as Localization from 'react-native-localize';
// import I18n from 'i18n-js'; // Make sure this resolves correctly
// import en from './en';
// // import hi from './hi'; // Add other languages like this

// // Safely assign fallbacks and translations using type cast
// (I18n as any).fallbacks = true;
// (I18n as any).translations = {
//   en,
//   // hi,
// };

// const fallback = {languageTag: 'en', isRTL: false};

// const {languageTag} =
//   Localization.findBestAvailableLanguage(
//     Object.keys((I18n as any).translations),
//   ) || fallback;

// I18n.locale = languageTag;

// export const localize = (key: string, options?: Record<string, any>) =>
//   I18n.t(key, options);

// export default I18n;
