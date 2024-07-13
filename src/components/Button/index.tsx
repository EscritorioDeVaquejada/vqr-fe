import React, { FC } from "react";
import { ButtonProps } from "./types";

import styles from "./index.module.scss";

const Button: FC<ButtonProps> = ({ type, label, color = "primary" }) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${
        color === "primary" ? styles.primary : ""
      }`}
    >
      {label}
    </button>
  );
};

export default Button;
