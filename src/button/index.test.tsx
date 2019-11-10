import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './index';

test('should display text content', () => {
  const { queryByText, queryByRole } = render(<Button>Test content</Button>);

  expect(queryByText(/test content/i)).toBeInTheDocument();
  expect(queryByRole('button')).toBe(queryByText(/test content/i));
});
