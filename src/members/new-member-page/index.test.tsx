import React from 'react';
import { defaultLanguageLabels } from '../../language-context';
import { NewMemberPage } from './index';
import { fireEvent, render, wait } from '@testing-library/react';
import { aMemberForm } from '../../test-utils/a-member-form';
import { Member } from '../models/member';
import { memberStore } from '../../services/member-store';
import { ApplicationServiceContext } from '../../application-service-context';
import { Router } from 'react-router';
import { History, createMemoryHistory } from 'history';
import { aMemberStoreMock } from '../../test-utils/model-builders';

const { newMemberPage } = defaultLanguageLabels;

function setup(store: MemberStore = aMemberStoreMock(), history: History = createMemoryHistory()) {
  const user = render(
    <ApplicationServiceContext.Provider value={{ memberStore: store }}>
      <Router history={history}>
        <NewMemberPage />
      </Router>
    </ApplicationServiceContext.Provider>,
  );

  return {
    ...user,
    helpers: aMemberForm(user.container),
  };
}

test('should display heading', () => {
  const { queryByText } = setup();

  expect(queryByText(newMemberPage.HEADER)).toBeInTheDocument();
});

test('should display a new member form', () => {
  const { isDisplayed } = aMemberForm(setup().container);

  expect(isDisplayed()).toBeTruthy();
});

test('should display save buttons', () => {
  const { queryByText, getAllByRole } = setup();

  const saveButton = queryByText(newMemberPage.SAVE_BUTTON);
  const saveButtonAndCreateNew = queryByText(newMemberPage.SAVE_BUTTON_AND_CREATE_NEW);
  expect(saveButton).toBeInTheDocument();
  expect(saveButtonAndCreateNew).toBeInTheDocument();
  expect(getAllByRole('link')).toEqual(expect.arrayContaining([saveButtonAndCreateNew, saveButton]));
});

test('should save member and should navigate to the members page when user clicks to save button', async () => {
  const store = aMemberStoreMock();
  const history = createMemoryHistory();
  const {
    getByText,
    helpers: { fillForm },
  } = setup(store, history);

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

  expect(store.createMember).toBeCalledWith({
    name: 'NEW_NAME',
    id: expect.anything(),
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
  await wait(() => expect(history.location.pathname).toEqual('/members'));
});

test('should save member when user clicks to save and create new button', () => {
  const store = aMemberStoreMock();
  const {
    getByText,
    helpers: { fillForm },
  } = setup(store);

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
  fireEvent.click(getByText(newMemberPage.SAVE_BUTTON_AND_CREATE_NEW));

  expect(store.createMember).toBeCalledWith({
    name: 'NEW_NAME',
    id: expect.anything(),
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
