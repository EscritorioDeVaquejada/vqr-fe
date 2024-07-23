import { HTMLInputTypeAttribute } from "react";

export type InputProps = {
  type?: HTMLInputTypeAttribute;
  label?: string;
  id?: string;
  placeholder?: string;
  name: string;
  value?: string;
  onChange?: any;
  hint?: string;
};
