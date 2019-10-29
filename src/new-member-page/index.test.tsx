import React from 'react';
import { defaultLanguageLabels } from '../language-context';
import { NewMemberPage } from './index';
import { fireEvent, render } from '@testing-library/react';
import { memberFormTestObject } from '../test-utils/member-form-test-object';
import { Member } from '../models/member';
import { memberStore } from '../services/member-store';
import { ApplicationServicesContext } from '../application-services-context';

const { newMemberPage } = defaultLanguageLabels;

function setup(store: typeof memberStore) {
  const user = render(
    <ApplicationServicesContext.Provider value={{ memberStore: store }}>
      <NewMemberPage />
    </ApplicationServicesContext.Provider>,
  );

  return {
    ...user,
    helpers: memberFormTestObject(user.container),
  };
}

test('should display heading', () => {
  const { queryByText } = setup();

  expect(queryByText(newMemberPage.HEADER)).toBeInTheDocument();
});

test('should display a new member form', () => {
  const { isDisplayed } = memberFormTestObject(setup().container);

  expect(isDisplayed()).toBeTruthy();
});

test('should display save buttons', () => {
  const { queryByText, getAllByRole } = setup({ member: null });

  const saveButton = queryByText(newMemberPage.SAVE_BUTTON);
  const saveButtonAndCreateNew = queryByText(newMemberPage.SAVE_BUTTON_AND_CREATE_NEW);
  expect(saveButton).toBeInTheDocument();
  expect(saveButtonAndCreateNew).toBeInTheDocument();
  expect(getAllByRole('button')).toEqual(expect.arrayContaining([saveButtonAndCreateNew, saveButton]));
});

test('should call onChange with new data when user clicks to save button', () => {
  const memberStoreMock: typeof memberStore = {
    createMember: jest.fn(),
  };
  const {
    getByText,
    helpers: { fillForm },
  } = setup(memberStoreMock);

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
  fireEvent.click(getByText(newMemberPage.SAVE_BUTTON));

  expect(memberStoreMock.createMember).toBeCalledWith({
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
  } as Member);
});
