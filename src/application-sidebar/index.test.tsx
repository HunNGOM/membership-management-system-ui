import React from 'react';
import { ApplicationSidebar } from './index';
import { render } from '@testing-library/react';
import { defaultLanguageLabels } from '../language-context';

const { applicationSidebar } = defaultLanguageLabels;

test('should list application menu items', () => {
  const { queryByText } = render(<ApplicationSidebar />);

  expect(queryByText(applicationSidebar.MEMBERS)).toBeInTheDocument();
  expect(queryByText(applicationSidebar.MEMBERSHIP_FEE)).toBeInTheDocument();
  expect(queryByText(applicationSidebar.ORGANIZATION_DETAILS)).toBeInTheDocument();
  expect(queryByText(applicationSidebar.ORGANIZATIONS)).toBeInTheDocument();
  expect(queryByText(applicationSidebar.REPORTS)).toBeInTheDocument();
});
