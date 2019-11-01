import React from 'react';
import { MemberPage } from './index';
import { ApplicationServiceContext } from '../../application-service-context';
import { memberStore } from '../../services/member-store';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: MemberPage.name,
};

export const displaysPage = () => (
  <MemoryRouter>
    <ApplicationServiceContext.Provider value={{ memberStore }}>
      <MemberPage />
    </ApplicationServiceContext.Provider>
  </MemoryRouter>
);
