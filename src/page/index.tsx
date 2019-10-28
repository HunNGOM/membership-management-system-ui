import React from 'react';

export function Page({ header, children }: { header: string; children?: React.ReactNode }) {
  return (
    <>
      <h1>{header}</h1>
      <div>{children}</div>
    </>
  );
}
