import React from 'react';
import { Page } from './index';

export default {
  title: Page.name,
};

export const simplePageWithHeader = () => <Page header="test header" />;

export const pageWithContent = () => <Page header="test header">test content</Page>;
