'use client';

import React from 'react';

import { Brand, Button, ErrorMessages, Input } from '@/components';

import styles from './page.module.scss';
import { useUserStore } from '@/store';

const page = () => {
  const { fields, errors, handleUsername, handlePassword, submitLogin } =
    useUserStore();

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.logoBrandStatement}>
          <Brand />
          <p className={styles.statement}>
            <strong>Seja bem vindo ao VQR</strong>, o maior sistema de Gestao de
            Vaquejadas do Brasil
          </p>
        </div>
        <form className={styles.form} onSubmit={submitLogin}>
          <Input
            id="name"
            name="name"
            label="Nome"
            placeholder="Informe seu name"
            onChange={(value: { name: string }) => handleUsername(value)}
            value={fields.username.value}
            errorMessage={fields.username.invalidText}
          />
          <Input
            id="password"
            name="password"
            label="Senha"
            placeholder="Informe sua senha"
            type="password"
            onChange={(value: { password: string }) => handlePassword(value)}
            value={fields.password.value}
            errorMessage={fields.password.invalidText}
          />
          <Button type="submit" label="Acessar Minha Conta" color="primary" />
          <ErrorMessages messages={errors} />
        </form>
      </div>
    </div>
  );
};

export default page;
