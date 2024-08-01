'use client';

import React from 'react';

import { PlusCircle } from '@/assets';
import { Button, EventsList, Search } from '@/components';
import events from '@/store/events/data';

import styles from './page.module.scss';
import { PageProps } from './types';

const page = ({ params }: PageProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.searchAddContainer}>
        <Search />
        <Button
          label="Adicionar Evento"
          type="button"
          icon={PlusCircle.src}
          iconPosition="left"
          width="17rem"
          href="/events/create"
        />
      </div>
      <EventsList events={events} />
    </div>
  );
};

export default page;
