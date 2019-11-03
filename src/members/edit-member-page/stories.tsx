import React from 'react';
import { EditMemberPage } from './index';
import { ApplicationServiceContext } from '../../application-service-context';
import { memberStore } from '../../services/member-store';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: EditMemberPage.name,
};

export const displaysPage = () => (
  <MemoryRouter>
    <ApplicationServiceContext.Provider value={{ memberStore }}>
      <EditMemberPage />
    </ApplicationServiceContext.Provider>
  </MemoryRouter>
);
