"use client";

import React, { FC, useEffect } from "react";
import { usePathname } from "next/navigation";

import styles from "./layout.module.scss";
import { LayoutProps } from "./types";
import { Heading } from "@/components";
import useClientsStore from "@/store/clients";

const layout: FC<LayoutProps> = ({ children, ...props }) => {
  const pathname = usePathname();
  const pathnameArray = pathname.split("/");
  const currentPath = pathnameArray[pathnameArray.length - 1];
  const isEventsPage = currentPath !== "new";
  const { fetchClient, client } = useClientsStore();

  const getHeadingStatement = () => {
    switch (currentPath) {
      case "create": {
        return "Adicione um Evento para poder gerenciar sua Vaquejada";
      }
      default: {
        return "Sistema de Gerenciamente de Vaquejadas";
      }
    }
  };

  const getProfilePicture = async () => {
    if (isEventsPage) {
      await fetchClient(currentPath);
    }
  };

  useEffect(() => {
    getProfilePicture().then();
  }, []);

  console.log({ client: client?.profilePicture.src });

  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <Heading statement={getHeadingStatement()} />
        {client && (
          <div className={styles.profilePictureNameContainer}>
            <div
              className={styles.profilePicture}
              style={{ backgroundImage: `url(${client.profilePicture.src})` }}
            />
            <span className={styles.name}>{client.name}</span>
          </div>
        )}
        {isEventsPage && <h3 className={styles.pageDisplay}>Eventos</h3>}
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default layout;
