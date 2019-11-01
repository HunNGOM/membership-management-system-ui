import React from 'react';
import { LanguageContext } from '../../language-context';
import { Page } from '../../page';
import { Button } from '../../button';
import { MemberForm } from '../member-form';
import { ApplicationServiceContext } from '../../application-service-context';
import { Member } from '../models/member';
import { useApplicationNavigation } from '../../services/application-navigation-hook';

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
  const { goToMembersPage } = useApplicationNavigation();

  const createMember = () => memberStore.createMember(member);

  const handleSaveButton = async () => {
    await createMember();
    goToMembersPage();
  };

  return (
    <Page header={newMemberPage.HEADER}>
      <Button onClick={handleSaveButton}>{newMemberPage.SAVE_BUTTON}</Button>
      <Button onClick={createMember}>{newMemberPage.SAVE_BUTTON_AND_CREATE_NEW}</Button>
      <MemberForm member={member} onChange={setMember} />
    </Page>
  );
}
