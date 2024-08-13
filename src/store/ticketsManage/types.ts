import { FormEvent } from 'react';
import { ZodError } from 'zod';

export type Ticket = {
  id: string;
  isSelected: boolean;
  isFree: boolean;
  p: string;
  e: string;
  r: string;
};

export type TicketAttribute = {
  addTicket: string;
};

export type Fields = {
  addTicket: {
    value: string;
    invalidText?: string;
  };
};

export type TicketsAttributeStore = {
  tickets: Ticket[];
  errors: string[];
  fields: Fields;
  setErrorMessages: (errorMessages: string[]) => void;
  handleAddTicket: (value: { puller: string }, errorMessage?: string) => void;
  handleErrors: (error: ZodError) => void;
  addTicket: (ticketAttribute: TicketAttribute) => Promise<boolean>;
  submitAddTicket: (event: FormEvent<HTMLFormElement>) => Promise<void>;
};
