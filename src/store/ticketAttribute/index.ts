import { create } from "zustand";

import { TicketAttributeStore } from "./types";

const useTicketsAttributeStore = create<TicketAttributeStore>((set, get) => ({
  ticket: null,
  isCompleted: true,
  toggleBoiTV: () => {
    const boiTV = get().ticket?.boiTV;

    set(() => ({ ticket: { boiTV: !boiTV } }));
  },
  toggleIsCompleted: () => {
    const isCompleted = get().isCompleted;

    set(() => ({ isCompleted: !isCompleted }));
  },
}));

export default useTicketsAttributeStore;
