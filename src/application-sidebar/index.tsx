import React from 'react';
import { LanguageContext } from '../language-context';
import { LinkToMembersPage } from '../navigation/navigation-links';

export function ApplicationSidebar() {
  const { applicationSidebar } = React.useContext(LanguageContext);

  return (
    <nav>
      <ul>
        <li>
          <LinkToMembersPage>{applicationSidebar.MEMBERS}</LinkToMembersPage>
        </li>
        <li>{applicationSidebar.MEMBERSHIP_FEE}</li>
        <li>{applicationSidebar.ORGANIZATION_DETAILS}</li>
        <li>{applicationSidebar.ORGANIZATIONS}</li>
        <li>{applicationSidebar.REPORTS}</li>
      </ul>
    </nav>
  );
}
