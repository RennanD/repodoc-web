import { setCookie } from 'nookies';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import storageConfig from '../config/storage';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T = unknown>(
  key: string,
  initialState: T,
): Response<T> {
  const [state, setState] = useState<T>({} as T);

  useEffect(() => {
    function loadingState() {
      const storaged = localStorage.getItem(`${storageConfig.app_key}:${key}`);

      setState(storaged ? JSON.parse(storaged) : initialState);
    }
    loadingState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCookie(
      undefined,
      `${storageConfig.app_key}:${key}`,
      JSON.stringify(state),
      {
        maxAge: 60 * 60 * 24, // 1 day
      },
    );
  }, [key, state]);

  return [state, setState];
}
