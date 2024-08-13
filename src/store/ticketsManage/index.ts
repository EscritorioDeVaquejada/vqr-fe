import { create } from 'zustand';

import { VQR_BACKEND } from '@/constants';
import { fetch } from '@/services';

import ticketsData, { fieldsData } from './data';
import { TicketAttribute, TicketsAttributeStore } from './types';
import { FormEvent } from 'react';
import { ZodError } from 'zod';
import { TicketsAtttributeZod } from './zod';
import { redirect } from 'next/navigation';

const useTicketsAttributeStore = create<TicketsAttributeStore>((set, get) => ({
  tickets: [],
  errors: [],
  fields: fieldsData,
  setErrorMessages: (errorMessages: string[]) => {
    set((_state) => ({ errors: errorMessages }));
  },
  handleAddTricket: (
    value: { ticketNumber: string },
    errorMessage?: string
  ) => {
    set((state) => {
      const prev = state.fields;

      return {
        fields: {
          puller: {
            value: value.puller,
            invalidText: errorMessage,
          },
          pullerHorse: prev.pullerHorse,
          belt: prev.belt,
          beltHorse: prev.beltHorse,
          municipality: prev.municipality,
          state: prev.state,
          representation: prev.representation,
          ticketNumber: prev.ticketNumber,
          boiTv: prev.boiTv,
          paymentMethod: prev.paymentMethod,
          amount: prev.amount,
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
  addTicket: async (ticketAttribute: TicketAttribute) => {
    const response = await fetch.post(VQR_BACKEND, { ...ticketAttribute });

    if (response.status !== 200) {
      return false;
    }

    return true;
  },
  submitAddTicket: async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const setErrorMessages = get().setErrorMessages;
    const handleErrors = get().handleErrors;
    const attributeTicket = get().attributeTicket;
    const fields = get().fields;

    setErrorMessages([]);

    const validated = TicketsAtttributeZod.safeParse({
      puller: fields.puller,
      pullerHorse: fields.pullerHorse,
      belt: fields.belt,
      beltHorse: fields.beltHorse,
      municipality: fields.municipality,
      state: fields.state,
      representation: fields.representation,
      ticketNumber: fields.ticketNumber,
      boiTv: fields.boiTv,
      paymentMethod: fields.paymentMethod,
      amount: fields.amount,
    });

    if (!validated.success) {
      handleErrors(validated.error);
      return;
    }
    console.log({ fields });

    try {
      const hasAttributedTicket = await attributeTicket({
        puller: fields.puller.value,
        pullerHorse: fields.pullerHorse.value,
        belt: fields.belt.value,
        beltHorse: fields.beltHorse.value,
        municipality: fields.municipality.value,
        state: fields.state.value,
        representation: fields.representation.value,
        ticketNumber: fields.ticketNumber.value,
        boiTv: fields.boiTv.value,
        paymentMethod: fields.paymentMethod.value,
        amount: fields.amount.value,
      });

      if (!hasAttributedTicket) {
        setErrorMessages(['Dados fornecidos invalidos']);
        return;
      }
    } catch (_e) {
      setErrorMessages(['Servidor indisponivel']);
      return;
    }

    redirect('/');
  },
}));

export default useTicketsAttributeStore;
