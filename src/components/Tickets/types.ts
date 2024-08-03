import { Ticket } from '@/store/ticketsAttribute/types';

export type CellProps = {
  ticket: Ticket;
  selectedTicket?: Ticket | null;
  index: number;
  onChange: (id: string) => void;
};

export type TicketsProps = {
  size?: 'small' | 'large';
};
