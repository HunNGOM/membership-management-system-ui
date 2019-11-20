import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { cx } from 'emotion';

export const ApplicationMenuItem: React.FunctionComponent<{ href: string }> = ({ children, href }) => {
  const routeMatch = useRouteMatch({
    path: href,
  });
  const hrefIsNotEmpty = href !== '';
  const isSelected = routeMatch != null && hrefIsNotEmpty;

  return (
    <li className={cx('py-4 my-1 px-8 -mx-4', isSelected && 'bg-blue-300 text-black')} aria-selected={isSelected}>
      <Link to={href}>{children}</Link>
    </li>
  );
};
