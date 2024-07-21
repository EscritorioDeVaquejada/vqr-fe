import { create } from "zustand";

import { fetch } from "@/services";
import { VQR_BACKEND } from "@/constants";

import { Client, ClientsStore } from "./types";
import clientsData from "./data";

const useClientsStore = create<ClientsStore>((set, get) => ({
  clients: [],
  filteredClients: [],
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
}));

export default useClientsStore;
