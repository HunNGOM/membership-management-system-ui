import React from 'react';
import { LanguageContext } from '../../language-context';
import { Page } from '../../page';
import { Button } from '../../button';
import { useMemberFromParams } from '../member-page';
import { MemberForm } from '../member-form';
import { LinkToViewMemberPage } from '../../navigation/navigation-links';
import { ApplicationServiceContext } from '../../application-service-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export function EditMemberPage() {
  const { editMemberPage } = React.useContext(LanguageContext);
  const { memberStore } = React.useContext(ApplicationServiceContext);
  const member = useMemberFromParams();

  return (
    <Page header={editMemberPage.HEADER}>
      {member && (
        <>
          <LinkToViewMemberPage member={member} onClick={() => memberStore.saveMember(member)}>
            <FontAwesomeIcon icon={faCheck} /> {editMemberPage.SAVE_BUTTON}
          </LinkToViewMemberPage>
          <Button>{editMemberPage.PAY_MEMBERSHIP_FEE_BUTTON}</Button>
          <Button>{editMemberPage.REMOVE_MEMBER_BUTTON}</Button>
          <MemberForm member={member} onChange={() => {}} />
        </>
      )}
    </Page>
  );
}
