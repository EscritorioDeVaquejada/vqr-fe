"use client";

import React, { FC, useState } from "react";

import { Brand, Button } from "@/components";

import styles from "./index.module.scss";
import { MenuListItemProps, MenuListProps } from "./types";
import MenuItems from "./data";
import Link from "next/link";
import Image from "next/image";
import { CloseWhite } from "@/assets";

const MenuListItem: FC<MenuListItemProps> = ({
  index,
  item,
  selectItem,
  currentItem,
}) => {
  const isSelected = index === currentItem;
  return (
    <li
      key={index}
      onClick={() => selectItem(index)}
      className={`${styles.menuItem} ${
        isSelected ? styles.menuItemSelected : ""
      }`}
    >
      <Link href={item.href}>
        <Image
          src={isSelected ? item.iconSelected : item.icon}
          alt="icon"
          width={28}
          height={28}
        />
        <span> {item.label}</span>
      </Link>
    </li>
  );
};

const MenuList: FC<MenuListProps> = ({ items }) => {
  const [currentItem, setCurrentItem] = useState<number | undefined>(undefined);

  const selectItem = (index: number) => {
    setCurrentItem(index);
  };

  return (
    <ul className={styles.menuList}>
      {items.map((item, index) => (
        <MenuListItem
          key={index}
          index={index}
          item={item}
          selectItem={selectItem}
          currentItem={currentItem}
        />
      ))}
    </ul>
  );
};

const Menu = () => {
  return (
    <nav className={styles.container}>
      <Brand size="small" borderPositon="bottom" />
      <MenuList items={MenuItems} />
      <div className={styles.endSessionContainer}>
        <Button
          color="alert"
          label="Encerrar Evento"
          type="button"
          icon={CloseWhite.src}
          iconPosition="left"
          width="100%"
        />
      </div>
    </nav>
  );
};

export default Menu;
