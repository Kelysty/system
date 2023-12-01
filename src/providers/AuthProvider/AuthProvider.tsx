import {ReactNode, useCallback, useMemo, useState} from 'react';
import type {IsAuth} from './types';
import {AuthContext, AuthContextValue} from './AuthContext';
import {DEFAULT_IS_AUTH} from './constants';

interface RequiredProps {
  defaultIsAuth: IsAuth;
  children: ReactNode;
}

/**
 * `KELYSTY`: This is an interface that represents the props
 * that should be passed to the custom AuthProvider component
 */
export type AuthProviderProps = Partial<RequiredProps>;

/**
 * `KELYSTY`: This is a AuthProvider, that contains current auth
 * status and methods to control it;
 */
export const AuthProvider = ({defaultIsAuth, children}: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState<IsAuth>(() => defaultIsAuth ?? DEFAULT_IS_AUTH);

  const handleLogin = useCallback(() => {
    setIsAuth(true);
  }, [setIsAuth]);

  const handleLogout = useCallback(() => {
    setIsAuth(false);
  }, [setIsAuth]);

  const handleIsAuthChange = useCallback(
    (newIsAuth: IsAuth) => {
      setIsAuth(newIsAuth);
    },
    [setIsAuth],
  );

  const authContextValue: AuthContextValue = useMemo(
    () => ({
      isAuth: isAuth,
      login: handleLogin,
      logout: handleLogout,
      setIsAuth: handleIsAuthChange,
    }),
    [isAuth, handleLogin, handleLogout, handleIsAuthChange],
  );

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

AuthProvider.displayName = 'AuthProvider';
