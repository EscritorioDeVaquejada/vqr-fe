"use client";

import React, { FC, useEffect } from "react";

import styles from "./index.module.scss";
import { CellProps, TicketsProps } from "./types";

import useTicketsStore from "@/store/tickets";

const Cell: FC<CellProps> = ({ ticket, index }) => {
  const selected = ticket.isSelected ? styles.listItemSelected : "";

  return (
    <li className={`${styles.listItem} ${selected}`}>
      <button>{index + 1}</button>
    </li>
  );
};

const Tickets: FC<TicketsProps> = ({ size }) => {
  const { tickets, getTickets } = useTicketsStore();

  const isSmallList = size === "small" ? styles.listSmall : "";

  useEffect(() => {
    getTickets().then();
  }, []);

  return (
    <ul className={`${styles.list} ${isSmallList}`}>
      {tickets.map((ticket, index) => (
        <Cell ticket={ticket} index={index} key={index} />
      ))}
    </ul>
  );
};

export default Tickets;
