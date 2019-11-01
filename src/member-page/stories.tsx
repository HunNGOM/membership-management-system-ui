import React from 'react';
import { MemberPage } from './index';
import { ApplicationServicesContext } from '../application-services-context';
import { memberStore } from '../services/member-store';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: MemberPage.name,
};

export const displaysPage = () => (
  <MemoryRouter>
    <ApplicationServicesContext.Provider value={{ memberStore }}>
      <MemberPage />
    </ApplicationServicesContext.Provider>
  </MemoryRouter>
);
