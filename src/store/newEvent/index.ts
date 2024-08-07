import { create } from 'zustand';

import { VQR_BACKEND } from '@/constants';
import { fetch } from '@/services';

import { NewEventStore, RegisterNewEventParams } from './types';
import fieldsData from './data';
import { ZodError } from 'zod';
import { FormEvent } from 'react';
import { redirect } from 'next/navigation';
import { NewEventZod } from './zod';
import { SelectedImage } from '@/components/PhotoUploader/types';

const useNewEventStore = create<NewEventStore>((set, get) => ({
  fields: fieldsData,
  errors: [],
  registerNewEvent: async (newEvent: RegisterNewEventParams) => {
    const response = await fetch.post(VQR_BACKEND + '/new-event', {
      ...newEvent,
    });

    if (response.status !== 200) {
      return false;
    }

    return true;
  },
  setErrorMessages: (errorMessages: string[]) => {
    set((_state) => ({ errors: errorMessages }));
  },
  handleEventName: (value: { eventName: string }, errorMessage?: string) => {
    set((state) => {
      const prev = state.fields;

      return {
        fields: {
          date: prev.date,
          amount: prev.amount,
          boiTvAmountInAdvance: prev.boiTvAmountInAdvance,
          boiTvAmountOnSite: prev.boiTvAmountOnSite,
          initialAmount: prev.initialAmount,
          eventName: {
            value: value.eventName,
            invalidText: errorMessage,
          },
        },
      };
    });
  },
  handleDate: (value: { date: string }, errorMessage?: string) => {
    set((state) => {
      const prev = state.fields;

      return {
        fields: {
          eventName: prev.eventName,
          amount: prev.amount,
          boiTvAmountInAdvance: prev.boiTvAmountInAdvance,
          boiTvAmountOnSite: prev.boiTvAmountOnSite,
          initialAmount: prev.initialAmount,
          date: {
            value: value.date,
            invalidText: errorMessage,
          },
        },
      };
    });
  },
  handleAmount: (value: { amount: string }, errorMessage?: string) => {
    set((state) => {
      const prev = state.fields;

      return {
        fields: {
          eventName: prev.eventName,
          date: prev.date,
          boiTvAmountInAdvance: prev.boiTvAmountInAdvance,
          boiTvAmountOnSite: prev.boiTvAmountOnSite,
          initialAmount: prev.initialAmount,
          amount: {
            value: value.amount,
            invalidText: errorMessage,
          },
        },
      };
    });
  },
  handleBoiTvAmountInAdvance: (
    value: { boiTvAmountInAdvance: string },
    errorMessage?: string
  ) => {
    set((state) => {
      const prev = state.fields;

      return {
        fields: {
          eventName: prev.eventName,
          amount: prev.amount,
          date: prev.date,
          boiTvAmountOnSite: prev.boiTvAmountOnSite,
          initialAmount: prev.initialAmount,
          boiTvAmountInAdvance: {
            value: value.boiTvAmountInAdvance,
            invalidText: errorMessage,
          },
        },
      };
    });
  },

  handleBoiTvAmountOnSite: (
    value: { boiTvAmountOnSite: string },
    errorMessage?: string
  ) => {
    set((state) => {
      const prev = state.fields;

      return {
        fields: {
          eventName: prev.eventName,
          amount: prev.amount,
          date: prev.date,
          boiTvAmountInAdvance: prev.boiTvAmountInAdvance,
          initialAmount: prev.initialAmount,
          boiTvAmountOnSite: {
            value: value.boiTvAmountOnSite,
            invalidText: errorMessage,
          },
        },
      };
    });
  },

  handleInitialAmount: (
    value: { initialAmount: string },
    errorMessage?: string
  ) => {
    set((state) => {
      const prev = state.fields;

      return {
        fields: {
          eventName: prev.eventName,
          amount: prev.amount,
          date: prev.date,
          boiTvAmountInAdvance: prev.boiTvAmountInAdvance,
          boiTvAmountOnSite: prev.boiTvAmountOnSite,
          initialAmount: {
            value: value.initialAmount,
            invalidText: errorMessage,
          },
        },
      };
    });
  },
  handleErrors: (error: ZodError) => {
    error.issues.forEach((issue) => {
      set((state) => {
        const prev = state.fields;
        return {
          fields: {
            ...prev,
            [issue.path[0]]: {
              // @ts-ignore
              value: prev[issue.path[0]]['value'],
              invalidText: issue.message,
            },
          },
        };
      });
    });
  },
  submitNewEvent: async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const setErrorMessages = get().setErrorMessages;
    const handleErrors = get().handleErrors;
    const registerNewEvent = get().registerNewEvent;

    const fields = get().fields;

    setErrorMessages([]);

    const validated = NewEventZod.safeParse({
      eventName: fields.eventName,
      date: fields.date,
      amount: fields.amount,
      boiTvAmountInAdvance: fields.boiTvAmountInAdvance,
      boiTvAmountOnSite: fields.boiTvAmountOnSite,
      initialAmount: fields.initialAmount,
    });

    if (!validated.success) {
      handleErrors(validated.error);
      return;
    }

    try {
      const newEvent = await registerNewEvent({
        eventName: fields.eventName.value,
        date: fields.date.value,
        amount: fields.amount.value,
        boiTvAmountInAdvance: fields.boiTvAmountInAdvance.value,
        boiTvAmountOnSite: fields.boiTvAmountOnSite.value,
        initialAmount: fields.initialAmount.value,
      });

      if (!newEvent) {
        setErrorMessages(['Credenciais invalidas']);
        return;
      }
    } catch (_e) {
      setErrorMessages(['Servidor indisponivel']);
      return;
    }

    redirect('/');
  },
}));

export default useNewEventStore;
