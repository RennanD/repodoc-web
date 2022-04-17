import styles from './styles.module.scss';

export function Loading(): JSX.Element {
  return (
    <div className={styles['lds-ring']}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
}
