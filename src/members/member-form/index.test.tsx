import React from 'react';
import { MemberForm } from './index';
import { render } from '@testing-library/react';
import { defaultLanguageLabels } from '../../language-context';
import { aMember } from '../../test-utils/model-builders';
import { GetProps } from '../../utils/get-props';

const { memberForm } = defaultLanguageLabels;

function setup(props: Partial<GetProps<typeof MemberForm>> = {}) {
  return render(<MemberForm member={aMember()} onChange={() => {}} {...props} />);
}

test('should display member fields', () => {
  const { queryByLabelText } = setup();

  expect(queryByLabelText(memberForm.NAME)).toBeInTheDocument();
  expect(queryByLabelText(memberForm.ORGANIZATION)).toBeInTheDocument();
  expect(queryByLabelText(memberForm.BIRTH_DATE)).toBeInTheDocument();
  expect(queryByLabelText(memberForm.ADDRESS)).toBeInTheDocument();
  expect(queryByLabelText(memberForm.PHONE_NUMBER)).toBeInTheDocument();
  expect(queryByLabelText(memberForm.EMAIL)).toBeInTheDocument();
  expect(queryByLabelText(memberForm.GENDER)).toBeInTheDocument();
  expect(queryByLabelText(memberForm.REGISTRATION_DATE)).toBeInTheDocument();
  expect(queryByLabelText(memberForm.MEMBER_CATEGORY)).toBeInTheDocument();
  expect(queryByLabelText(memberForm.STATUS)).toBeInTheDocument();
});

test('should display member information if it is not null', () => {
  const { queryByDisplayValue } = setup({
    member: aMember({
      name: 'member name',
      id: 'member id',
      organization: 'member organization',
      registrationDate: 'member registrationDate',
      status: 'member status',
      birthDate: 'member birthDate',
      address: 'member address',
      phoneNumber: 'member phoneNumber',
      email: 'member email',
      gender: 'member gender',
      memberCategory: 'member memberCategory',
    }),
  });

  expect(queryByDisplayValue(/member name/i)).toBeInTheDocument();
  expect(queryByDisplayValue(/member organization/i)).toBeInTheDocument();
  expect(queryByDisplayValue(/member registrationDate/i)).toBeInTheDocument();
  expect(queryByDisplayValue(/member status/i)).toBeInTheDocument();
  expect(queryByDisplayValue(/member birthDate/i)).toBeInTheDocument();
  expect(queryByDisplayValue(/member address/i)).toBeInTheDocument();
  expect(queryByDisplayValue(/member phoneNumber/i)).toBeInTheDocument();
  expect(queryByDisplayValue(/member email/i)).toBeInTheDocument();
  expect(queryByDisplayValue(/member gender/i)).toBeInTheDocument();
  expect(queryByDisplayValue(/member memberCategory/i)).toBeInTheDocument();
});

test('should have required fields', () => {
  const { getByLabelText } = setup();

  expect(getByLabelText(memberForm.NAME)).toHaveAttribute('required');
  expect(getByLabelText(memberForm.REGISTRATION_DATE)).toHaveAttribute('required');
});
