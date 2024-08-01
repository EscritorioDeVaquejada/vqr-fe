'use client';

import React, { MouseEvent, useState } from 'react';

import { Button, Input, IrreversibleModal } from '@/components';

import styles from './page.module.scss';

const page = () => {
  const [canSubmit, setCanSubmit] = useState(true);
  const [isResetPasswordsModalOpen, setIsResetPasswordsModalOpen] =
    useState(false);

  const toggleIsEndEventModal = () => {
    setIsResetPasswordsModalOpen((prev) => !prev);
  };

  const handleConfirmResetPasswordsModal = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    toggleIsEndEventModal();
  };

  const confirmResetPasswords = () => {
    console.log('Reseting passwords...');
  };

  return (
    <div className={styles.container}>
      {isResetPasswordsModalOpen && (
        <IrreversibleModal
          headerStatement="Resetar todas as senhas"
          mainStatement={[
            'Esta é uma ação irreversível, tem certeza que deseja confirmar essa ação?',
          ]}
          onCancel={toggleIsEndEventModal}
          onConfirm={confirmResetPasswords}
        />
      )}
      <h1>Novo Usuário</h1>
      <form className={styles.form}>
        <Input name="name" label="Nome" placeholder="Informe seu nome" />
        <Input name="cpf" label="CPF" placeholder="000000000-00" />
        <Input
          name="password"
          label="Senha"
          placeholder="*********"
          type="password"
        />
        <Button type="submit" label="Cadastrar" />
        <Button
          type="submit"
          label="Resetar todas as senhas"
          color="alert"
          onClick={handleConfirmResetPasswordsModal}
        />
      </form>
    </div>
  );
};

export default page;
