import React from 'react';
import { LanguageContext } from '../language-context';

export function ApplicationSidebar() {
  const { applicationSidebar } = React.useContext(LanguageContext);

  return (
    <ul>
      <li>{applicationSidebar.MEMBERS}</li>
      <li>{applicationSidebar.MEMBERSHIP_FEE}</li>
      <li>{applicationSidebar.ORGANIZATION_DETAILS}</li>
      <li>{applicationSidebar.ORGANIZATIONS}</li>
      <li>{applicationSidebar.REPORTS}</li>
    </ul>
  );
}
