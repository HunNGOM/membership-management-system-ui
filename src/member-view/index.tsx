import React from 'react';
import { Member } from '../models/member';
import { LanguageContext } from '../language-context';

export type Props = {
  member: Member;
};

export function MemberView({ member }: Props) {
  const { memberForm } = React.useContext(LanguageContext);

  return (
    <>
      <div>
        <strong>{memberForm.NAME}</strong>
        <span>{member.name}</span>
      </div>

      <div>
        <strong>{memberForm.ORGANIZATION}</strong>
        <span>{member.organization}</span>
      </div>

      <div>
        <strong>{memberForm.BIRTH_DATE}</strong>
        <span>{member.birthDate}</span>
      </div>

      <div>
        <strong>{memberForm.ADDRESS}</strong>
        <span>{member.address}</span>
      </div>

      <div>
        <strong>{memberForm.PHONE_NUMBER}</strong>
        <span>{member.phoneNumber}</span>
      </div>

      <div>
        <strong>{memberForm.EMAIL}</strong>
        <span>{member.email}</span>
      </div>

      <div>
        <strong>{memberForm.GENDER}</strong>
        <span>{member.gender}</span>
      </div>

      <div>
        <strong>{memberForm.REGISTRATION_DATE}</strong>
        <span>{member.registrationDate}</span>
      </div>

      <div>
        <strong>{memberForm.MEMBER_CATEGORY}</strong>
        <span>{member.memberCategory}</span>
      </div>

      <div>
        <strong>{memberForm.STATUS}</strong>
        <span>{member.status}</span>
      </div>
    </>
  );
}
