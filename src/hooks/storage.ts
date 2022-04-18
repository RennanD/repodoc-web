import { setCookie, parseCookies } from 'nookies';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import storageConfig from '../config/storage';

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T = unknown>(
  key: string,
  initialState: T,
): Response<T> {
  const [state, setState] = useState<T>(() => {
    const cookieName = `${storageConfig.app_key}:${key}`;

    const { [cookieName]: storagedValue } = parseCookies();

    return storagedValue ? JSON.parse(storagedValue) : initialState;
  });

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
