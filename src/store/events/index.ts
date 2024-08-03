import { create } from 'zustand';

import { VQR_BACKEND } from '@/constants';
import { fetch } from '@/services';

import eventsData from './data';
import { EventsStore } from './types';

const useEventsStore = create<EventsStore>((set, get) => ({
  events: [],
  filteredEvents: [],
  event: null,
  getEvents: async () => {
    // const response = await fetch.post(VQR_BACKEND, {});

    set(() => ({ events: eventsData, filteredEvents: eventsData }));
  },
  filterEvents: (searchText: string) => {
    const events = get().events;

    const filtered = events.filter((event) =>
      event.name.toLowerCase().includes(searchText.toLowerCase())
    );

    set((_state) => ({ filteredEvents: filtered }));
  },
  selectEvent: (username: string) => {
    const events = get().events;

    const filtered = events.filter((event) =>
      event.username.includes(username)
    );
    set((_state) => ({ event: filtered[0] }));
  },
  fetchEvent: async (username: string) => {
    // const response = await fetch.post(VQR_BACKEND, {});
    const events = eventsData;

    const filtered = events.filter((event) =>
      event.username.includes(username)
    );

    set((_state) => ({ event: filtered[0] }));
  },
}));

export default useEventsStore;
