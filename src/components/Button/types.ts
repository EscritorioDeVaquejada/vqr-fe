import { ReactNode } from "react";

export type ButtonProps = {
  type: "button" | "submit";
  label?: string;
  color?: "primary" | "secondary";
  isDisabled?: boolean;
  icon?: string;
  iconPosition?: "left" | "right";
  isFullWidth?: boolean;
};
