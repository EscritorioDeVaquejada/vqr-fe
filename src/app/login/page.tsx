'use client';

import React from 'react';

import { Brand, Button, Input } from '@/components';
import { useLogin } from '@/hooks';

import styles from './page.module.scss';

const page = () => {
  const { handlePassword, handleUsername, submitLogin, password, username } =
    useLogin();

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
            onChange={(value: string) => handleUsername(value)}
            value={username.value}
          />
          <Input
            id="password"
            name="password"
            label="Senha"
            placeholder="Informe sua senha"
            type="password"
            onChange={(value: string) => handlePassword(value)}
            value={password.value}
          />
          <Button type="submit" label="Acessar Minha Conta" color="primary" />
        </form>
      </div>
    </div>
  );
};

export default page;
