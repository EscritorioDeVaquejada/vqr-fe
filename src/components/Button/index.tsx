import React, { FC } from "react";
import { ButtonProps } from "./types";

import styles from "./index.module.scss";

const Button: FC<ButtonProps> = ({
  type,
  label,
  color = "primary",
  icon,
  iconPosition,
  isFullWidth = true,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${color === "primary" ? styles.primary : ""}
      ${color === "secondary" ? styles.secondary : ""}
      ${!isFullWidth ? styles.fitContent : ""}`}
    >
      {iconPosition === "left" && <img src={icon} className={styles.icon} />}
      {label && <span className={styles.label}>{label}</span>}
      {iconPosition === "right" && <img src={icon} className={styles.icon} />}
    </button>
  );
};

export default Button;
