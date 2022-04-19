import styles from './styles.module.scss';

import { Header } from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';

export default function organizations(): JSX.Element {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.content}>
        <Header />
      </main>
    </div>
  );
}
