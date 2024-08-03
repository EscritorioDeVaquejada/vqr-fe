'use client';

import React, { ChangeEvent, FC, MouseEvent } from 'react';

import styles from './index.module.scss';
import { CheckboxProps } from './types';

const Checkbox: FC<CheckboxProps> = ({ label, id, value, onChange }) => {
  const toggleValue = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onChange();
  };

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <button
        className={`${styles.checkbox} ${value ? styles.selected : ''}`}
        onClick={toggleValue}
        id={id}
        type="button"
      />
    </div>
  );
};

export default Checkbox;
