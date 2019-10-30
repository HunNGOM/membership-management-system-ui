import React from 'react';
import { Member } from '../models/member';
import { LanguageContext } from '../language-context';
import { Page } from '../page';
import { MemberTable } from '../member-table';
import { Button } from '../button';
import { ApplicationServicesContext } from '../application-services-context';

export type Props = {
  onAdd(): void;
  onSelection(member: Member): void;
};

export function MembersPage({ onAdd, onSelection }: Props) {
  const { membersPage } = React.useContext(LanguageContext);
  const { memberStore } = React.useContext(ApplicationServicesContext);
  const [members, setMembers] = React.useState<readonly Member[]>([]);

  React.useEffect(() => {
    memberStore.getMembers().then(setMembers);
  }, [memberStore]);

  return (
    <Page header={membersPage.HEADER}>
      <Button onClick={() => onAdd()}>{membersPage.NEW_MEMBER}</Button>
      <MemberTable members={members} onSelection={onSelection} />
    </Page>
  );
}
