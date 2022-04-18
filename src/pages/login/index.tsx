import { useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import { FiCheck, FiLock, FiUser } from 'react-icons/fi';

import { Button } from '../../components/Forms/Button';
import { TextInput } from '../../components/Forms/TextInput';
import { Navbar } from '../../components/Navbar';

import styles from './styles.module.scss';

export default function Login(): JSX.Element {
  const formRef = useRef<FormHandles>(null);

  const [loading, setLoading] = useState(false);

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
            <a href="/signup">Crie agora uma conta.</a>
          </span>
        </div>

        <Form
          className={styles.form}
          ref={formRef}
          onSubmit={data => console.log(data)}
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
