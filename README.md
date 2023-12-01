# @kelysty/system &middot; [![npm package](https://img.shields.io/npm/v/@kelysty/system)](https://www.npmjs.com/package/@kelysty/system) [![CI](https://img.shields.io/github/actions/workflow/status/Kelysty/system/.github%2Fworkflows%2Fci.yml?logo=github&label=CI)](https://github.com/kelysty/system/actions/workflows/ci.yml?query=branch:main) [![storybook](https://img.shields.io/badge/Storybook-deployed-ff4685)](https://preview.kelysty.com/system/)

This npm package can help you with providing pre-configured React Context API that contains:

1. **Device context**
2. **Authorization context**
3. **Language context**
4. **Theme context**

Each context can be applied separatelly and supported by custom hooks;

## Installation

Using `npm`:

```bash
npm install @kelysty/system
```

Using `yarn`:

```bash
yarn add @kelysty/system
```

## Usage

How to lift off as fast as possible?

Import `KelystyProvider` into your workspace:

```ts
import {KelystyProvider} from '@kelysty/system';
```

Then you need to simply wrap your application in it:

```ts
<KelystyProvider
  mobileMaxWidth={450}
  tabletMaxWidth={900}
  defaultIsAuth={false}
  defaultLanguage='english'
  languages={[...]}
  defaultTheme='light'
>
  <App/>
</KelystyProvider>
```

It's done and ready to use. You can proceed with reading [hooks section](#hooks) or stay with us and learn about props thoroughly.

## Props

**NOTE**: All props are guarded by default fallbacks. So they are **optional**, means **they are not required**. In order to customize your setup you obviously need to pass them.

#### mobileMaxWidth

- `type`: number
- `defaultValue`: 766
- `restriction`: value must be less than 'tabletMaxWidth' prop

The mobile's maximum value of the screen width. Once screen width becomes more than that it is no longer a 'mobile' device - it is a 'tablet'; Metric system is pixels;

#### tabletMaxWidth

- `type`: number
- `defaultValue`: 1199
- `restriction`: value must be greater than 'mobileMaxWidth' prop

The mobile's maximum value of the screen width. Once screen width becomes more than that it is no longer a 'tablet' device - it is a 'desktop'; Metric system is pixels;

#### defaultIsAuth

- `type`: boolean
- `defaultValue`: false
- `restriction`: none

This prop provides auth status to start with.

#### defaultLanguage

- `type`: string
- `defaultValue`: english
- `restriction`: to be successfully applied it must correlate with the 'languages' prop

The language of the app to start with. It has to be one of the available languages. If you provide `languages` prop - list of available languages throughout the app - without `english` (or any other passed defaultLanguage) in it, then defaultLanguage prop will be configured as a first item of the `languages`;

#### languages

- `type`: Array<{name: string, code: string}>
- `defaultValue`: [{name: 'english', code: 'en'}]
- `restriction`: if provided, it must contain at least one item

Array of the languages in the app. By default there is only english language. If the prop is being passed, it **overrides** defaultValue. If you want to pass more languages beside the english one, make sure english language is in your list.

#### defaultTheme

- `type`: 'system' | 'light' | 'dark' | 'alternative'
- `defaultValue`: 'system'
- `restriction`: TEMPORARY: there is no styling system yet that goes alongside with it

Default theme of the app. Right now it just contains a value of the active theme, but generating and applying styling system is up to you. The good news is we are working on it)

## Hooks

There are `4 hooks` right now:

```ts
// You can access all hooks via common gateway:
import {useDevice, useAuth, useLanguage, useTheme} from '@kelysty/system';

// and destructurize them as objects, what gives you power
// to choose only those items that you actualy need
const {...} = useDevice();
```

Now lets talk about each of them closely

#### useDevice()

With `KelystyProvider` you **don't need** and you **cannot** control the current active device. Using 'useDevice()' hook you can get automatically calculated device state. Doing so, you subscribe your component onto Device context.

