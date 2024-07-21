export type Event = {
  id: string;
  name: string;
  date: string;
};

export type EventsStore = {
  events: Event[];
  filteredEvents: Event[];
  event: Event | null;
  getEvents: () => Promise<void>;
  filterEvents: (searchText: string) => void;
  selectEvent: (username: string) => void;
  fetchEvent: (username: string) => Promise<void>;
};
