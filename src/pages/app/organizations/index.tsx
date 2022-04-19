import { FiPlus } from 'react-icons/fi';
import styles from './styles.module.scss';

import { Header } from '../../../components/Header';
import Sidebar from '../../../components/Sidebar';
import { Banner } from '../../../components/Banner';
import { Button } from '../../../components/Forms/Button';

export default function Organizations(): JSX.Element {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.content}>
        <Header />

        <section className={styles.sectionPage}>
          <Banner title="Organizações">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam porro
            deleniti ad fuga? Eius incidunt ducimus ullam sed nemo iste veniam
            dolores assumenda labore.
          </Banner>

          <div className={styles.emptyContainer}>
            <img src="/images/orgs.svg" alt="repodoc organizations" />

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <br />
              Repudiandae nesciunt quo adipisci ipsa quis
            </p>

            <Button icon={FiPlus}>Criar organização</Button>
          </div>
        </section>
      </main>
    </div>
  );
}
