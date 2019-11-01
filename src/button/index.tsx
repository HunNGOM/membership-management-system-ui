import React, { MouseEventHandler } from 'react';

export function Button({ children, onClick }: { children: React.ReactNode; onClick?(): void }) {
  const handleClick: MouseEventHandler = (ev) => {
    ev.preventDefault();
    onClick && onClick();
  };

  return (
    <a href="#" onClick={handleClick}>
      {children}
    </a>
  );
}
