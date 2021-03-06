import React from 'react';

export const defaultLanguageLabels = {
  applicationSidebar: {
    MEMBERS: 'MEMBERS',
    MEMBERSHIP_FEE: 'MEMBERSHIP_FEE',
    ORGANIZATION_DETAILS: 'ORGANIZATION_DETAILS',
    ORGANIZATIONS: 'ORGANIZATIONS',
    REPORTS: 'REPORTS',
    APPLICATION_NAME: 'APPLICATION_SIDEBAR_APPLICATION_NAME',
  },
  memberForm: {
    NAME: 'MEMBER_FORM_NAME',
    ORGANIZATION: 'MEMBER_FORM_ORGANIZATION',
    BIRTH_DATE: 'MEMBER_FORM_BIRTH_DATE',
    ADDRESS: 'MEMBER_FORM_ADDRESS',
    PHONE_NUMBER: 'MEMBER_FORM_PHONE_NUMBER',
    EMAIL: 'MEMBER_FORM_EMAIL',
    GENDER: 'MEMBER_FORM_GENDER',
    REGISTRATION_DATE: 'MEMBER_FORM_REGISTRATION_DATE',
    MEMBER_CATEGORY: 'MEMBER_FORM_MEMBER_CATEGORY',
    STATUS: 'MEMBER_FORM_STATUS',
    PERSONAL_GROUP_NAME: 'MEMBER_FORM_PERSONAL_GROUP_NAME',
    PERSONAL_GROUP_NAME_DESCRIPTION: 'MEMBER_FORM_PERSONAL_GROUP_NAME_DESCRIPTION',
    MEMBERSHIP_GROUP_NAME: 'MEMBER_FORM_MEMBERSHIP_GROUP_NAME',
    MEMBERSHIP_GROUP_NAME_DESCRIPTION: 'MEMBER_FORM_MEMBERSHIP_GROUP_NAME_DESCRIPTION',
  },
  memberTable: {
    NAME: 'NAME',
    ID: 'ID',
    ORGANIZATION: 'ORGANIZATION',
    ACTIONS: 'ACTIONS',
  },
  editMemberPage: {
    HEADER: 'EDIT_MEMBER_PAGE_HEADER',
    SAVE_BUTTON: 'EDIT_MEMBER_PAGE_SAVE_BUTTON',
    PAY_MEMBERSHIP_FEE_BUTTON: 'EDIT_MEMBER_PAGE_PAY_MEMBERSHIP_FEE_BUTTON',
    REMOVE_MEMBER_BUTTON: 'EDIT_MEMBER_PAGE_REMOVE_MEMBER_BUTTON',
  },
  memberPage: {
    HEADER: 'EXISTING_MEMBER_PAGE_HEADER',
    MODIFY_BUTTON: 'MEMBER_PAGE_MODIFY_BUTTON',
    PAY_MEMBERSHIP_FEE_BUTTON: 'MEMBER_PAGE_PAY_MEMBERSHIP_FEE',
    EXPORT_BUTTON: 'MEMBER_PAGE_EXPORT_BUTTON',
  },
  membersPage: {
    HEADER: 'MEMBERS_PAGE_HEADER',
    NEW_MEMBER: 'NEW_MEMBER',
  },
  newMemberPage: {
    HEADER: 'NEW_MEMBER_PAGE_HEADER',
    SAVE_BUTTON: 'MEMBER_FORM_SAVE_BUTTON',
    SAVE_BUTTON_AND_CREATE_NEW: 'MEMBER_FORM_SAVE_BUTTON_AND_CREATE_NEW',
  },
};

export const LanguageContext = React.createContext(defaultLanguageLabels);
