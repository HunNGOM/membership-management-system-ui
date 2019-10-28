import React from 'react';
import { Page } from './index';
import { render } from '@testing-library/react';

test('should display header', () => {
  const { queryByText, queryByRole } = render(<Page header="test header" />);

  const header = queryByText(/test header/i);
  expect(header).toBeInTheDocument();
  expect(queryByRole('heading')).toEqual(header);
});

test('should display children', () => {
  const { queryByText } = render(<Page header="test header">test content</Page>);

  expect(queryByText(/test content/i)).toBeInTheDocument();
});
