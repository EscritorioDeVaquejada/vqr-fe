'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, useEffect, useState } from 'react';

import { CloseWhite } from '@/assets';
import { Brand, Button } from '@/components';

import MenuItems from './data';
import styles from './index.module.scss';
import { MenuListItemProps, MenuListProps } from './types';

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
        isSelected ? styles.menuItemSelected : ''
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
  const pathname = usePathname();

  const [currentItem, setCurrentItem] = useState<number | undefined>(undefined);

  const selectItem = (index: number) => {
    setCurrentItem(index);
  };

  useEffect(() => {
    switch (pathname) {
      case '/': {
        selectItem(0);
        break;
      }
      case '/tickets/manage': {
        selectItem(1);
        break;
      }
      case '/tickets/attribute': {
        selectItem(2);
        break;
      }
      case '/tickets': {
        selectItem(3);
        break;
      }
      case '/user/register': {
        selectItem(4);
        break;
      }
      case '/budget': {
        selectItem(5);
        break;
      }
    }
  }, [pathname]);

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
          href="/end-event"
        />
      </div>
    </nav>
  );
};

export default Menu;
