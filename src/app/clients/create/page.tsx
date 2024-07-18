import React from "react";

import { Button } from "@/components";
import { ArrowLeft } from "@/assets";

import styles from "./page.module.scss";

const page = () => {
  return (
    <div className={styles.container}>
      <Button
        type="button"
        color="secondary"
        icon={ArrowLeft.src}
        iconPosition="left"
        isFullWidth={false}
      />
    </div>
  );
};

export default page;
