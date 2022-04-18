import { useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { FiCheck, FiLock, FiUser } from 'react-icons/fi';

import Link from 'next/link';
import { toast } from 'react-toastify';
import { Button } from '../../../components/Forms/Button';
import { TextInput } from '../../../components/Forms/TextInput';
import { Navbar } from '../../../components/Navbar';

import styles from './styles.module.scss';
import { useAuth } from '../../../hooks/auth';

type SignInFormData = {
  email: string;
  password: string;
};

export default function Login(): JSX.Element {
  const formRef = useRef<FormHandles>(null);
  const { singIn } = useAuth();

  const [loading, setLoading] = useState(false);

  async function handleSignIn({ email, password }: SignInFormData) {
    setLoading(true);

    try {
      await singIn({ email, password });
    } catch (error) {
      toast('Não foi possível realizar o login');
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <section className={styles.content}>
        <div className={styles.hero}>
          <img src="/images/login.svg" alt="Sing Up Pic" />
          <h1>Acessar o repodoc 🗂</h1>
          <p>
            Acesse sua conta no repodoc, veja as suas organizações, acesse ou
            crie documentações de API.
            <br />
          </p>
          <span>
            Ainda não possui cadastro?{' '}
            <Link href="/auth/signup">
              <a>Crie agora uma conta.</a>
            </Link>
          </span>
        </div>

        <Form
          className={styles.form}
          ref={formRef}
          onSubmit={data => handleSignIn(data)}
        >
          <h1>Formulário de login</h1>

          <TextInput
            name="email"
            label="E-mail"
            id="email"
            type="email"
            placeholder="email@exemplo.com"
            icon={FiUser}
          />
          <TextInput
            name="password"
            label="Senha"
            id="password"
            icon={FiLock}
            placeholder="********"
            type="password"
          />

          <br />

          <Button type="submit" icon={FiCheck} loading={loading}>
            Entrar
          </Button>
        </Form>
      </section>
    </div>
  );
}
