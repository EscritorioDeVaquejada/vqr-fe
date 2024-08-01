import React from 'react';

import { PlusCircle } from '@/assets';
import { Button, ClientsList, Search } from '@/components';
import clients from '@/store/clients/data';

import styles from './page.module.scss';

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.searchAddContainer}>
        <Search />
        <Button
          label="Adicionar Cliente"
          type="button"
          icon={PlusCircle.src}
          iconPosition="left"
          width="17rem"
          href="/clients/create"
        />
      </div>
      <ClientsList clients={clients} />
    </div>
  );
};

export default page;
