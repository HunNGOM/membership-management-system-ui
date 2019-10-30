import React from 'react';
import { defaultLanguageLabels } from '../language-context';
import { MembersPage } from './index';
import { fireEvent, render } from '@testing-library/react';
import { aMember, aMemberStoreMock, aNeverReturningStore } from '../test-utils/model-builders';
import { GetProps } from '../utils/get-props';
import { memberStore } from '../services/member-store';
import { ApplicationServicesContext } from '../application-services-context';

const { membersPage } = defaultLanguageLabels;

function setup(props: Partial<GetProps<typeof MembersPage> & { memberStore: MemberStore }> = {}) {
  return render(
    <ApplicationServicesContext.Provider value={{ memberStore: props.memberStore || aNeverReturningStore() }}>
      <MembersPage onAdd={() => {}} onSelection={() => {}} {...props} />
    </ApplicationServicesContext.Provider>,
  );
}

test('should display heading', () => {
  const { queryByText } = setup();

  expect(queryByText(membersPage.HEADER)).toBeInTheDocument();
});

test('should display an empty members table', () => {
  const { queryByRole } = setup({ members: [] });

  expect(queryByRole('table')).toBeInTheDocument();
});

test('should display a new member button', () => {
  const { queryAllByRole, queryByText } = setup();

  const newMemberButton = queryByText(membersPage.NEW_MEMBER);
  expect(newMemberButton).toBeInTheDocument();
  expect(queryAllByRole('button')).toContain(newMemberButton);
});

test('should call onAdd event handler when user clicks to new member button', () => {
  const onAdd = jest.fn();
  const { getByText } = setup({ onAdd });
  const newMemberButton = getByText(membersPage.NEW_MEMBER);

  fireEvent.click(newMemberButton);

  expect(onAdd).toHaveBeenCalled();
});

test('should call onSelection event handler when user clicks to a member name', async () => {
  const onSelection = jest.fn();
  const { findByText } = setup({
    onSelection,
    memberStore: aMemberStoreMock({
      members: [
        aMember({
          name: 'selected member',
        }),
      ],
    }),
  });

  fireEvent.click(await findByText(/selected member/i));

  expect(onSelection).toHaveBeenCalled();
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
