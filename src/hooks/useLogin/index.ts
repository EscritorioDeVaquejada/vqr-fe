import { FormEvent, useState } from 'react';

import { useUserStore } from '@/store';

import defaultFields from './data';
import { FieldKey, Fields, Password, Username } from './types';
import { LoginZod } from './zod';

const useLogin = () => {
  const {} = useUserStore();

  const [username, setUsername] = useState<Username>({
    value: '',
    invalidText: undefined,
  });
  const [password, setPassword] = useState<Password>({
    value: '',
    invalidText: undefined,
  });

  const handleUsername = (value: any, errorMessage?: string) => {
    setUsername({ value: value.name, invalidText: errorMessage });
  };

  const handlePassword = (value: any, errorMessage?: string) => {
    setPassword({ value: value.password, invalidText: errorMessage });
  };

  const submitLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validated = LoginZod.safeParse({ username, password });

    if (!validated.success) {
    }
  };

  return { handleUsername, handlePassword, submitLogin, username, password };
};

export default useLogin;
