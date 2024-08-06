import { Image, SelectedImage } from '@/components/PhotoUploader/types';
import { FormEvent } from 'react';
import { ZodError } from 'zod';

export type Fields = {
  profileImage: {
    value: SelectedImage;
    invalidText?: string;
  };
  name: {
    value: string;
    invalidText?: string;
  };
  cpf: {
    value: string;
    invalidText?: string;
  };
  address: {
    value: string;
    invalidText?: string;
  };
};

export type RegisterNewClientParams = {
  profileImage: SelectedImage;
  name: string;
  cpf: string;
  address: string;
};

export type NewClientStore = {
  fields: Fields;
  errors: string[];
  registerNewClient: (newClient: RegisterNewClientParams) => Promise<boolean>;
  handleErrors: (error: ZodError) => void;
  handleProfileImage: (
    value: { profileImage: SelectedImage },
    errorMessage?: string
  ) => void;
  handleName: (value: { name: string }, errorMessage?: string) => void;
  handleCPF: (value: { cpf: string }, errorMessage?: string) => void;
  handleAddress: (value: { address: string }, errorMessage?: string) => void;
  submitNewClient: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  setErrorMessages: (errorMessages: string[]) => void;
};
