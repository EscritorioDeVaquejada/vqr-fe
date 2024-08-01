import { MouseEvent, ReactNode } from 'react';

export type ButtonProps = {
  type: 'button' | 'submit';
  label?: string;
  color?: 'primary' | 'secondary' | 'tertiary' | 'alert';
  isDisabled?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  isFullWidth?: boolean;
  width?: string;
  height?: string;
  href?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void | (() => void);
};

export type WrapperProps = ButtonProps & {
  children: ReactNode[];
};
