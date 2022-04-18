import Link from 'next/link';
import styles from './styles.module.scss';

export function Navbar(): JSX.Element {
  return (
    <div className={styles.container}>
      <nav>
        <Link href="/">
          <h1 className={styles.logo}>
            repodoc <span>.</span>
          </h1>
        </Link>

        <ul>
          <li>
            <Link href="/#docs">
              <a>APIs populares</a>
            </Link>
          </li>
          <li>
            <Link href="/auth/login">
              <a>Entrar</a>
            </Link>
          </li>

          <li>
            <Link href="/auth/signup">
              <a className={styles.signupButton}>Criar conta</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
