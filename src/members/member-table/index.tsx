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
    <table>
      <thead>
        <tr>
          <th>{memberTable.NAME}</th>
          <th>{memberTable.ID}</th>
          <th>{memberTable.ORGANIZATION}</th>
          <th>{memberTable.ACTIONS}</th>
        </tr>
      </thead>
      <tbody>
        {members.map((member, index) => (
          <tr key={index}>
            <td onClick={() => onSelection(member)}>{member.name}</td>
            <td>{member.id}</td>
            <td>{member.organization}</td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
