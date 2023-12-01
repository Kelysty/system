import {ReactNode, useCallback, useEffect, useMemo, useState} from 'react';
import {LanguageContext, LanguageContextValue} from './LanguageContext';
import {DEFAULT_LANGUAGES} from './constants';
import type {Language, LanguageName} from './types';

interface RequiredProps {
  defaultLanguage: LanguageName;
  languages: Language[];
  children: ReactNode;
}

/**
 * `KELYSTY`: This is an interface that represents the props
 * that should be passed to the custom LanguageProvider component
 */
export type LanguageProviderProps = Partial<RequiredProps>;

/**
 * `KELYSTY`: This is a LanguageProvider, that contains current language
 * state and methods to change it;
 */
export const LanguageProvider = ({defaultLanguage, languages, children}: LanguageProviderProps) => {
  if (languages && languages.length === 0) {
    throw new Error('Array of provided languages is empty');
  }

  const availableLanguages = useMemo(() => {
    return languages ?? DEFAULT_LANGUAGES;
  }, [languages]);

  const [activeLang, setActiveLang] = useState<Language>(() => availableLanguages[0]);

  const updateLanguageByName = useCallback(
    (newLangName: LanguageName) => {
      const foundLanguage: Language =
        availableLanguages.find((lang) => {
          return lang.name.toLowerCase() === newLangName.toLowerCase();
        }) || activeLang;
      if (foundLanguage.name !== activeLang.name) {
        setActiveLang(foundLanguage);
      }
    },
    [availableLanguages, setActiveLang],
  );

  // initialization at the start
  useEffect(() => {
    if (defaultLanguage) {
      updateLanguageByName(defaultLanguage);
    }
  }, [defaultLanguage, updateLanguageByName]);

  const handleLanguageChange = useCallback(
    (newLangName: LanguageName) => {
      updateLanguageByName(newLangName);
    },
    [updateLanguageByName],
  );

  const languageContextValue: LanguageContextValue = useMemo(
    () => ({
      language: activeLang,
      availableLanguages: availableLanguages,
      setLanguage: handleLanguageChange,
    }),
    [activeLang, handleLanguageChange],
  );

  return (
    <LanguageContext.Provider value={languageContextValue}>{children}</LanguageContext.Provider>
  );
};
