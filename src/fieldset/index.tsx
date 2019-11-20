import React from 'react';
import { Member } from '../members/models/member';

export type Props = {
  member: Member;
  onChange(member: Member): void;
};

export function Fieldset({
  header,
  description,
  children,
}: {
  header: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex sm:flex-row flex-col pb-8">
      <div className="sm:w-1/3 text-sm pr-4">
        <div className="font-semibold py-2">{header}</div>
        <div className="text-gray-600">{description}</div>
      </div>
      <div className="sm:w-2/3">{children}</div>
    </div>
  );
}
