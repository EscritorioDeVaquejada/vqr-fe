import { FormEvent } from 'react';
import { ZodError } from 'zod';

export type UserRegisterParams = {
  name: string;
  cpf: string;
  password: string;
};

export type Fields = {
  name: {
    value: string;
    invalidText?: string;
  };
  cpf: {
    value: string;
    invalidText?: string;
  };
  password: {
    value: string;
    invalidText?: string;
  };
};

export type UserRegisterStore = {
  fields: Fields;
  errors: string[];
  registerUser: (credentials: UserRegisterParams) => Promise<boolean>;
  handleErrors: (error: ZodError) => void;
  handleName: (value: { name: string }, errorMessage?: string) => void;
  handleCPF: (value: { cpf: string }, errorMessage?: string) => void;
  handlePassword: (value: { password: string }, errorMessage?: string) => void;
  submitUserRegister: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  setErrorMessages: (errorMessages: string[]) => void;
};
