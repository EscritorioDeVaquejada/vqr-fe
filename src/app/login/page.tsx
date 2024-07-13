import React from "react";

import { Logo } from "@/assets";
import { Input, Button } from "@/components";

import styles from "./page.module.scss";

const page = () => {
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
          <Input id="name" label="Nome" placeholder="Informe seu name" />
          <Input
            id="password"
            label="Senha"
            placeholder="Informe sua senha"
            type="password"
          />
          <Button type="submit" label="Acessar Minha Conta" color="primary" />
        </form>
      </div>
    </div>
  );
};

export default page;
