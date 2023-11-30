import {useContext} from 'react';
import {ThemeContext, type ThemeContextValue} from './ThemeContext';

/**
 * `KELYSTY`: This is the hook that is used to access the
 * current active theme and methods to control it;
 */
export const useTheme = (): ThemeContextValue => {
  return useContext(ThemeContext);
};
