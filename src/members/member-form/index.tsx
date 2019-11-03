import { LanguageContext } from '../../language-context';
import React from 'react';
import { Member } from '../models/member';
import { Field } from '../../field';
import { Datepicker } from '../../datepicker';

export type Props = {
  member: Member;
  onChange(member: Member): void;
};

export function MemberForm({ member: initialMember, onChange }: Props) {
  const { memberForm } = React.useContext(LanguageContext);
  const [member, setMember] = React.useState(initialMember);

  const handleFieldChange = (value: unknown, name: keyof Member) => {
    setMember((previousMember) => {
      return {
        ...previousMember,
        [name]: value,
      };
    });
  };

  React.useEffect(() => {
    if (initialMember === member) {
      return;
    }

    onChange(member);
  }, [initialMember, member, onChange]);

  return (
    <>
      <Field isRequired label={memberForm.NAME} name="name" onChange={handleFieldChange} value={member.name} />
      <Field
        label={memberForm.ORGANIZATION}
        name="organization"
        onChange={handleFieldChange}
        value={member.organization}
      />
      <Field
        label={memberForm.BIRTH_DATE}
        name="birthDate"
        onChange={handleFieldChange}
        value={member.birthDate}
        inputAs={Datepicker}
      />
      <Field label={memberForm.ADDRESS} name="address" onChange={handleFieldChange} value={member.address || ''} />
      <Field
        label={memberForm.PHONE_NUMBER}
        name="phoneNumber"
        onChange={handleFieldChange}
        value={member.phoneNumber || ''}
      />
      <Field label={memberForm.EMAIL} name="email" onChange={handleFieldChange} value={member.email || ''} />
      <Field label={memberForm.GENDER} name="gender" onChange={handleFieldChange} value={member.gender || ''} />
      <Field
        isRequired
        label={memberForm.REGISTRATION_DATE}
        name="registrationDate"
        onChange={handleFieldChange}
        value={member.registrationDate}
        inputAs={Datepicker}
      />
      <Field
        label={memberForm.MEMBER_CATEGORY}
        name="memberCategory"
        onChange={handleFieldChange}
        value={member.memberCategory || ''}
      />
      <Field label={memberForm.STATUS} name="status" onChange={handleFieldChange} value={member.status} />
    </>
  );
}
