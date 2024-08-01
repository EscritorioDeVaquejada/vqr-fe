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
  puller: string;
  pullerHorse: string;
  belt: string;
  beltHorse: string;
  municipality: string;
  state: string;
  representation: string;
  ticketNumber: string;
  boiTv: boolean;
  paymentMethod: string;
  amount: string;
};

export type Fields = {
  puller: {
    value: string;
    invalidText?: string;
  };
  pullerHorse: {
    value: string;
    invalidText?: string;
  };
  belt: {
    value: string;
    invalidText?: string;
  };
  beltHorse: {
    value: string;
    invalidText?: string;
  };
  municipality: {
    value: string;
    invalidText?: string;
  };
  state: {
    value: string;
    invalidText?: string;
  };
  representation: {
    value: string;
    invalidText?: string;
  };
  ticketNumber: {
    value: string;
    invalidText?: string;
  };
  boiTv: {
    value: boolean;
    invalidText?: string;
  };
  paymentMethod: {
    value: string;
    invalidText?: string;
  };
  amount: {
    value: string;
    invalidText?: string;
  };
};

export type TicketsAttributeStore = {
  tickets: Ticket[];
  errors: string[];
  fields: Fields;
  isCompleted: boolean;
  getTickets: () => Promise<void>;
  toggleIsCompleted: () => void;
  setErrorMessages: (errorMessages: string[]) => void;
  handlePuller: (value: { puller: string }, errorMessage?: string) => void;
  handlePullerHorse: (
    value: { pullerHorse: string },
    errorMessage?: string
  ) => void;
  handleBelt: (value: { belt: string }, errorMessage?: string) => void;
  handleBeltHorse: (
    value: { beltHorse: string },
    errorMessage?: string
  ) => void;
  handleMunicipality: (
    value: { municipality: string },
    errorMessage?: string
  ) => void;
  handleState: (value: { state: string }, errorMessage?: string) => void;
  handleRepresentation: (
    value: { representation: string },
    errorMessage?: string
  ) => void;
  handleTicketNumber: (
    value: { ticketNumber: string },
    errorMessage?: string
  ) => void;
  toggleBoiTV: () => void;
  handlePaymentMethod: (
    value: { paymentMethod: string },
    errorMessage?: string
  ) => void;
  handleAmount: (value: { amount: string }, errorMessage?: string) => void;
  handleErrors: (error: ZodError) => void;
  attributeTicket: (ticketAttribute: TicketAttribute) => Promise<boolean>;
  submitTicketAttribute: (event: FormEvent<HTMLFormElement>) => Promise<void>;
};
