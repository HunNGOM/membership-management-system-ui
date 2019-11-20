import React from 'react';
import { ApplicationMenuItem } from './index';
import { MemoryRouter } from 'react-router';

export default {
  title: ApplicationMenuItem.name,
};

export const menuItems = () => (
  <MemoryRouter initialEntries={['/selected']}>
    <ApplicationMenuItem href="/non-selected">Non-selected menu item</ApplicationMenuItem>
    <ApplicationMenuItem href="/selected">Selected menu item</ApplicationMenuItem>
  </MemoryRouter>
);
