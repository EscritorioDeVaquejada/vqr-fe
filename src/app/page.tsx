import { Tickets } from '@/components';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Nome do Evento</h1>
      <Tickets />
    </div>
  );
}
