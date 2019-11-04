import React, { MouseEventHandler } from 'react';
import { css, Interpolation } from 'emotion';

const defaultStyleSheet = css({
  backgroundColor: '#313131',
  color: '#FFFFFF',
  textDecoration: 'none',
  borderRadius: 3,
  height: '35px',
  lineHeight: '35px',
  paddingLeft: 15,
  paddingRight: 15,
  display: 'inline-block',
} as Interpolation);

export function Button({ children, onClick }: { children: React.ReactNode; onClick?(): void }) {
  const handleClick: MouseEventHandler = (ev) => {
    ev.preventDefault();
    onClick && onClick();
  };

  return (
    <a href="#" onClick={handleClick} className={defaultStyleSheet}>
      {children}
    </a>
  );
}
