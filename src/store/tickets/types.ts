export type Ticket = {
  id: string;
  isSelected: boolean;
};

export type TicketsStore = {
  tickets: Ticket[];
  getTickets: () => Promise<void>;
};
