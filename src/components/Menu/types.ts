export type MenuItem = {
  label: string;
  icon: string;
  iconSelected: string;
  href: string;
};

export type MenuListProps = {
  items: MenuItem[];
};

export type MenuListItemProps = {
  item: MenuItem;
  index: number;
  selectItem: (index: number) => void;
  currentItem: number | undefined;
};
