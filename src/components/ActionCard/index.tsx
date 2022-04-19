import Link from 'next/link';
import { ComponentType, ReactNode } from 'react';

import { IconBaseProps } from 'react-icons';
import { FiArrowRight } from 'react-icons/fi';

import styles from './styles.module.scss';

type ActionCardProps = {
  title: string;
  children: ReactNode;
  icon: ComponentType<IconBaseProps>;
};

export function ActionCard({
  title,
  children,
  icon: Icon,
}: ActionCardProps): JSX.Element {
  return (
    <li>
      <Link href="/app/organizations">
        <a className={styles.container}>
          <div className={styles.iconContainer}>
            <Icon size={20} color="#271A45" />
          </div>
          <div className={styles.cardBody}>
            <section>
              <strong className={styles.cardTitle}>{title}</strong>
              {children}
            </section>

            <div className={styles.linkContainer}>
              <p>
                Invite Members
                <FiArrowRight />
              </p>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}
