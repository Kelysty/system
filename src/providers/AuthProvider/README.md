# AuthProvider

This provider is nested in `KelystyProvider` component. But you can use it separately if you will. Here is a short guide.

### Auth Provider

`AuthProvider` is a container component that wraps all nested hierarchy into `AuthContext.Provider` ([read below](#auth-context)).
All props are optional, because it has fallbacks within itself. All nested elements would be able to interract with it;

```ts
type AuthProviderProps = {
  defaultIsAuth?: boolean | undefined;
  children?: ReactNode;
};
```

Default isAuth value is `false`. But you can specify desired isAuth value using `defaultIsAuth` prop.

#### example of the use case:

```ts
ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider defaultIsAuth={false}>
    <App/>
  </AuthProvider>
)
```

### Auth Context

`AuthContext` is the real context holder. Here you can see it's value's structure:

```ts
type IsAuth = boolean;

// it's a data that AuthContext.Provider expects to receive
interface AuthContextValue {
  isAuth: IsAuth;
  login: () => void;
  logout: () => void;
  setIsAuth: (isAuth: IsAuth) => void;
}
```

- `isAuth` - authorization status
- `login` - funtion that sets up isAuth = true
- `logout` - funtion that sets up isAuth = false
- `setIsAuth` - function that sets up new active isAuth

**login**, **logout** and **setIsAuth** handlers are created by wrapping `AuthProvider` that stores the auth status within itself. What is why it is so convenient to use it.

### useAuth() hook

This is a custom hook that simply returns `AuthContextValue` structure and you can destruct it like in the example below:

```ts
// import
import {useAuth} from '@kelysty/system';

// destruct
const {isAuth, login, logout, setIsAuth} = useAuth();

// use example
const handleAuthUpdate = useCallback(
  (newIsAuth: IsAuth) => {
    setIsAuth(newIsAuth);
  },
  [setIsAuth],
);

// further logic...
```
