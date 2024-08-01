import { create } from 'zustand';

import { VQR_BACKEND } from '@/constants';
import { fetch } from '@/services';

import ticketsData from './data';
import { TicketsStore } from './types';

const useTicketsStore = create<TicketsStore>((set, get) => ({
  tickets: [],
  getTickets: async () => {
    const response = await fetch.post(VQR_BACKEND, {});

    set(() => ({ tickets: ticketsData, filteredTickets: ticketsData }));
  },
}));

export default useTicketsStore;
