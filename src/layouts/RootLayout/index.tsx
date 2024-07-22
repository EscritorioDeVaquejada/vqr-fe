"use client";

import { Menu } from "@/components";
import React, { FC } from "react";

import styles from "./index.module.scss";
import { RootLayoutProps } from "./types";
import { usePathname } from "next/navigation";

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const currentPathArray = pathname.split("/");

  if (
    currentPathArray[1] === "clients" ||
    currentPathArray[1] === "events" ||
    currentPathArray[1] === "login"
  ) {
    return <>{children}</>;
  }

  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <Menu />
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default RootLayout;
