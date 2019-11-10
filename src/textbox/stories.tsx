import React from 'react';
import { TextBox } from './index';
import { action } from '@storybook/addon-actions';

export default {
  title: TextBox.displayName,
};

export const singleTextbox = () => (
  <TextBox name="simple textbox" value="Initial value ..." onChange={action('onChange')} />
);

export function RequiredTextbox() {
  const [value, setValue] = React.useState('');

  return <TextBox name="simple textbox" value={value} onChange={setValue} isRequired={true} />;
}
