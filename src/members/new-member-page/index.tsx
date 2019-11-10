import React from 'react';
import { LanguageContext } from '../../language-context';
import { Page } from '../../page';
import { Button } from '../../button';
import { MemberForm } from '../member-form';
import { ApplicationServiceContext } from '../../application-service-context';
import { Member } from '../models/member';
import { LinkToMembersPage, LinkToViewMemberPage } from '../../navigation/navigation-links';
import { DateTime } from 'luxon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const emptyMember: Member = {
  address: '',
  birthDate: DateTime.local(),
  email: '',
  gender: '',
  id: '',
  memberCategory: '',
  name: '',
  organization: '',
  phoneNumber: '',
  registrationDate: DateTime.local(),
  status: '',
};

export function NewMemberPage() {
  const { newMemberPage } = React.useContext(LanguageContext);
  const { memberStore } = React.useContext(ApplicationServiceContext);
  const [member, setMember] = React.useState<Member>(emptyMember);

  const saveMember = () => memberStore.saveMember(member);

  return (
    <Page header={newMemberPage.HEADER}>
      <LinkToMembersPage onClick={saveMember}>
        <FontAwesomeIcon icon={faCheck} /> {newMemberPage.SAVE_BUTTON}
      </LinkToMembersPage>
      <Button type="secondary" onClick={saveMember}>{newMemberPage.SAVE_BUTTON_AND_CREATE_NEW}</Button>
      <MemberForm member={member} onChange={setMember} />
    </Page>
  );
}
