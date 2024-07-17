"use client";

import React, { FC, useEffect } from "react";

import { CardProps, ClientsListProps } from "./types";
import styles from "./index.module.scss";
import useClientsStore from "@/store/clients";

const Card: FC<CardProps> = ({ client }) => {
  return (
    <li className={styles.cardContainer}>
      <div className={styles.cardPictureInfoContainer}>
        <img className={styles.picture} src={client.profilePicture.src} />
        <div className={styles.cardInfo}>
          <p className={styles.name}>{client.name}</p>
          <span
            className={styles.numberOfEvents}
          >{`${client.numberOfEvents} Eventos`}</span>
        </div>
      </div>
      <button type="button" className={styles.menuButton}>
        <span />
        <span />
        <span />
      </button>
    </li>
  );
};

const ClientsList: FC<ClientsListProps> = ({ clients }) => {
  const { getClients, filteredClients } = useClientsStore();

  useEffect(() => {
    getClients().then();
  }, []);

  return (
    <ul className={styles.list}>
      {filteredClients.map((client, index) => (
        <Card client={client} key={index} />
      ))}
    </ul>
  );
};

export default ClientsList;
