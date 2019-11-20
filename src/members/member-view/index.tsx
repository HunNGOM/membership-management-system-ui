import React from 'react';
import { Member } from '../models/member';
import { LanguageContext } from '../../language-context';

export type Props = {
  member: Member;
};

function FieldView({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="flex py-2 sm:flex-row flex-col">
      <strong className="inline-block sm:w-1/5 sm:text-right">{label}</strong>
      <span>:</span>
      <span className="sm:pl-4 w-4/5">{value}</span>
    </div>
  );
}

export function MemberView({ member }: Props) {
  const { memberForm } = React.useContext(LanguageContext);

  return (
    <>
      <FieldView label={memberForm.NAME} value={member.name} />
      <FieldView label={memberForm.ORGANIZATION} value={member.organization} />
      <FieldView label={memberForm.BIRTH_DATE} value={member.birthDate && member.birthDate.toISODate()} />
      <FieldView label={memberForm.ADDRESS} value={member.address} />
      <FieldView label={memberForm.PHONE_NUMBER} value={member.phoneNumber} />
      <FieldView label={memberForm.EMAIL} value={member.email} />
      <FieldView label={memberForm.GENDER} value={member.gender} />
      <FieldView label={memberForm.REGISTRATION_DATE} value={member.registrationDate.toISODate()} />
      <FieldView label={memberForm.MEMBER_CATEGORY} value={member.memberCategory} />
      <FieldView label={memberForm.STATUS} value={member.status} />
    </>
  );
}
