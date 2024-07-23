export type Ticket = {
  boiTV: boolean;
};

export type TicketAttributeStore = {
  ticket: Ticket | null;
  toggleBoiTV: () => void;
};
