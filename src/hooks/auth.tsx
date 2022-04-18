import { createContext, ReactNode, useContext, useState } from 'react';
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
  singIn: (data: SignInData) => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState({} as UserData);

  async function handleSignIn({ email, password }: SignInData) {
    const response = await api.post('/auth', {
      email,
      password,
    });
  }

  return (
    <AuthContext.Provider value={{ user, singIn: handleSignIn }}>
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
