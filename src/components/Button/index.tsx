import React, { FC } from "react";
import Link from "next/link";
import { ButtonProps, WrapperProps } from "./types";

import styles from "./index.module.scss";

const Wrapper: FC<WrapperProps> = ({
  type,
  color = "primary",
  isFullWidth = true,
  width,
  href,
  children,
  onClick,
}) => (
  <>
    {href ? (
      <Link
        type={type}
        className={`${styles.button} ${
          color === "primary" ? styles.primary : ""
        }${color === "secondary" ? styles.secondary : ""}${
          !isFullWidth ? styles.fitContent : ""
        }`}
        style={{
          ...(width && { width }),
        }}
        href={href}
      >
        {children}
      </Link>
    ) : (
      <button
        type={type}
        className={`${styles.button} ${
          color === "primary" ? styles.primary : ""
        }${color === "secondary" ? styles.secondary : ""}${
          !isFullWidth ? styles.fitContent : ""
        }`}
        style={{
          ...(width && { width }),
        }}
        onClick={onClick}
      >
        {children}
      </button>
    )}
  </>
);

const Button: FC<ButtonProps> = ({ label, icon, iconPosition, ...rest }) => (
  <Wrapper icon={icon} iconPosition={iconPosition} label={label} {...rest}>
    {iconPosition === "left" && <img src={icon} className={styles.icon} />}
    {label && <span className={styles.label}>{label}</span>}
    {iconPosition === "right" && <img src={icon} className={styles.icon} />}
  </Wrapper>
);

export default Button;
