"use client";

import React, { useState } from "react";

import { Logo } from "@/assets";
import { Input, Button } from "@/components";

import { useLogin } from "@/hooks";

import styles from "./page.module.scss";

const page = () => {
  const { handlePassword, handleUsername, password, username } = useLogin();

  console.log({ username, password });

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <div className={styles.logoBrandStatement}>
          <div className={styles.logoBrand}>
            <img src={Logo.src} />
            <h1 className={styles.brand}>VQR</h1>
          </div>
          <p className={styles.statement}>
            <strong>Seja bem vindo ao VQR</strong>, o maior sistema de Gestao de
            Vaquejadas do Brasil
          </p>
        </div>
        <form className={styles.form}>
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
