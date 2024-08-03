import { FormEvent } from 'react';
import { ZodError } from 'zod';

export type UserState = {
  isLoggedIn: boolean;
};

export type LogInUserParams = {
  username: string;
  password: string;
};

export type Fields = {
  username: {
    value: string;
    invalidText?: string;
  };
  password: {
    value: string;
    invalidText?: string;
  };
};

export type FieldKey = 'username' | 'password';

export type Username = {
  value: string;
  invalidText?: string;
};

export type Password = {
  value: string;
  invalidText?: string;
};

export type UserStore = {
  isLoggedIn: boolean;
  errors: string[];
  fields: Fields;
  logIn: (credentials: LogInUserParams) => Promise<boolean>;
  logOut: () => void;
  handleErrors: (error: ZodError) => void;
  handleUsername: (value: { name: string }, errorMessage?: string) => void;
  handlePassword: (value: { password: string }, errorMessage?: string) => void;
  submitLogin: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  setErrorMessages: (errorMessages: string[]) => void;
};
