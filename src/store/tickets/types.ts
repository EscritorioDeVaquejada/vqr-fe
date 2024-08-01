export type Ticket = {
  boiTV: boolean;
};

export type TicketAttributeStore = {
  ticket: Ticket | null;
  isCompleted: boolean;
  toggleBoiTV: () => void;
  toggleIsCompleted: () => void;
};
