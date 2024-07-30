import React, { FC } from "react";
import Image from "next/image";

import styles from "./index.module.scss";
import { BlockRed, CloseDarkBlue } from "@/assets";
import { IrreversibleProps } from "./types";
import Button from "@/components/Button";

const Confirm: FC<IrreversibleProps> = ({
  headerStatement,
  mainStatement,
  onCancel,
  onConfirm,
}) => {
  return (
    <div className={styles.container}>
      <header className={styles.headerCloseContainer}>
        <div className={styles.header}>
          <Image src={BlockRed.src} alt="icon" height={24} width={24} />
          <h4 className={styles.headerStatement}>{headerStatement}</h4>
        </div>
        <button type="button" className={styles.closeButton} onClick={onCancel}>
          <Image src={CloseDarkBlue.src} alt="icon" height={16} width={16} />
        </button>
      </header>
      <main className={styles.mainContent}>
        {mainStatement.map((statement, index) => (
          <p className={styles.statement} key={index}>
            {statement}
          </p>
        ))}
      </main>
      <footer className={styles.footer}>
        <Button
          label="Cancel"
          color="tertiary"
          type="button"
          onClick={onCancel}
        />
        <Button
          label="Confirmar"
          color="alert"
          type="button"
          onClick={onConfirm}
        />
      </footer>
    </div>
  );
};

export default Confirm;
