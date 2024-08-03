import { create } from 'zustand';

import { TicketsStore } from './types';
import ticketsData from './data';

const useTicketsStore = create<TicketsStore>((set, get) => ({
  tickets: [],
  ticket: null,
  getTickets: async () => {
    set((_state) => ({ tickets: ticketsData }));
  },
  selectTicket: (id: string) => {
    const tickets = get().tickets;

    const filtered = tickets.filter((ticket) => {
      return ticket.id.includes(id);
    });

    set((_state) => ({ ticket: filtered[0] }));
  },
}));

export default useTicketsStore;
