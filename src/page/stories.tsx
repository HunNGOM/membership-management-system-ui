import React from 'react';
import { Page } from './index';
import { Button } from '../button';

export default {
  title: Page.name,
};

export const simplePageWithHeader = () => <Page name="test header" />;

export const complexPage = () => (
  <Page name="test header" pageControlsAs={<Button type="primary">Click here</Button>}>
    test content
  </Page>
);
