'use client';

import { usePathname } from 'next/navigation';
import React, { FC } from 'react';

import { Menu } from '@/components';

import styles from './index.module.scss';
import { RootLayoutProps } from './types';

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const currentPathArray = pathname.split('/');

  if (
    currentPathArray[1] === 'clients' ||
    currentPathArray[1] === 'events' ||
    currentPathArray[1] === 'login'
  ) {
    return <>{children}</>;
  }

  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <Menu />
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default RootLayout;
