"use client";

import React, { FC } from "react";

import styles from "./index.module.scss";
import { CellProps } from "./types";

import tickets from "./data";

const Cell: FC<CellProps> = ({ ticket, index }) => {
  const selected = ticket.isSelected ? styles.listItemSelected : "";

  return (
    <li className={`${styles.listItem} ${selected}`}>
      <button>{index + 1}</button>
    </li>
  );
};

const Tickets = () => {
  return (
    <ul className={styles.list}>
      {tickets.map((ticket, index) => (
        <Cell ticket={ticket} index={index} key={index} />
      ))}
    </ul>
  );
};

export default Tickets;
