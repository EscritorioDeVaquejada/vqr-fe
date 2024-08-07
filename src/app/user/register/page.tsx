'use client';

import React, { MouseEvent, useState } from 'react';

import { Button, ErrorMessages, Input, IrreversibleModal } from '@/components';
import { useUserRegisterStore } from '@/store';

import styles from './page.module.scss';

const page = () => {
  const {
    fields,
    errors,
    handleCPF,
    handleName,
    handlePassword,
    submitUserRegister,
  } = useUserRegisterStore();

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
      <form className={styles.form} onSubmit={submitUserRegister}>
        <Input
          name="name"
          label="Nome"
          placeholder="Informe seu nome"
          value={fields.name.value}
          errorMessage={fields.name.invalidText}
          onChange={handleName}
        />
        <Input
          name="cpf"
          label="CPF"
          placeholder="000000000-00"
          value={fields.cpf.value}
          errorMessage={fields.cpf.invalidText}
          onChange={handleCPF}
        />
        <Input
          name="password"
          label="Senha"
          placeholder="*********"
          type="password"
          value={fields.password.value}
          errorMessage={fields.password.invalidText}
          onChange={handlePassword}
        />
        <Button type="submit" label="Cadastrar" />
        <Button
          type="button"
          label="Resetar todas as senhas"
          color="alert"
          onClick={handleConfirmResetPasswordsModal}
        />
        <ErrorMessages messages={errors} />
      </form>
    </div>
  );
};

export default page;
