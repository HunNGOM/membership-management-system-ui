import React from 'react';
import { MemberView, Props } from './index';
import { render } from '@testing-library/react';
import { defaultLanguageLabels } from '../language-context';
import { aMember } from '../test-utils/model-builders';

const { memberForm } = defaultLanguageLabels;

function setup(props: Partial<Props> = {}) {
  return render(<MemberView member={aMember()} {...props} />);
}

test('should display member fields', () => {
  const { queryByText } = setup({ member: aMember() });

  expect(queryByText(memberForm.NAME)).toBeInTheDocument();
  expect(queryByText(memberForm.ORGANIZATION)).toBeInTheDocument();
  expect(queryByText(memberForm.BIRTH_DATE)).toBeInTheDocument();
  expect(queryByText(memberForm.ADDRESS)).toBeInTheDocument();
  expect(queryByText(memberForm.PHONE_NUMBER)).toBeInTheDocument();
  expect(queryByText(memberForm.EMAIL)).toBeInTheDocument();
  expect(queryByText(memberForm.GENDER)).toBeInTheDocument();
  expect(queryByText(memberForm.REGISTRATION_DATE)).toBeInTheDocument();
  expect(queryByText(memberForm.MEMBER_CATEGORY)).toBeInTheDocument();
  expect(queryByText(memberForm.STATUS)).toBeInTheDocument();
});

test('should display member information if it is not null', () => {
  const { queryByText } = setup({
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

  expect(queryByText(/member name/i)).toBeInTheDocument();
  expect(queryByText(/member organization/i)).toBeInTheDocument();
  expect(queryByText(/member registrationDate/i)).toBeInTheDocument();
  expect(queryByText(/member status/i)).toBeInTheDocument();
  expect(queryByText(/member birthDate/i)).toBeInTheDocument();
  expect(queryByText(/member address/i)).toBeInTheDocument();
  expect(queryByText(/member phoneNumber/i)).toBeInTheDocument();
  expect(queryByText(/member email/i)).toBeInTheDocument();
  expect(queryByText(/member gender/i)).toBeInTheDocument();
  expect(queryByText(/member memberCategory/i)).toBeInTheDocument();
});

test.todo('should display action buttons');
