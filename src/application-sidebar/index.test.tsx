import React from 'react';
import { ApplicationSidebar } from './index';
import { fireEvent, render } from '@testing-library/react';
import { defaultLanguageLabels } from '../language-context';
import { createMemoryHistory, History } from 'history';
import { Router } from 'react-router-dom';

const { applicationSidebar } = defaultLanguageLabels;

function setup({ history = createMemoryHistory() }: { history?: History } = {}) {
  const renderResult = render(
    <Router history={history}>
      <ApplicationSidebar />
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

test('should able to navigate to members page if user selects members', () => {
  const { getByText, history } = setup({ history: createMemoryHistory() });

  fireEvent.click(getByText(applicationSidebar.MEMBERS));

  expect(history.location.pathname).toEqual('/members');
});
