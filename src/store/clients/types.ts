export type Client = {
  id: string;
  name: string;
  username: string;
  numberOfEvents: number;
  profilePicture: any;
};

export type ClientsStore = {
  clients: Client[];
  filteredClients: Client[];
  client: Client | null;
  getClients: () => Promise<void>;
  filterClients: (searchText: string) => void;
  selectClient: (username: string) => void;
  fetchClient: (username: string) => Promise<void>;
};
