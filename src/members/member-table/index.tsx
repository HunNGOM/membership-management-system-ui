import React from 'react';
import { Member } from '../models/member';
import { LanguageContext } from '../../language-context';

export type Props = {
  members: readonly Member[];
  onSelection(member: Member): void;
};

export function MemberTable({ members, onSelection }: Props) {
  const { memberTable } = React.useContext(LanguageContext);

  return (
    <table className="table-auto">
      <thead>
        <tr className="bg-gray-400">
          <th className="border border-black px-2 py-2">{memberTable.NAME}</th>
          <th className="border border-black px-2 py-2">{memberTable.ID}</th>
          <th className="border border-black px-2 py-2">{memberTable.ORGANIZATION}</th>
          <th className="border border-black px-2 py-2">{memberTable.ACTIONS}</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member, index) => (
          <tr key={index}>
            <td className="border px-2 py-2" onClick={() => onSelection(member)}>
              {member.name}
            </td>
            <td className="border px-2 py-2">{member.id}</td>
            <td className="border px-2 py-2">{member.organization}</td>
            <td className="border px-2 py-2"></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
