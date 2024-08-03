'use client';

import React from 'react';

import { ArrowLeft } from '@/assets';
import { Button, Search, Select, TicketsList } from '@/components';

import { brazilState } from './data';
import styles from './page.module.scss';

const page = () => {
  const onChangeFilter = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.filterSearchContainer}>
        <Button
          type="button"
          color="secondary"
          icon={ArrowLeft.src}
          iconPosition="left"
          isFullWidth={false}
          width="fit-content"
          href="/clients"
        />
        <Select
          placeholder="Filtrar"
          items={brazilState}
          name="test"
          onChange={onChangeFilter}
        />
        <Search />
      </div>
      <TicketsList />
    </div>
  );
};

export default page;
