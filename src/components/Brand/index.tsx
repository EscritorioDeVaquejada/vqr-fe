import React, { FC } from 'react';

import Logo from '@/assets/logo.jpg';

import styles from './index.module.scss';
import { BrandProps } from './types';

const Brand: FC<BrandProps> = ({ size = 'medium', borderPositon }) => {
  const small = size === 'small' ? styles.small : '';
  const medium = size === 'medium' ? styles.medium : '';
  const large = size === 'large' ? styles.large : '';

  const getBorderPosition = () => {
    switch (borderPositon) {
      case 'top': {
        return styles.borderTop;
      }
      case 'left': {
        return styles.borderLeft;
      }
      case 'bottom': {
        return styles.borderBottom;
      }
      case 'right': {
        return styles.borderRight;
      }
      case undefined: {
        return '';
      }
    }
  };

  return (
    <div
      className={`${
        styles.logoBrand
      } ${small} ${medium} ${large} ${getBorderPosition()}`}
    >
      <img src={Logo.src} />
      <h1 className={styles.brand}>VQR</h1>
    </div>
  );
};

export default Brand;
