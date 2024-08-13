import { redirect } from 'next/navigation';
import { FormEvent } from 'react';
import { ZodError } from 'zod';
import { create } from 'zustand';

import { SelectedImage } from '@/components/PhotoUploader/types';
import { VQR_BACKEND } from '@/constants';
import { fetch } from '@/services';

import fieldsData from './data';
import { NewClientStore, RegisterNewClientParams } from './types';
import { NewClientZod } from './zod';

const useNewClientStore = create<NewClientStore>((set, get) => ({
  fields: fieldsData,
  errors: [],
  registerNewClient: async (newClient: RegisterNewClientParams) => {
    const response = await fetch.post(VQR_BACKEND + '/new-client', {
      ...newClient,
    });

    if (response.status !== 200) {
      return false;
    }

    return true;
  },
  setErrorMessages: (errorMessages: string[]) => {
    set((_state) => ({ errors: errorMessages }));
  },
  handleProfileImage: (
    value: { profileImage: SelectedImage },
    errorMessage?: string
  ) => {
    set((state) => {
      const prev = state.fields;

      return {
        fields: {
          profileImage: {
            value: value.profileImage,
            invalidText: errorMessage,
          },
          address: prev.address,
          cpf: prev.cpf,
          name: prev.name,
        },
      };
    });
  },
  handleName: (value: { name: string }, errorMessage?: string) => {
    set((state) => {
      const prev = state.fields;

      return {
        fields: {
          profileImage: prev.profileImage,
          address: prev.address,
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
          profileImage: prev.profileImage,
          address: prev.address,
          name: prev.name,
          cpf: {
            value: value.cpf,
            invalidText: errorMessage,
          },
        },
      };
    });
  },
  handleAddress: (value: { address: string }, errorMessage?: string) => {
    set((state) => {
      const prev = state.fields;

      return {
        fields: {
          profileImage: prev.profileImage,
          name: prev.name,
          cpf: prev.cpf,
          address: {
            value: value.address,
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
  submitNewClient: async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const setErrorMessages = get().setErrorMessages;
    const handleErrors = get().handleErrors;
    const registerNewClient = get().registerNewClient;

    const fields = get().fields;

    setErrorMessages([]);

    const validated = NewClientZod.safeParse({
      profileImage: fields.profileImage,
      name: fields.name,
      cpf: fields.cpf,
      address: fields.address,
    });

    if (!validated.success) {
      handleErrors(validated.error);
      return;
    }

    console.log({ fields });

    try {
      const newClient = await registerNewClient({
        address: fields.address.value,
        cpf: fields.cpf.value,
        name: fields.name.value,
        profileImage: fields.profileImage.value,
      });

      if (!newClient) {
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

export default useNewClientStore;
