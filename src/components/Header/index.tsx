import { FiGitBranch, FiGithub } from 'react-icons/fi';

import styles from './styles.module.scss';

export function Header(): JSX.Element {
  return (
    <header className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.iconContainer}>
          <FiGitBranch size={20} color="#271A45" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, hic!
          <br />
          Eveniet officia officiis iste ad excepturi.
        </p>
      </div>

      <a
        target="_blank"
        className={styles.visitGithub}
        href="https://github.com/RennanD/repodoc-web"
        rel="noreferrer"
      >
        <FiGithub />
        Visitar Repositório
      </a>
    </header>
  );
}
