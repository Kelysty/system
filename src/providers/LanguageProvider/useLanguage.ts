import {useContext} from 'react';
import {LanguageContext} from './LanguageContext';

/**
 * `KELYSTY`: This is the hook that is used to access the
 * current active language, array of languages and method to
 * set up new active language based on provided name;
 */
export const useLanguage = () => {
  return useContext(LanguageContext);
};
