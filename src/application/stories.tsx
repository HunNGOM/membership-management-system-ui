import React from 'react';
import { Application } from './index';
import { HashRouter } from 'react-router-dom';
import { ApplicationServicesContext } from '../application-services-context';
import { memberStore } from '../services/member-store';

export default {
  title: Application.name,
};

export const simpleApplicationWithDefaultHeader = () => (
  <HashRouter>
    <ApplicationServicesContext.Provider value={{ memberStore }}>
      <Application />
    </ApplicationServicesContext.Provider>
  </HashRouter>
);
