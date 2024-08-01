import { redirect } from 'next/navigation';
import { FormEvent } from 'react';
import { ZodError } from 'zod';
import { create } from 'zustand';

import { VQR_BACKEND } from '@/constants';
import { fetch } from '@/services';

import defaultFields from './data';
import { LogInUserParams, UserState, UserStore } from './types';
import { LoginZod } from './zod';

const useUserStore = create<UserStore>((set, get) => ({
  isLoggedIn: false,
  fields: defaultFields,
  errors: [],
  logIn: async (credentials: LogInUserParams) => {
    const response = await fetch.post(VQR_BACKEND, { ...credentials });

    if (response.status !== 200) {
      return false;
    }

    return true;
  },
  logOut: () => set((_state: UserState) => ({ isLoggedIn: false })),
  setErrorMessages: (errorMessages: string[]) => {
    set((_state) => ({ errors: errorMessages }));
  },
  handleUsername: (value: { name: string }, errorMessage?: string) => {
    set((state) => {
      const prev = state.fields;

      return {
        fields: {
          password: prev.password,
          username: {
            value: value.name,
            invalidText: errorMessage,
          },
        },
      };
    });
  },
  handlePassword: (value: { password: string }, errorMessage?: string) => {
    set((state) => {
      const prev = state.fields;

      return {
        fields: {
          password: {
            value: value.password,
            invalidText: errorMessage,
          },
          username: prev.username,
        },
      };
    });
  },
  handleErrors: (error: ZodError) => {
    error.issues.forEach((issue) => {
      set((state) => {
        const prev = state.fields;
        return {
          fields: {
            ...prev,
            [issue.path[0]]: {
              // @ts-ignore
              value: prev[issue.path[0]]['value'],
              invalidText: issue.message,
            },
          },
        };
      });
    });
  },
  submitLogin: async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const setErrorMessages = get().setErrorMessages;
    const handleErrors = get().handleErrors;
    const logIn = get().logIn;
    const fields = get().fields;

    setErrorMessages([]);

    const validated = LoginZod.safeParse({
      username: fields.username,
      password: fields.password,
    });

    if (!validated.success) {
      handleErrors(validated.error);
      return;
    }

    try {
      const isLoggedIn = await logIn({
        username: fields.username.value,
        password: fields.password.value,
      });

      if (!isLoggedIn) {
        setErrorMessages(['Credenciais invalidas']);
        return;
      }
    } catch (_e) {
      setErrorMessages(['Servidor indisponivel']);
      return;
    }

    redirect('/');
  },
}));

export default useUserStore;
