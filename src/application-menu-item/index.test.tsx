import React from 'react';
import { ApplicationMenuItem } from './index';
import { render } from '@testing-library/react';
import { GetProps } from '../utils/get-props';
import { Router } from 'react-router';
import { createMemoryHistory, default as H } from 'history';

function setup({
  children,
  history = createMemoryHistory(),
  ...props
}: { history?: H.History } & GetProps<typeof ApplicationMenuItem>) {
  return render(
    <Router history={history}>
      <ApplicationMenuItem href="" {...props}>
        {children}
      </ApplicationMenuItem>
    </Router>,
  );
}

test('should display children', () => {
  const { queryByText } = setup({ children: 'Hello World', href: '' });

  expect(queryByText(/hello world/i)).toBeInTheDocument();
});

test('should be selected if routing matches', () => {
  const { getByRole } = setup({
    href: '/test-match',
    history: createMemoryHistory({ initialEntries: ['/test-match'] }),
  });

  expect(getByRole('listitem')).toHaveAttribute('aria-checked', 'true');
});

test('should be selected if routing matches', () => {
  const { getByRole } = setup({
    href: '/test-match',
    history: createMemoryHistory({ initialEntries: ['/test-match/something-else'] }),
  });

  expect(getByRole('listitem')).toHaveAttribute('aria-checked', 'true');
});

test('should not be selected if href is blank', () => {
  const { getByRole } = setup({
    href: '',
    history: createMemoryHistory({ initialEntries: ['/test-not-match'] }),
  });

  expect(getByRole('listitem')).toHaveAttribute('aria-checked', 'false');
});

test('should not be selected if routing does not match', () => {
  const { getByRole } = setup({
    href: '/test-match',
    history: createMemoryHistory({ initialEntries: ['/test-not-match'] }),
  });

  expect(getByRole('listitem')).toHaveAttribute('aria-checked', 'false');
});
