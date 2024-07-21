import React, { FC } from "react";

import Logo from "@/assets/logo.jpg";

import styles from "./index.module.scss";
import { BrandProps } from "./types";

const Brand: FC<BrandProps> = ({ size = "medium" }) => {
  const small = size === "small" ? styles.small : "";
  const medium = size === "medium" ? styles.medium : "";
  const large = size === "large" ? styles.large : "";

  return (
    <div className={`${styles.logoBrand} ${small} ${medium} ${large}`}>
      <img src={Logo.src} />
      <h1 className={styles.brand}>VQR</h1>
    </div>
  );
};

export default Brand;
