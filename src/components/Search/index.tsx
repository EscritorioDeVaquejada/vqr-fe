'use client';
import React, { ChangeEvent } from 'react';

import { Search as SearchSVG } from '@/assets';
import { useClientsStore } from '@/store';

import styles from './index.module.scss';

const Search = () => {
  const { filterClients } = useClientsStore();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    filterClients(event.currentTarget.value);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.input}
        onChange={handleSearch}
        placeholder="Buscar"
      />
      <button className={styles.searchButton}>
        <img src={SearchSVG.src} />
      </button>
    </div>
  );
};

export default Search;
