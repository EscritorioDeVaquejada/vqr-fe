"use client";

import React, { FC, useEffect } from "react";
import { usePathname } from "next/navigation";

import styles from "./layout.module.scss";
import { LayoutProps } from "./types";
import { Brand, Heading } from "@/components";

const layout: FC<LayoutProps> = ({ children, ...props }) => {
  const pathname = usePathname();
  const pathnameArray = pathname.split("/");
  const currentPath = pathnameArray[pathnameArray.length - 1];

  const getHeadingStatement = () => {
    switch (currentPath) {
      case "clients": {
        return "Sistema de Gerenciamente de Vaquejadas";
      }
      case "create": {
        return "Realize o Cadastro do Cliente para poder Gerenciar seus eventos.";
      }
      default: {
        return "Sistema de Gerenciamente de Vaquejadas";
      }
    }
  };

  const getSubHeading = () => {};

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
