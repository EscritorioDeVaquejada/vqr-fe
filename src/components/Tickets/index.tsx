'use client';

import React, { FC, useEffect } from 'react';

import useTicketsStore from '@/store/tickets';

import styles from './index.module.scss';
import { CellProps, TicketsProps } from './types';

const Cell: FC<CellProps> = ({ ticket, selectedTicket, index, onChange }) => {
  const isSelected = ticket.id.includes(selectedTicket?.id || '');
  const selected = ticket.isSelected ? styles.listItemSelected : '';
  const newSelected = isSelected ? styles.newListItemSelected : '';

  if (isSelected) {
    // console.log({ isSelected, newSelected });
  }

  const handleSelectCell = () => {
    if (!ticket.isSelected) {
      onChange(ticket.id);
    }
  };

  return (
    <li className={`${styles.listItem} ${selected}`}>
      <button type="button" onClick={handleSelectCell}>
        {index + 1}
      </button>
    </li>
  );
};

const Tickets: FC<TicketsProps> = ({ size }) => {
  const {
    tickets,
    ticket: selectedTicket,
    getTickets,
    selectTicket,
  } = useTicketsStore();

  const isSmallList = size === 'small' ? styles.listSmall : '';

  useEffect(() => {
    getTickets().then();
  }, []);

  return (
    <ul className={`${styles.list} ${isSmallList}`}>
      {tickets.map((ticket, index) => (
        <Cell
          ticket={ticket}
          index={index}
          key={index}
          onChange={selectTicket}
          selectedTicket={selectedTicket}
        />
      ))}
    </ul>
  );
};

export default Tickets;
