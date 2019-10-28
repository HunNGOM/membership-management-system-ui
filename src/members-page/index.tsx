import React from 'react';
import { Member } from '../models/member';
import { LanguageContext } from '../language-context';
import { Page } from '../page';
import { MemberTable } from '../member-table';
import { Button } from '../button';

export type Props = { members: readonly Member[]; onAdd(): void; onSelection(member: Member): void };

export function MembersPage({ members, onAdd, onSelection }: Props) {
  const { membersPage } = React.useContext(LanguageContext);

  return (
    <Page header={membersPage.HEADER}>
      <Button onClick={() => onAdd()}>{membersPage.NEW_MEMBER}</Button>
      <MemberTable members={members} onSelection={onSelection} />
    </Page>
  );
}
