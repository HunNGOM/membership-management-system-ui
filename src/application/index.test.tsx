import React from 'react';
import { Application } from './index';
import { fireEvent, render, within } from '@testing-library/react';
import { defaultLanguageLabels } from '../language-context';
import { MemoryRouter } from 'react-router-dom';
import { ApplicationServiceContext } from '../application-service-context';
import { aNeverReturningStore } from '../test-utils/model-builders';

const { membersPage, applicationSidebar, newMemberPage, memberPage, editMemberPage } = defaultLanguageLabels;

function setup({ actualRoute = '/' }: { actualRoute?: string } = {}) {
  return render(
    <MemoryRouter initialEntries={[actualRoute]}>
      <ApplicationServiceContext.Provider value={{ memberStore: aNeverReturningStore() }}>
        <Application />
      </ApplicationServiceContext.Provider>
    </MemoryRouter>,
  );
}

test('should display application name', () => {
  const { getByRole } = setup();

  const withinNavigation = within(getByRole('navigation'));

  expect(withinNavigation.getByRole('heading')).toHaveTextContent(applicationSidebar.APPLICATION_NAME);
});

test('should display members list by default', () => {
  const { getByRole } = setup({ actualRoute: '/' });

  const withinMain = within(getByRole('main'));

  expect(withinMain.getByRole('heading')).toHaveTextContent(membersPage.HEADER);
});

test('should display members list when route is /members', () => {
  const { getByRole } = setup({ actualRoute: '/members' });

  const withinMain = within(getByRole('main'));

  expect(withinMain.getByRole('heading')).toHaveTextContent(membersPage.HEADER);
});

test('should able to navigate to new member form from members list', () => {
  const { getByRole, getByText } = setup({ actualRoute: '/members' });

  fireEvent.click(getByText(membersPage.NEW_MEMBER));

  const withinMain = within(getByRole('main'));
  expect(withinMain.getByRole('heading')).toHaveTextContent(newMemberPage.HEADER);
});

test('should display new member form when route is /member', () => {
  const { getByRole } = setup({ actualRoute: '/member' });

  const withinMain = within(getByRole('main'));
  expect(withinMain.getByRole('heading')).toHaveTextContent(newMemberPage.HEADER);
});

test('should display detailed member view when route is /member/:id', () => {
  const { getByRole } = setup({ actualRoute: '/member/3' });

  const withinMain = within(getByRole('main'));
  expect(withinMain.getByRole('heading')).toHaveTextContent(memberPage.HEADER);
});

test('should display detailed member editor when route is /member/:id/edit', () => {
  const { getByRole } = setup({ actualRoute: '/member/3/edit' });

  const withinMain = within(getByRole('main'));
  expect(withinMain.getByRole('heading')).toHaveTextContent(editMemberPage.HEADER);
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
