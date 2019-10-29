import React from 'react';
import { NewMemberPage } from './index';
import { ApplicationServicesContext } from '../application-services-context';
import { memberStore } from '../services/member-store';

export default {
  title: NewMemberPage.name,
};

export const displaysPage = () => (
  <ApplicationServicesContext.Provider value={{ memberStore }}>
    <NewMemberPage />
  </ApplicationServicesContext.Provider>
);
