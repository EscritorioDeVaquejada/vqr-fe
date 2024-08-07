import { FormEvent } from 'react';
import { ZodError } from 'zod';

export type Fields = {
  eventName: {
    value: string;
    invalidText?: string;
  };
  date: {
    value: string;
    invalidText?: string;
  };
  amount: {
    value: string;
    invalidText?: string;
  };
  boiTvAmountInAdvance: {
    value: string;
    invalidText?: string;
  };
  boiTvAmountOnSite: {
    value: string;
    invalidText?: string;
  };
  initialAmount: {
    value: string;
    invalidText?: string;
  };
};

export type RegisterNewEventParams = {
  eventName: string;
  date: string;
  amount: string;
  boiTvAmountInAdvance: string;
  boiTvAmountOnSite: string;
  initialAmount: string;
};

export type NewEventStore = {
  fields: Fields;
  errors: string[];
  registerNewEvent: (newClient: RegisterNewEventParams) => Promise<boolean>;
  handleErrors: (error: ZodError) => void;
  handleEventName: (
    value: { eventName: string },
    errorMessage?: string
  ) => void;
  handleDate: (value: { date: string }, errorMessage?: string) => void;
  handleAmount: (value: { amount: string }, errorMessage?: string) => void;
  handleBoiTvAmountInAdvance: (
    value: { boiTvAmountInAdvance: string },
    errorMessage?: string
  ) => void;
  handleBoiTvAmountOnSite: (
    value: { boiTvAmountOnSite: string },
    errorMessage?: string
  ) => void;
  handleInitialAmount: (
    value: { initialAmount: string },
    errorMessage?: string
  ) => void;
  submitNewEvent: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  setErrorMessages: (errorMessages: string[]) => void;
};
