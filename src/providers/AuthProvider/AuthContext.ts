import {createContext} from 'react';
import {DEFAULT_IS_AUTH} from './constants';
import type {IsAuth} from './types';

/**
 * `KELYSTY`: This is an interface that represents the value
 * that should be passed to the Auth Context
 */
export interface AuthContextValue {
  isAuth: IsAuth;
  login: () => void;
  logout: () => void;
  setIsAuth: (isAuth: IsAuth) => void;
}

/**
 * `KELYSTY`: This is the initial value of the AuthContext
 */
const initialAuthContextValue: AuthContextValue = {
  isAuth: DEFAULT_IS_AUTH,
  login: () => {},
  logout: () => {},
  // eslint-disable-next-line
  setIsAuth: (isAuth: IsAuth) => console.log(isAuth),
};

/**
 * `KELYSTY`: This is the Auth Context that will be used
 * and will be addressed to throughout the application;
 */
export const AuthContext = createContext(initialAuthContextValue);

AuthContext.displayName = 'AuthContext';
