export type UserState = {
  isLoggedIn: boolean;
};

export type LogInUserParams = {
  username: string;
  password: string;
};

export type UserStore = {
  isLoggedIn: boolean;
  logIn: (credentials: LogInUserParams) => Promise<void>;
  logOut: () => void;
};
