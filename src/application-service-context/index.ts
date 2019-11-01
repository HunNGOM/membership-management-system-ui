import React from 'react';
import { memberStore } from '../services/member-store';

export const ApplicationServiceContext = React.createContext({ memberStore });
