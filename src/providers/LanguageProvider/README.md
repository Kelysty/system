# LanguageProvider

This provider is nested in `KelystyProvider` component. But you can use it separately if you will. Here is a short guide.

### Language Provider

`LanguageProvider` is a container component that wraps all nested hierarchy into `LanguageContext.Provider` ([read below](#language-context)).
All props are optional, because it has fallback within itself. All nested elements would be able to interract with it;

```ts
type LanguageProviderProps = {
  defaultLanguage?: string | undefined;
  languages?: Language[] | undefined;
  children?: ReactNode;
};
```

Default language value is `first language of the provided languages`. But you can specify desired language using `defaultLanguage` prop. If custom array of languages were not provided, then there is only one available language - `english`. Setting up non-provided language will always have no effect;

#### example of the use case:

```ts
ReactDOM.createRoot(document.getElementById('root')!).render(
  <LanguageProvider
    defaultLanguage='english'
    languages={[
      {name: 'english', code: 'en'},
      {name: 'spanish', code: 'es'}
      // etc...
    ]}
  >
    <App/>
  </LanguageProvider>
)
```

### Language Context

`LanguageContext` is the real context holder. Here you can see it's value's structure:

```ts
// temporary they are huble strings
type LanguageName = string;
type LanguageCode = string;

interface Language {
  name: LanguageName;
  code: LanguageCode;
}

// it's a data that LanguageContext.Provider expects to receive
interface LanguageContextValue {
  language: Language;
  availableLanguages: Language[];
  setLanguage: (l: LanguageName) => void;
}
```

- `language` - active language as a Language type
- `availableLanguages` - list of all available languages throughout the app
- `setLanguage` - function that sets up new active language by provided language name

**setLanguage** handler is created by wrapping `LanguageProvider` that stores the language state within itself. What is why it is so convenient to use it.

### useLanguage() hook

This is a custom hook that simply returns `LanguageContextValue` structure and you can destruct it like in the example below:

```ts
// import
import {useLanguage} from '@kelysty/system';

// destruct
const {language, languages, setLanguage} = useLanguage();

// use example
const handleLanguageUpdate = useCallback(
  (newLanguage: LanguageName) => {
    setLanguage(newLanguage);
  },
  [setLanguage],
);

// further logic...
```
