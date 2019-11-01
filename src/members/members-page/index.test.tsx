import React from 'react';
import { defaultLanguageLabels } from '../../language-context';
import { MembersPage } from './index';
import { fireEvent, render } from '@testing-library/react';
import { aMember, aMemberStoreMock, aNeverReturningStore } from '../../test-utils/model-builders';
import { GetProps } from '../../utils/get-props';
import { ApplicationServiceContext } from '../../application-service-context';
import { MemberStore } from '../../services/member-store';
import { Router } from 'react-router-dom';
import { History, createMemoryHistory } from 'history';

const { membersPage } = defaultLanguageLabels;

function setup(props: Partial<GetProps<typeof MembersPage> & { memberStore: MemberStore; history: History }> = {}) {
  return render(
    <Router history={props.history || createMemoryHistory()}>
      <ApplicationServiceContext.Provider value={{ memberStore: props.memberStore || aNeverReturningStore() }}>
        <MembersPage onSelection={() => {}} {...props} />
      </ApplicationServiceContext.Provider>
      ,
    </Router>,
  );
}

test('should display heading', () => {
  const { queryByText } = setup();

  expect(queryByText(membersPage.HEADER)).toBeInTheDocument();
});

test('should display an empty members table', () => {
  const { queryByRole } = setup();

  expect(queryByRole('table')).toBeInTheDocument();
});

test('should display a new member button', () => {
  const { queryAllByRole, queryByText } = setup();

  const newMemberButton = queryByText(membersPage.NEW_MEMBER);
  expect(newMemberButton).toBeInTheDocument();
  expect(queryAllByRole('button')).toContain(newMemberButton);
});

test('should navigate to new member page when user clicks to new member button', () => {
  const history = createMemoryHistory();
  const { getByText } = setup({ history });

  fireEvent.click(getByText(membersPage.NEW_MEMBER));

  expect(history.location.pathname).toEqual('/member');
});

test('should display members from member store', async () => {
  const { findByText } = setup({
    memberStore: aMemberStoreMock({
      members: [
        aMember({
          name: 'test member 1',
        }),

        aMember({
          name: 'test member 2',
        }),
      ],
    }),
  });

  expect(await findByText(/test member 1/i)).toBeInTheDocument();
  expect(await findByText(/test member 2/i)).toBeInTheDocument();
});

test('should navigate to detailed member editor when user clicks to member name', async () => {
  const history = createMemoryHistory();
  const { findByText } = setup({
    history,
    memberStore: aMemberStoreMock({
      members: [
        aMember({
          id: '1',
          name: 'test member 1',
        }),

        aMember({
          id: '2',
          name: 'test member 2',
        }),
      ],
    }),
  });

  fireEvent.click(await findByText(/test member 1/));

  expect(history.location.pathname).toEqual('/member/1');
});
