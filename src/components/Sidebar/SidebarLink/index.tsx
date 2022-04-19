import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';

import styles from './styles.module.scss';

type SidebarLinkProps = LinkProps & {
  shouldMacthExactPath?: boolean;
  children: ReactNode;
};

export function SidebarLink({
  shouldMacthExactPath = false,
  children,
  ...rest
}: SidebarLinkProps): JSX.Element {
  const { asPath } = useRouter();

  let isActive = false;

  if (
    shouldMacthExactPath &&
    (asPath === rest.href || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  if (
    !shouldMacthExactPath &&
    (asPath.startsWith(String(rest.href)) || asPath === rest.as)
  ) {
    isActive = true;
  }

  return (
    <Link href={rest.href}>
      <a className={`${styles.link} ${isActive ? styles.activeLink : ''}`}>
        {children}
      </a>
    </Link>
  );
}
