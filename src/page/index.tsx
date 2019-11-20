import React from 'react';

type Props = { name: string; children?: React.ReactNode; pageControlsAs?: React.ReactNode };

export function Page({ name, children, pageControlsAs }: Props) {
  return (
    <div className="sm:overflow-auto sm:h-screen">
      <div className="sm:bg-gray-200 sm:min-h-screen sm:p-5 sm:flex">
        <div className="p-8 bg-white sm:rounded sm:shadow-lg sm:flex-1">
          <div className="flex flex-row items-baseline">
            <h1 className="pb-5 font-bold">{name}</h1>
            <div className="flex flex-1 justify-end align-end">{pageControlsAs}</div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
