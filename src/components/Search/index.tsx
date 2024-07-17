"use client";

import useClientsStore from "@/store/clients";
import React, { ChangeEvent } from "react";

const Search = () => {
  const { filterClients } = useClientsStore();

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    filterClients(event.currentTarget.value);
  };

  return (
    <div>
      <input type="text" onChange={handleSearch} />
    </div>
  );
};

export default Search;
