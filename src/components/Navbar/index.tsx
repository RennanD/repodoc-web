import Link from 'next/link';
import styles from './styles.module.scss';

export function Navbar(): JSX.Element {
  return (
    <div className={styles.container}>
      <nav>
        <h1 className={styles.logo}>
          repodoc <span>.</span>
        </h1>

        <ul>
          <li>
            <a href="#docs">APIs populares</a>
          </li>
          <li>
            <Link href="/login">
              <a>Entrar</a>
            </Link>
          </li>

          <li>
            <Link href="/signup">
              <a className={styles.signupButton}>Criar conta</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
