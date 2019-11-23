import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Application } from './application';
import { BrowserRouter } from 'react-router-dom';
import { LanguageContext } from './language-context';
import { hungarianLanguageLabels } from './language-context/hungarian-language-labels';

ReactDOM.render(
  <BrowserRouter>
    <LanguageContext.Provider value={hungarianLanguageLabels}>
      <Application />
    </LanguageContext.Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
