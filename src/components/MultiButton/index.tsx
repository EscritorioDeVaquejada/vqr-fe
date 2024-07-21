import React, { FC } from "react";

import styles from "./index.module.scss";
import { MultiButtonProps } from "./types";

const MultiButton: FC<MultiButtonProps> = ({ children }) => {
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

export default MultiButton;
