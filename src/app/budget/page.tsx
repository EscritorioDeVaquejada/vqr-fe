import React, { FC } from "react";
import Image from "next/image";

import { Currency } from "@/utils";

import styles from "./page.module.scss";
import { soldWithBonus, ticketsSold } from "./data";
import { PaymentMethodProps } from "./types";

const PaymentMethod: FC<PaymentMethodProps> = ({ ticket }) => {
  return (
    <div className={styles.paymentMethodContainer}>
      <div className={styles.paymentMethodIcon}>
        <Image src={ticket.icon} alt="icon" height={32} width={32} />
      </div>
      <div className={styles.paymentMethodContent}>
        <h4 className={styles.name}>{ticket.name}</h4>
        <span className={styles.quantity}>{ticket.quantity}</span>
        <span className={styles.amount}>
          {Currency.numberToCurrency(ticket.amount)}
        </span>
      </div>
    </div>
  );
};

const page = () => {
  return (
    <div className={styles.container}>
      <section className={styles.paymentMethodsHeadingContainer}>
        <h2 className={styles.paymentMethodsHeading}>Senhas Vendidas</h2>
        <div className={styles.paymentMethodsRow}>
          {ticketsSold.map((ticket) => (
            <PaymentMethod ticket={ticket} />
          ))}
        </div>
      </section>
      <section className={styles.paymentMethodsHeadingContainer}>
        <div className={styles.headingSubtitleContainer}>
          <h2 className={styles.paymentMethodsHeading}>
            Vendas por Bonificação
          </h2>
          <h3>Bonificação do Evento</h3>
        </div>
        <div className={styles.paymentMethodsColumn}>
          {soldWithBonus.map((ticket) => (
            <PaymentMethod ticket={ticket} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
