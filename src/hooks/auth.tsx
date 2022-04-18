import Router from 'next/router';
import { createContext, ReactNode, useContext, useEffect } from 'react';
import { api } from '../services/api';
import { usePersistedState } from './storage';

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
  const [user, setUser] = usePersistedState<UserData>('user', {} as UserData);
  const [token, setToken] = usePersistedState('token', '');

  async function handleSignIn({ email, password }: SignInData) {
    const response = await api.post<AxiosResponse>('/auth', {
      email,
      password,
    });

    const { auth } = response.data;

    setToken(auth.token);
    setUser(auth.user);

    Router.push('/dashboard');
  }

  useEffect(() => {
    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ user, singIn: handleSignIn, isAuthenticated: !!token }}
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
