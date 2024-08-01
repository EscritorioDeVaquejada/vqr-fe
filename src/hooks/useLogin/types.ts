export type Fields = {
  username?: {
    value: string;
    invalidText?: string;
  };
  password?: {
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
