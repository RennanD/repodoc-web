import Link from 'next/link';
import { FiFolder, FiGrid, FiLogOut, FiUsers } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { SidebarLink } from './SidebarLink';
import styles from './styles.module.scss';

export default function Sidebar(): JSX.Element {
  const { signOut } = useAuth();

  return (
    <aside className={styles.container}>
      <div className={styles.logoContainer}>
        <Link href="/app/dashboard">
          <a>
            <h1>
              repodoc <span>.</span>
            </h1>
          </a>
        </Link>
      </div>

      <nav>
        <ul className={styles.listLinks}>
          <li className={styles.listItems}>
            <SidebarLink href="/app/dashboard">
              <FiGrid />
              Painel
            </SidebarLink>
          </li>
        </ul>

        <ul className={styles.listLinks}>
          <li className={styles.listItems}>
            <SidebarLink href="/app/organizations">
              <FiUsers />
              Organizações
            </SidebarLink>
          </li>

          <li className={styles.listItems}>
            <SidebarLink href="/app/documentations">
              <FiFolder />
              Documentações
            </SidebarLink>
          </li>
        </ul>
      </nav>

      <footer>
        <button type="button" onClick={signOut} className={styles.logOutButton}>
          <FiLogOut />
          Sair da aplicação
        </button>
      </footer>
    </aside>
  );
}
