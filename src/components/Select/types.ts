export type Item = {
  label: string;
  value: string;
};

export type SelectProps = {
  placeholder: string;
  name: string;
  label?: string;
  width?: string;
  items: Item[];
  errorMessage?: string;
  onChange: (data: any) => void;
};
