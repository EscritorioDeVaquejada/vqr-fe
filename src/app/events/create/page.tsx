'use client';
import React from 'react';

import { ArrowLeft } from '@/assets';
import { Button, Input, Multi } from '@/components';
import { useNewClientStore } from '@/store';

import styles from './page.module.scss';

const page = () => {
  const {} = useNewClientStore();

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
      <form className={styles.form}>
        <Input
          name="name"
          label="Nome do Evento"
          placeholder="Informe o nome do Evento"
        />
        <Input name="date" label="Data" placeholder="00/00/00" />
        <Input name="amount" label="Valor da Senha" placeholder="R$ 0,00" />
        <div className={styles.inlineInput}>
          <Input
            name="boiTvAmountInAdvance"
            label="Valor BOI TV (Adiantado)"
            placeholder="R$ 0,00"
          />
          <Input
            name="boiTvAmountOnSite"
            label="Valor da Senha (Na hora)"
            placeholder="R$ 0,00"
          />
        </div>
        <Input
          name="initialAmount"
          label="Valor Inicial da Senha"
          placeholder="0"
        />
        <Multi>
          <Button type="button" label="Cancelar" color="tertiary" />
          <Button type="button" label="Confirmar" isDisabled />
        </Multi>
      </form>
    </div>
  );
};

export default page;
