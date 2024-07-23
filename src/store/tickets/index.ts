import { create } from "zustand";

import { fetch } from "@/services";
import { VQR_BACKEND } from "@/constants";

import { TicketsStore } from "./types";
import ticketsData from "./data";

const useTicketsStore = create<TicketsStore>((set, get) => ({
  tickets: [],
  getTickets: async () => {
    const response = await fetch.post(VQR_BACKEND, {});

    set(() => ({ tickets: ticketsData, filteredTickets: ticketsData }));
  },
}));

export default useTicketsStore;
