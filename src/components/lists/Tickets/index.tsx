'use client';

import React, { FC, useEffect } from 'react';

import { useTicketsStore } from '@/store';

import styles from './index.module.scss';
import { CellProps } from './types';

const Cell: FC<CellProps> = ({ ticket, index }) => {
  console.log({ ticket });
  return (
    <div className={styles.cell}>
      <span
        className={`${styles.ticketNumber} ${
          ticket.isFree ? styles.freeTicketNumber : ''
        }`}
      >
        {index + 1}
      </span>
      <div className={styles.ticketContent}>
        <div
          className={`${styles.names} ${ticket.isFree ? styles.namesFree : ''}`}
        >
          {ticket.isFree ? (
            'SENHA LIVRE'
          ) : (
            <>
              <p className={styles.name}>{ticket.p}</p>
              <p className={styles.name}>{ticket.e}</p>
              <p className={styles.name}>{ticket.r}</p>
            </>
          )}
        </div>
        {!ticket.isFree && (
          <div className={styles.menu}>
            <button type="button">
              <span />
              <span />
              <span />
            </button>
            <div className={styles.line} />
          </div>
        )}
      </div>
    </div>
  );
};

const TicketList = () => {
  const { tickets, getTickets } = useTicketsStore();

  useEffect(() => {
    getTickets().then();
  }, []);

  return (
    <div className={styles.list}>
      {tickets.map((ticket, index) => (
        <Cell ticket={ticket} index={index} />
      ))}
    </div>
  );
};

export default TicketList;
