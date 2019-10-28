import React from 'react';
import { defaultLanguageLabels } from '../language-context';
import { MembersPage, Props } from './index';
import { render, fireEvent } from '@testing-library/react';
import { aMember } from '../test-utils/model-builders';

const { membersPage } = defaultLanguageLabels;

function setup(props: Partial<Props> = {}) {
  return render(<MembersPage members={[]} onAdd={() => {}} onSelection={() => {}} {...props} />);
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

test('should call onSelection event handler when user clicks to a member name', () => {
  const onSelection = jest.fn();
  const { getByText } = setup({ onSelection, members: [aMember({ name: 'selected member' })] });

  fireEvent.click(getByText(/selected member/i));

  expect(onSelection).toHaveBeenCalled();
});
