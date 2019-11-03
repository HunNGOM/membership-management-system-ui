import React from 'react';
import { LanguageContext } from '../../language-context';
import { Page } from '../../page';
import { Button } from '../../button';
import { MemberForm } from '../member-form';
import { ApplicationServiceContext } from '../../application-service-context';
import { Member } from '../models/member';
import { LinkToMembersPage } from '../../navigation/navigation-links';
import { DateTime } from 'luxon';

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

  const createMember = () => memberStore.createMember(member);

  const handleMemberChange = (value: unknown, field: keyof Member) =>
    setMember((prev) => {
      return {
        ...prev,
        [field]: value,
      };
    });

  return (
    <Page header={newMemberPage.HEADER}>
      <LinkToMembersPage onClick={createMember}>{newMemberPage.SAVE_BUTTON}</LinkToMembersPage>
      <Button onClick={createMember}>{newMemberPage.SAVE_BUTTON_AND_CREATE_NEW}</Button>
      <MemberForm member={member} onChange={setMember} />
    </Page>
  );
}
