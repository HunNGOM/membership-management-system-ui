import React from 'react';
import { Fieldset } from './index';
import { render } from '@testing-library/react';

test('should display legend, header and children', () => {
  const { queryByText } = render(
    <Fieldset header="test header" description="test description">
      <span>test content</span>
    </Fieldset>,
  );

  expect(queryByText(/test description/i)).toBeVisible();
  expect(queryByText(/test header/i)).toBeVisible();
  expect(queryByText(/test content/i)).toBeVisible();
});
