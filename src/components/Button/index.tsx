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
  isDisabled,
  children,
  onClick,
}) => {
  const primary = color === "primary" ? styles.primary : "";
  const secondary = color === "secondary" ? styles.secondary : "";
  const tertiary = color === "tertiary" ? styles.tertiary : "";
  const fullWidth = !isFullWidth ? styles.fitContent : "";
  const disabled = isDisabled ? styles.disabled : "";

  return (
    <>
      {href ? (
        <Link
          type={type}
          className={`${styles.button} ${primary} ${secondary} ${tertiary} ${fullWidth} ${disabled}`}
          style={{
            ...(width && { width }),
          }}
          href={isDisabled ? "#" : href}
        >
          {children}
        </Link>
      ) : (
        <button
          type={type}
          className={`${styles.button} ${primary} ${secondary} ${tertiary} ${fullWidth} ${disabled}`}
          style={{
            ...(width && { width }),
          }}
          onClick={onClick}
          disabled={isDisabled}
        >
          {children}
        </button>
      )}
    </>
  );
};

const Button: FC<ButtonProps> = ({ label, icon, iconPosition, ...rest }) => (
  <Wrapper icon={icon} iconPosition={iconPosition} label={label} {...rest}>
    {iconPosition === "left" && <img src={icon} className={styles.icon} />}
    {label && <span className={styles.label}>{label}</span>}
    {iconPosition === "right" && <img src={icon} className={styles.icon} />}
  </Wrapper>
);

export default Button;
