import {AuthProvider, AuthProviderProps} from './AuthProvider';
import {DeviceProvider, DeviceProviderProps} from './DeviceProvider';
import {LanguageProvider, LanguageProviderProps} from './LanguageProvider';
import {ThemeProvider, ThemeProviderProps} from './ThemeProvider';

/**
 * `KELYSTY`: It is an interface that represents the props
 * that should be passed to the main KelystyProvider component;
 * It is a `combination of props of all nested providers`
 */
export interface KelystyProviderProps
  extends DeviceProviderProps,
    AuthProviderProps,
    LanguageProviderProps,
    ThemeProviderProps {}

/**
 * `KELYSTY`: It is a Provider, that renders these providers within itself:
 * - `DeviceProvider` - device context
 * - `AuthProvider` - auth state and context
 * - `LanguageProvider` - current language
 * - `ThemeProvider` - theme data
 *
 * It accepts props that is a conjunction of the props of all nested components
 */
export const KelystyProvider = (props: KelystyProviderProps) => {
  return (
    <DeviceProvider
      mobileMaxWidth={props.mobileMaxWidth}
      tabletMaxWidth={props.tabletMaxWidth}
    >
      <AuthProvider defaultIsAuth={props.defaultIsAuth}>
        <LanguageProvider
          defaultLanguage={props.defaultLanguage}
          languages={props.languages}
        >
          <ThemeProvider defaultTheme={props.defaultTheme}>{props.children}</ThemeProvider>
        </LanguageProvider>
      </AuthProvider>
    </DeviceProvider>
  );
};

KelystyProvider.displayName = 'KelystyProvider';
