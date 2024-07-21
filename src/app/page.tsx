import Image from "next/image";

import styles from "./page.module.scss";
import { Menu } from "@/components";

export default function Home() {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <Menu />
      </aside>
      <main></main>
    </div>
  );
}
