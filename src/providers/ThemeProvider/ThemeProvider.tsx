import {type ReactNode, useCallback, useMemo, useState} from 'react';
import {ThemeContext, type ThemeContextValue} from './ThemeContext';
import {DEFAULT_THEME} from './constants';
import type {Theme} from './types';

interface RequiredProps {
  defaultTheme: Theme;
  children: ReactNode;
}

/**
 * `KELYSTY`: This is an interface that represents the props
 * that should be passed to the custom ThemeProvider component
 */
export type ThemeProviderProps = Partial<RequiredProps>;

/**
 * `KELYSTY`: This is a ThemeProvider, that constains current theme
 * state and methods to change it;
 */
export const ThemeProvider = ({defaultTheme, children}: ThemeProviderProps) => {
  const [activeTheme, setActiveTheme] = useState<Theme>(() => defaultTheme ?? DEFAULT_THEME);

  const handleThemeChange = useCallback(
    (newTheme: Theme) => {
      setActiveTheme(newTheme);
    },
    [setActiveTheme],
  );

  const handleThemeToggle = useCallback(() => {
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    setActiveTheme(newTheme);
  }, []);

  const themeContextValue: ThemeContextValue = useMemo(
    () => ({
      theme: activeTheme,
      setTheme: handleThemeChange,
      toggleTheme: handleThemeToggle,
    }),
    [activeTheme, handleThemeChange, handleThemeToggle],
  );

  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
};

ThemeProvider.displayName = 'ThemeProvider';
