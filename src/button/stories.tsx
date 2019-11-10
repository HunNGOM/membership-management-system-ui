import React from 'react';
import { Button } from './index';

export default {
  title: Button.name,
};

export const allButtons = () => (
  <>
    <Button type="primary">Primary button</Button>
    <hr />
    <Button type="secondary">Secondary button</Button>
  </>
);
