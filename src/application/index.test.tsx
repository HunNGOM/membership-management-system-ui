import React from 'react';
import { Application } from './index';
import { fireEvent, render, within } from '@testing-library/react';
import { defaultLanguageLabels } from '../language-context';
import { MemoryRouter } from 'react-router-dom';
import { ApplicationServicesContext } from '../application-services-context';
import { aNeverReturningStore } from '../test-utils/model-builders';

const { membersPage, applicationSidebar, newMemberPage, memberPage } = defaultLanguageLabels;

function setup({ actualRoute = '/' }: { actualRoute?: string } = {}) {
  return render(
    <MemoryRouter initialEntries={[actualRoute]}>
      <ApplicationServicesContext.Provider value={{ memberStore: aNeverReturningStore() }}>
        <Application />
      </ApplicationServicesContext.Provider>
    </MemoryRouter>,
  );
}

test('should display members list by default', () => {
  const { getByRole } = setup({ actualRoute: '/' });

  expect(getByRole('heading')).toHaveTextContent(membersPage.HEADER);
});

test('should display members list when route is /members', () => {
  const { getByRole } = setup({ actualRoute: '/members' });

  expect(getByRole('heading')).toHaveTextContent(membersPage.HEADER);
});

test('should able to navigate to new member form from members list', () => {
  const { getByRole, getByText } = setup({ actualRoute: '/members' });

  fireEvent.click(getByText(membersPage.NEW_MEMBER));

  expect(getByRole('heading')).toHaveTextContent(newMemberPage.HEADER);
});

test('should display new member form when route is /member', () => {
  const { getByRole } = setup({ actualRoute: '/member' });

  expect(getByRole('heading')).toHaveTextContent(newMemberPage.HEADER);
});

test('should display detailed member view when route is /member/:id', () => {
  const { getByRole } = setup({ actualRoute: '/member/3' });

  expect(getByRole('heading')).toHaveTextContent(memberPage.HEADER);
});

test('should display application menu', () => {
  const { getByRole } = setup();
  const { queryByText } = within(getByRole('navigation'));

  expect(queryByText(applicationSidebar.MEMBERS)).toBeInTheDocument();
  expect(queryByText(applicationSidebar.MEMBERSHIP_FEE)).toBeInTheDocument();
  expect(queryByText(applicationSidebar.ORGANIZATION_DETAILS)).toBeInTheDocument();
  expect(queryByText(applicationSidebar.ORGANIZATIONS)).toBeInTheDocument();
  expect(queryByText(applicationSidebar.REPORTS)).toBeInTheDocument();
});
