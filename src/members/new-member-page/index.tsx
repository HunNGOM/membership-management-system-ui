import React from 'react';
import { LanguageContext } from '../../language-context';
import { Page } from '../../page';
import { Button } from '../../button';
import { MemberForm } from '../member-form';
import { ApplicationServiceContext } from '../../application-service-context';
import { Member } from '../models/member';
import { useApplicationNavigation } from '../../navigation/hooks/use-application-navigation';
import { LinkToMembersPage } from '../../navigation/navigation-links';

const emptyMember: Member = {
  address: '',
  birthDate: '',
  email: '',
  gender: '',
  id: '',
  memberCategory: '',
  name: '',
  organization: '',
  phoneNumber: '',
  registrationDate: '',
  status: '',
};

export function NewMemberPage() {
  const { newMemberPage } = React.useContext(LanguageContext);
  const { memberStore } = React.useContext(ApplicationServiceContext);
  const [member, setMember] = React.useState<Member>(emptyMember);

  const createMember = () => memberStore.createMember(member);

  return (
    <Page header={newMemberPage.HEADER}>
      <LinkToMembersPage onClick={createMember}>{newMemberPage.SAVE_BUTTON}</LinkToMembersPage>
      <Button onClick={createMember}>{newMemberPage.SAVE_BUTTON_AND_CREATE_NEW}</Button>
      <MemberForm member={member} onChange={setMember} />
    </Page>
  );
}
