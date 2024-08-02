'use client';

import React, { FC } from 'react';

import { ArrowLeft } from '@/assets';
import {
  Button,
  Checkbox,
  ErrorMessages,
  Input,
  Multi,
  Select,
  Tickets,
} from '@/components';
import { useTicketAttributeStore } from '@/store';

import { brazilState } from './data';
import styles from './page.module.scss';
import { CompletedFormProps } from './types';

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
  const {
    isCompleted,
    fields,
    errors,
    toggleIsCompleted,
    toggleBoiTV,
    handlePuller,
    handlePullerHorse,
    handleBelt,
    handleBeltHorse,
    handleMunicipality,
    handleState,
    handleRepresentation,
    handleTicketNumber,
    handlePaymentMethod,
    handleAmount,
    submitTicketAttribute,
  } = useTicketAttributeStore();

  if (isCompleted) {
    return <CompletedForm toggleIsCompleted={toggleIsCompleted} />;
  }

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={submitTicketAttribute}>
        <Multi>
          <Input
            label="Puxador"
            name="puller"
            placeholder="Informe o nome do puxador"
            onChange={handlePuller}
            value={fields.puller.value}
            errorMessage={fields.puller.invalidText}
          />
          <Input
            label="Cavalo"
            name="pullerHorse"
            placeholder="Cavalo da Puxador"
            onChange={handlePullerHorse}
            value={fields.pullerHorse.value}
            errorMessage={fields.pullerHorse.invalidText}
          />
        </Multi>
        <Multi>
          <Input
            label="Esteira"
            name="belt"
            placeholder="Nome da Esteira"
            onChange={handleBelt}
            value={fields.belt.value}
            errorMessage={fields.belt.invalidText}
          />
          <Input
            label="Cavalo"
            name="beltHorse"
            placeholder="Cavalo da Esteira"
            onChange={handleBeltHorse}
            value={fields.beltHorse.value}
            errorMessage={fields.beltHorse.invalidText}
          />
        </Multi>
        <div className={styles.quarterRow}>
          <Input
            label="Município"
            name="municipality"
            placeholder="Informe o Municipio"
            onChange={handleMunicipality}
            value={fields.municipality.value}
            errorMessage={fields.municipality.invalidText}
          />
          <Select
            placeholder="Estado"
            name="state"
            label="Estado"
            items={brazilState}
            onChange={handleState}
            errorMessage={fields.state.invalidText}
          />
        </div>
        <div className={styles.rowTree}>
          <Input
            label="Representação"
            name="representation"
            placeholder="Informe a Representação"
            onChange={handleRepresentation}
            value={fields.representation.value}
            errorMessage={fields.representation.invalidText}
          />
          <div className={styles.inputCheckboxContainer}>
            <Input
              label="Numero da Senha"
              name="ticketNumber"
              placeholder="0"
              onChange={handleTicketNumber}
              value={fields.ticketNumber.value}
              errorMessage={fields.ticketNumber.invalidText}
            />
            <Checkbox
              label="Boi TV"
              onChange={toggleBoiTV}
              id="boiTV"
              value={fields.boiTv.value}
            />
          </div>
        </div>
        <Input
          label="Forma de Pagamento"
          name="paymentMethod"
          placeholder="Selecione"
          onChange={handlePaymentMethod}
          value={fields.paymentMethod.value}
          errorMessage={fields.paymentMethod.invalidText}
        />
        <Input
          label="Valor"
          name="amount"
          placeholder="R$ 0,00"
          onChange={handleAmount}
          value={fields.amount.value}
          errorMessage={fields.amount.invalidText}
        />
        <Button type="submit" label="Avançar" />
        <ErrorMessages messages={errors} />
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
