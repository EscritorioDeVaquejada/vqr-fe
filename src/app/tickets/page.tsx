import React from 'react';

import { ArrowLeft } from '@/assets';
import { Button, Search, Select, TicketsList } from '@/components';

import styles from './page.module.scss';

const page = () => {
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
        <Select placeholder="Filtrar" />
        <Search />
      </div>
      <TicketsList />
    </div>
  );
};

export default page;
