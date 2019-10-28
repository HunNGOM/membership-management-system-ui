import React from 'react';

export function Button({ children, onClick }: { children: string; onClick?(): void }) {
  return <button onClick={onClick}>{children}</button>;
}
