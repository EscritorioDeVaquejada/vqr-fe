"use client";

import React, { FC, useEffect, useState } from "react";
import Link from "next/link";

import { CardProps, EventsListProps, MenuProps } from "./types";
import styles from "./index.module.scss";

import { useEventsStore } from "@/store";

const Menu: FC<MenuProps> = ({ event }) => {
  // const { selectClient } = useEventsStore();

  return (
    <div className={styles.menu}>
      <Link href={`/events/${event.id}`}>Evento</Link>
    </div>
  );
};

const Card: FC<CardProps> = ({ event }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleOpenMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <li className={styles.cardContainer}>
      {isMenuOpen && <Menu event={event} />}
      <div className={styles.cardInfo}>
        <p className={styles.name}>{event.name}</p>
        <span className={styles.numberOfEvents}>{event.date}</span>
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

const EventsList: FC<EventsListProps> = ({ events }) => {
  const { getEvents, filteredEvents } = useEventsStore();

  useEffect(() => {
    getEvents().then();
  }, []);

  return (
    <ul className={styles.list}>
      {filteredEvents.map((event, index) => (
        <Card event={event} key={index} />
      ))}
    </ul>
  );
};

export default EventsList;
