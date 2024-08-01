import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import styles from './index.module.scss';
import { ButtonProps, WrapperProps } from './types';

const Wrapper: FC<WrapperProps> = ({
  type,
  color = 'primary',
  isFullWidth = true,
  width,
  height,
  href,
  isDisabled,
  children,
  onClick,
}) => {
  const primary = color === 'primary' ? styles.primary : '';
  const secondary = color === 'secondary' ? styles.secondary : '';
  const tertiary = color === 'tertiary' ? styles.tertiary : '';
  const alert = color === 'alert' ? styles.alert : '';
  const fullWidth = !isFullWidth ? styles.fitContent : '';
  const disabled = isDisabled ? styles.disabled : '';

  return (
    <>
      {href ? (
        <Link
          type={type}
          className={`${styles.button} ${primary} ${secondary} ${tertiary} ${alert} ${fullWidth} ${disabled}`}
          style={{
            ...(width && { width }),
            ...(height && { height }),
          }}
          href={isDisabled ? '#' : href}
        >
          {children}
        </Link>
      ) : (
        <button
          type={type}
          className={`${styles.button} ${primary} ${secondary} ${tertiary} ${alert} ${fullWidth} ${disabled}`}
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
    {iconPosition === 'left' && icon && (
      <Image
        src={icon}
        width={24}
        height={24}
        alt="icon"
        className={styles.icon}
      />
    )}
    {label && <span className={styles.label}>{label}</span>}
    {iconPosition === 'right' && icon && (
      <Image
        src={icon}
        width={24}
        height={24}
        alt="icon"
        className={styles.icon}
      />
    )}
  </Wrapper>
);

export default Button;
