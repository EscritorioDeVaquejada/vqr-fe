import React, { FC } from "react";

import { Brand } from "@/components";

import styles from "./index.module.scss";
import { HeadingProps } from "./types";

const Heading: FC<HeadingProps> = ({ statement }) => {
  return (
    <div className={styles.brandHeadingContainer}>
      <Brand size="medium" />
      <h2 className={styles.heading}>{statement}</h2>
    </div>
  );
};

export default Heading;
