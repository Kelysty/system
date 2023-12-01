# KelystyProvider

`KelystyProvider` component is a main provider that renders all other providers within itself;

Here is a short guide:

### Usage example

This example shows all props that we can pass to it:

```ts
ReactDOM.createRoot(document.getElementById('root')!).render(
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
)
```

But remember, `each of nested providers has a fallbacks`, so it would work even without passing any props.

```ts
ReactDOM.createRoot(document.getElementById('root')!).render(
  <KelystyProvider>
    <App/>
  </KelystyProvider>
)
```

In such case all tweaks will be assigned to their default values;

### Exposing

`KelystyProvider` is an abstraction over nested providers, specifically:

- `DeviceProvider` ([read here](./DeviceProvider/README.md))
- `AuthProvider` ([read here](./AuthProvider/README.md))
- `LanguageProvider` ([read here](./LanguageProvider/README.md))
- `ThemeProvider` ([read here](./ThemeProvider/README.md))

And all upcoming providers would go there too =)

So, instead of using this HOC you can use them separatelly and explicitly if you would like so:

```ts
ReactDOM.createRoot(document.getElementById('root')!).render(
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
)
```
