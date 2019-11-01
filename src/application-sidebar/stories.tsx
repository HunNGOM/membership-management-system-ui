import React from 'react';
import { ApplicationSidebar } from './index';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: ApplicationSidebar.name,
};

export const simpleApplicationSidebar = () => (
  <MemoryRouter>
    <ApplicationSidebar />
  </MemoryRouter>
);
