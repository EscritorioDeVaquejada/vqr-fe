export type Ticket = {
  id: string;
  isSelected: boolean;
};

export type CellProps = {
  ticket: Ticket;
  index: number;
};
