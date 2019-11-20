import React, { MouseEventHandler } from 'react';
import { cx } from 'emotion';

type ButtonType = 'primary' | 'secondary';

type Props = { type: ButtonType; children: React.ReactNode; onClick?(): void };

export function Button({ type, children, onClick }: Props) {
  const handleClick: MouseEventHandler = (ev) => {
    ev.preventDefault();
    onClick && onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={cx(
        'py-1 px-2 rounded text-sm mr-2 last:mr-0',
        type === 'primary' && 'bg-blue-600 text-white',
        type === 'secondary' && 'bg-blue-200 text-black',
      )}>
      {children}
    </button>
  );
}
