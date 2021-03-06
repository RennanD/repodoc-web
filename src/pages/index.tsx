import Link from 'next/link';
import styles from './styles.module.scss';

import { Navbar } from '../components/Navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.content} id="home">
        <div className={styles.hero}>
          <span>Olá, seja bem vindo 👏</span>
          <h1>
            Documente suas <span>APIs</span> de forma fácil
          </h1>
          <p>
            Crie documentações de APIs de forma eficiente ou acesse as
            documentações publicas no repodoc. <br />
          </p>
          <Link href="/auth/signup">
            <a className={styles.signupButton}>Criar minha documentação</a>
          </Link>
        </div>
        <img
          className={styles.heroImage}
          src="/images/hero.svg"
          alt="Girl code"
        />
      </section>
    </div>
  );
}
