export type Client = {
  name: string;
  numberOfEvents: number;
  profilePicture: any;
};

export type ClientsStore = {
  clients: Client[];
  filteredClients: Client[];
  getClients: () => Promise<void>;
  filterClients: (searchText: string) => void;
};
