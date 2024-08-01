import React from 'react';

import { PhotoPlus } from '@/assets';

import styles from './index.module.scss';

const PhotoUploader = () => {
  return (
    <button className={styles.uploader}>
      <img src={PhotoPlus.src} />
    </button>
  );
};

export default PhotoUploader;
