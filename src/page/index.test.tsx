import React from 'react';
import { Page } from './index';
import { render } from '@testing-library/react';

test('should display name', () => {
  const { queryByText, queryByRole } = render(<Page name="test header" />);

  const header = queryByText(/test header/i);
  expect(header).toBeInTheDocument();
  expect(queryByRole('heading')).toEqual(header);
});

test('should display children', () => {
  const { queryByText } = render(<Page name="test header">test content</Page>);

  expect(queryByText(/test content/i)).toBeInTheDocument();
});

test('should display page controls', () => {
  const { queryByRole } = render(
    <Page name="test header" pageControlsAs={<button>Test Control</button>}>
      test content
    </Page>,
  );

  expect(queryByRole('button')).toHaveTextContent('Test Control');
});
