export type Ticket = {
  isSelected: boolean;
  id: string;
  isFree: boolean;
  p: string;
  e: string;
  r: string;
};

export type TicketsStore = {
  tickets: Ticket[];
  ticket: Ticket | null;
  getTickets: () => Promise<void>;
  selectTicket: (id: string) => void;
};
