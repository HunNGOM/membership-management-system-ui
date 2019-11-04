import React from 'react';
import { Application } from './index';
import { HashRouter } from 'react-router-dom';
import { ApplicationServiceContext } from '../application-service-context';
import { memberStore } from '../services/member-store';
import { LanguageContext } from '../language-context';
import { hungarianLanguageLabels } from '../language-context/hungarian-language-labels';

export default {
  title: Application.name,
};

export const basicApplicationWithDefaultLanguage = () => (
  <HashRouter>
    <ApplicationServiceContext.Provider value={{ memberStore }}>
      <Application />
    </ApplicationServiceContext.Provider>
  </HashRouter>
);

export const basicApplicationWithHungarianLanguage = () => (
  <HashRouter>
    <ApplicationServiceContext.Provider value={{ memberStore }}>
      <LanguageContext.Provider value={hungarianLanguageLabels}>
        <Application />
      </LanguageContext.Provider>
    </ApplicationServiceContext.Provider>
  </HashRouter>
);
