import {createContext} from 'react';
import type {Theme} from './types';
import {DEFAULT_THEME} from './constants';

/**
 * `KELYSTY`: This is an interface that represents the value
 * that should be passed to the Theme Context
 */
export interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
}

/**
 * `KELYSTY`: This is the initial value of the ThemeContext
 */
const initialThemeContextValue: ThemeContextValue = {
  theme: DEFAULT_THEME,
  setTheme: (t: Theme) => console.log(t),
  toggleTheme: () => {},
};

/**
 * `KELYSTY`: This is the Theme Context that will be used
 * and will be addressed to throughout the application;
 */
export const ThemeContext = createContext(initialThemeContextValue);

ThemeContext.displayName = 'ThemeContext';
