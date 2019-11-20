import React from 'react';
import { ApplicationSidebar } from './index';
import { fireEvent, render } from '@testing-library/react';
import { defaultLanguageLabels } from '../language-context';
import { createMemoryHistory, History } from 'history';
import { Router } from 'react-router-dom';
import { GetProps } from '../utils/get-props';

const { applicationSidebar } = defaultLanguageLabels;

function setup(
  { history = createMemoryHistory(), ...props }: { history?: History } & GetProps<typeof ApplicationSidebar> = {
    name: '',
  },
) {
  const renderResult = render(
    <Router history={history}>
      <ApplicationSidebar {...props} />
    </Router>,
  );

  return {
    ...renderResult,
    history,
  };
}

test('should list application menu items', () => {
  const { queryByText } = setup();

  expect(queryByText(applicationSidebar.MEMBERS)).toBeInTheDocument();
  expect(queryByText(applicationSidebar.MEMBERSHIP_FEE)).toBeInTheDocument();
  expect(queryByText(applicationSidebar.ORGANIZATION_DETAILS)).toBeInTheDocument();
  expect(queryByText(applicationSidebar.ORGANIZATIONS)).toBeInTheDocument();
  expect(queryByText(applicationSidebar.REPORTS)).toBeInTheDocument();
});

test('should display application name', () => {
  const { queryByText, queryByRole } = setup({
    name: 'Test Application',
  });

  const header = queryByText(/test application/i);
  expect(header).toBeInTheDocument();
  expect(queryByRole('heading')).toBe(header);
});

test('should able to navigate to members page if user selects members', () => {
  const { getByText, history } = setup({ history: createMemoryHistory(), name: '' });

  fireEvent.click(getByText(applicationSidebar.MEMBERS));

  expect(history.location.pathname).toEqual('/members');
});
