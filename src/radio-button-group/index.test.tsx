import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { RadioButtonGroup } from './index';
import { GetProps } from '../utils/get-props';
import { Field } from '../field';

function setup(props: Partial<GetProps<typeof RadioButtonGroup>> = {}) {
  const componentProps: GetProps<typeof RadioButtonGroup> = {
    name: '',
    items: [],
    ...props,
  };
  const renderResult = render(<RadioButtonGroup {...componentProps} />);
  return {
    ...renderResult,
    props: componentProps,
  };
}

test('should display selectable options', () => {
  const { queryByLabelText } = setup({
    items: [{ value: 'number-one', label: 'LABEL-ONE' }, { value: 'number-two', label: 'LABEL-TWO' }],
  });

  expect(queryByLabelText(/label-one/i)).toBeInTheDocument();
  expect(queryByLabelText(/label-two/i)).toBeInTheDocument();
});

test('should call onChange when user selects a new value', () => {
  const {
    getByLabelText,
    props: { onChange },
  } = setup({
    name: 'radio-button-group',
    items: [{ value: 'number-one', label: 'LABEL-ONE' }, { value: 'number-two', label: 'LABEL-TWO' }],
    onChange: jest.fn(),
  });

  fireEvent.click(getByLabelText(/label-two/i));

  expect(onChange).toBeCalledWith({ value: 'number-two', label: 'LABEL-TWO' }, 'radio-button-group');
});
