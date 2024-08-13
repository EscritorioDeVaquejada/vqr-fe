import React from 'react';

import { Button, Input, Tickets } from '@/components';

import styles from './page.module.scss';

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <section className={styles.headings}>
          <h1 className={styles.heading}>Vaquejada Sertao Central</h1>
          <h2 className={styles.name}>Carlos Jose da Silva Nogueira</h2>
        </section>
        <section>
          <h3 className={styles.initialQuantity}>Quantidade Inicial</h3>
          <span className={styles.quantity}>200</span>
        </section>
        <form className={styles.form}>
          <div className={styles.inputButtonContainer}>
            <Input label="Adicionar Senhas" name="addTickets" placeholder="0" />
            <Button type="submit" label="Confirmar" />
          </div>
        </form>
      </div>
      <div>
        <Tickets size="small" />
      </div>
    </div>
  );
};

export default page;
