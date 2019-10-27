import React from 'react';
import { Datepicker } from './index';
import { render } from '@testing-library/react';
import { DateTime } from 'luxon';

test('should display date', () => {
  const { queryByDisplayValue } = render(<Datepicker value={DateTime.fromISO('2015-05-03')} />);

  expect(queryByDisplayValue('2015-05-03')).toBeInTheDocument();
});
