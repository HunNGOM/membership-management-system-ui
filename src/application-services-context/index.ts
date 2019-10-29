import React from 'react';
import { memberStore } from '../services/member-store';

export const ApplicationServicesContext = React.createContext({ memberStore });
