import React from 'react';
import { Field } from './index';
import { action } from '@storybook/addon-actions';

export default {
  title: Field.name,
};

export const simpleInputField = () => <Field label="simple field" value={'test field'} onChange={action('onChange')} />;
