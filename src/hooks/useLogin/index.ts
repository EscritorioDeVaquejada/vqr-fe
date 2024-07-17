import { FormEvent, useState } from "react";

import defaultFields from "./data";

import { Fields, FieldKey, Username, Password } from "./types";
import { LoginZod } from "./zod";

const useLogin = () => {
  const [username, setUsername] = useState<Username>({
    value: "",
    invalidText: undefined,
  });
  const [password, setPassword] = useState<Password>({
    value: "",
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
