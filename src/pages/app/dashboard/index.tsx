import { FiGitBranch, FiGithub } from 'react-icons/fi';
import styles from './styles.module.scss';

import Sidebar from '../../../components/Sidebar';

export default function Dashboard(): JSX.Element {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.content}>
        <header>
          <p>
            <div className={styles.iconContainer}>
              <FiGitBranch size={20} color="#271A45" />
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, hic!
            <br />
            Eveniet officia officiis iste ad excepturi.
          </p>
          <a
            target="_blank"
            className={styles.visitGithub}
            href="https://github.com/RennanD/repodoc-web"
            rel="noreferrer"
          >
            <FiGithub />
            Visitar Repo
          </a>
        </header>

        <hr />

        <section className={styles.sectionPage}>
          <h2>Getting Started</h2>
        </section>
      </main>
    </div>
  );
}
