import React from 'react';
import { MembersPage } from './index';
import { ApplicationServicesContext } from '../application-services-context';
import { memberStore } from '../services/member-store';
import { MemoryRouter } from 'react-router';

export default {
  title: MembersPage.name,
};

export const displaysPage = () => (
  <ApplicationServicesContext.Provider
    value={{
      memberStore,
    }}>
    <MemoryRouter>
      <MembersPage />
    </MemoryRouter>
  </ApplicationServicesContext.Provider>
);
