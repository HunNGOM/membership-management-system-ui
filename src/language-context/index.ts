import React from 'react';

export const defaultLanguageLabels = {
  applicationSidebar: {
    MEMBERS: 'MEMBERS',
    MEMBERSHIP_FEE: 'MEMBERSHIP_FEE',
    ORGANIZATION_DETAILS: 'ORGANIZATION_DETAILS',
    ORGANIZATIONS: 'ORGANIZATIONS',
    REPORTS: 'REPORTS',
  },
  memberForm: {
    NAME: 'NAME',
    ORGANIZATION: 'ORGANIZATION',
    BIRTH_DATE: 'BIRTH_DATE',
    ADDRESS: 'ADDRESS',
    PHONE_NUMBER: 'PHONE_NUMBER',
    EMAIL: 'EMAIL',
    GENDER: 'GENDER',
    REGISTRATION_DATE: 'REGISTRATION_DATE',
    MEMBER_CATEGORY: 'MEMBER_CATEGORY',
    STATUS: 'STATUS',
    SAVE_BUTTON: 'SAVE_BUTTON',
    SAVE_BUTTON_AND_CREATE_NEW: 'SAVE_BUTTON_AND_CREATE_NEW',
  },
};

export const LanguageContext = React.createContext(defaultLanguageLabels);
