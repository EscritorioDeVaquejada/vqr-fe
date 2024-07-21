import React from "react";

import styles from "./index.module.scss";
import Brand from "../Brand";

const Menu = () => {
  return (
    <nav className={styles.container}>
      <Brand size="small" />
    </nav>
  );
};

export default Menu;
