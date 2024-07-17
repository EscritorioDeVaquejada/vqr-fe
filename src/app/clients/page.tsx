import React from "react";

import { ClientsList, Search } from "@/components";

import styles from "./page.module.scss";
import clients from "../../store/clients/data";

const page = () => {
  return (
    <div className={styles.container}>
      <Search />
      <ClientsList clients={clients} />
    </div>
  );
};

export default page;
