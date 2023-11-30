# ThemeProvider

This provider is nested in `KelystyProvider` component. But you can use it separately if you will. Here is a short guide.

### Theme Provider

`ThemeProvider` is a container component that wraps all nested hierarchy into `ThemeContext.Provider` ([read below](#theme-context-structure)).
All props are optional, because it has fallback within itself.
Default theme value is `system`; All nested elements would be able to interract with it;

```ts
type ThemeProviderProps = {
  defaultTheme?: Theme | undefined;
  children?: ReactNode;
};
```

#### example of the use case:

```ts
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme='light'>
    <App/>
  </ThemeProvider>
)
```

### Theme Context

`ThemeContext` is the real context holder. Here you can see it's value's structure:

```ts
type DesignedTheme = 'light' | 'dark' | 'alternative';

type Theme = 'system' | DesignedTheme;

// it's a data that ThemeContext.Provider expects to receive
interface ThemeContextValue {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
}
```

- `theme` - active theme as a string
- `setTheme` - function that allows you to set new theme
- `toggleTheme` - function that toggles between **light** and **dark** themes

**ALL** handlers (setTheme and toggleTheme) are created by wrapping `ThemeProvider` that stores the theme state within itself. What is why it is so convenient to use it.

### useTheme() hook

This is a custom hook that simply returns `ThemeContextValue` structure and you can destruct it like in the example below:

```ts
// import
import {useTheme} from '@kelysty/system';

// destruct
const {theme, setTheme, toggleTheme} = useTheme();

// use example
const handleThemeUpdate = useCallback(
  (newTheme: Theme) => {
    // set new value
    setTheme(newTheme);
    // or
    toggleTheme();
  },
  [setTheme],
);

// further logic...
```
