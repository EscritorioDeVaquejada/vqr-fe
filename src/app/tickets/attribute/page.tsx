"use client";

import React, { FC } from "react";

import styles from "./page.module.scss";
import { Button, Checkbox, Input, Multi, Tickets } from "@/components";
import { useTicketAttributeStore } from "@/store";
import { ArrowLeft } from "@/assets";
import { CompletedFormProps } from "./types";

const CompletedForm: FC<CompletedFormProps> = ({ toggleIsCompleted }) => {
  return (
    <div className={styles.completedFormContainer}>
      <Button
        type="button"
        color="secondary"
        icon={ArrowLeft.src}
        iconPosition="left"
        isFullWidth={false}
        width="fit-content"
        onClick={toggleIsCompleted}
      />
      <div className={styles.ticketHeadingTicketCountContainer}>
        <h1 className={styles.ticketHeading}>Senha</h1>
        <span className={styles.ticketCount}>32</span>
      </div>
      <div className={styles.gridContainer}>
        <div className={styles.sectionAside}>
          <section className={styles.section}>
            <span>Puxador</span>
            <p>FRANCISCO ANTONIO SILVA</p>
          </section>
          <section className={styles.section}>
            <span>Esteira</span>
            <p>RAIMUNDO PEREIRA FRANÇA</p>
          </section>
          <section className={styles.section}>
            <span>Municipio</span>
            <p>IMPUEIRAS</p>
          </section>
          <section className={styles.section}>
            <span>Representação</span>
            <p>PARQUE DE VAQUEJADA IMPUEIRAS CLUB</p>
          </section>
          <section className={styles.section}>
            <span>Forma de Pagamento</span>
            <p>Pix, Cartão</p>
          </section>
          <section className={styles.section}>
            <span>Valor</span>
            <p>R$ 60,00</p>
          </section>
        </div>
        <div className={styles.sectionAside}>
          <section className={styles.section}>
            <span>Puxador</span>
            <p>FRANCISCO ANTONIO SILVA</p>
          </section>
          <section className={styles.section}>
            <span>Puxador</span>
            <p>FRANCISCO ANTONIO SILVA</p>
          </section>
          <section className={styles.section}>
            <span>Puxador</span>
            <p>FRANCISCO ANTONIO SILVA</p>
          </section>
        </div>
      </div>
      <Multi>
        <Button type="button" label="Cancelar" color="tertiary" />
        <Button type="button" label="Confirmar" />
      </Multi>
    </div>
  );
};

const page = () => {
  const { toggleBoiTV, toggleIsCompleted, ticket, isCompleted } =
    useTicketAttributeStore();

  if (isCompleted) {
    return <CompletedForm toggleIsCompleted={toggleIsCompleted} />;
  }

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
          <Input label="Estado" name="state" placeholder="Selecione" />
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
        <Button type="submit" label="Avançar" onClick={toggleIsCompleted} />
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
