import React, { FC } from "react";

import styles from "./index.module.scss";
import { MultiProps } from "./types";

const Multi: FC<MultiProps> = ({ children }) => {
  const numberOfButtons = children.length;

  return (
    <div
      className={styles.container}
      style={{ gridTemplateColumns: `repeat(${numberOfButtons}, 1fr)` }}
    >
      {children}
    </div>
  );
};

export default Multi;
