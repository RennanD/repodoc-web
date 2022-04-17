import { FiMail, FiUser, FiLock, FiCheck } from 'react-icons/fi';

import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import styles from './styles.module.scss';

import { TextInput } from '../../components/Forms/TextInput';
import { Navbar } from '../../components/Navbar';
import { Button } from '../../components/Forms/Button';
import { api } from '../../services/api';

export default function SignUp(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSignUp(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    try {
      await api.post('/users', { name, email, password });
      toast('Conta criada com sucesso', {
        theme: 'colored',
        type: 'success',
      });
    } catch ({ response }) {
      toast(response.data.error, {
        theme: 'colored',
        type: 'error',
      });
      console.log(response);
    } finally {
      setLoading(false);
    }
  }

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

        <form className={styles.form} onSubmit={handleSignUp}>
          <h1>Formulário de cadastro</h1>

          <TextInput
            label="Nome"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            icon={FiMail}
            placeholder="Nome completo..."
          />
          <TextInput
            label="E-mail"
            id="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="email@exemplo.com"
            icon={FiUser}
          />
          <TextInput
            label="Senha"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            icon={FiLock}
            placeholder="********"
            type="password"
          />

          <br />

          <Button type="submit" icon={FiCheck} loading={loading}>
            Criar conta
          </Button>
        </form>
      </section>
    </div>
  );
}
