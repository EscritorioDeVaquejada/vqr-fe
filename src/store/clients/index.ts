import { create } from 'zustand';

import { VQR_BACKEND } from '@/constants';
import { fetch } from '@/services';

import clientsData from './data';
import { ClientsStore } from './types';

const useClientsStore = create<ClientsStore>((set, get) => ({
  clients: [],
  filteredClients: [],
  client: null,
  getClients: async () => {
    const response = await fetch.post(VQR_BACKEND, {});

    set(() => ({ clients: clientsData, filteredClients: clientsData }));
  },
  filterClients: (searchText: string) => {
    const clients = get().clients;

    const filtered = clients.filter((client) =>
      client.name.toLowerCase().includes(searchText.toLowerCase())
    );

    set((_state) => ({ filteredClients: filtered }));
  },
  selectClient: (username: string) => {
    const clients = get().clients;

    const filtered = clients.filter((client) =>
      client.username.includes(username)
    );
    set((_state) => ({ client: filtered[0] }));
  },
  fetchClient: async (username: string) => {
    const response = await fetch.post(VQR_BACKEND, {});
    const clients = clientsData;

    const filtered = clients.filter((client) =>
      client.username.includes(username)
    );

    set((_state) => ({ client: filtered[0] }));
  },
}));

export default useClientsStore;
