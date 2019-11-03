import React from 'react';
import { Datepicker } from './index';
import { DateTime } from 'luxon';
import { action } from '@storybook/addon-actions';

export default {
  title: Datepicker.name,
};

export const simpleDatepicker = () => (
  <Datepicker name="datepicker" value={DateTime.local()} onChange={action('onChange')} />
);
