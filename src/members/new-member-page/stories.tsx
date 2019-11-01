import React from 'react';
import { NewMemberPage } from './index';
import { ApplicationServiceContext } from '../../application-service-context';
import { memberStore } from '../../services/member-store';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: NewMemberPage.name,
};

export const displaysPage = () => (
  <MemoryRouter>
    <ApplicationServiceContext.Provider value={{ memberStore }}>
      <NewMemberPage />
    </ApplicationServiceContext.Provider>
  </MemoryRouter>
);
