import React, { FC } from 'react';

import styles from './layout.module.scss';
import { LayoutProps } from './type';

const layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <main>{children}</main>
      <aside className={styles.aside} />
    </div>
  );
};

export default layout;
