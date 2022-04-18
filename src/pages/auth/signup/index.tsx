import { useRef, useState } from 'react';

import { FiMail, FiUser, FiLock, FiCheck } from 'react-icons/fi';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { toast } from 'react-toastify';

import Link from 'next/link';
import styles from './styles.module.scss';

import { TextInput } from '../../../components/Forms/TextInput';
import { Navbar } from '../../../components/Navbar';
import { Button } from '../../../components/Forms/Button';
import { api } from '../../../services/api';

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
};

export default function SignUp(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

  async function handleSignUp({ email, name, password }: SignUpFormData) {
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
            <Link href="/auth/login">
              <a>clicando aqui</a>
            </Link>
          </span>
        </div>

        <Form
          className={styles.form}
          ref={formRef}
          onSubmit={data => handleSignUp(data)}
        >
          <h1>Formulário de cadastro</h1>

          <TextInput
            name="name"
            label="Nome"
            id="name"
            icon={FiMail}
            placeholder="Nome completo..."
          />
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
            Criar conta
          </Button>
        </Form>
      </section>
    </div>
  );
}
