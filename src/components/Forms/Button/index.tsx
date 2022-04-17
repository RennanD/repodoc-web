import { ButtonHTMLAttributes, ComponentType } from 'react';
import { IconBaseProps } from 'react-icons';
import { Loading } from '../../Loading';

import styles from './styles.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  icon?: ComponentType<IconBaseProps>;
}

export function Button({
  loading = false,
  type = 'button',
  children,
  icon: Icon,
}: ButtonProps): JSX.Element {
  return (
    <button className={styles.container} type={type} disabled={loading}>
      {loading ? (
        <Loading />
      ) : (
        <>
          {Icon && <Icon size={20} />}
          <span>{children}</span>
        </>
      )}
    </button>
  );
}
