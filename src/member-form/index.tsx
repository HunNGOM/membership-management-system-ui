import { LanguageContext } from '../language-context';
import React from 'react';
import { Member } from '../models/member';
import { Field } from '../field';
import { Button } from '../button';

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

export type Props = {
  member: Member | null;
  onChange(args: { member: Member }): void;
};

export function MemberForm({ member: initialMember, onChange }: Props) {
  const { memberForm } = React.useContext(LanguageContext);
  const [member, setMember] = React.useState(initialMember != null ? initialMember : emptyMember);

  const handleMemberChange = (property: keyof Member) => (newValue: string) =>
    setMember((previousMember) => {
      return {
        ...previousMember,
        [property]: newValue,
      };
    });

  return (
    <>
      <Button onClick={() => onChange({ member })}>{memberForm.SAVE_BUTTON}</Button>
      <Button>{memberForm.SAVE_BUTTON_AND_CREATE_NEW}</Button>

      <Field label={memberForm.NAME} isRequired={true} onChange={handleMemberChange('name')} value={member.name} />
      <Field
        label={memberForm.ORGANIZATION}
        onChange={handleMemberChange('organization')}
        value={member.organization}
      />
      <Field label={memberForm.BIRTH_DATE} onChange={handleMemberChange('birthDate')} value={member.birthDate || ''} />
      <Field label={memberForm.ADDRESS} onChange={handleMemberChange('address')} value={member.address || ''} />
      <Field
        label={memberForm.PHONE_NUMBER}
        onChange={handleMemberChange('phoneNumber')}
        value={member.phoneNumber || ''}
      />
      <Field label={memberForm.EMAIL} onChange={handleMemberChange('email')} value={member.email || ''} />
      <Field label={memberForm.GENDER} onChange={handleMemberChange('gender')} value={member.gender || ''} />
      <Field
        label={memberForm.REGISTRATION_DATE}
        isRequired={true}
        onChange={handleMemberChange('registrationDate')}
        value={member.registrationDate || ''}
      />
      <Field
        label={memberForm.MEMBER_CATEGORY}
        onChange={handleMemberChange('memberCategory')}
        value={member.memberCategory || ''}
      />
      <Field label={memberForm.STATUS} onChange={handleMemberChange('status')} value={member.status} />
    </>
  );
}
