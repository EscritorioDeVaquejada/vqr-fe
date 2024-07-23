"use client";

import React from "react";

import styles from "./page.module.scss";
import { Button, Checkbox, Input, Multi, Tickets } from "@/components";
import { useTicketAttributeStore } from "@/store";

const page = () => {
  const { toggleBoiTV, ticket } = useTicketAttributeStore();

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <Multi>
          <Input
            label="Puxador"
            name="puller"
            placeholder="Informe o nome do puxador"
          />
          <Input label="Cavalo" name="horse1" placeholder="Cavalo da Puxador" />
        </Multi>
        <Multi>
          <Input label="Esteira" name="belt" placeholder="Nome da Esteira" />
          <Input label="Cavalo" name="horse2" placeholder="Cavalo da Esteira" />
        </Multi>
        <div className={styles.quarterRow}>
          <Input
            label="Município"
            name="municipality"
            placeholder="Informe o Municipio"
          />
          <Input label="Cavalo" name="horse2" placeholder="Cavalo da Esteira" />
        </div>
        <div className={styles.rowTree}>
          <Input
            label="Representação"
            name="representation"
            placeholder="Informe a Representação"
          />
          <div className={styles.inputCheckboxContainer}>
            <Input label="Numero da Senha" name="horse2" placeholder="0" />
            <Checkbox
              label="Boi TV"
              onChange={toggleBoiTV}
              id="boiTV"
              value={ticket?.boiTV}
            />
          </div>
        </div>
        <Input
          label="Forma de Pagamento"
          name="paymentMethod"
          placeholder="Selecione"
        />
        <Input label="Valor" name="amount" placeholder="R$ 0,00" />
        <Button type="submit" label="Avançar" />
      </form>
      <div className={styles.sideListContainer}>
        <h1>Senha</h1>

        <div className={styles.listLegendContainer}>
          <div className={styles.legend}>
            <div className={styles.legendColor} />
            <span>-</span>
            <span>Não Disponível</span>
          </div>
          <Tickets size="small" />
        </div>
      </div>
    </div>
  );
};

export default page;