```ts
// importing
import {useDevice} from '@kelysty/system';

// full destructurization
const {device, isDesktop, isTablet, isMobile} = useDevice();

// usage
```

- `args`: none
- `device`: current device as a string (desktop, tablet or mobile)
- `isDesktop`: semantic helper, true when device === 'desktop', false otherwise
- `isTablet`: the same logic but for tablet
- `isMobile`: the same logic but for mobile
- `restriction`: subscriber must be nested into either 'KelystyProvider' or 'DeviceProvider' component

#### useAuth()

'useAuth()' hook allows you to get and to control authorization state. Doing so, you subscribe your component onto Auth context.

```ts
// importing
import {useAuth} from '@kelysty/system';

// full destructurization
const {isAuth, login, logout, setIsAuth} = useAuth();

// usage
```

- `args`: none
- `isAuth`: current state as a boolean (true or false)
- `login()`: calling this method switches isAuth to `true`
- `logout()`: calling this method switches isAuth to `false`
- `setIsAuth(bool)`: renews isAuth with provided value
- `restriction`: subscriber must be nested into either 'KelystyProvider' or 'AuthProvider' component

#### useLanguage()

'useLanguage()' hook allows you to get language state and control it. Doing so, you subscribe your component onto Language context.

```ts
// importing
import {useLanguage} from '@kelysty/system';

// full destructurization
const {language, availableLanguages, setLanguage} = useLanguage();

// further usage...
```

- `args`: none
- `language`: current language state as an object, ex {name: 'english', code: 'en'}
- `availableLanguages`: array of all available langs in the app (Language[])
- `setLanguage(string)`: renews active language accepting language name
- `restriction`: subscriber must be nested into either 'KelystyProvider' or 'LanguageProvider' component

#### useTheme()

'useTheme()' hook allows you to get and to control language state. Doing so, you subscribe your component onto Language context.

```ts
// importing
import {useTheme} from '@kelysty/system';

// full destructurization
const {theme, toggleTheme, setTheme} = useTheme();

// usage
```

- `args`: none
- `theme`: current active theme as string (system, light, dark or alternative)
- `toggleTheme()`: calling this method toggles theme between `light` and `dark` (swithes to `light` from system or alternative ones)
- `setTheme(Theme)`: renews active theme with provided value
- `restriction`: subscriber must be nested into either 'KelystyProvider' or 'ThemeProvider' component

## Precise usage

`KelystyProvider` is a very convenient way to provide whole bunch of the context in a minute. But, you might not need so much of context.

Is there a way to apply them precisely?! Absolutely!

This is the example we provided at the very beginning of this page:

```ts
import {KelystyProvider} from '@kelysty/system'
// ...

<KelystyProvider
  mobileMaxWidth={450}
  tabletMaxWidth={900}
  defaultIsAuth={false}
  defaultLanguage='english'
  languages={[...]}
  defaultTheme='light'
>
  <App/>
</KelystyProvider>
```

Now, guess what, it was a HOC for

```ts
import {
  DeviceProvider,
  AuthProvider,
  LanguageProvider,
  ThemeProvider
} from '@kelysty/system';
// ...

<DeviceProvider
  mobileMaxWidth={450}
  tabletMaxWidth={900}
>
  <AuthProvider defaultIsAuth={false}>
    <LanguageProvider
      defaultLanguage='english'
      languages={[...]}
    >
      <ThemeProvider defaultTheme='light'>
        <App/>
      </ThemeProvider>
    </LanguageProvider>
  </AuthProvider>
</DeviceProvider>
```

As you can see, `KelystyProvider` is an abstraction that renders all nested providers underneath; The truth is:

- `all props` are the same
- `all fallbacks (defaultValues)` are the same
- `each hook` is linked to it's provider

> Just pick providers you need and use them separately!

We hope you enjoy using this library!
