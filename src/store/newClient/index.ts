import { create } from 'zustand';

import { VQR_BACKEND } from '@/constants';
import { fetch } from '@/services';

import clientsData from './data';
import { Client, ClientsStore } from './types';

const useNewClientStore = create<ClientsStore>((set, get) => ({
  clients: [],
  filteredClients: [],
  getClients: async () => {
    // const response = await fetch.post(VQR_BACKEND, {});

    set(() => ({ clients: clientsData, filteredClients: clientsData }));
  },
  filterClients: (searchText: string) => {
    const clients = get().clients;

    const filtered = clients.filter((client) =>
      client.name.toLowerCase().includes(searchText.toLowerCase())
    );

    set((_state) => ({ filteredClients: filtered }));
  },
}));

export default useNewClientStore;
