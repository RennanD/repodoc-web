import styles from './styles.module.scss';

import Sidebar from '../../../components/Sidebar';

export default function Dashboard(): JSX.Element {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main>
        <h1>Dashboard</h1>
      </main>
    </div>
  );
}
