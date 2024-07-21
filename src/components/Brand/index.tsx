import React from "react";

import Logo from "@/assets/logo.jpg";

import styles from "./index.module.scss";

const Brand = () => {
  return (
    <div className={styles.logoBrand}>
      <img src={Logo.src} />
      <h1 className={styles.brand}>VQR</h1>
    </div>
  );
};

export default Brand;
