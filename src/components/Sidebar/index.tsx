import Link from 'next/link';
import { FiFolder, FiGrid, FiLogOut, FiUser } from 'react-icons/fi';
import styles from './styles.module.scss';

export default function Sidebar(): JSX.Element {
  return (
    <aside className={styles.container}>
      <div className={styles.logoContainer}>
        <a href="">
          <h1>
            repodoc <span>.</span>
          </h1>
        </a>
      </div>

      <nav>
        {/* <strong className={styles.sectionTitle}>Geral</strong> */}

        <ul className={styles.listLinks}>
          <li className={styles.listItems}>
            <Link href="/app/dashboard">
              <a className={styles.activeLink}>
                <FiGrid />
                Painel
              </a>
            </Link>
          </li>
        </ul>

        {/* <strong className={styles.sectionTitle}>Aplicação</strong> */}
        <ul className={styles.listLinks}>
          <li className={styles.listItems}>
            <Link href="/app/organizations">
              <a>
                <FiUser />
                Organizações
              </a>
            </Link>
          </li>

          <li className={styles.listItems}>
            <Link href="/app/organizations">
              <a>
                <FiFolder />
                Documentações
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <footer>
        <Link href="/app/organizations">
          <a className={styles.logOutButton}>
            <FiLogOut />
            Sair da aplicação
          </a>
        </Link>
      </footer>
    </aside>
  );
}
