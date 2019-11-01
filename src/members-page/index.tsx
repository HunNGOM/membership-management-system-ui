import React from 'react';
import { Member } from '../models/member';
import { LanguageContext } from '../language-context';
import { Page } from '../page';
import { MemberTable } from '../member-table';
import { Button } from '../button';
import { ApplicationServicesContext } from '../application-services-context';
import { useApplicationNavigation } from '../services/application-navigation-hook';

export function MembersPage() {
  const { membersPage } = React.useContext(LanguageContext);
  const { memberStore } = React.useContext(ApplicationServicesContext);
  const { goToNewMemberPage, goToEditMemberPage } = useApplicationNavigation();
  const [members, setMembers] = React.useState<readonly Member[]>([]);

  React.useEffect(() => {
    memberStore.getMembers().then(setMembers);
  }, [memberStore]);

  return (
    <Page header={membersPage.HEADER}>
      <Button onClick={goToNewMemberPage}>{membersPage.NEW_MEMBER}</Button>
      <MemberTable members={members} onSelection={goToEditMemberPage} />
    </Page>
  );
}
