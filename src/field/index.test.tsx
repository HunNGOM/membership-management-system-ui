import React from 'react';
import { Field } from './index';
import { render, fireEvent } from '@testing-library/react';

test('should display an input based on label', () => {
  const { queryByLabelText } = render(<Field label="test field" />);

  expect(queryByLabelText(/test field/i)).toBeInTheDocument();
});

test('should call onChange event handler when user types in the field', () => {
  const onChange = jest.fn();
  const { getByLabelText } = render(<Field label="test field" onChange={onChange} />);

  fireEvent.change(getByLabelText(/test field/i), {
    target: {
      value: 'Hello world',
    },
  });

  expect(onChange).toHaveBeenCalledWith('Hello world');
});
