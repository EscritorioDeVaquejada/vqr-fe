import { create } from "zustand";

import { fetch } from "@/services";
import { VQR_BACKEND } from "@/constants";

import { LogInUserParams, UserState } from "./types";

const useUserStore = create((set) => ({
  isLoggedIn: false,
  logIn: async (credentials: LogInUserParams) => {
    const response = await fetch.post(VQR_BACKEND, { ...credentials });

    set((_state: UserState) => ({ isLoggedIn: true }));
  },
  logout: () => set((_state: UserState) => ({ isLoggedIn: false })),
}));

export default useUserStore;
