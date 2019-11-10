import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { TextBox } from './index';

test('should display a textbox', () => {
  const { queryByDisplayValue, getByRole } = render(<TextBox name="simple textbox" value="Test content" />);

  const textbox = getByRole('textbox');
  expect(textbox).toBe(queryByDisplayValue(/test content/i));
  expect(textbox).toHaveAttribute('name', 'simple textbox');
});

test('should support required attribute', () => {
  const { getByRole } = render(<TextBox name="simple textbox" value="Test content" isRequired={true} />);

  expect(getByRole('textbox')).toBeRequired();
});

test('should call onChange event handler when user changes its value', () => {
  const onChange = jest.fn();
  const { getByRole } = render(<TextBox value="Test content" name="my textbox" onChange={onChange} />);

  fireEvent.change(getByRole('textbox'), {
    target: {
      value: 'new value',
    },
  });

  expect(onChange).toHaveBeenCalledWith('new value', 'my textbox');
});
