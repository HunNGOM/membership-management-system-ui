import React from 'react';
import { Application } from './index';
import { HashRouter } from 'react-router-dom';
import { ApplicationServiceContext } from '../application-service-context';
import { memberStore } from '../services/member-store';

export default {
  title: Application.name,
};

export const simpleApplicationWithDefaultHeader = () => (
  <HashRouter>
    <ApplicationServiceContext.Provider value={{ memberStore }}>
      <Application />
    </ApplicationServiceContext.Provider>
  </HashRouter>
);
