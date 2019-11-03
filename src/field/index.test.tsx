import React from 'react';
import { Field } from './index';
import { render, fireEvent } from '@testing-library/react';
import { GetProps } from '../utils/get-props';
import { RadioButtonGroup } from '../radio-button-group';

function setup(props: Partial<GetProps<typeof Field>> = {}) {
  return render(<Field label="" name="" {...props} />);
}

test('should display an input based on label', () => {
  const { queryByLabelText } = setup({ label: 'test field', name: 'test field name' });

  expect(queryByLabelText(/test field/i)).toBeInTheDocument();
});

test('should call onChange event handler when user types in the field', () => {
  const onChange = jest.fn();
  const { getByLabelText } = setup({ label: 'test field', name: 'test field name', onChange });

  fireEvent.change(getByLabelText(/test field/i), {
    target: {
      value: 'Hello world',
    },
  });

  expect(onChange).toHaveBeenCalledWith('Hello world', 'test field name');
});

test('should support RadioButtonGroup', () => {
  const { queryByText } = setup({
    inputAs: (props) => <RadioButtonGroup name={props.name} items={[]} onChange={props.onChange} />,
  });
});
