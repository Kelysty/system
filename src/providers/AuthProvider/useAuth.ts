import {useContext} from 'react';
import {AuthContext, AuthContextValue} from './AuthContext';

/**
 * `KELYSTY`: This is the hook that is used to access the
 * current
 * - auth status
 * - login() method
 * - logout() method
 * - setIsAuth() method;
 */
export const useAuth = (): AuthContextValue => {
  return useContext(AuthContext);
};
