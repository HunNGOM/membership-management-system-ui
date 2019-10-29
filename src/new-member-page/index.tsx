import React from 'react';
import { LanguageContext } from '../language-context';
import { Page } from '../page';
import { Button } from '../button';
import { MemberForm } from '../member-form';
import { ApplicationServicesContext } from '../application-services-context';
import { Member } from '../models/member';

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
  const { memberStore } = React.useContext(ApplicationServicesContext);
  const [member, setMember] = React.useState<Member>(emptyMember);

  return (
    <Page header={newMemberPage.HEADER}>
      <Button onClick={() => memberStore.createMember(member)}>{newMemberPage.SAVE_BUTTON}</Button>
      <Button>{newMemberPage.SAVE_BUTTON_AND_CREATE_NEW}</Button>
      <MemberForm member={member} onChange={setMember} />
    </Page>
  );
}
