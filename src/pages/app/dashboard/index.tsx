import { FiUsers } from 'react-icons/fi';

import styles from './styles.module.scss';

import Sidebar from '../../../components/Sidebar';
import { Header } from '../../../components/Header';
import { ActionCard } from '../../../components/ActionCard';

export default function Dashboard(): JSX.Element {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.content}>
        <Header />

        <section className={styles.sectionPage}>
          <h2>Getting Started</h2>

          <ul>
            <ActionCard icon={FiUsers} title="Try your login">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                <br />
                quod atque porro qui amet.
              </p>
            </ActionCard>
          </ul>
        </section>
      </main>
    </div>
  );
}
