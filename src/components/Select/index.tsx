'use client';

import Image from 'next/image';
import React, { FC, useState } from 'react';

import { ArrowDown } from '@/assets';

import styles from './index.module.scss';
import { Item, SelectProps } from './types';

const Select: FC<SelectProps> = ({
  placeholder,
  name,
  label,
  width,
  items,
  errorMessage,
  onChange,
}) => {
  const noLabelList = label ? '' : styles.noLabelList;

  const [isListOpen, setIsListOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<Item | undefined>();

  const toggleList = () => {
    setIsListOpen((prev) => !prev);
  };

  const handleSelect = (item: Item) => {
    onChange({ [name]: item.value });
    setSelectedItem(item);
    toggleList();
  };

  return (
    <div className={styles.container} style={{ ...(width && { width }) }}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.selectContainer}>
        <button type="button" onClick={toggleList}>
          <p className={styles.selectedItem}>
            {selectedItem ? selectedItem.label : placeholder}
          </p>
          <span>
            <Image
              src={ArrowDown.src}
              alt="arrow down"
              height={18}
              width={18}
            />
          </span>
        </button>
      </div>
      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      {isListOpen && (
        <ul className={`${styles.list} ${noLabelList}`}>
          {items.map((item, index) => (
            <li key={index}>
              <button type="button" onClick={() => handleSelect(item)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
