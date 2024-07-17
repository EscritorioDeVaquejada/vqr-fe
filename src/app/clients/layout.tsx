import React, { FC } from "react";

import styles from "./layout.module.scss";
import { LayoutProps } from "./types";
import { Brand } from "@/components";

const layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <div className={styles.brandHeadingContainer}>
          <Brand />
          <h2 className={styles.heading}>
            Sistema de Gerenciamente de Vaquejadas
          </h2>
        </div>
        <h3 className={styles.pageDisplay}>Clientes</h3>
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default layout;
