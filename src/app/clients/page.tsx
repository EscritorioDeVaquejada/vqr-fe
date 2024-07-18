import React from "react";

import { Button, ClientsList, Search } from "@/components";

import styles from "./page.module.scss";
import clients from "../../store/clients/data";
import { PlusCircle } from "@/assets";

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
        />
      </div>
      <ClientsList clients={clients} />
    </div>
  );
};

export default page;
