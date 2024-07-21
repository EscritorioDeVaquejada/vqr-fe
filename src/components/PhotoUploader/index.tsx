import React from "react";

import styles from "./index.module.scss";
import { PhotoPlus } from "@/assets";

const PhotoUploader = () => {
  return (
    <button className={styles.uploader}>
      <img src={PhotoPlus.src} />
    </button>
  );
};

export default PhotoUploader;
