import styles from './styles.module.scss';

type BannerProps = {
  title: string;
  children: string;
};

export function Banner({ children, title }: BannerProps): JSX.Element {
  return (
    <div className={styles.banner}>
      <div>
        <h2 className={styles.bannerTitle}>{title}</h2>
        <p className={styles.bannerText}>{children}</p>
      </div>
    </div>
  );
}
