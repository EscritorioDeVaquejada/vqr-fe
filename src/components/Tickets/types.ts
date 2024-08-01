import { Ticket } from '@/store/ticketsAttribute/types';

export type CellProps = {
  ticket: Ticket;
  index: number;
};

export type TicketsProps = {
  size?: 'small' | 'large';
};
