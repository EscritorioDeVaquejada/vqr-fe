"use client";

import React, { FC, useEffect, useState } from "react";

import { CardProps, ClientsListProps } from "./types";
import styles from "./index.module.scss";
import useClientsStore from "@/store/clients";

const Menu = () => {
  return <div className={styles.menu}>Menu</div>;
};

const Card: FC<CardProps> = ({ client }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleOpenMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <li className={styles.cardContainer}>
      {isMenuOpen && <Menu />}
      <div className={styles.cardPictureInfoContainer}>
        <img className={styles.picture} src={client.profilePicture.src} />
        <div className={styles.cardInfo}>
          <p className={styles.name}>{client.name}</p>
          <span
            className={styles.numberOfEvents}
          >{`${client.numberOfEvents} Eventos`}</span>
        </div>
      </div>
      <button
        type="button"
        className={styles.menuButton}
        onClick={toggleOpenMenu}
      >
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
