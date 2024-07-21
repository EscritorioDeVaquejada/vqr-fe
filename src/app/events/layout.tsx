"use client";

import React, { FC, useEffect } from "react";
import { usePathname } from "next/navigation";

import styles from "./layout.module.scss";
import { LayoutProps } from "./types";
import { Heading } from "@/components";

const layout: FC<LayoutProps> = ({ children, ...props }) => {
  const pathname = usePathname();
  const pathnameArray = pathname.split("/");
  const currentPath = pathnameArray[pathnameArray.length - 1];

  const getHeadingStatement = () => {
    switch (currentPath) {
      case "events": {
        return "Sistema de Gerenciamente de Vaquejadas";
      }
      case "new": {
        return "Adicione um Evento para poder gerenciar sua Vaquejada";
      }
      default: {
        return "Sistema de Gerenciamente de Vaquejadas";
      }
    }
  };

  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <Heading statement={getHeadingStatement()} />
        {currentPath === "clients" && (
          <h3 className={styles.pageDisplay}>Clientes</h3>
        )}
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default layout;
