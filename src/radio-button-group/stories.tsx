import React from 'react';
import { RadioButtonGroup } from './index';
import { action } from '@storybook/addon-actions';

export default {
  title: RadioButtonGroup.name,
};

export const basic = () => (
  <RadioButtonGroup
    name="test-radio-button-group"
    onChange={action('onChange')}
    items={Array(4)
      .fill(null)
      .map((_, index) => {
        return {
          value: `Value ${index}`,
          label: `Label ${index}`,
        };
      })}
  />
);
