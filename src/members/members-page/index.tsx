import React from 'react';
import { Member } from '../models/member';
import { LanguageContext } from '../../language-context';
import { Page } from '../../page';
import { MemberTable } from '../member-table';
import { ApplicationServiceContext } from '../../application-service-context';
import { useApplicationNavigation } from '../../navigation/hooks/use-application-navigation';
import { LinkToNewMemberPage } from '../../navigation/navigation-links';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

export function MembersPage() {
  const { membersPage } = React.useContext(LanguageContext);
  const { memberStore } = React.useContext(ApplicationServiceContext);
  const { goToViewMemberPage } = useApplicationNavigation();
  const [members, setMembers] = React.useState<readonly Member[]>([]);

  React.useEffect(() => {
    memberStore.getMembers().then(setMembers);
  }, [memberStore]);

  return (
    <Page header={membersPage.HEADER}>
      <LinkToNewMemberPage>
        <FontAwesomeIcon icon={faUserPlus} /> {membersPage.NEW_MEMBER}
      </LinkToNewMemberPage>
      <MemberTable members={members} onSelection={goToViewMemberPage} />
    </Page>
  );
}
