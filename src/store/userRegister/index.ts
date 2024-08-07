import { redirect } from 'next/navigation';
import { FormEvent } from 'react';
import { ZodError } from 'zod';
import { create } from 'zustand';

import { VQR_BACKEND } from '@/constants';
import { fetch } from '@/services';

import defaultFields from './data';
import { UserRegisterParams, UserRegisterStore } from './types';
import { LoginZod } from './zod';

const useUserRegisterStore = create<UserRegisterStore>((set, get) => ({
  fields: defaultFields,
  errors: [],
  registerUser: async (credentials: UserRegisterParams) => {
    const response = await fetch.post(VQR_BACKEND, { ...credentials });

    if (response.status !== 200) {
      return false;
    }

    return true;
  },
  setErrorMessages: (errorMessages: string[]) => {
    set((_state) => ({ errors: errorMessages }));
  },
  handleName: (value: { name: string }, errorMessage?: string) => {
    set((state) => {
      const prev = state.fields;

      return {
        fields: {
          password: prev.password,
          cpf: prev.cpf,
          name: {
            value: value.name,
            invalidText: errorMessage,
          },
        },
      };
    });
  },
  handleCPF: (value: { cpf: string }, errorMessage?: string) => {
    set((state) => {
      const prev = state.fields;

      return {
        fields: {
          name: prev.name,
          password: prev.password,
          cpf: {
            value: value.cpf,
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
          name: prev.name,
          cpf: prev.cpf,
          password: {
            value: value.password,
            invalidText: errorMessage,
          },
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
  submitUserRegister: async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const setErrorMessages = get().setErrorMessages;
    const handleErrors = get().handleErrors;
    const registerUser = get().registerUser;
    const fields = get().fields;

    setErrorMessages([]);

    const validated = LoginZod.safeParse({
      name: fields.name,
      cpf: fields.cpf,
      password: fields.password,
    });

    if (!validated.success) {
      handleErrors(validated.error);
      return;
    }

    try {
      const isLoggedIn = await registerUser({
        name: fields.name.value,
        cpf: fields.cpf.value,
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

export default useUserRegisterStore;
