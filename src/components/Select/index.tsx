import Image from "next/image";
import React, { FC } from "react";

import styles from "./index.module.scss";
import { SelectProps } from "./types";
import { ArrowDown } from "@/assets";

const Select: FC<SelectProps> = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <button>
        <p>{placeholder}</p>
        <span>
          <Image src={ArrowDown.src} alt="arrow down" height={18} width={18} />
        </span>
      </button>
    </div>
  );
};

export default Select;
