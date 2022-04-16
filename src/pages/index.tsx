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
            documentações publicas do repodoc <br />
          </p>
          {/* <SubscribeButton priceId={product.priceId} /> */}
        </div>
        <img src="/images/avatar.svg" alt="Girl code" />
      </section>
    </div>
  );
}
