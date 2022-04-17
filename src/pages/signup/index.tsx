import { FiMail, FiUser, FiLock, FiCheck } from 'react-icons/fi';

import styles from './styles.module.scss';

import { TextInput } from '../../components/Forms/TextInput';
import { Navbar } from '../../components/Navbar';
import { Button } from '../../components/Forms/Button';

export default function SignUp(): JSX.Element {
  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.content}>
        <div className={styles.hero}>
          <img src="/images/signup.svg" alt="Sing Up Pic" />
          <h1>Criar minha conta 📚</h1>
          <p>
            Para ter acesso a criação de documentações para as suas APIs e ter
            acesso a documentações privadas, crie uma conta no repodoc.
            <br />
          </p>
          <span>
            Já possui conta? Realize seu login{' '}
            <a href="/login">clicando aqui</a>
          </span>
        </div>

        <form className={styles.form}>
          <h1>Formulário de cadastro</h1>

          <TextInput
            label="Nome"
            id="name"
            icon={FiMail}
            placeholder="Nome completo..."
          />
          <TextInput
            label="E-mail"
            id="email"
            type="email"
            placeholder="email@exemplo.com"
            icon={FiUser}
          />
          <TextInput
            label="Senha"
            id="password"
            icon={FiLock}
            placeholder="********"
          />

          <br />

          <Button icon={FiCheck}>Criar conta</Button>
        </form>
      </section>
    </div>
  );
}
