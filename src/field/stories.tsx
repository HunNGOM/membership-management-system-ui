import React from 'react';
import { Field } from './index';
import { action } from '@storybook/addon-actions';
import { DateTime } from 'luxon';
import { Datepicker } from '../datepicker';

export default {
  title: Field.name,
};

export const basicTextField = () => (
  <Field name="text" label="simple field" value={'test field'} onChange={action('onChange')} />
);

export const basicFieldWithDatepicker = () => (
  <Field
    name="datepicker"
    label="simple field"
    value={DateTime.local()}
    inputAs={Datepicker}
    onChange={action('onChange')}
  />
);
