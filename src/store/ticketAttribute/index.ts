import { create } from "zustand";

import { TicketAttributeStore } from "./types";

const useTicketsAttributeStore = create<TicketAttributeStore>((set, get) => ({
  ticket: null,
  toggleBoiTV: () => {
    const boiTV = get().ticket?.boiTV;

    set(() => ({ ticket: { boiTV: !boiTV } }));
  },
}));

export default useTicketsAttributeStore;
