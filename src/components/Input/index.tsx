import React, { FC } from "react";

import styles from "./index.module.scss";
import { InputProps } from "./types";

const Input: FC<InputProps> = ({ type = "text", label, id, placeholder }) => {
  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
