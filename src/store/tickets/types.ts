export type Ticket = {
  id: string;
  isSelected: boolean;
  isFree: boolean;
  p: string;
  e: string;
  r: string;
};

export type TicketsStore = {
  tickets: Ticket[];
  getTickets: () => Promise<void>;
};
