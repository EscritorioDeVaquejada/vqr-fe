'use client';

import React, { ChangeEvent, FC, useState } from 'react';

import { Hide } from '@/assets';

import styles from './index.module.scss';
import { InputProps } from './types';

const Input: FC<InputProps> = ({
  type = 'text',
  label,
  id,
  placeholder,
  name,
  onChange,
  hint,
}) => {
  const [localType, setLocalType] = useState(type);

  const togglePasswordVisibility = () => {
    setLocalType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    const field = {
      [name]: value,
    };

    onChange(field);
  };

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={styles.inputHintContainer}>
        <div className={styles.inputHide}>
          <input
            type={localType}
            id={id}
            className={styles.input}
            placeholder={placeholder}
            onChange={handleOnChange}
          />
          {type === 'password' && (
            <button
              className={styles.hide}
              type="button"
              onClick={togglePasswordVisibility}
            >
              <img src={Hide.src} />
            </button>
          )}
        </div>
        {hint && <p className={styles.hint}>{hint}</p>}
      </div>
    </div>
  );
};

export default Input;
