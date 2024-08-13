'use client';
import React from 'react';

import { ArrowLeft } from '@/assets';
import { Button, Calendar, Input, Multi } from '@/components';
import { useNewEventStore } from '@/store';

import styles from './page.module.scss';

const page = () => {
  const {
    fields,
    handleDate,
    handleAmount,
    handleBoiTvAmountInAdvance,
    handleBoiTvAmountOnSite,
    handleEventName,
    handleInitialAmount,
    submitNewEvent,
  } = useNewEventStore();

  const handlePreviousPage = () => {
    window.history.go(-1);
    return;
  };

  return (
    <div className={styles.container}>
      <Button
        type="button"
        color="secondary"
        icon={ArrowLeft.src}
        iconPosition="left"
        isFullWidth={false}
        width="fit-content"
        onClick={handlePreviousPage}
      />
      <h1 className={styles.heading}>Novo Evento</h1>
      <form className={styles.form} onSubmit={submitNewEvent}>
        <Input
          name="name"
          label="Nome do Evento"
          placeholder="Informe o nome do Evento"
          value={fields.eventName.value}
          errorMessage={fields.eventName.invalidText}
          onChange={handleEventName}
        />
        {/* <Input
          name="date"
          label="Data"
          placeholder="00/00/00"
          value={fields.date.value}
          errorMessage={fields.date.invalidText}
          onChange={handleDate}
        /> */}

        <Calendar onChange={handleDate} value={fields.date.value} />
        <Input
          name="amount"
          label="Valor da Senha"
          placeholder="R$ 0,00"
          value={fields.amount.value}
          errorMessage={fields.amount.invalidText}
          onChange={handleAmount}
        />
        <div className={styles.inlineInput}>
          <Input
            name="boiTvAmountInAdvance"
            label="Valor BOI TV (Adiantado)"
            placeholder="R$ 0,00"
            value={fields.boiTvAmountInAdvance.value}
            errorMessage={fields.boiTvAmountInAdvance.invalidText}
            onChange={handleBoiTvAmountInAdvance}
          />
          <Input
            name="boiTvAmountOnSite"
            label="Valor da Senha (Na hora)"
            placeholder="R$ 0,00"
            value={fields.boiTvAmountOnSite.value}
            errorMessage={fields.boiTvAmountOnSite.invalidText}
            onChange={handleBoiTvAmountOnSite}
          />
        </div>
        <Input
          name="initialAmount"
          label="Valor Inicial da Senha"
          placeholder="0"
          value={fields.initialAmount.value}
          errorMessage={fields.initialAmount.invalidText}
          onChange={handleInitialAmount}
        />
        <Multi>
          <Button type="button" label="Cancelar" color="tertiary" />
          <Button type="submit" label="Confirmar" />
        </Multi>
      </form>
    </div>
  );
};

export default page;
