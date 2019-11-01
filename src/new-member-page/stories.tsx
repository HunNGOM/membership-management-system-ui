import React from 'react';
import { NewMemberPage } from './index';
import { ApplicationServicesContext } from '../application-services-context';
import { memberStore } from '../services/member-store';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: NewMemberPage.name,
};

export const displaysPage = () => (
  <MemoryRouter>
    <ApplicationServicesContext.Provider value={{ memberStore }}>
      <NewMemberPage />
    </ApplicationServicesContext.Provider>
  </MemoryRouter>
);
