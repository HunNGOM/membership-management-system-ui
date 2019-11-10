import { LanguageContext } from '../../language-context';
import React from 'react';
import { Member } from '../models/member';
import { Field } from '../../field';
import { Datepicker } from '../../datepicker';
import { css, Interpolation } from 'emotion';
import { greys } from '../../global-styles';
import { DateTime } from 'luxon';

export type Props = {
  member: Member;
  onChange(member: Member): void;
};

const stylesheets = {
  container: css({
    // display: 'grid',
    display: 'contents',

    gridTemplateColumns: '1fr 2fr',
    gridTemplateRows: 'auto 1fr',
    columnGap: '10px',
    fontSize: '0.875rem',
  } as Interpolation),

  fieldset: css({
    display: 'contents',
  } as Interpolation),

  legend: css({
    fontWeight: 700,
    color: greys.g800,
    lineHeight: 1.5,
    marginBottom: 5,
  } as Interpolation),

  fields: css({
    display: 'flex',
    flexDirection: 'column',
    gridRow: 'span 2',
  } as Interpolation),

  description: css({
    gridRow: 2,
    color: '#8D8D8D',
  } as Interpolation),
};

function Fieldset({
  header,
  description,
  children,
}: {
  header: string;
  description: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={stylesheets.container}>
      <fieldset className={stylesheets.fieldset}>
        <legend className={stylesheets.legend}>{header}</legend>
        <div className={stylesheets.description}>{description}</div>
        <div className={stylesheets.fields}>{children}</div>
      </fieldset>
    </div>
  );
}

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
    <div className={css({})}>
      <Fieldset header={memberForm.PERSONAL_GROUP_NAME} description={memberForm.PERSONAL_GROUP_NAME_DESCRIPTION}>
        <Field isRequired label={memberForm.NAME} name="name" onChange={handleFieldChange} value={member.name} />
        <Field<DateTime>
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
      </Fieldset>

      <Fieldset header={memberForm.MEMBERSHIP_GROUP_NAME} description={memberForm.MEMBERSHIP_GROUP_NAME_DESCRIPTION}>
        <Field
          label={memberForm.ORGANIZATION}
          name="organization"
          onChange={handleFieldChange}
          value={member.organization}
        />
        <Field<DateTime>
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
      </Fieldset>
    </div>
  );
}
