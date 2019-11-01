import React from 'react';
import { MembersPage } from './index';
import { ApplicationServiceContext } from '../../application-service-context';
import { memberStore } from '../../services/member-store';
import { MemoryRouter } from 'react-router';

export default {
  title: MembersPage.name,
};

export const displaysPage = () => (
  <ApplicationServiceContext.Provider
    value={{
      memberStore,
    }}>
    <MemoryRouter>
      <MembersPage />
    </MemoryRouter>
  </ApplicationServiceContext.Provider>
);
