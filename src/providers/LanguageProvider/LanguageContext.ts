import {createContext} from 'react';
import {DEFAULT_LANGUAGE, DEFAULT_LANGUAGES} from './constants';
import type {Language, LanguageName} from './types';

/**
 * `KELYSTY`: This is an interface that represents the value
 * that should be passed to the Language Context
 */
export interface LanguageContextValue {
  language: Language;
  availableLanguages: Language[];
  setLanguage: (l: LanguageName) => void;
}

/**
 * `KELYSTY`: This is the initial value of the LanguageContext
 */
const initialLanguageContextValue: LanguageContextValue = {
  language: DEFAULT_LANGUAGE,
  availableLanguages: DEFAULT_LANGUAGES,
  setLanguage: (l: LanguageName) => console.log(l),
};

/**
 * `KELYSTY`: This is the Language Context that will be used
 * and will be addressed to throughout the application;
 */
export const LanguageContext = createContext(initialLanguageContextValue);

LanguageContext.displayName = 'LanguageContext';
