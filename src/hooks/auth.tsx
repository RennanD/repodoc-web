import Router from 'next/router';

import { createContext, ReactNode, useContext, useEffect } from 'react';

import { destroyCookie } from 'nookies';
import { usePersistedState } from './storage';

import { api } from '../services/api';

type UserData = {
  name: string;
  email: string;
};

type SignInData = {
  email: string;
  password: string;
};

type AuthContextData = {
  user: UserData;
  isAuthenticated: boolean;
  singIn: (data: SignInData) => Promise<void>;
  signOut: () => void;
};

type AuthProviderProps = {
  children: ReactNode;
};

type AxiosResponse = {
  auth: {
    user: UserData;
    token: string;
  };
};

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = usePersistedState<UserData | null>('user', null);
  const [token, setToken] = usePersistedState<string | null>('token', null);

  async function handleSignIn({ email, password }: SignInData) {
    const response = await api.post<AxiosResponse>('/auth', {
      email,
      password,
    });

    const { auth } = response.data;

    setToken(auth.token);
    setUser(auth.user);

    Router.push('/app/dashboard');
  }

  function handleSignOut() {
    setToken(null);
    setUser(null);

    Router.push('/auth/login');
  }

  useEffect(() => {
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{
        user,
        singIn: handleSignIn,
        isAuthenticated: !!token,
        signOut: handleSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('authUse must be used  within AuthProvider');
  }

  return context;
}
