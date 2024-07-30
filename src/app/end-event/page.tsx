"use client";

import React, { MouseEvent, useState } from "react";

import styles from "./page.module.scss";
import { Button, IrreversibleModal, Input } from "@/components";

const page = () => {
  const [canSubmit, setCanSubmit] = useState(true);
  const [isEndEventModalOpen, setIsEndEventModalOpen] = useState(false);

  const toggleIsEndEventModal = () => {
    setIsEndEventModalOpen((prev) => !prev);
  };

  const handleConfirmEventModal = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    toggleIsEndEventModal();
  };

  const confirmEndEvent = () => {
    console.log("Ending event...");
  };

  return (
    <div className={styles.container}>
      {isEndEventModalOpen && (
        <IrreversibleModal
          headerStatement="Encerrar Evento"
          mainStatement={[
            "Esta é uma ação irreversível, tem certeza que deseja confirmar essa ação?",
          ]}
          onCancel={toggleIsEndEventModal}
          onConfirm={confirmEndEvent}
        />
      )}
      <h1 className={styles.heading}>Encerrar Evento</h1>
      <form className={styles.form}>
        <Input name="name" label="Nome" placeholder="Informe seu nome" />
        <Input name="cpf" label="CPF" placeholder="000000000-00" />
        <Input
          name="password"
          label="Senha"
          placeholder="*********"
          type="password"
        />
        <p className={styles.warning}>
          Ao encerrar o evento o sistema irá produzir um PDF com o relatório
          Final da venda das senhas que será armazenado no dispositivo. Logo
          após todos os registros serão apagados e o sistema estará pronto para
          ser usado no próximo evento.
        </p>
        <Button
          type="submit"
          color="alert"
          isDisabled={!canSubmit}
          label="Confirmar"
          onClick={handleConfirmEventModal}
        />
      </form>
    </div>
  );
};

export default page;
