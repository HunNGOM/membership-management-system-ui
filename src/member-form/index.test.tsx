import React from 'react';
import { MemberForm, Props } from './index';
import { render, fireEvent } from '@testing-library/react';
import { defaultLanguageLabels } from '../language-context';
import { aMember } from '../test-utils/model-builders';
import { Member } from '../models/member';

const { memberForm } = defaultLanguageLabels;

function setup(props: Partial<Props> = {}) {
  const user = render(<MemberForm member={null} onChange={() => {}} {...props} />);

  return {
    ...user,
    helpers: {
      fillForm(member: Partial<Member>) {
        const changeTextField = (label: string, value: string | null | undefined) =>
          value &&
          fireEvent.change(user.getByLabelText(label), {
            target: { value: value },
          });

        changeTextField(memberForm.NAME, member.name);
        changeTextField(memberForm.ORGANIZATION, member.organization);
        changeTextField(memberForm.BIRTH_DATE, member.birthDate);
        changeTextField(memberForm.ADDRESS, member.address);
        changeTextField(memberForm.PHONE_NUMBER, member.phoneNumber);
        changeTextField(memberForm.EMAIL, member.email);
        changeTextField(memberForm.GENDER, member.gender);
        changeTextField(memberForm.REGISTRATION_DATE, member.registrationDate);
        changeTextField(memberForm.MEMBER_CATEGORY, member.memberCategory);
        changeTextField(memberForm.STATUS, member.status);
      },
    },
  };
}

test('should display member fields', () => {
  const { queryByLabelText } = setup({ member: null });

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

test('should display save buttons', () => {
  const { queryByText, getAllByRole } = setup({ member: null });

  const saveButton = queryByText(memberForm.SAVE_BUTTON);
  const saveButtonAndCreateNew = queryByText(memberForm.SAVE_BUTTON_AND_CREATE_NEW);
  expect(saveButton).toBeInTheDocument();
  expect(saveButtonAndCreateNew).toBeInTheDocument();
  expect(getAllByRole('button')).toEqual(expect.arrayContaining([saveButtonAndCreateNew, saveButton]));
});

test('should call onChange with new data when user clicks to save button', () => {
  const onChange = jest.fn();
  const {
    getByText,
    helpers: { fillForm },
  } = setup({ onChange });

  fillForm({
    name: 'NEW_NAME',
    organization: 'NEW_ORGANIZATION',
    birthDate: 'NEW_BIRTH_DATE',
    address: 'NEW_ADDRESS',
    phoneNumber: 'NEW_PHONE_NUMBER',
    email: 'NEW_EMAIL',
    gender: 'NEW_GENDER',
    registrationDate: 'NEW_REGISTRATION_DATE',
    memberCategory: 'NEW_MEMBER_CATEGORY',
    status: 'NEW_STATUS',
  });
  fireEvent.click(getByText(memberForm.SAVE_BUTTON));

  expect(onChange).toBeCalledWith({
    member: {
      name: 'NEW_NAME',
      id: '',
      organization: 'NEW_ORGANIZATION',
      birthDate: 'NEW_BIRTH_DATE',
      address: 'NEW_ADDRESS',
      phoneNumber: 'NEW_PHONE_NUMBER',
      email: 'NEW_EMAIL',
      gender: 'NEW_GENDER',
      registrationDate: 'NEW_REGISTRATION_DATE',
      memberCategory: 'NEW_MEMBER_CATEGORY',
      status: 'NEW_STATUS',
    } as Member,
  });
});

test('should have required fields', () => {
  const { getByLabelText } = setup();

  expect(getByLabelText(memberForm.NAME)).toHaveAttribute('required');
  expect(getByLabelText(memberForm.REGISTRATION_DATE)).toHaveAttribute('required');
});
